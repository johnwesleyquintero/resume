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
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 text-center space-y-12 animate-fadeIn">
      <div className="space-y-6">
        <div className="w-16 h-16 bg-wes-main rounded-full flex items-center justify-center mx-auto shadow-sm border border-wes-border group hover:scale-105 transition-all duration-500">
          <WesAILogo variant="icon" width={36} height={36} />
        </div>
        <div className="max-w-md mx-auto space-y-2">
          <h3 className="text-2xl font-semibold text-wes-text tracking-tight">How can I help you today?</h3>
          <p className="text-wes-muted text-[15px] leading-relaxed opacity-80">
            WesAI is your strategic partner for building systems and optimizing operations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recruiterToolbox.map((item, i) => (
            <button 
              key={i}
              onClick={() => onSuggestionClick(item.prompt)}
              className="group p-4 text-left bg-wes-main border border-wes-border rounded-xl hover:bg-wes-secondary transition-all flex flex-col gap-1.5 shadow-sm"
            >
              <span className="text-xs font-bold text-wes-text uppercase tracking-tight opacity-70 group-hover:opacity-100">{item.label}</span>
              <span className="text-[13px] text-wes-muted leading-snug">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 max-w-xl px-4">
        {suggestions.map((suggestion, i) => (
          <button 
            key={i}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 text-[13px] bg-wes-main text-wes-muted rounded-full hover:bg-wes-secondary transition-all border border-wes-border hover:border-wes-muted/30"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
