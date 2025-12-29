import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Sun, Moon } from 'lucide-react';
import { WesAILogo } from '../WesAILogo';
import { useTheme } from '../../hooks/useTheme';

interface ChatHeaderProps {
  onSettingsClick: () => void;
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onSettingsClick, onClearChat }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-wes-main border-b border-wes-border p-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 hover:bg-wes-secondary rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-wes-text" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link to="/wesai" className="flex items-center group">
                <WesAILogo width={100} height={32} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:drop-shadow-none transition-transform group-hover:scale-105" />
                <span className="text-xs font-normal px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full ml-2">v6.0</span>
              </Link>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-widest rounded border border-green-200 dark:border-green-800 ml-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Copilot Mode
              </div>
            </div>
            <p className="text-xs text-wes-muted flex items-center gap-1.5">
              Operation Copilot              <span className="inline-block w-1 h-1 rounded-full bg-wes-border"></span>
              <span className="opacity-70">Powered by Gemini AI</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-wes-secondary text-wes-text rounded-full transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={onSettingsClick}
            className="p-1.5 hover:bg-wes-secondary text-wes-text rounded-full transition-colors flex items-center justify-center"
            title="Settings"
          >
            <WesAILogo variant="icon" width={24} height={24} />
          </button>
          <button 
            onClick={onClearChat}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 rounded-full transition-colors"
            title="Clear Chat"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
