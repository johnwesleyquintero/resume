import { GraduationCap, Award, Languages, ExternalLink } from 'lucide-react'
import { RESUME_DATA } from '../../data/resumeData'

export const CredentialsSection = () => {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="animate-fadeIn [animation-delay:850ms]"
    >
      <h2
        id="credentials-heading"
        className="mb-6 flex items-center gap-2 border-b-2 border-blue-200 pb-2 text-xl font-bold text-blue-600 dark:border-gray-700 dark:text-blue-400"
      >
        <GraduationCap className="h-5 w-5" />
        Education & Credentials
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Education & Certifications */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              <span className="h-4 w-1 rounded-full bg-blue-500" />
              Education
            </h3>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-gray-100 py-1 pl-4 dark:border-gray-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                {edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-1 text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {edu.school}
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                ) : (
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {edu.school}
                  </p>
                )}
                <p className="mt-0.5 text-[10px] text-gray-500 dark:text-gray-500">{edu.period}</p>
                {edu.details && (
                  <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              <span className="h-4 w-1 rounded-full bg-blue-500" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
                >
                  <Award className="h-3 w-3 flex-shrink-0 text-blue-500" />
                  <span>{cert}</span>
                </div>
              ))}
              {RESUME_DATA.links.certifications && (
                <a
                  href={RESUME_DATA.links.certifications}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 flex w-fit items-center gap-1.5 text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  <span>View All LinkedIn Certifications</span>
                  <Award className="h-3 w-3 transition-transform group-hover:scale-110" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            <span className="h-4 w-1 rounded-full bg-blue-500" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                className="flex min-w-[120px] flex-1 flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-center gap-2">
                  <Languages className="h-3 w-3 text-blue-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {lang.split(' (')[0]}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                  {lang.includes('(') ? lang.split('(')[1].replace(')', '') : 'Professional'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
