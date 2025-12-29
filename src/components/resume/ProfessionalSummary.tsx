import { User } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const ProfessionalSummary = () => {
  return (
    <section aria-labelledby="summary-heading" className="animate-fadeIn [animation-delay:600ms]">
      <h2 id="summary-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <User className="w-5 h-5" />
        Professional Summary
      </h2>
      <div className="p-4 bg-blue-50 dark:bg-gray-800/50 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/30">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
          "{RESUME_DATA.summary.quote}"
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        {RESUME_DATA.summary.content}
      </p>
    </section>
  );
};
