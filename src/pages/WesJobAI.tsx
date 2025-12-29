import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { WES_JOB_AI_SYSTEM_INSTRUCTION } from '../ai-agent';
import { cn } from '../utils/cn';
import { Send, Bot, User, Loader2, ArrowLeft, Trash2, Sparkles, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'model';
  content: string;
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || !apiKey) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      // Using gemini-2.5-flash-lite: The current (Dec 2025) optimized free-tier standard
      // 1000 requests/day, lowest latency, and replaces retired 1.5 models.
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash-lite",
        systemInstruction: WES_JOB_AI_SYSTEM_INSTRUCTION
      });

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.content }],
        })),
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error: any) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `Error: ${error.message || 'Something went wrong. Please check your API key.'}` 
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
    }
  };

  const clearChat = () => {
    setMessages([]);
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-600" />
                WesJobAI <span className="text-xs font-normal px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">v5.0</span>
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">The Generalist Codex AI Agent</p>
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
              className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors"
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
              To talk to WesJobAI, you need a Gemini API Key. You can get one for free at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a>.
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
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-fadeIn">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Bot className="w-10 h-10 text-blue-600" />
              </div>
              <div className="max-w-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hello Brother! I'm WesJobAI.</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  I'm your personal career agent, built on the Generalist Codex. How can I help you with your applications or systems strategy today?
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mt-8">
                {[
                  "Help me draft a cover letter for an Amazon Ops role.",
                  "Analyze this job description for systemic gaps.",
                  "Explain my 'Build the System' philosophy.",
                  "Prepare me for a Tier 1 interview."
                ].map((suggestion, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(suggestion)}
                    className="p-3 text-left text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm group"
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
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                msg.role === 'user' ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              )}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={cn(
                "max-w-[85%] rounded-2xl p-4 shadow-sm relative",
                msg.role === 'user' 
                  ? "bg-blue-600 text-white rounded-tr-none" 
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none"
              )}>
                <div className={cn(
                  "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                  msg.role === 'user' ? "hidden" : "block"
                )}>
                  <CopyButton text={msg.content} />
                </div>
                <div className="text-sm leading-relaxed prose dark:prose-invert max-w-none">
                  {msg.role === 'model' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Bot className="w-5 h-5 text-gray-400" />
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                <span className="text-sm text-gray-500">WesJobAI is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="mt-6">
          <form 
            onSubmit={handleSendMessage}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all"
          >
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
              className="w-full p-4 pr-16 bg-transparent outline-none resize-none text-gray-900 dark:text-white placeholder-gray-400"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading || !apiKey}
              className={cn(
                "absolute right-2 bottom-2 p-2 rounded-xl transition-all",
                input.trim() && !isLoading && apiKey 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-400"
              )}
            >
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-400 mt-2">
            WesJobAI v5.0 | Powered by Gemini 2.5 Flash-Lite | Built for Strategic Autonomy
          </p>
        </div>
      </main>
    </div>
  );
};

export default WesJobAI;
