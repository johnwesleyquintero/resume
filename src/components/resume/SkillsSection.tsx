import { Wrench } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const SkillsSection = () => {
  return (
    <section aria-labelledby="skills-heading" className="animate-fadeIn [animation-delay:820ms]">
      <h2
        id="skills-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <Wrench className="h-5 w-5" />
        Technical Skillset
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {RESUME_DATA.skills.map(
          (skillGroup: { category: string; items: string[] }, idx: number) => (
            <div key={idx} className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                <span className="h-4 w-1 rounded-full bg-blue-500" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill: string, sIdx: number) => (
                  <span
                    key={sIdx}
                    className="cursor-default rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
