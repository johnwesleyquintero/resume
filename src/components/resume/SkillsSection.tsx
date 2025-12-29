import { Wrench } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const SkillsSection = () => {
  return (
    <section aria-labelledby="skills-heading" className="animate-fadeIn [animation-delay:820ms]">
      <h2 id="skills-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Wrench className="w-5 h-5" />
        Technical Skillset
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESUME_DATA.skills.map((skillGroup: { category: string; items: string[] }, idx: number) => (
          <div key={idx} className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill: string, sIdx: number) => (
                <span key={sIdx} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-400 transition-all cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
