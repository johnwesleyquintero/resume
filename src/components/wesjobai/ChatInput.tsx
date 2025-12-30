import React, { useRef } from 'react'
import { Send, ImageIcon, X, Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'
import toast from 'react-hot-toast'

interface ChatInputProps {
  input: string
  setInput: (input: string) => void
  selectedImage: string | null
  setSelectedImage: (image: string | null) => void
  isLoading: boolean
  onSend: (e?: React.FormEvent) => void
  apiKey: string
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  selectedImage,
  setSelectedImage,
  isLoading,
  onSend,
  apiKey,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file.')
      return
    }
    if (file.size > 4 * 1024 * 1024) {
      toast.error('Image too large. Max 4MB allowed.')
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setSelectedImage(reader.result as string)
      toast.success('Image attached!')
    }
    reader.readAsDataURL(file)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile()
          if (file) {
            processFile(file)
          }
        }
      }
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="mb-6 mt-4">
      {selectedImage && (
        <div className="relative mb-3 inline-block animate-scaleIn">
          <img
            src={selectedImage}
            alt="Preview"
            className="h-24 w-24 rounded-2xl border-2 border-wes-border object-cover shadow-xl"
          />
          <button
            onClick={removeImage}
            className="absolute -right-2 -top-2 rounded-full border border-wes-border bg-wes-main p-1.5 text-wes-text shadow-lg transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <form
        onSubmit={onSend}
        onPaste={handlePaste}
        className="focus-within:ring-wes-border/50 relative flex items-end gap-2 rounded-[26px] border border-wes-border bg-wes-secondary p-2.5 shadow-md transition-all focus-within:ring-1"
      >
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full p-2 text-wes-muted transition-colors hover:bg-wes-main hover:text-wes-text"
            title="Attach image"
          >
            <ImageIcon className="h-5 w-5" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="flex min-h-[44px] flex-1 flex-col justify-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSend()
              }
            }}
            placeholder={
              apiKey ? 'Message WesAI...' : 'Enter your API key in settings to start chatting...'
            }
            className="placeholder:text-wes-muted/60 scrollbar-thin max-h-48 w-full resize-none border-none bg-transparent py-2 text-[15px] text-wes-text focus:ring-0 md:text-[16px]"
            rows={1}
            disabled={isLoading || !apiKey}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !input.trim() || !apiKey}
          className={cn(
            'flex-shrink-0 rounded-full p-2 transition-all',
            input.trim() && apiKey && !isLoading
              ? 'bg-wes-text text-wes-main shadow-sm hover:opacity-90'
              : 'text-wes-muted/30 cursor-not-allowed bg-wes-main',
          )}
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        </button>
      </form>

      <p className="text-wes-muted/60 mt-3 px-4 text-center text-[11px]"></p>
    </div>
  )
}

export default ChatInput
