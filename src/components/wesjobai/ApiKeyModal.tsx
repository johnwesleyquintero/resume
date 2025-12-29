import React from 'react';
import { Sparkles } from 'lucide-react';

interface ApiKeyModalProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  onSave: (e: React.FormEvent) => void;
  onClose: () => void;
  showCancel?: boolean;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ 
  apiKey, 
  setApiKey, 
  onSave, 
  onClose,
  showCancel = true 
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-wes-secondary rounded-2xl p-6 w-full max-w-md shadow-2xl border border-wes-border animate-scaleIn">
        <h2 className="text-xl font-bold mb-4 text-wes-text flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Configure Gemini API
        </h2>
        <p className="text-sm text-wes-muted mb-4 leading-relaxed">
          To talk to WesAI, you need a Gemini API Key. You can get one for free at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a>. 
          {import.meta.env.VITE_GEMINI_API_KEY && (
            <span className="block mt-2 text-green-600 dark:text-green-400 font-medium">
              Note: A default system key is currently active. You can still provide your own key to override it.
            </span>
          )}
        </p>
        <form onSubmit={onSave} className="space-y-4">
          <input 
            type="password"
            placeholder="Enter your Gemini API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-3 border border-wes-border rounded-xl bg-wes-main text-wes-text focus:ring-2 focus:ring-blue-500 outline-none placeholder-wes-muted transition-all"
          />
          <div className="flex gap-3">
            <button 
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Save Key
            </button>
            {showCancel && (
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-3 border border-wes-border rounded-xl text-wes-muted hover:bg-wes-main transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApiKeyModal;
