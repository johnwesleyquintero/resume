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
      "flex gap-3 animate-slideUp group",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm",
        isUser 
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-100 dark:ring-blue-900/30" 
          : "bg-wes-secondary text-wes-text border border-wes-border"
      )}>
        {isUser ? <User className="w-5 h-5" /> : <WesAILogo variant="icon" width={24} height={24} />}
      </div>
      <div className={cn(
        "max-w-[85%] rounded-2xl p-4 relative transition-all",
        isUser 
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none shadow-md shadow-blue-600/20 border border-blue-500/50" 
          : isError
            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800 rounded-tl-none shadow-sm"
            : "bg-wes-secondary text-wes-text border border-wes-border rounded-tl-none shadow-sm"
      )}>
        {!isUser && !isError && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={message.content} />
          </div>
        )}
        <div className={cn(
          "text-sm leading-relaxed max-w-none",
          message.role === 'model' && !isError ? "prose dark:prose-invert" : "",
          isUser && "text-white"
        )}>
          {message.image && (
            <div className="mb-3 rounded-lg overflow-hidden border border-wes-border shadow-sm">
              <img src={message.image} alt="User uploaded" className="max-h-64 w-auto object-contain" />
            </div>
          )}
          {message.role === 'model' ? (
            <>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
              <GroundingResources metadata={message.groundingMetadata} />
            </>
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}
          {isError && (
            <button 
              onClick={onRetry}
              className="mt-3 flex items-center gap-2 text-xs font-bold bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-800/60 px-3 py-1.5 rounded-lg transition-colors"
            >
              <RefreshCw className={cn("w-3 h-3", isLoading && "animate-spin")} />
              Retry Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
