import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { User, RefreshCw, ExternalLink, Globe } from 'lucide-react'
import { WesAILogo } from '../WesAILogo'
import { cn } from '../../utils/cn'
import CopyButton from './CopyButton'
import { Message, GroundingMetadata, GroundingChunk } from '../../hooks/useGemini'

const GroundingResources = ({ metadata }: { metadata: GroundingMetadata }) => {
  if (!metadata || !metadata.groundingChunks) return null

  const links = metadata.groundingChunks
    .map((chunk: GroundingChunk) => chunk.web?.uri)
    .filter((uri): uri is string => !!uri)

  if (links.length === 0) return null

  // Deduplicate links
  const uniqueLinks = Array.from(new Set(links))

  return (
    <div className="mt-4 space-y-3 border-t border-wes-border pt-4">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-wes-muted">
        <Globe className="h-3 w-3" />
        <span>Research Sources</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {uniqueLinks.map((link: string, idx: number) => {
          let domain = ''
          try {
            domain = new URL(link).hostname.replace('www.', '')
          } catch {
            domain = 'Resource'
          }

          return (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-wes-border bg-wes-main px-3 py-1.5 text-[11px] text-wes-muted transition-all hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
            >
              <span className="max-w-[150px] truncate">{domain}</span>
              <ExternalLink className="h-3 w-3 flex-shrink-0" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

interface ChatMessageProps {
  message: Message
  isLoading: boolean
  onRetry: () => void
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading, onRetry }) => {
  const isUser = message.role === 'user'
  const isError = message.isError

  return (
    <div
      className={cn(
        'group flex animate-slideUp gap-4 py-8 first:pt-4 md:gap-6',
        isUser ? 'bg-transparent' : 'bg-transparent',
      )}
    >
      <div
        className={cn(
          'mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border shadow-sm',
          isUser
            ? 'border-wes-border bg-wes-secondary text-wes-text'
            : 'border-wes-border bg-wes-secondary text-wes-text',
        )}
      >
        {isUser ? (
          <User className="h-5 w-5" />
        ) : (
          <WesAILogo variant="icon" width={24} height={24} />
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        <div className="text-wes-text/90 text-sm font-bold uppercase tracking-tight">
          {isUser ? 'You' : 'WesAI'}
        </div>

        <div
          className={cn(
            'relative transition-all',
            isError ? 'text-red-600 dark:text-red-400' : 'text-wes-text',
          )}
        >
          {!isUser && !isError && (
            <div className="absolute -top-8 right-0 opacity-0 transition-opacity group-hover:opacity-100">
              <CopyButton text={message.content} />
            </div>
          )}

          <div
            className={cn(
              'max-w-none text-[15px] leading-7 md:text-[16px] md:leading-8',
              !isUser && !isError
                ? 'prose dark:prose-invert prose-p:leading-7 prose-pre:border prose-pre:border-wes-border prose-pre:bg-wes-secondary'
                : 'whitespace-pre-wrap',
            )}
          >
            {isUser ? (
              message.content
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
            )}
          </div>

          {message.image && (
            <div className="mt-4 max-w-sm overflow-hidden rounded-xl border border-wes-border shadow-sm">
              <img src={message.image} alt="User upload" className="h-auto w-full" />
            </div>
          )}

          {!isUser && message.groundingMetadata && (
            <GroundingResources metadata={message.groundingMetadata} />
          )}

          {isError && (
            <button
              onClick={onRetry}
              className="mt-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30"
            >
              <RefreshCw className={cn('h-4 w-4', isLoading && 'animate-spin')} />
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
