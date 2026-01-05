import { ShieldCheck, Cog, Database, Users, Layout, TrendingUp } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

const PRINCIPLE_ICONS = [Cog, Database, Users, Layout, TrendingUp]

export const OperatingPrinciples = () => {
  return (
    <section
      aria-labelledby="principles-heading"
      className="animate-fadeIn [animation-delay:700ms]"
    >
      <div className="mb-6 flex items-center justify-between border-b-2 border-blue-200 pb-2 dark:border-gray-700">
        <h2
          id="principles-heading"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <ShieldCheck className="h-5 w-5" />
          Operating Principles & Strategic Approach
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Philosophy & Execution
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {RESUME_DATA.operatingPrinciples.map((principle, idx) => {
          const Icon = PRINCIPLE_ICONS[idx] || ShieldCheck
          return (
            <div
              key={idx}
              className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                  {principle.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
