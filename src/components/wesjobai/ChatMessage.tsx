import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User, RefreshCw, ExternalLink, Globe } from 'lucide-react';
import { WesAILogo } from '../WesAILogo';
import { cn } from '../../utils/cn';
import CopyButton from './CopyButton';

interface Message {
  role: 'user' | 'model';
  content: string;
  image?: string;
  isError?: boolean;
  groundingMetadata?: any;
}

const GroundingResources = ({ metadata }: { metadata: any }) => {
  if (!metadata || !metadata.groundingChunks) return null;

  const links = metadata.groundingChunks
    .map((chunk: any) => chunk.web?.uri)
    .filter(Boolean);

  if (links.length === 0) return null;

  // Deduplicate links
  const uniqueLinks = Array.from(new Set(links));

  return (
    <div className="mt-4 pt-4 border-t border-wes-border space-y-3">
      <div className="flex items-center gap-2 text-[10px] font-bold text-wes-muted uppercase tracking-widest">
        <Globe className="w-3 h-3" />
        <span>Research Sources</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {uniqueLinks.map((link: any, idx: number) => {
          let domain = "";
          try {
            domain = new URL(link).hostname.replace('www.', '');
          } catch (e) {
            domain = "Resource";
          }
          
          return (
            <a 
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-wes-main hover:bg-blue-50 dark:hover:bg-blue-900/20 text-[11px] text-wes-muted hover:text-blue-600 dark:hover:text-blue-400 border border-wes-border rounded-lg transition-all"
            >
              <span className="truncate max-w-[150px]">{domain}</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

interface ChatMessageProps {
  message: Message;
  isLoading: boolean;
  onRetry: () => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading, onRetry }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={cn(
      "flex gap-4 md:gap-6 py-8 first:pt-4 animate-slideUp group",
      isUser ? "bg-transparent" : "bg-transparent"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border",
        isUser 
          ? "bg-wes-secondary text-wes-text border-wes-border" 
          : "bg-wes-secondary text-wes-text border-wes-border"
      )}>
        {isUser ? <User className="w-5 h-5" /> : <WesAILogo variant="icon" width={24} height={24} />}
      </div>
      
      <div className="flex-1 space-y-2 min-w-0">
        <div className="font-bold text-sm tracking-tight text-wes-text/90 uppercase">
          {isUser ? 'You' : 'WesAI'}
        </div>
        
        <div className={cn(
          "relative transition-all",
          isError ? "text-red-600 dark:text-red-400" : "text-wes-text"
        )}>
          {!isUser && !isError && (
            <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton text={message.content} />
            </div>
          )}
          
          <div className={cn(
            "text-[15px] md:text-[16px] leading-7 md:leading-8 max-w-none",
            !isUser && !isError ? "prose dark:prose-invert prose-p:leading-7 prose-pre:bg-wes-secondary prose-pre:border prose-pre:border-wes-border" : "whitespace-pre-wrap"
          )}>
            {isUser ? (
              message.content
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            )}
          </div>

          {message.image && (
            <div className="mt-4 rounded-xl overflow-hidden border border-wes-border shadow-sm max-w-sm">
              <img src={message.image} alt="User upload" className="w-full h-auto" />
            </div>
          )}

          {!isUser && message.groundingMetadata && (
            <GroundingResources metadata={message.groundingMetadata} />
          )}

          {isError && (
            <button 
              onClick={onRetry}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm font-medium"
            >
              <RefreshCw className={cn("w-4 h-4", isLoading && "animate-spin")} />
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
