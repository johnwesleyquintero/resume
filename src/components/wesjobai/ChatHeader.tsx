import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Trash2, Sun, Moon } from 'lucide-react';
import { WesAILogo } from '../WesAILogo';
import { useTheme } from '../../hooks/useTheme';

interface ChatHeaderProps {
  onSettingsClick: () => void;
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onSettingsClick, onClearChat }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link to="/wesai" className="flex items-center">
                <WesAILogo width={100} height={32} />
                <span className="text-xs font-normal px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full ml-2">v6.0</span>
              </Link>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-widest rounded border border-green-200 dark:border-green-800 ml-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Copilot Mode
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              Wesley's Copilot
              <span className="inline-block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              <span className="opacity-70">Powered by Gemini AI</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={onSettingsClick}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors flex items-center justify-center"
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
