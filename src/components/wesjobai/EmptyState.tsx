import React from 'react';
import { WesAILogo } from '../WesAILogo';

interface EmptyStateProps {
  onSuggestionClick: (prompt: string) => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onSuggestionClick }) => {
  const recruiterToolbox = [
    {
      label: "Buy Box Master",
      desc: "Pricing Intelligence System",
      prompt: "How does the Buy Box Master tool help dominate Amazon sales and optimize pricing strategy?"
    },
    {
      label: "WesBI Cockpit",
      desc: "Inventory Intelligence System",
      prompt: "Tell me about WesBI. How did it significantly improve inventory planning efficiency?"
    }
  ];

  const suggestions = [
    "Draft a professional cover letter",
    "How do you optimize an Amazon SOP?",
    "Explain the 'Build the System' philosophy"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10 text-center space-y-10 animate-fadeIn">
      <div className="space-y-4">
        <div className="w-20 h-20 bg-wes-secondary rounded-full flex items-center justify-center mx-auto shadow-xl border border-wes-border group hover:scale-110 transition-transform duration-500">
          <WesAILogo variant="icon" width={48} height={48} className="drop-shadow-sm" />
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-wes-text">Hello! I'm WesAI.</h3>
          <p className="text-wes-muted mt-2 text-base leading-relaxed">
            How can I help you today?
          </p>
        </div>
      </div>

      <div className="w-full max-w-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recruiterToolbox.map((item, i) => (
            <button 
              key={i}
              onClick={() => onSuggestionClick(item.prompt)}
              className="group p-4 text-left bg-wes-secondary border border-wes-border rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col gap-1"
            >
              <span className="text-xs font-bold text-wes-text group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.label}</span>
              <span className="text-[11px] text-wes-muted">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {suggestions.map((suggestion, i) => (
          <button 
            key={i}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1.5 text-[11px] font-medium bg-wes-secondary text-wes-muted rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all border border-wes-border hover:border-blue-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
