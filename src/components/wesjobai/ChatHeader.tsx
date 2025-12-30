import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2, Sun, Moon } from 'lucide-react'
import { WesAILogo } from '../WesAILogo'
import { useTheme } from '../../hooks/useTheme'

interface ChatHeaderProps {
  onSettingsClick: () => void
  onClearChat: () => void
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onSettingsClick, onClearChat }) => {
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <header className="sticky top-0 z-10 border-b border-wes-border bg-wes-main p-4 shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="rounded-full p-2 transition-colors hover:bg-wes-secondary">
            <ArrowLeft className="h-5 w-5 text-wes-text" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link to="/wesai" className="group flex items-center">
                <WesAILogo
                  width={100}
                  height={32}
                  className="drop-shadow-sm transition-transform group-hover:scale-105 dark:drop-shadow-none"
                />
                <span className="ml-2 rounded-full border border-wes-border bg-wes-secondary px-2 py-0.5 text-[10px] font-bold text-wes-muted">
                  v6.0
                </span>
              </Link>
              <div className="ml-2 hidden items-center gap-1.5 rounded border border-wes-border bg-wes-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-wes-muted sm:flex">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
                Copilot
              </div>
            </div>
            <p className="text-wes-muted/80 flex items-center gap-1.5 text-[11px]">
              WesAI Copilot
              <span className="bg-wes-muted/40 inline-block h-0.5 w-0.5 rounded-full"></span>
              <span>Powered by Gemini</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 text-wes-text transition-colors hover:bg-wes-secondary"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={onSettingsClick}
            className="flex items-center justify-center rounded-full p-1.5 text-wes-text transition-colors hover:bg-wes-secondary"
            title="Settings"
          >
            <WesAILogo variant="icon" width={24} height={24} />
          </button>
          <button
            onClick={onClearChat}
            className="rounded-full p-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
            title="Clear Chat"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader
