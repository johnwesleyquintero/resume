import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useGemini } from '../hooks/useGemini'
import ChatHeader from '../components/wesjobai/ChatHeader'
import ApiKeyModal from '../components/wesjobai/ApiKeyModal'
import EmptyState from '../components/wesjobai/EmptyState'
import ChatMessage from '../components/wesjobai/ChatMessage'
import ChatInput from '../components/wesjobai/ChatInput'
import { ArrowDown } from 'lucide-react'
import { WesAILogo } from '../components/WesAILogo'

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
    sendMessage,
  } = useGemini()

  const [input, setInput] = useState('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior,
      })
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading, scrollToBottom])

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
      setShowScrollButton(!isNearBottom)
    }
  }

  const handleSendMessage = (e?: React.FormEvent, isRetry = false) => {
    if (e) e.preventDefault()
    sendMessage(input, selectedImage, isRetry)
    if (!isRetry) {
      setInput('')
      setSelectedImage(null)
    }
  }

  const handleSuggestionClick = (prompt: string) => {
    setInput(prompt)
  }

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault()
    saveApiKey(apiKey)
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-wes-main">
      <ChatHeader onSettingsClick={() => setShowApiKeyInput(true)} onClearChat={clearChat} />

      {showApiKeyInput && (
        <ApiKeyModal
          apiKey={apiKey}
          setApiKey={setApiKey}
          onSave={handleSaveApiKey}
          onClose={() => setShowApiKeyInput(false)}
          showCancel={!!localStorage.getItem('GEMINI_API_KEY')}
        />
      )}

      <main className="relative flex flex-1 flex-col overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="scrollbar-thin scrollbar-thumb-wes-border dark:scrollbar-thumb-wes-border/50 flex-1 overflow-y-auto"
        >
          <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-4 sm:px-6 md:py-6">
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
                  <div className="flex animate-pulse gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-wes-secondary">
                      <WesAILogo variant="icon" width={24} height={24} className="opacity-50" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none border border-wes-border bg-wes-secondary p-4">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-wes-muted [animation-delay:-0.3s]"></span>
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-wes-muted [animation-delay:-0.15s]"></span>
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-wes-muted"></span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="via-wes-main/95 w-full bg-gradient-to-t from-wes-main to-transparent pb-4 pt-6 md:pb-8">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <ChatInput
              input={input}
              setInput={setInput}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              isLoading={isLoading}
              onSend={handleSendMessage}
              apiKey={apiKey}
            />
            <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-widest text-wes-muted">
              WesAI can make mistakes. Check important info.
            </p>
          </div>
        </div>

        {showScrollButton && (
          <button
            onClick={() => scrollToBottom()}
            className="absolute bottom-32 left-1/2 z-10 -translate-x-1/2 animate-bounce rounded-full border border-wes-border bg-wes-secondary p-2 shadow-lg transition-all hover:bg-wes-main"
            title="Scroll to bottom"
          >
            <ArrowDown className="h-5 w-5 text-wes-text" />
          </button>
        )}
      </main>
    </div>
  )
}

export default WesJobAI
