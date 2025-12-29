import React, { useRef } from 'react';
import { Send, ImageIcon, X, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import toast from 'react-hot-toast';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  isLoading: boolean;
  onSend: (e?: React.FormEvent) => void;
  apiKey: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  selectedImage,
  setSelectedImage,
  isLoading,
  onSend,
  apiKey
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error("Please select an image file.");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      toast.error("Image too large. Max 4MB allowed.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
      toast.success("Image attached!");
    };
    reader.readAsDataURL(file);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            processFile(file);
          }
        }
      }
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="mt-6">
      {selectedImage && (
        <div className="mb-3 relative inline-block animate-scaleIn">
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="h-20 w-20 object-cover rounded-xl border-2 border-blue-500 shadow-lg" 
          />
          <button 
            onClick={removeImage}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <form 
        onSubmit={onSend}
        onPaste={handlePaste}
        className="relative flex items-end gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-2 shadow-lg focus-within:ring-2 focus-within:ring-blue-500/50 transition-all"
      >
        <div className="flex-1 flex flex-col">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder={apiKey ? "Ask WesAI..." : "Configure API Key to start..."}
            className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 p-3 min-h-[50px] max-h-[200px] resize-none text-sm"
            disabled={!apiKey || isLoading}
          />
        </div>
        
        <div className="flex items-center gap-1 pb-1 pr-1">
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
            disabled={!apiKey || isLoading}
            title="Upload image"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          
          <button
            type="submit"
            disabled={(!input.trim() && !selectedImage) || isLoading || !apiKey}
            className={cn(
              "p-2.5 rounded-xl transition-all shadow-sm",
              (!input.trim() && !selectedImage) || isLoading || !apiKey
                ? "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/20 active:scale-95"
            )}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
      <p className="text-[10px] text-center text-gray-400 mt-3 uppercase tracking-widest font-bold">
      </p>
    </div>
  );
};

export default ChatInput;
