import { GraduationCap, Award, Languages } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const CredentialsSection = () => {
  return (
    <section aria-labelledby="credentials-heading" className="animate-fadeIn [animation-delay:850ms]">
      <h2 id="credentials-heading" className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <GraduationCap className="w-5 h-5" />
        Education & Credentials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education & Certifications */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              Education
            </h3>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-gray-100 dark:border-gray-800 pl-4 py-1">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{edu.degree}</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">{edu.period}</p>
                {edu.details && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">{edu.details}</p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
            <span className="w-1 h-4 bg-blue-500 rounded-full" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.languages.map((lang, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-3 bg-gray-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 flex-1 min-w-[120px]">
                <div className="flex items-center gap-2">
                  <Languages className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{lang.split(' (')[0]}</span>
                </div>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                  {lang.includes('(') ? lang.split('(')[1].replace(')', '') : 'Professional'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
