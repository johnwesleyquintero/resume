import { Zap, FileSpreadsheet, DatabaseZap, ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { renderTextWithBold } from '../../utils/text';

export const UniqueEdge = () => {
  return (
    <section aria-labelledby="edge-heading" className="animate-fadeIn [animation-delay:800ms]">
      <h2 id="edge-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Zap className="w-5 h-5" />
        {RESUME_DATA.uniqueEdge.title}
      </h2>
      <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          {RESUME_DATA.uniqueEdge.description}{' '}
          <a href={RESUME_DATA.uniqueEdge.playbookLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold">
            Flat File Playbook
          </a>.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.uniqueEdge.cards.map((card: { title: string; icon: string; points: string[] }, idx: number) => (
          <div key={idx} className="p-5 border rounded-xl bg-white dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-all border-l-4 border-l-blue-500">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
              {card.icon === 'file-spreadsheet' ? <FileSpreadsheet className="w-5 h-5 text-blue-500" /> : <DatabaseZap className="w-5 h-5 text-purple-500" />}
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.points.map((point: string, pIdx: number) => (
                <li key={pIdx} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{renderTextWithBold(point)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
