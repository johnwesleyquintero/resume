import { Clock, Activity, Settings, Search, TrendingUp, BarChart3, BookOpen, Zap } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const DailyRhythm = () => {
  const icons = [
    <Activity className="w-3 h-3" />, 
    <Settings className="w-3 h-3" />, 
    <Search className="w-3 h-3" />, 
    <TrendingUp className="w-3 h-3" />, 
    <BarChart3 className="w-3 h-3" />, 
    <BookOpen className="w-3 h-3" />
  ];

  return (
    <section aria-labelledby="routine-heading" className="animate-fadeIn [animation-delay:850ms]">
      <h2 id="routine-heading" className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Clock className="w-5 h-5" />
        {RESUME_DATA.dailyRhythm.title}
      </h2>
      <div className="p-6 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm italic border-l-2 border-gray-200 dark:border-gray-600 pl-4">
          {RESUME_DATA.dailyRhythm.description}
        </p>
        <div className="grid grid-cols-1 gap-4">
          {RESUME_DATA.dailyRhythm.items.map((item: string | { text: string; link: { text: string; url: string } }, idx: number) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
