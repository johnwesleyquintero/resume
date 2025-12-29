import React, { useState, useRef, useEffect } from 'react';
import { useGemini } from '../hooks/useGemini';
import ChatHeader from '../components/wesjobai/ChatHeader';
import ApiKeyModal from '../components/wesjobai/ApiKeyModal';
import EmptyState from '../components/wesjobai/EmptyState';
import ChatMessage from '../components/wesjobai/ChatMessage';
import ChatInput from '../components/wesjobai/ChatInput';
import { Bot } from 'lucide-react';

const WesJobAI = () => {
  const {
    messages,
    isLoading,
    apiKey,
    setApiKey,
    showApiKeyInput,
    setShowApiKeyInput,
    saveApiKey,
    clearChat,
    sendMessage
  } = useGemini();

  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = (e?: React.FormEvent, isRetry = false) => {
    if (e) e.preventDefault();
    sendMessage(input, selectedImage, isRetry);
    if (!isRetry) {
      setInput('');
      setSelectedImage(null);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    setInput(prompt);
  };

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    saveApiKey(apiKey);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <ChatHeader 
        onSettingsClick={() => setShowApiKeyInput(true)} 
        onClearChat={clearChat} 
      />

      {showApiKeyInput && (
        <ApiKeyModal 
          apiKey={apiKey}
          setApiKey={setApiKey}
          onSave={handleSaveApiKey}
          onClose={() => setShowApiKeyInput(false)}
          showCancel={!!localStorage.getItem('GEMINI_API_KEY')}
        />
      )}

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 overflow-hidden flex flex-col">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
        >
          {messages.length === 0 ? (
            <EmptyState onSuggestionClick={handleSuggestionClick} />
          ) : (
            <>
              {messages.map((msg, i) => (
                <ChatMessage 
                  key={i} 
                  message={msg} 
                  isLoading={isLoading} 
                  onRetry={() => handleSendMessage(undefined, true)} 
                />
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
            </>
          )}
        </div>

        <ChatInput 
          input={input}
          setInput={setInput}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          isLoading={isLoading}
          onSend={handleSendMessage}
          apiKey={apiKey}
        />
      </main>
    </div>
  );
};

export default WesJobAI;
