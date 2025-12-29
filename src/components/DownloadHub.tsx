import React, { useState, useEffect } from 'react';
import { 
  Download, 
  FileSpreadsheet, 
  DatabaseZap, 
  Copy, 
  Check, 
  Share2,
  Sun,
  Moon
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { cn } from '../utils/cn';
import { copyToClipboard } from '../utils/clipboard';

export const DownloadHub: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 no-print">
      {/* Theme Toggle */}
      <div className="group relative">
        <button
          onClick={toggleDarkMode}
          className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0 border border-gray-700 dark:border-gray-600">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>

      {/* Share Link Button */}
      <div className="group relative">
        <button
          onClick={handleCopyLink}
          className={cn(
            "p-3 rounded-full shadow-lg border transition-all duration-300 hover:scale-110",
            copied 
              ? "bg-green-500 border-green-400 text-white" 
              : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          )}
          aria-label="Copy resume link"
        >
          {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
        </button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0 border border-gray-700 dark:border-gray-600">
          {copied ? 'Link Copied!' : 'Share Resume'}
        </span>
      </div>

      {/* Download Dropdown */}
      <div className="group relative">
        <button
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Download PDF"
        >
          <Download className="w-5 h-5" />
        </button>
        
        {/* Tooltip for Download Button */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0 border border-blue-500">
          Download PDFs
        </span>
        
        <div className="absolute bottom-full right-0 mb-3 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 after:content-[''] after:absolute after:top-full after:left-0 after:right-0 after:h-4">
          <div className="p-3 flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 px-2 mb-1">
              Available Documents
            </p>
            {RESUME_DATA.downloads.map((doc, idx) => (
              <a 
                key={idx}
                href={doc.url} 
                download 
                className="group/item flex items-center gap-3 px-3 py-2.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors text-gray-700 dark:text-gray-200"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-800/40 transition-colors">
                  {doc.icon === 'file-spreadsheet' ? (
                    <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <DatabaseZap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{doc.title}</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate max-w-[140px]">
                    {doc.label}
                  </span>
                </div>
              </a>
            ))}
            
            <div className="h-px bg-gray-100 dark:bg-gray-700 my-1" />
            
            <button
              onClick={() => window.print()}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-400 text-xs font-medium"
            >
              <Copy className="w-3.5 h-3.5" />
              Generate Print Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
