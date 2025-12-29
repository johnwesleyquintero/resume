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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl animate-scaleIn">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Configure Gemini API
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
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
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="flex gap-3">
            <button 
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Save Key
            </button>
            {showCancel && (
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
