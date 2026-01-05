import { cn } from '../utils/cn'
import { DownloadHub } from '../components/DownloadHub'
import { ResumeHeader } from '../components/resume/ResumeHeader'
import { ProfessionalSummary } from '../components/resume/ProfessionalSummary'
import { OperatingPrinciples } from '../components/resume/OperatingPrinciples'
import { ExperienceSection } from '../components/resume/ExperienceSection'
import { UniqueEdge } from '../components/resume/UniqueEdge'
import { SkillsSection } from '../components/resume/SkillsSection'
import { AmazonToolsSection } from '../components/resume/AmazonToolsSection'
import { CredentialsSection } from '../components/resume/CredentialsSection'
import { DailyRhythm } from '../components/resume/DailyRhythm'
import { ResumeFooter } from '../components/resume/ResumeFooter'

const Resume = () => {
  return (
    <main
      className={cn(
        'relative mx-auto max-w-4xl space-y-12 px-4 py-6 pb-12 sm:px-6 md:px-8 md:py-12',
      )}
    >
      <DownloadHub />
      <ResumeHeader />
      <ProfessionalSummary />
      <OperatingPrinciples />
      <ExperienceSection />
      <UniqueEdge />
      <SkillsSection />
      <AmazonToolsSection />
      <CredentialsSection />
      <DailyRhythm />
      <ResumeFooter />
    </main>
  )
}

export default Resume
