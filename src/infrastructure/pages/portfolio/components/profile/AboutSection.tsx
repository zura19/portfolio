import { Badge, LinkButtonGroup, ShinyCard } from "@/infrastructure/libs";
import type { PortfolioContent } from "../../types";

type AboutSectionProps = {
  about: PortfolioContent["about"];
  profile: PortfolioContent["profile"];
};

export function AboutSection({ about, profile }: AboutSectionProps) {
  return (
    <div className="grid gap-5">
      <ShinyCard className="p-6">
        <div className="grid gap-5 text-base leading-8 text-muted-700 dark:text-muted-700">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ShinyCard>
      <div className="grid gap-4 sm:grid-cols-3">
        {about.principles.map((principle) => (
          <ShinyCard className="p-5" key={principle.label}>
            <Badge>{principle.value}</Badge>
            <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
              {principle.label}
            </p>
          </ShinyCard>
        ))}
      </div>
      <LinkButtonGroup links={profile.links} />
    </div>
  );
}
