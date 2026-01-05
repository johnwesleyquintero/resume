import React from 'react'
import { WesAILogo } from '../WesAILogo'
import { FAQS_DATA } from '../../data/faqsData'

interface EmptyStateProps {
  onSuggestionClick: (prompt: string) => void
}

const EmptyState: React.FC<EmptyStateProps> = ({ onSuggestionClick }) => {
  // Use specific STAR scenarios for the "Toolbox" style cards
  const featuredScenarios = FAQS_DATA.filter((s) =>
    ['operational-efficiency-004', 'inventory-automation-005'].includes(s.id),
  )

  // Use the rest for simple suggestions
  const otherScenarios = FAQS_DATA.filter(
    (s) => !['operational-efficiency-004', 'inventory-automation-005'].includes(s.id),
  )

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
          {featuredScenarios.map((item) => (
            <button
              key={item.id}
              onClick={() => onSuggestionClick(item.question)}
              className="group flex flex-col gap-1.5 rounded-xl border border-wes-border bg-wes-main p-4 text-left shadow-sm transition-all hover:bg-wes-secondary"
            >
              <span className="text-xs font-bold uppercase tracking-tight text-wes-text opacity-70 group-hover:opacity-100">
                {item.title.split(':')[0]}
              </span>
              <span className="text-[13px] leading-snug text-wes-muted">
                {item.question}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex max-w-xl flex-wrap justify-center gap-2 px-4">
        {otherScenarios.map((item) => (
          <button
            key={item.id}
            onClick={() => onSuggestionClick(item.question)}
            className="hover:border-wes-muted/30 rounded-full border border-wes-border bg-wes-main px-4 py-2 text-[13px] text-wes-muted transition-all hover:bg-wes-secondary"
          >
            {item.question}
          </button>
        ))}
      </div>
    </div>
  )
}

export default EmptyState
