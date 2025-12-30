import { ShieldCheck } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const OperatingPrinciples = () => {
  return (
    <section
      aria-labelledby="principles-heading"
      className="animate-fadeIn [animation-delay:700ms]"
    >
      <h2
        id="principles-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <ShieldCheck className="h-5 w-5" />
        Operating Principles
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESUME_DATA.operatingPrinciples.map((principle, idx) => (
          <div
            key={idx}
            className="group space-y-2 rounded-xl border border-transparent p-4 transition-all hover:border-gray-100 hover:bg-white hover:shadow-md dark:hover:border-gray-700 dark:hover:bg-gray-800"
          >
            <h3 className="font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {principle.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
