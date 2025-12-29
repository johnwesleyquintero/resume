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
    <div className="h-screen bg-wes-main flex flex-col overflow-hidden">
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

      <main className="flex-1 overflow-hidden flex flex-col relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-wes-border dark:scrollbar-thumb-wes-border/50"
        >
          <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-4 md:py-6 space-y-6">
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
                    <div className="w-8 h-8 rounded-full bg-wes-secondary flex items-center justify-center">
                      <WesAILogo variant="icon" width={24} height={24} className="opacity-50" />
                    </div>
                    <div className="bg-wes-secondary rounded-2xl p-4 rounded-tl-none border border-wes-border">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-wes-muted rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-wes-muted rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-wes-muted rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="w-full bg-gradient-to-t from-wes-main via-wes-main/95 to-transparent pb-4 md:pb-8 pt-6">
          <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
            <ChatInput 
              input={input}
              setInput={setInput}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              isLoading={isLoading}
              onSend={handleSendMessage}
              apiKey={apiKey}
            />
            <p className="text-[10px] text-center text-wes-muted mt-3 uppercase tracking-widest font-medium">
              WesAI can make mistakes. Check important info.
            </p>
          </div>
        </div>

        {showScrollButton && (
          <button
            onClick={() => scrollToBottom()}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 p-2 bg-wes-secondary border border-wes-border rounded-full shadow-lg hover:bg-wes-main transition-all animate-bounce z-10"
            title="Scroll to bottom"
          >
            <ArrowDown className="w-5 h-5 text-wes-text" />
          </button>
        )}
      </main>
    </div>
  );
};

export default WesJobAI;
