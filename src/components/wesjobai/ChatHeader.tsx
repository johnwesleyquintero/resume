import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Trash2, Sun, Moon } from 'lucide-react';
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-600" />
                Career AI <span className="text-xs font-normal px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">v5.2</span>
              </h1>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded border border-green-200 dark:border-green-800">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Operations Mode
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-200 dark:border-blue-800">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Search Grounding Active
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              Strategic Partner to John Wesley Quintero
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
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors"
            title="Settings"
          >
            <Bot className="w-5 h-5" />
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
