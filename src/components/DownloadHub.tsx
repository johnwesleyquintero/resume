import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Download,
  Copy,
  Check,
  Share2,
  Sun,
  Moon,
  ExternalLink,
  FolderDown,
  FileText,
} from 'lucide-react'
import { RESUME_DATA } from '../data/resumeData'
import { cn } from '../utils/cn'
import { copyToClipboard } from '../utils/clipboard'
import { useTheme } from '../hooks/useTheme'

export const DownloadHub: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="no-print fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Theme Toggle */}
      <div className="group relative">
        <button
          onClick={toggleDarkMode}
          className="rounded-full border border-gray-200 bg-white p-3 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 transform whitespace-nowrap rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-700">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>

      {/* Share Link Button */}
      <div className="group relative">
        <button
          onClick={handleCopyLink}
          className={cn(
            'rounded-full border p-3 shadow-lg transition-all duration-300 hover:scale-110',
            copied
              ? 'border-green-400 bg-green-500 text-white'
              : 'border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200',
          )}
          aria-label="Copy resume link"
        >
          {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
        </button>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 transform whitespace-nowrap rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-700">
          {copied ? 'Link Copied!' : 'Share Resume'}
        </span>
      </div>

      {/* Download Dropdown */}
      <div className="group relative">
        <button
          className="flex items-center justify-center rounded-full bg-blue-600 p-3 text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Download PDF"
        >
          <Download className="h-5 w-5" />
        </button>

        {/* Tooltip for Download Button */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 transform whitespace-nowrap rounded-md border border-blue-500 bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Downloads
        </span>

        <div className="pointer-events-none absolute bottom-full right-0 mb-3 w-64 translate-y-2 transform rounded-xl border border-gray-200 bg-white opacity-0 shadow-2xl transition-all duration-300 after:absolute after:left-0 after:right-0 after:top-full after:h-4 after:content-[''] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-2 p-3">
            <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Available Documents
            </p>
            {RESUME_DATA.downloads.map((doc, idx) => (
              <a
                key={idx}
                href={doc.url}
                download
                className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-900/20"
              >
                <div className="rounded-md bg-gray-100 p-2 transition-colors group-hover/item:bg-blue-100 dark:bg-gray-700 dark:group-hover/item:bg-blue-800/40">
                  <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{doc.title}</span>
                  <span className="max-w-[140px] truncate text-[10px] text-gray-400 dark:text-gray-500">
                    {doc.label}
                  </span>
                </div>
              </a>
            ))}

            <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

            <Link
              to="/downloads"
              className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-900/20"
            >
              <div className="rounded-md bg-blue-100 p-2 transition-colors group-hover/item:bg-blue-200 dark:bg-blue-900/40 dark:group-hover/item:bg-blue-800/60">
                <FolderDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Downloads
                </span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                  View & download all resources
                </span>
              </div>
              <ExternalLink className="ml-auto h-3 w-3 text-gray-400 opacity-0 transition-opacity group-hover/item:opacity-100" />
            </Link>

            <div className="my-1 h-px bg-gray-100 dark:bg-gray-700" />

            <button
              onClick={() => window.print()}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <Copy className="h-3.5 w-3.5" />
              Generate Print Version
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
