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
    <div className="mt-4 mb-6">
      {selectedImage && (
        <div className="mb-3 relative inline-block animate-scaleIn">
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="h-24 w-24 object-cover rounded-2xl border-2 border-wes-border shadow-xl" 
          />
          <button 
            onClick={removeImage}
            className="absolute -top-2 -right-2 p-1.5 bg-wes-main text-wes-text rounded-full shadow-lg border border-wes-border hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <form 
        onSubmit={onSend}
        onPaste={handlePaste}
        className="relative flex items-end gap-2 bg-wes-secondary border border-wes-border rounded-[26px] p-2.5 shadow-md focus-within:ring-1 focus-within:ring-wes-border/50 transition-all"
      >
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-wes-muted hover:text-wes-text hover:bg-wes-main rounded-full transition-colors"
            title="Attach image"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="flex-1 flex flex-col min-h-[44px] justify-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder={apiKey ? "Message WesAI..." : "Enter your API key in settings to start chatting..."}
            className="w-full bg-transparent border-none focus:ring-0 resize-none py-2 text-[15px] md:text-[16px] text-wes-text placeholder:text-wes-muted/60 max-h-48 scrollbar-thin"
            rows={1}
            disabled={isLoading || !apiKey}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !input.trim() || !apiKey}
          className={cn(
            "p-2 rounded-full transition-all flex-shrink-0",
            input.trim() && apiKey && !isLoading
              ? "bg-wes-text text-wes-main shadow-sm hover:opacity-90"
              : "bg-wes-main text-wes-muted/30 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>
      
      <p className="mt-3 text-[11px] text-center text-wes-muted/60 px-4">
      </p>
    </div>
  );
};

export default ChatInput;
