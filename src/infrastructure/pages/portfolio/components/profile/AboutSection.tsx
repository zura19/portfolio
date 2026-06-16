import { Badge, LinkButtonGroup } from "@/infrastructure/libs";
import type { PortfolioContent } from "../../types";

type AboutSectionProps = {
  about: PortfolioContent["about"];
  profile: PortfolioContent["profile"];
};

export function AboutSection({ about, profile }: AboutSectionProps) {
  return (
    <div className="grid gap-5">
      <div className="card-gradient rounded-lg border border-border-100 p-6 shadow-sm">
        <div className="grid gap-5 text-base leading-8 text-muted-700 dark:text-muted-700">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {about.principles.map((principle) => (
          <div
            className="card-gradient rounded-lg border border-border-100 p-5"
            key={principle.label}
          >
            <Badge>{principle.value}</Badge>
            <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
              {principle.label}
            </p>
          </div>
        ))}
      </div>
      <LinkButtonGroup links={profile.links} />
    </div>
  );
}
