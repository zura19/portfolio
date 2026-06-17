"use client";

import { motion } from "framer-motion";
import { InitialLoader } from "@/infrastructure/layouts/portfolio-loader/InitialLoader";
import { PortfolioNav } from "@/infrastructure/layouts/portfolio-navigation/PortfolioNav";
import { ProjectAvailabilityNotice } from "@/infrastructure/layouts/portfolio-warning/ProjectAvailabilityNotice";
import { ContactSection } from "./components/contact/ContactSection";
import { PortfolioHero } from "./components/hero/PortfolioHero";
import { CaseStudyCard } from "./components/impact/CaseStudyCard";
import { PersonalProjectsGrid } from "./components/personal-projects/PersonalProjectsGrid";
import { AboutSection } from "./components/profile/AboutSection";
import { SectionShell } from "./components/shared/SectionShell";
import { SkillsGrid } from "./components/technical-skills/SkillsGrid";
import { WorkExperienceShowcase } from "./components/work-experience/WorkExperienceShowcase";
import { usePortfolioData } from "./hooks/usePortfolioData";
import type { Locale, PortfolioContent } from "./types";

type PortfolioPageProps = {
  content: PortfolioContent;
  locale: Locale;
};

export function PortfolioPage({ content, locale }: PortfolioPageProps) {
  const { isLoading } = usePortfolioData(locale);

  if (isLoading) {
    return (
      <InitialLoader label={content.loader.label} name={content.profile.name} />
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <PortfolioNav content={content} locale={locale} />
      <ProjectAvailabilityNotice notice={content.projectNotice} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <PortfolioHero content={content} />
        <SectionShell
          id="about"
          section={content.sections.about}
          index="01"
          variant="profile"
        >
          <AboutSection about={content.about} profile={content.profile} />
        </SectionShell>

        <SectionShell
          id="skills"
          section={content.sections.skills}
          index="02"
          variant="skills"
        >
          <SkillsGrid groups={content.skills} />
        </SectionShell>

        <SectionShell
          id="work-experience"
          section={content.sections.workExperience}
          index="03"
          variant="work"
        >
          <WorkExperienceShowcase items={content.workExperience} />
        </SectionShell>

        <SectionShell
          id="personal-projects"
          section={content.sections.personalProjects}
          index="04"
          variant="personal"
        >
          <PersonalProjectsGrid projects={content.personalProjects} />
        </SectionShell>

        <SectionShell
          id="case-studies"
          section={content.sections.caseStudies}
          index="05"
          variant="impact"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {content.caseStudies.map((caseStudy) => (
              <CaseStudyCard caseStudy={caseStudy} key={caseStudy.title} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          section={content.sections.contact}
          index="06"
          variant="contact"
        >
          <ContactSection contact={content.contact} />
        </SectionShell>
      </motion.main>
    </div>
  );
}
