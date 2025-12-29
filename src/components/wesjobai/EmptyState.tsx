import React from 'react';
import { WesAILogo } from '../WesAILogo';

interface EmptyStateProps {
  onSuggestionClick: (prompt: string) => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onSuggestionClick }) => {
  const recruiterToolbox = [
    {
      label: "Operation Citadel",
      desc: "The VAXPH Listing Documentation Hub",
      prompt: "Tell me about Operation Citadel. How does this GitHub repository serve as a single source of truth for VAXPH?"
    },
    {
      label: "Ask about WesBI",
      desc: "The Inventory Intelligence Cockpit",
      prompt: "Tell me about WesBI. How did it significantly improve inventory planning efficiency?"
    },
    {
      label: "Buy Box Master",
      desc: "The Pricing Intelligence System",
      prompt: "How does the Buy Box Master tool help dominate Amazon sales?"
    },
    {
      label: "Systems Philosophy",
      desc: "The 'Build the System' approach",
      prompt: "Explain your 'Build the System' philosophy and how it prevents recurring problems."
    }
  ];

  const suggestions = [
    "Draft a professional cover letter for an E-commerce Manager role",
    "How would you optimize a high-friction Catalog Management SOP?",
    "Simulate a Tier 1 Interview: Ask me challenging operational questions",
    "How does your 'Build the System' philosophy apply to Amazon account health?",
    "Explain the operational synergy between SecuLife and SpeedTalk"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10 text-center space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto shadow-xl border border-gray-100 dark:border-gray-700 group hover:scale-110 transition-transform duration-500">
          <WesAILogo variant="icon" width={60} height={60} />
        </div>
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Hello! I'm WesAI.</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
            I'm the strategic extension of Wesley. I'm trained on his "Build the System" philosophy and operational workflows.
          </p>
        </div>
      </div>

      {/* Recruiter Toolbox */}
      <div className="w-full max-w-2xl space-y-4">
        <div className="flex items-center gap-2 px-4">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recruiter Toolbox</span>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recruiterToolbox.map((item, i) => (
            <button 
              key={i}
              onClick={() => onSuggestionClick(item.prompt)}
              className="group p-4 text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col gap-1"
            >
              <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.label}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion, i) => (
          <button 
            key={i}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all border border-transparent hover:border-blue-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
