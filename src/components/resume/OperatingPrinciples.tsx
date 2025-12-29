import { ShieldCheck } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const OperatingPrinciples = () => {
  return (
    <section aria-labelledby="principles-heading" className="animate-fadeIn [animation-delay:700ms]">
      <h2 id="principles-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5" />
        Operating Principles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.operatingPrinciples.map((principle, idx) => (
          <div key={idx} className="space-y-2 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{principle.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
