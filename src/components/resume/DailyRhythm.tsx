import {
  Clock,
  Activity,
  Settings,
  Search,
  TrendingUp,
  BarChart3,
  BookOpen,
  Zap,
} from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const DailyRhythm = () => {
  const icons = [
    <Activity className="h-3 w-3" />,
    <Settings className="h-3 w-3" />,
    <Search className="h-3 w-3" />,
    <TrendingUp className="h-3 w-3" />,
    <BarChart3 className="h-3 w-3" />,
    <BookOpen className="h-3 w-3" />,
  ]

  return (
    <section aria-labelledby="routine-heading" className="animate-fadeIn [animation-delay:850ms]">
      <h2
        id="routine-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <Clock className="h-5 w-5" />
        {RESUME_DATA.dailyRhythm.title}
      </h2>
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
        <p className="mb-6 border-l-2 border-gray-200 pl-4 text-sm italic text-gray-600 dark:border-gray-600 dark:text-gray-400">
          {RESUME_DATA.dailyRhythm.description}
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {RESUME_DATA.dailyRhythm.items.map(
            (item: string | { text: string; link: { text: string; url: string } }, idx: number) => (
              <div key={idx} className="group flex gap-4">
                <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-xs font-bold text-blue-600 transition-transform group-hover:scale-110 dark:border-blue-800/30 dark:bg-blue-900/20 dark:text-blue-400">
                  <span className="transition-opacity group-hover:opacity-0">{idx + 1}</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    {icons[idx] || <Zap className="h-3 w-3" />}
                  </span>
                </div>
                <div className="pt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      {item.text}{' '}
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {item.link.text}
                      </a>
                    </>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
