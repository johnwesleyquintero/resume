import { Briefcase, ChevronRight } from 'lucide-react'
import { RESUME_DATA, type ResumeData } from '../../data/resumeData'
import { renderTextWithBold } from '../../utils/text'

export const ExperienceSection = () => {
  return (
    <section
      aria-labelledby="experience-heading"
      className="animate-fadeIn [animation-delay:750ms]"
    >
      <div className="mb-8 flex items-center justify-between border-b-2 border-blue-200 pb-2 dark:border-gray-700">
        <h2
          id="experience-heading"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <Briefcase className="h-5 w-5" />
          Professional Experience
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Career Timeline & Roles
        </span>
      </div>
      <div className="space-y-12">
        {RESUME_DATA.experience.map((exp: ResumeData['experience'][number], idx: number) => (
          <div key={idx} className="group relative pb-2 pl-6 sm:pl-8">
            <div className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-gray-200 group-last:bottom-full dark:bg-gray-700 sm:left-[11px]" />
            <div className="absolute left-0 top-2 z-10 h-6 w-6 rounded-full border-4 border-slate-50 bg-gray-300 transition-colors group-hover:bg-blue-500 dark:border-gray-900 dark:bg-gray-600 dark:group-hover:bg-blue-400" />

            <div className="transition-all">
              <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {exp.title}
                </h3>
                <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
              <p className="mb-3 font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map(
                  (
                    resp: string | { text: string; link: { text: string; url: string } },
                    rIdx: number,
                  ) => (
                    <li key={rIdx} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current text-blue-400" />
                      <span>
                        {typeof resp === 'string' ? (
                          renderTextWithBold(resp)
                        ) : (
                          <>
                            {renderTextWithBold(resp.text)}{' '}
                            <a
                              href={resp.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 font-medium text-blue-600 hover:underline dark:text-blue-400"
                            >
                              {resp.link.text} <ChevronRight className="h-3 w-3" />
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
