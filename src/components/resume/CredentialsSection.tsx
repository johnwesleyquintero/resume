import { GraduationCap, Award, Languages, ExternalLink, BookOpen, CheckCircle2 } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const CredentialsSection = () => {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="animate-fadeIn [animation-delay:850ms]"
    >
      <div className="mb-8 flex items-center justify-between border-b-2 border-blue-200 pb-2 dark:border-gray-700">
        <h2
          id="credentials-heading"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <GraduationCap className="h-5 w-5" />
          Education & Credentials
        </h2>
        <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Qualifications & Languages
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        {/* Education Section */}
        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
            <BookOpen className="h-3.5 w-3.5 text-blue-500" />
            Education
          </h3>
          <div className="space-y-4">
            {RESUME_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold leading-tight text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {edu.period}
                  </span>
                </div>

                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-1 text-[11px] font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {edu.school}
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                ) : (
                  <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    {edu.school}
                  </p>
                )}

                {edu.details && (
                  <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
            <Award className="h-3.5 w-3.5 text-blue-500" />
            Certifications
          </h3>
          <div className="flex flex-col gap-3">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-gray-50 bg-gray-50/50 p-3 transition-colors hover:bg-white hover:shadow-sm dark:border-gray-800 dark:bg-gray-800/30 dark:hover:bg-gray-800/50"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100/50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-medium leading-snug text-gray-700 dark:text-gray-300">
                  {cert}
                </span>
              </div>
            ))}

            {RESUME_DATA.links.certifications && (
              <a
                href={RESUME_DATA.links.certifications}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 p-3 text-[11px] font-bold text-gray-500 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-800 dark:text-gray-500 dark:hover:border-blue-900/50 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
              >
                <span>View All LinkedIn Certs</span>
                <Award className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-5">
          <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
            <Languages className="h-3.5 w-3.5 text-blue-500" />
            Languages
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {RESUME_DATA.languages.map((lang, idx) => {
              const [name, level] = lang.split(' (')
              const cleanLevel = level?.replace(')', '') || ''

              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        Language
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {cleanLevel}
                      </span>
                    </div>
                  </div>

                  {/* Visual indicator bar */}
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-1000 group-hover:bg-blue-600"
                      style={{
                        width:
                          cleanLevel.toLowerCase() === 'native'
                            ? '100%'
                            : cleanLevel.toLowerCase().includes('professional')
                              ? '90%'
                              : '70%',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
