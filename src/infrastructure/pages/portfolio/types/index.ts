import type { Locale } from "@/i18n/routing";

export type { Locale };

export type NavigationItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type WorkExperienceItem = {
  name: string;
  type: string;
  period: string;
  summary: string;
  impact: string;
  bullets: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  links: LinkItem[];
};

export type PersonalProjectItem = {
  title: string;
  description: string;
  stack: string[];
  image?: string | null;
  imageAlt?: string;
  link: LinkItem;
};

export type CaseStudyItem = {
  title: string;
  summary: string;
  metrics: Metric[];
};

type SectionKey =
  | "about"
  | "skills"
  | "workExperience"
  | "personalProjects"
  | "caseStudies"
  | "contact";

export type PortfolioContent = {
  meta: { title: string; description: string };
  nav: NavigationItem[];
  languages: { locale: Locale; label: string; shortLabel: string }[];
  theme: { toggleLabel: string };
  loader: { label: string };
  profile: {
    eyebrow: string;
    name: string;
    role: string;
    roleRotator: {
      prefix: string;
      words: string[];
      suffix: string;
    };
    location: string;
    availability: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: Metric[];
    links: LinkItem[];
  };
  sections: Record<SectionKey, { eyebrow: string; title: string; intro: string }>;
  about: { paragraphs: string[]; principles: Metric[] };
  skills: SkillGroup[];
  workExperience: WorkExperienceItem[];
  personalProjects: PersonalProjectItem[];
  caseStudies: CaseStudyItem[];
  contact: {
    title: string;
    summary: string;
    emailLabel: string;
    scheduleLabel: string;
    links: LinkItem[];
  };
};
