import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";
import type { PortfolioContent } from "../../types";
import { MotionReveal } from "./MotionReveal";
import { SectionGradient, type SectionGradientVariant } from "./SectionGradient";

type SectionShellProps = {
  id: string;
  index: string;
  section: PortfolioContent["sections"]["about"];
  variant: SectionGradientVariant;
  children: ReactNode;
};

export function SectionShell({
  id,
  index,
  section,
  variant,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <SectionGradient variant={variant} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionReveal className="mx-auto max-w-4xl text-center sm:text-left lg:mx-0">
          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-primary-700 dark:text-primary-600 sm:justify-start">
            <BadgeCheck aria-hidden="true" className="size-4" strokeWidth={1.8} />
            <span className="font-mono text-muted-700 dark:text-muted-300">
              {index}
            </span>
            <span>{section.eyebrow}</span>
          </div>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-foreground">
            {section.title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-muted-700 dark:text-muted-700 sm:mx-0">
            {section.intro}
          </p>
        </MotionReveal>
        <MotionReveal className="mt-10" delay={0.08}>
          {children}
        </MotionReveal>
      </div>
    </section>
  );
}
