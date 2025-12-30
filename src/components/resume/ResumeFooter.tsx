import { Link } from 'react-router-dom'
import { WesAILogo } from '../WesAILogo'
import { RESUME_DATA } from '../../data/resumeData'

export const ResumeFooter = () => {
  return (
    <footer className="no-print animate-fadeIn border-t border-gray-200 pt-8 text-center [animation-delay:900ms] dark:border-gray-800">
      <p className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>
          Built by{' '}
          <a
            href={RESUME_DATA.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 hover:underline"
          >
            {RESUME_DATA.name}
          </a>
        </span>
        <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
        <Link
          to="/wesai"
          className="flex items-center gap-1 font-medium text-blue-500 hover:underline"
        >
          <WesAILogo variant="icon" width={16} height={16} /> WesAI
        </Link>
      </p>
    </footer>
  )
}
