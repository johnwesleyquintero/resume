import { useState, useMemo } from 'react'
import { FAQS_DATA, StarScenario } from '../data/faqsData'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'
import { Search, X, ArrowLeft, CheckCircle2, Target, Zap, Trophy, Filter } from 'lucide-react'

const CATEGORIES = [
  'all',
  'listing',
  'inventory',
  'operational',
  'compliance',
  'advertising',
] as const

const Faqs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesSearch =
        faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.situation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.result.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: FAQS_DATA.length }
    FAQS_DATA.forEach((faq) => {
      counts[faq.category] = (counts[faq.category] || 0) + 1
    })
    return counts
  }, [])

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
                STAR Scenarios & FAQs
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Real-world situations, tasks, actions, and results from my Amazon Specialist
                experience.
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
                placeholder="Search scenarios, keywords, or results..."
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
                    'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-gray-700',
                  )}
                >
                  <span className="capitalize">{category}</span>
                  <span
                    className={cn(
                      'ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold',
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

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredFaqs.length} of {FAQS_DATA.length} scenarios
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => <FaqCard key={faq.id} faq={faq} />)
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 shadow-sm dark:bg-gray-800">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-700">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                No scenarios found
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-6 font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const FaqCard = ({ faq }: { faq: StarScenario }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md dark:bg-gray-800 dark:ring-gray-700">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span
            className={cn(
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize tracking-wide',
              {
                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300':
                  faq.category === 'listing',
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300':
                  faq.category === 'inventory',
                'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300':
                  faq.category === 'operational',
                'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300':
                  faq.category === 'compliance',
                'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300':
                  faq.category === 'advertising',
              },
            )}
          >
            {faq.category}
          </span>
          <div className="flex items-center gap-3 text-xs font-medium text-gray-400 dark:text-gray-500">
            <span>ID: {faq.id}</span>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {faq.title}
        </h2>
        <div className="relative mt-3">
          <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-blue-500/20" />
          <p className="text-lg font-medium italic leading-relaxed text-gray-700 dark:text-gray-300">
            "{faq.question}"
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Situation */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-lg bg-blue-50 p-1.5 dark:bg-blue-900/20">
                <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Situation
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {faq.situation}
            </p>
          </div>

          {/* Task */}
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-lg bg-indigo-50 p-1.5 dark:bg-indigo-900/20">
                <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Task
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.task}</p>
          </div>

          {/* Action */}
          <div className="sm:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-lg bg-amber-50 p-1.5 dark:bg-amber-900/20">
                <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Action
              </h3>
            </div>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {faq.action}
            </p>
          </div>

          {/* Result */}
          <div className="sm:col-span-2">
            <div className="rounded-xl bg-emerald-50 p-5 ring-1 ring-emerald-100 dark:bg-emerald-900/10 dark:ring-emerald-900/30">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-lg bg-emerald-100 p-1.5 dark:bg-emerald-900/30">
                  <Trophy className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  Result
                </h3>
              </div>
              <p className="text-base font-semibold leading-relaxed text-emerald-800 dark:text-emerald-300">
                {faq.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
