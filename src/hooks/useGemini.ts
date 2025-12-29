import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_MODEL } from '../constants';
import { WES_JOB_AI_SYSTEM_INSTRUCTION } from '../ai-agent';
import toast from 'react-hot-toast';

export interface Message {
  role: 'user' | 'model';
  content: string;
  image?: string; // base64 string
  isError?: boolean;
}

export const useGemini = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(
    localStorage.getItem('GEMINI_API_KEY') || 
    import.meta.env.VITE_GEMINI_API_KEY || 
    ''
  );
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey && !import.meta.env.VITE_GEMINI_API_KEY);
  const MAX_RETRIES = 2;

  const saveApiKey = (newKey: string) => {
    if (newKey.trim()) {
      localStorage.setItem('GEMINI_API_KEY', newKey);
      setApiKey(newKey);
      setShowApiKeyInput(false);
      toast.success('API Key saved successfully!');
      return true;
    } else {
      toast.error('Please enter a valid API Key');
      return false;
    }
  };

  const clearChat = () => {
    setMessages([]);
    toast.success('Chat cleared');
  };

  const sendMessage = async (input: string, image: string | null = null, isRetry = false) => {
    if ((!input.trim() && !image && !isRetry) || isLoading || !apiKey) return;

    let currentInput = input;
    let currentImage = image;

    if (!isRetry) {
      const userMessage: Message = { 
        role: 'user', 
        content: input,
        image: image || undefined 
      };
      setMessages(prev => [...prev, userMessage]);
    } else {
      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
      if (lastUserMessage) {
        currentInput = lastUserMessage.content;
        currentImage = lastUserMessage.image || null;
      }
      // Remove the previous error message if retrying
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages.length > 0 && newMessages[newMessages.length - 1].isError) {
          newMessages.pop();
        }
        return newMessages;
      });
    }

    setIsLoading(true);
    
    const attemptCall = async (retryAttempt = 0): Promise<string> => {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ 
          model: GEMINI_MODEL, 
          systemInstruction: WES_JOB_AI_SYSTEM_INSTRUCTION,
          tools: [
            {
              // @ts-ignore
              googleSearch: {},
            },
          ],
        });

        // Prepare history for chat
        const history = messages
          .filter(m => !m.isError)
          .map(m => ({
            role: m.role,
            parts: [{ text: m.content }],
          }));

        if (currentImage) {
          const base64Data = currentImage.split(',')[1];
          const mimeType = currentImage.split(';')[0].split(':')[1] || 'image/jpeg';
          
          // For multimodal, we can still use startChat if we send the image as a part
          const chat = model.startChat({ history });
          const result = await chat.sendMessage([
            { text: currentInput },
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType
              }
            }
          ]);
          const response = await result.response;
          return response.text();
        } else {
          const chat = model.startChat({ history });
          const result = await chat.sendMessage(currentInput);
          const response = await result.response;
          return response.text();
        }
      } catch (error: any) {
        if (retryAttempt < MAX_RETRIES && !error.message?.includes('401') && !error.message?.includes('API_KEY_INVALID')) {
          const delay = Math.pow(2, retryAttempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return attemptCall(retryAttempt + 1);
        }
        throw error;
      }
    };

    try {
      const text = await attemptCall();
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error: any) {
      console.error('Error calling Gemini:', error);
      let errorMessage = 'Something went wrong. Please check your API key.';
      
      if (error.message?.includes('401') || error.message?.includes('API_KEY_INVALID')) {
        errorMessage = 'Invalid API Key. Please update it in settings.';
        setShowApiKeyInput(true);
      } else if (error.message?.includes('429')) {
        errorMessage = 'Rate limit exceeded. Please wait a moment.';
      } else if (error.message?.includes('404')) {
        errorMessage = 'Model not found or API version mismatch.';
      } else if (error.message?.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }

      toast.error(errorMessage);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: errorMessage,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    apiKey,
    setApiKey,
    showApiKeyInput,
    setShowApiKeyInput,
    saveApiKey,
    clearChat,
    sendMessage
  };
};
