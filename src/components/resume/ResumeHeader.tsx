import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Linkedin,
  Globe,
  BookOpen,
  Printer,
  MapPin,
  Check,
  Copy,
  Briefcase,
} from 'lucide-react'
import { WesAILogo } from '../WesAILogo'
import { RESUME_DATA } from '../../data/resumeData'
import { cn } from '../../utils/cn'

export const ResumeHeader = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(RESUME_DATA.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <header className="relative -mx-4 -mt-6 mb-10 animate-fadeIn overflow-hidden bg-gradient-to-br from-blue-700 to-purple-700 px-4 py-8 shadow-lg sm:-mx-6 sm:rounded-b-xl sm:px-6 md:-mx-8 md:-mt-12 md:px-8 md:py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22rgb(255%20255%20255%20/%200.05)%22%3E%3Cpath%20d%3D%22M0%20.5H31.5V32%22%2F%3E%3C%2Fsvg%3E')] opacity-50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]"></div>
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-600/30 to-blue-600/30 bg-[length:200%_200%] blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
        <div className="group relative w-28 flex-shrink-0 sm:w-32 md:w-36">
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"></div>
          <img
            src={RESUME_DATA.avatarUrl}
            alt={RESUME_DATA.name}
            className="relative z-10 h-full w-full rounded-full border-4 border-white/50 object-cover shadow-2xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110"
            loading="lazy"
          />
          <Link
            to="/wesai"
            className="no-print group absolute -bottom-1 -right-1 z-20 rounded-full border border-blue-100 bg-white p-2 shadow-xl transition-all hover:rotate-12 hover:scale-110 dark:border-blue-900 dark:bg-gray-800 md:-bottom-2 md:-right-2 md:p-2.5"
            title="Talk to WesAI"
          >
            <WesAILogo
              variant="icon"
              width={24}
              height={24}
              className="transition-transform group-hover:scale-110"
            />
            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500"></span>
            </span>
          </Link>
        </div>

        <div className="w-full flex-1 space-y-4 text-center md:text-left">
          <div className="animate-fadeIn space-y-2 [animation-delay:200ms]">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
              {RESUME_DATA.name}
            </h1>
            <p className="text-base font-medium text-blue-200 drop-shadow sm:text-lg md:text-xl">
              {RESUME_DATA.title}
            </p>
          </div>

          <div className="grid animate-fadeIn grid-cols-1 gap-3 text-sm text-white/90 [animation-delay:400ms] sm:grid-cols-2 lg:grid-cols-3">
            <button
              onClick={handleCopyEmail}
              className="group relative flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-all hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
              title="Click to copy email"
            >
              <div className="relative shrink-0">
                {emailCopied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                )}
              </div>
              <span
                className={cn('truncate', emailCopied && 'font-bold text-green-400 transition-all')}
              >
                {emailCopied ? 'Email Copied!' : RESUME_DATA.email}
              </span>
              {!emailCopied && (
                <Copy className="ml-1 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </button>
            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-colors hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
            >
              <Linkedin className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            {RESUME_DATA.links.onlinejobs && (
              <a
                href={RESUME_DATA.links.onlinejobs}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-colors hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
              >
                <Briefcase className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                <span>OnlineJobs.ph</span>
              </a>
            )}
            <a
              href={RESUME_DATA.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-colors hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
            >
              <Globe className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
              <span>Portfolio</span>
            </a>
            <a
              href={RESUME_DATA.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-colors hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
            >
              <BookOpen className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
              <span className="truncate">Blog & Playbooks</span>
            </a>
            <button
              onClick={() => window.print()}
              className="no-print group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 transition-colors hover:text-white md:justify-start md:rounded-none md:bg-transparent md:p-0"
              aria-label="Print resume"
            >
              <Printer className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
              <span>Print Resume</span>
            </button>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 p-2.5 md:justify-start md:rounded-none md:bg-transparent md:p-0">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{RESUME_DATA.location}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
