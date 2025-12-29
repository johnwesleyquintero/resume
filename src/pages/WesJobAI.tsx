import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { WES_JOB_AI_SYSTEM_INSTRUCTION } from '../ai-agent';
import { GEMINI_MODEL } from '../constants';
import { cn } from '../utils/cn';
import { Send, Bot, User, Loader2, ArrowLeft, Trash2, Sparkles, Copy, Check, Image as ImageIcon, X, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import toast from 'react-hot-toast';

interface Message {
  role: 'user' | 'model';
  content: string;
  image?: string; // base64 string
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-400 hover:text-blue-600"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

const WesJobAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('GEMINI_API_KEY') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const MAX_RETRIES = 3;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert("Image too large. Please select an image under 4MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent, isRetry = false) => {
    if (e) e.preventDefault();
    if ((!input.trim() && !selectedImage && !isRetry) || isLoading || !apiKey) return;

    let currentInput = input;
    let currentImage = selectedImage;

    if (!isRetry) {
      const userMessage: Message = { 
        role: 'user', 
        content: input,
        image: selectedImage || undefined 
      };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setSelectedImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } else {
      // If it's a retry, we use the last user message
      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
      if (lastUserMessage) {
        currentInput = lastUserMessage.content;
        currentImage = lastUserMessage.image || null;
      }
    }

    setIsLoading(true);
    
    const attemptCall = async (retryAttempt = 0): Promise<string> => {
        try {
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({ 
            model: GEMINI_MODEL, 
            systemInstruction: WES_JOB_AI_SYSTEM_INSTRUCTION
          });

        let promptParts: any[] = [{ text: currentInput }];
        
        if (currentImage) {
          const base64Data = currentImage.split(',')[1];
          const mimeType = currentImage.split(';')[0].split(':')[1];
          promptParts.push({
            inlineData: {
              data: base64Data,
              mimeType: mimeType
            }
          });
        }

        let text = '';
        if (currentImage) {
          const result = await model.generateContent([WES_JOB_AI_SYSTEM_INSTRUCTION, ...promptParts]);
          const response = await result.response;
          text = response.text();
        } else {
          // For text-only, we include history for context
          const chat = model.startChat({
            history: messages
              .filter(m => !m.content.startsWith('Error:')) // Filter out previous error messages
              .map(m => ({
                role: m.role,
                parts: [{ text: m.content }],
              })),
          });
          const result = await chat.sendMessage(currentInput);
          const response = await result.response;
          text = response.text();
        }
        return text;
      } catch (error: any) {
        if (retryAttempt < MAX_RETRIES) {
          const delay = Math.pow(2, retryAttempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return attemptCall(retryAttempt + 1);
        }
        throw error;
      }
    };

    try {
      const text = await attemptCall();
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error: any) {
      console.error('Error calling Gemini:', error);
      let errorMessage = 'Something went wrong. Please check your API key.';
      
      if (error.message?.includes('401') || error.message?.includes('API_KEY_INVALID')) {
        errorMessage = 'Invalid API Key. Please update it in settings.';
        setShowApiKeyInput(true);
      } else if (error.message?.includes('429')) {
        errorMessage = 'Rate limit exceeded. Please wait a moment.';
      } else if (error.message?.includes('404')) {
        errorMessage = 'Model not found or API version mismatch.';
      } else if (error.message?.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }

      toast.error(errorMessage);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `Error: ${errorMessage}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem('GEMINI_API_KEY', apiKey);
      setShowApiKeyInput(false);
      toast.success('API Key saved successfully!');
    } else {
      toast.error('Please enter a valid API Key');
    }
  };

  const clearChat = () => {
    setMessages([]);
    toast.success('Chat cleared');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Bot className="w-6 h-6 text-blue-600" />
                  Career AI <span className="text-xs font-normal px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">v5.1</span>
                </h1>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded border border-green-200 dark:border-green-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  Systems Architect Mode
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Strategic Partner to John Wesley Quintero</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowApiKeyInput(true)}
              className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
            >
              Settings
            </button>
            <button 
              onClick={clearChat}
              className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 rounded-full transition-colors"
              title="Clear Chat"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* API Key Modal */}
      {showApiKeyInput && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl animate-scaleIn">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Configure Gemini API
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              To talk to Career AI, you need a Gemini API Key. You can get one for free at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a>.
            </p>
            <form onSubmit={saveApiKey} className="space-y-4">
              <input 
                type="password"
                placeholder="Enter your Gemini API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <div className="flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Save Key
                </button>
                {localStorage.getItem('GEMINI_API_KEY') && (
                  <button 
                    type="button" 
                    onClick={() => setShowApiKeyInput(false)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Chat Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 overflow-hidden flex flex-col">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
        >
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-full py-10 text-center space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="w-10 h-10 text-blue-600" />
                </div>
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hello Brother! I'm Career AI.</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    I'm the strategic extension of John Wesley. I'm trained on his "Build the System" philosophy and technical architecture.
                  </p>
                </div>
              </div>

              {/* Recruiter Toolbox */}
              <div className="w-full max-w-2xl space-y-4">
                <div className="flex items-center gap-2 px-4">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recruiter Toolbox</span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Ask about WesBI",
                      desc: "The Inventory Intelligence Cockpit",
                      prompt: "Tell me about WesBI. How did it improve inventory planning by 30%?"
                    },
                    {
                      label: "Buy Box Master",
                      desc: "The Pricing Intelligence System",
                      prompt: "How does the Buy Box Master tool help dominate Amazon sales?"
                    },
                    {
                      label: "Systems Philosophy",
                      desc: "The 'Build the System' approach",
                      prompt: "Explain your 'Build the System' philosophy and how it prevents recurring problems."
                    },
                    {
                      label: "Draft Materials",
                      desc: "Create a tailored asset",
                      prompt: "Help me draft a cover letter based on John's 6+ years of Amazon experience."
                    }
                  ].map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => {
                        setInput(item.prompt);
                        // Optional: trigger send immediately if we want
                      }}
                      className="group p-4 text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col gap-1"
                    >
                      <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.label}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Tier 1 Interview Prep",
                  "Analyze Systemic Gaps",
                  "Recovering $50k+ Revenue",
                  "Amazon SP-API Integration"
                ].map((suggestion, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(suggestion)}
                    className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all border border-transparent hover:border-blue-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div 
              key={i}
              className={cn(
                "flex gap-3 animate-slideUp group",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm",
                msg.role === 'user' 
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-100 dark:ring-blue-900/30" 
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
              )}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={cn(
                "max-w-[85%] rounded-2xl p-4 relative transition-all",
                msg.role === 'user' 
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none shadow-md shadow-blue-600/20 border border-blue-500/50" 
                  : msg.content.startsWith('Error:')
                    ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800 rounded-tl-none shadow-sm"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm"
              )}>
                <div className={cn(
                  "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                  msg.role === 'user' ? "hidden" : "block"
                )}>
                  <CopyButton text={msg.content} />
                </div>
                <div className="text-sm leading-relaxed prose dark:prose-invert max-w-none">
                  {msg.image && (
                    <div className="mb-3 rounded-lg overflow-hidden border border-white/20 shadow-sm">
                      <img src={msg.image} alt="User uploaded" className="max-h-64 w-auto object-contain" />
                    </div>
                  )}
                  {msg.role === 'model' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  )}
                  {msg.content.startsWith('Error:') && (
                    <button 
                      onClick={() => handleSendMessage(undefined, true)}
                      className="mt-3 flex items-center gap-2 text-xs font-bold bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-800/60 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <RefreshCw className={cn("w-3 h-3", isLoading && "animate-spin")} />
                      Retry Request
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Career AI is architecting...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="mt-6">
          {selectedImage && (
            <div className="mb-3 relative inline-block animate-scaleIn">
              <img 
                src={selectedImage} 
                alt="Preview" 
                className="h-20 w-20 object-cover rounded-xl border-2 border-blue-500 shadow-lg" 
              />
              <button 
                onClick={removeImage}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          <form 
            onSubmit={handleSendMessage}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all"
          >
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleImageSelect}
              accept="image/*"
              className="hidden"
            />
            <button 
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute left-2 bottom-2 p-2 text-gray-400 hover:text-blue-600 transition-colors"
              title="Upload Image"
            >
              <ImageIcon className="w-6 h-6" />
            </button>
            <textarea 
              rows={1}
              placeholder="Ask brother anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="w-full p-4 pl-12 pr-16 bg-transparent outline-none resize-none text-gray-900 dark:text-white placeholder-gray-400"
            />
            <button 
              type="submit"
              disabled={(!input.trim() && !selectedImage) || isLoading || !apiKey}
              className={cn(
                "absolute right-2 bottom-2 p-2 rounded-xl transition-all",
                (input.trim() || selectedImage) && !isLoading && apiKey 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-400"
              )}
            >
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            Career AI v5.0 | Powered by Gemini 1.5 Flash | Built for Strategic Autonomy
          </p>
        </div>
      </main>
    </div>
  );
};

export default WesJobAI;
