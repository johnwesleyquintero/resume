import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const ResumeFooter = () => {
  return (
    <footer className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center animate-fadeIn [animation-delay:900ms] no-print">
      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
        <span>
          Built by{' '}
          <a 
            href={RESUME_DATA.links.portfolio} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-medium"
          >
            {RESUME_DATA.name}
          </a>
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
        <Link to="/wesjobai" className="text-blue-500 hover:underline flex items-center gap-1 font-medium">
          <Bot className="w-3 h-3" /> Career AI
        </Link>
      </p>
    </footer>
  );
};
