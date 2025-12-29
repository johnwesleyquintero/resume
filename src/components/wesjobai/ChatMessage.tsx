import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User, Bot, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/cn';
import CopyButton from './CopyButton';

interface Message {
  role: 'user' | 'model';
  content: string;
  image?: string;
  isError?: boolean;
}

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
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
      )}>
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>
      <div className={cn(
        "max-w-[85%] rounded-2xl p-4 relative transition-all",
        isUser 
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none shadow-md shadow-blue-600/20 border border-blue-500/50" 
          : isError
            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800 rounded-tl-none shadow-sm"
            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm"
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
            <div className="mb-3 rounded-lg overflow-hidden border border-white/20 shadow-sm">
              <img src={message.image} alt="User uploaded" className="max-h-64 w-auto object-contain" />
            </div>
          )}
          {message.role === 'model' ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
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
