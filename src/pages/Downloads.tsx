import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Search,
  X,
  Download,
  Filter,
  Info,
  FileText,
  FileSpreadsheet,
} from 'lucide-react'
import { TEMPLATES_DATA } from '../data/templatesData'
import { RESUME_DATA } from '../data/resumeData'
import { cn } from '../utils/cn'

const CATEGORIES = ['all', 'resume', 'inventory', 'pricing', 'reporting', 'analysis'] as const

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const allDownloads = useMemo(() => {
    const templates = TEMPLATES_DATA.map((t) => ({
      ...t,
      type: 'template' as const,
      downloadUrl: `/excel_templates/${t.filename}`,
    }))

    const documents = RESUME_DATA.downloads.map((d) => ({
      id: d.label,
      title: d.title,
      description: d.label,
      filename: d.label,
      category: 'resume' as const,
      icon: d.icon === 'database-zap' ? FileText : FileSpreadsheet,
      type: 'document' as const,
      downloadUrl: d.url,
    }))

    return [...documents, ...templates]
  }, [])

  const filteredDownloads = useMemo(() => {
    return allDownloads.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allDownloads, searchQuery, selectedCategory])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allDownloads.length }
    allDownloads.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [allDownloads])

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                to="/"
                className="group mb-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Resume
              </Link>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Strategic Analysis Templates
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Advanced Excel templates designed to automate complex Amazon data analysis and guide
                strategic decision-making through structured frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Search and Filter Controls */}
        <div className="sticky top-0 z-10 -mx-4 mb-12 bg-gray-50/80 px-4 py-4 backdrop-blur-md dark:bg-gray-900/80 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-xl border-0 bg-white py-4 pl-10 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Search resources, categories, or functions..."
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="mr-2 flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <Filter className="mr-1.5 h-4 w-4" />
                Filter:
              </div>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all',
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
                  )}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <span
                    className={cn(
                      'ml-1.5 rounded-full px-1.5 py-0.5 text-[10px]',
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
                    )}
                  >
                    {categoryCounts[category] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDownloads.length > 0 ? (
            filteredDownloads.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-800 dark:hover:border-blue-700"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={cn(
                        'rounded-xl p-3',
                        item.category === 'resume'
                          ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                      )}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-gray-100 bg-gray-50/50 p-4 dark:border-gray-700/50 dark:bg-gray-900/20">
                  <a
                    href={item.downloadUrl}
                    download
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95',
                      item.category === 'resume'
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-blue-600 hover:bg-blue-700',
                    )}
                  >
                    <Download className="h-4 w-4" />
                    Download {item.category === 'resume' ? 'Document' : 'Template'}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="mb-4 flex justify-center text-gray-300 dark:text-gray-700">
                <Search className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                No resources found
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-6 font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
          <div className="flex gap-4">
            <div className="shrink-0">
              <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 dark:text-blue-300">Operational Note</h4>
              <p className="mt-1 text-sm text-blue-800/80 dark:text-blue-400/80">
                These templates are part of an automated suite designed for high-level Amazon
                operations. They provide structured frameworks for inventory management,
                profitability assessment, and competitive tracking. For best results, open templates
                with Microsoft Excel 2019 or later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
