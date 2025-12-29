import { Briefcase, ChevronRight } from 'lucide-react';
import { RESUME_DATA, type ResumeData } from '../../data/resumeData';

export const ExperienceSection = () => {
  return (
    <section aria-labelledby="experience-heading" className="animate-fadeIn [animation-delay:750ms]">
      <h2 id="experience-heading" className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Briefcase className="w-5 h-5" />
        Professional Experience
      </h2>
      <div className="space-y-12">
        {RESUME_DATA.experience.map((exp: ResumeData['experience'][number], idx: number) => (
          <div key={idx} className="relative pl-6 sm:pl-8 pb-2 group">
            <div className="absolute left-[11px] sm:left-[11px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 group-last:bottom-full" />
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors z-10" />
            
            <div className="transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                <span className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded uppercase tracking-wider">{exp.period}</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp: string | { text: string; link: { text: string; url: string } }, rIdx: number) => (
                  <li key={rIdx} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                    <span className="text-blue-400 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
                    <span>
                      {typeof resp === 'string' ? (
                        resp
                      ) : (
                        <>
                          {resp.text}{' '}
                          <a 
                            href={resp.link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-0.5 font-medium"
                          >
                            {resp.link.text} <ChevronRight className="w-3 h-3" />
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
