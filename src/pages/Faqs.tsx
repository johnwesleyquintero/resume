import { FAQS_DATA } from '../data/faqsData'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              STAR Scenarios & FAQs
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A collection of real-world situations, tasks, actions, and results from my Amazon
              Specialist experience.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
          >
            Back to Resume
          </Link>
        </div>

        <div className="space-y-8">
          {FAQS_DATA.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800"
            >
              <div className="px-6 py-8">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
                      {
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
                          faq.category === 'listing',
                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                          faq.category === 'inventory',
                        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200':
                          faq.category === 'operational',
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                          faq.category === 'compliance',
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                          faq.category === 'advertising',
                      },
                    )}
                  >
                    {faq.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">ID: {faq.id}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {faq.title}
                </h2>
                <p className="mt-2 text-lg font-medium italic text-blue-600 dark:text-blue-400">
                  "{faq.question}"
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Situation
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.situation}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Task
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.task}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Action
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-gray-700 dark:text-gray-300">
                      {faq.action}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Result
                    </h3>
                    <p className="mt-2 font-medium text-green-600 dark:text-green-400">
                      {faq.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
