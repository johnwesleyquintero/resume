import { cn } from '../utils/cn';
import { DownloadHub } from '../components/DownloadHub';
import { ResumeHeader } from '../components/resume/ResumeHeader';
import { ProfessionalSummary } from '../components/resume/ProfessionalSummary';
import { OperatingPrinciples } from '../components/resume/OperatingPrinciples';
import { ExperienceSection } from '../components/resume/ExperienceSection';
import { UniqueEdge } from '../components/resume/UniqueEdge';
import { SkillsSection } from '../components/resume/SkillsSection';
import { CredentialsSection } from '../components/resume/CredentialsSection';
import { DailyRhythm } from '../components/resume/DailyRhythm';
import { ResumeFooter } from '../components/resume/ResumeFooter';

const Resume = () => {
  return (
    <main className={cn("max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12 space-y-12 pb-12 relative")}>
      <DownloadHub />
      <ResumeHeader />
      <ProfessionalSummary />
      <OperatingPrinciples />
      <ExperienceSection />
      <UniqueEdge />
      <SkillsSection />
      <CredentialsSection />
      <DailyRhythm />
      <ResumeFooter />
    </main>
  );
};

export default Resume;
