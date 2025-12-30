import React from 'react'
import { WesAILogo } from '../WesAILogo'

interface EmptyStateProps {
  onSuggestionClick: (prompt: string) => void
}

const EmptyState: React.FC<EmptyStateProps> = ({ onSuggestionClick }) => {
  const recruiterToolbox = [
    {
      label: 'Buy Box Master',
      desc: 'Pricing Intelligence System',
      prompt:
        'How does the Buy Box Master tool help dominate Amazon sales and optimize pricing strategy?',
    },
    {
      label: 'WesBI Cockpit',
      desc: 'Inventory Intelligence System',
      prompt:
        'Tell me about WesBI. How did it significantly improve inventory planning efficiency?',
    },
  ]

  const suggestions = [
    'Draft a professional cover letter',
    'How do you optimize an Amazon SOP?',
    "Explain the 'Build the System' philosophy",
  ]

  return (
    <div className="flex min-h-[60vh] animate-fadeIn flex-col items-center justify-center space-y-12 py-10 text-center">
      <div className="space-y-6">
        <div className="group mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-wes-border bg-wes-main shadow-sm transition-all duration-500 hover:scale-105">
          <WesAILogo variant="icon" width={36} height={36} />
        </div>
        <div className="mx-auto max-w-md space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-wes-text">
            How can I help you today?
          </h3>
          <p className="text-[15px] leading-relaxed text-wes-muted opacity-80">
            WesAI is your strategic partner for building systems and optimizing operations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl px-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {recruiterToolbox.map((item, i) => (
            <button
              key={i}
              onClick={() => onSuggestionClick(item.prompt)}
              className="group flex flex-col gap-1.5 rounded-xl border border-wes-border bg-wes-main p-4 text-left shadow-sm transition-all hover:bg-wes-secondary"
            >
              <span className="text-xs font-bold uppercase tracking-tight text-wes-text opacity-70 group-hover:opacity-100">
                {item.label}
              </span>
              <span className="text-[13px] leading-snug text-wes-muted">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex max-w-xl flex-wrap justify-center gap-2 px-4">
        {suggestions.map((suggestion, i) => (
          <button
            key={i}
            onClick={() => onSuggestionClick(suggestion)}
            className="hover:border-wes-muted/30 rounded-full border border-wes-border bg-wes-main px-4 py-2 text-[13px] text-wes-muted transition-all hover:bg-wes-secondary"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

export default EmptyState
