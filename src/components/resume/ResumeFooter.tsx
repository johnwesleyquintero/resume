import { Link } from 'react-router-dom'
import {
  Linkedin,
  Github,
  Globe,
  Briefcase,
  HelpCircle,
  FolderDown,
  LayoutDashboard,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { WesAILogo } from '../WesAILogo'
import { RESUME_DATA } from '../../data/resumeData'

export const ResumeFooter = () => {
  return (
    <footer className="no-print animate-fadeIn border-t border-gray-200 pb-8 pt-12 [animation-delay:900ms] dark:border-gray-800">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Professional Links
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            {RESUME_DATA.links.onlinejobs && (
              <a
                href={RESUME_DATA.links.onlinejobs}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Briefcase className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>OnlineJobs.ph</span>
              </a>
            )}
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>
            <a
              href={RESUME_DATA.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Globe className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Resources
          </h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/faqs"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <HelpCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>FAQs</span>
            </Link>
            <Link
              to="/downloads"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <FolderDown className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Downloads</span>
            </Link>
            {RESUME_DATA.tools?.map((tool) => {
              const ToolIcon =
                tool.icon === 'layout-dashboard'
                  ? LayoutDashboard
                  : tool.icon === 'trending-up'
                    ? TrendingUp
                    : tool.icon === 'zap'
                      ? Zap
                      : LayoutDashboard
              return (
                <a
                  key={tool.label}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <ToolIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>{tool.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Mission Statement / WesAI */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Assistant
          </h4>
          <div className="space-y-4">
            <Link
              to="/wesai"
              className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <WesAILogo
                variant="icon"
                width={20}
                height={20}
                className="transition-transform group-hover:rotate-12"
              />
              <span className="font-medium">Talk to WesAI</span>
            </Link>
            <p className="text-xs italic text-gray-500 dark:text-gray-500">
              "Build systems that help the team succeed."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800/50">
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
          <span>&copy; {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
