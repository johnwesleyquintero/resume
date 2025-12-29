import { 
  Mail, 
  Linkedin, 
  Globe, 
  BookOpen, 
  Printer, 
  MapPin, 
  FileSpreadsheet,
  DatabaseZap,
  ChevronRight,
  ShieldCheck,
  User,
  Briefcase,
  Wrench,
  Clock,
  Zap,
  Check,
  Copy,
  Activity,
  BarChart3,
  Settings,
  TrendingUp,
  Search
} from 'lucide-react';
import { RESUME_DATA, type ResumeData } from './constants';
import { cn } from './utils/cn';
import { DownloadHub } from './components/DownloadHub';
import { useState } from 'react';

const App = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(RESUME_DATA.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  return (
    <main className={cn("space-y-12 pb-12 relative")}>
      <DownloadHub />
      {/* Header Section */}
      <header className="relative mb-10 -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-12 md:py-16 bg-gradient-to-br from-blue-700 to-purple-700 rounded-b-xl shadow-lg overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22rgb(255%20255%20255%20/%200.05)%22%3E%3Cpath%20d%3D%22M0%20.5H31.5V32%22%2F%3E%3C%2Fsvg%3E')] opacity-50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl animate-gradient bg-[length:200%_200%]"></div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
          <div className="relative w-32 md:w-36 flex-shrink-0 group">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src={RESUME_DATA.avatarUrl} 
              alt={RESUME_DATA.name} 
              className="relative z-10 h-full w-full object-cover rounded-full border-4 border-white/50 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
              loading="lazy" 
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="animate-fadeIn [animation-delay:200ms]">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md tracking-tight">{RESUME_DATA.name}</h1>
              <p className="text-lg md:text-xl text-blue-200 font-medium drop-shadow">{RESUME_DATA.title}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-white/90 animate-fadeIn [animation-delay:400ms]">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-all group relative bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none"
                title="Click to copy email"
              >
                <div className="relative">
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                  )}
                </div>
                <span className={cn(emailCopied && "text-green-400 font-bold transition-all")}>
                  {emailCopied ? "Email Copied!" : RESUME_DATA.email}
                </span>
                {!emailCopied && <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />}
              </button>
              <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>
              <a href={RESUME_DATA.links.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                <Globe className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Portfolio</span>
              </a>
              <a href={RESUME_DATA.links.blog} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="truncate">Blog & Playbooks</span>
              </a>
              <button 
                onClick={() => window.print()}
                className="no-print flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group cursor-pointer bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none" 
                aria-label="Print resume"
              >
                <Printer className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Print Resume</span>
              </button>
              <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                <MapPin className="w-4 h-4" />
                <span>{RESUME_DATA.location}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
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

      {/* Operating Principles */}
      <section aria-labelledby="principles-heading" className="animate-fadeIn [animation-delay:700ms]">
        <h2 id="principles-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" />
          Operating Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESUME_DATA.operatingPrinciples.map((principle, idx) => (
            <div key={idx} className="space-y-2 group p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{principle.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section aria-labelledby="experience-heading" className="animate-fadeIn [animation-delay:750ms]">
        <h2 id="experience-heading" className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp: ResumeData['experience'][number], idx: number) => (
            <div key={idx} className="relative pl-8 pb-2 group">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 group-last:bottom-full" />
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors z-10" />
              
              <div className="transition-all">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
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

      {/* My Unique Edge Section */}
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
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
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
                  <span key={sIdx} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Specialist's Daily Rhythm */}
      <section aria-labelledby="routine-heading" className="animate-fadeIn [animation-delay:850ms]">
        <h2 id="routine-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          {RESUME_DATA.dailyRhythm.title}
        </h2>
        <div className="p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm italic border-l-2 border-gray-200 dark:border-gray-600 pl-4">{RESUME_DATA.dailyRhythm.description}</p>
          <div className="grid grid-cols-1 gap-4">
            {RESUME_DATA.dailyRhythm.items.map((item: string | { text: string; link: { text: string; url: string } }, idx: number) => {
              const icons = [<Activity className="w-3 h-3" />, <Settings className="w-3 h-3" />, <Search className="w-3 h-3" />, <TrendingUp className="w-3 h-3" />, <BarChart3 className="w-3 h-3" />, <BookOpen className="w-3 h-3" />];
              return (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-100 dark:border-blue-800/30 group-hover:scale-110 transition-transform relative">
                    <span className="group-hover:opacity-0 transition-opacity">{idx + 1}</span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {icons[idx] || <Zap className="w-3 h-3" />}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        {item.text}{' '}
                        <a 
                          href={item.link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                        >
                          {item.link.text}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center animate-fadeIn [animation-delay:900ms] no-print">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          <span>Built by {RESUME_DATA.name}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span>React + Tailwind CSS</span>
        </p>
      </footer>
    </main>
  );
};

export default App;
