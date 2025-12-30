import React from 'react'
import { Sparkles } from 'lucide-react'

interface ApiKeyModalProps {
  apiKey: string
  setApiKey: (key: string) => void
  onSave: (e: React.FormEvent) => void
  onClose: () => void
  showCancel?: boolean
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  apiKey,
  setApiKey,
  onSave,
  onClose,
  showCancel = true,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">
      <div className="w-full max-w-md animate-scaleIn rounded-2xl border border-wes-border bg-wes-secondary p-6 shadow-2xl">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-wes-text">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          Configure Gemini API
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-wes-muted">
          To talk to WesAI, you need a Gemini API Key. You can get one for free at{' '}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google AI Studio
          </a>
          .
          {import.meta.env.VITE_GEMINI_API_KEY && (
            <span className="mt-2 block font-medium text-green-600 dark:text-green-400">
              Note: A default system key is currently active. You can still provide your own key to
              override it.
            </span>
          )}
        </p>
        <form onSubmit={onSave} className="space-y-4">
          <input
            type="password"
            placeholder="Enter your Gemini API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full rounded-xl border border-wes-border bg-wes-main p-3 text-wes-text placeholder-wes-muted outline-none transition-all focus:border-wes-muted"
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-wes-text py-3 font-bold text-wes-main shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Save Key
            </button>
            {showCancel && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-wes-border px-4 py-3 text-wes-muted transition-all hover:bg-wes-main"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApiKeyModal
