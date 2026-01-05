import {
  Layout,
  ExternalLink,
  Search,
  Scan,
  BarChart3,
  MessageSquare,
  TrendingUp,
  Settings,
  LucideIcon,
} from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Product Research & Opportunity Discovery': Search,
  'Wholesale, Catalog Scanning & ASIN Validation': Scan,
  'Data Dive Analysis & Decision Support': BarChart3,
  'Voice of Customer (VOC) & Listing Intelligence': MessageSquare,
  'Advertising, Demand Signals & Performance Monitoring': TrendingUp,
  'Amazon Operations & Listing Execution': Settings,
}

export const AmazonToolsSection = () => {
  return (
    <section
      aria-labelledby="amazon-tools-heading"
      className="animate-fadeIn [animation-delay:850ms]"
    >
      <div className="mb-6 flex items-center justify-between border-b-2 border-blue-200 pb-2 dark:border-gray-700">
        <h2
          id="amazon-tools-heading"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <Layout className="h-5 w-5" />
          Amazon Tools & Platforms
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Tech Stack & Ecosystem
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {RESUME_DATA.amazonTools.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.category] || Layout
          return (
            <div key={idx} className="flex flex-col space-y-4">
              <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
                <Icon className="h-3.5 w-3.5 text-blue-500" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.items.map((item, sIdx) => (
                  <div key={sIdx} className="group relative">
                    <div className="flex flex-col gap-1.5 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gray-50 p-1 text-gray-400 transition-colors hover:bg-blue-50 hover:text-blue-500 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                            title={`Visit ${item.name}`}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
