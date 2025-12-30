import { Zap, FileSpreadsheet, DatabaseZap, ChevronRight } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'
import { renderTextWithBold } from '../../utils/text'

export const UniqueEdge = () => {
  return (
    <section aria-labelledby="edge-heading" className="animate-fadeIn [animation-delay:800ms]">
      <h2
        id="edge-heading"
        className="mb-4 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <Zap className="h-5 w-5" />
        {RESUME_DATA.uniqueEdge.title}
      </h2>
      <div className="mb-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-5 dark:border-blue-800/30 dark:from-blue-900/10 dark:to-purple-900/10">
        <p className="text-gray-700 dark:text-gray-300">
          {RESUME_DATA.uniqueEdge.description}{' '}
          <a
            href={RESUME_DATA.uniqueEdge.playbookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Flat File Playbook
          </a>
          .
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {RESUME_DATA.uniqueEdge.cards.map(
          (card: { title: string; icon: string; points: string[] }, idx: number) => (
            <div
              key={idx}
              className="rounded-xl border border-l-4 border-l-blue-500 bg-white p-5 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50"
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                {card.icon === 'file-spreadsheet' ? (
                  <FileSpreadsheet className="h-5 w-5 text-blue-500" />
                ) : (
                  <DatabaseZap className="h-5 w-5 text-purple-500" />
                )}
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.points.map((point: string, pIdx: number) => (
                  <li key={pIdx} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{renderTextWithBold(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
