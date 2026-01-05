import { Layout } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const AmazonToolsSection = () => {
  return (
    <section
      aria-labelledby="amazon-tools-heading"
      className="animate-fadeIn [animation-delay:850ms]"
    >
      <h2
        id="amazon-tools-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <Layout className="h-5 w-5" />
        Amazon Tools & Platforms
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {RESUME_DATA.amazonTools.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              <span className="h-4 w-1 rounded-full bg-blue-500" />
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, sIdx) => (
                <div key={sIdx} className="group">
                  <div className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-white/50 p-3 transition-all hover:border-blue-200 hover:bg-white dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-900 dark:hover:bg-gray-900">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
