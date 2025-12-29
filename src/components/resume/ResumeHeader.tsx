import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, BookOpen, Printer, MapPin, Bot, Check, Copy } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { cn } from '../../utils/cn';

export const ResumeHeader = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(RESUME_DATA.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <header className="relative mb-10 -mx-4 sm:-mx-6 md:-mx-8 -mt-6 md:-mt-12 px-4 sm:px-6 md:px-8 py-8 md:py-16 bg-gradient-to-br from-blue-700 to-purple-700 sm:rounded-b-xl shadow-lg overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22rgb(255%20255%20255%20/%200.05)%22%3E%3Cpath%20d%3D%22M0%20.5H31.5V32%22%2F%3E%3C%2Fsvg%3E')] opacity-50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl animate-gradient bg-[length:200%_200%]"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
        <div className="relative w-28 sm:w-32 md:w-36 flex-shrink-0 group">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src={RESUME_DATA.avatarUrl} 
            alt={RESUME_DATA.name} 
            className="relative z-10 h-full w-full object-cover rounded-full border-4 border-white/50 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
            loading="lazy" 
          />
          <Link 
            to="/careerai" 
            className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 z-20 bg-white dark:bg-gray-800 p-2 md:p-2.5 rounded-full shadow-xl border border-blue-100 dark:border-blue-900 hover:scale-110 hover:rotate-12 transition-all group no-print"
            title="Talk to Career AI"
          >
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-purple-600" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </Link>
        </div>

        <div className="flex-1 text-center md:text-left space-y-4 w-full">
          <div className="animate-fadeIn [animation-delay:200ms] space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md tracking-tight">{RESUME_DATA.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 font-medium drop-shadow">{RESUME_DATA.title}</p>
            
            <div className="flex justify-center md:justify-start pt-2">
              <Link 
                to="/careerai"
                className="flex items-center gap-2 hover:text-white transition-all group relative bg-white/10 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/20 no-print text-sm sm:text-base"
                title="Talk to my AI Career Agent"
              >
                <Bot className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium text-white/90 group-hover:text-white">Talk to AI Assistant</span>
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-white/90 animate-fadeIn [animation-delay:400ms]">
            <button 
              onClick={handleCopyEmail}
              className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-all group relative bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none"
              title="Click to copy email"
            >
              <div className="relative shrink-0">
                {emailCopied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                )}
              </div>
              <span className={cn("truncate", emailCopied && "text-green-400 font-bold transition-all")}>
                {emailCopied ? "Email Copied!" : RESUME_DATA.email}
              </span>
              {!emailCopied && <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 shrink-0" />}
            </button>
            <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
              <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a href={RESUME_DATA.links.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
              <Globe className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
              <span>Portfolio</span>
            </a>
            <a href={RESUME_DATA.links.blog} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
              <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
              <span className="truncate">Blog & Playbooks</span>
            </a>
            <button 
              onClick={() => window.print()}
              className="no-print flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group cursor-pointer bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none" 
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0" />
              <span>Print Resume</span>
            </button>
            <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 md:bg-transparent p-2.5 md:p-0 rounded-xl md:rounded-none">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{RESUME_DATA.location}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
