import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useGemini } from '../hooks/useGemini';
import ChatHeader from '../components/wesjobai/ChatHeader';
import ApiKeyModal from '../components/wesjobai/ApiKeyModal';
import EmptyState from '../components/wesjobai/EmptyState';
import ChatMessage from '../components/wesjobai/ChatMessage';
import ChatInput from '../components/wesjobai/ChatInput';
import { ArrowDown } from 'lucide-react';
import { WesAILogo } from '../components/WesAILogo';

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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    }
  };

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
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden">
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

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-4 md:py-6 overflow-hidden flex flex-col relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
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
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shadow-sm overflow-hidden">
                    <WesAILogo variant="icon" width={24} height={24} />
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">WesAI is processing...</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {showScrollButton && (
          <button
            onClick={() => scrollToBottom()}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-blue-600/90 backdrop-blur-sm text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce z-10 border border-blue-400/30"
            title="Scroll to bottom"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        )}

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
