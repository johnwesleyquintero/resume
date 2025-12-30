import { User } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const ProfessionalSummary = () => {
  return (
    <section aria-labelledby="summary-heading" className="animate-fadeIn [animation-delay:600ms]">
      <h2
        id="summary-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <User className="h-5 w-5" />
        Professional Summary
      </h2>
      <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/50">
        <p className="italic leading-relaxed text-gray-700 dark:text-gray-300">
          "{RESUME_DATA.summary.quote}"
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {RESUME_DATA.summary.content}
      </p>
    </section>
  )
}
