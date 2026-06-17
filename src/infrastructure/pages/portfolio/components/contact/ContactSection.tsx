import { LinkButtonGroup, ShinyCard } from "@/infrastructure/libs";
import type { PortfolioContent } from "../../types";

type ContactSectionProps = {
  contact: PortfolioContent["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  const featuredLinks = [
    { label: contact.emailLabel, href: contact.links[0]?.href ?? "#" },
    {
      label: contact.scheduleLabel,
      href: contact.links[1]?.href ?? "#",
      variant: "ghost" as const,
    },
  ];

  return (
    <ShinyCard className="p-8 text-center sm:text-left" glowSize={720}>
      <h3 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:mx-0">
        {contact.title}
      </h3>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-700 dark:text-muted-700 sm:mx-0">
        {contact.summary}
      </p>
      <LinkButtonGroup
        className="mt-8 justify-center sm:justify-start"
        links={featuredLinks}
        size="lg"
        variant="primary"
      />
      <LinkButtonGroup
        className="mt-8 justify-center sm:justify-start"
        links={contact.links}
        variant="ghost"
      />
    </ShinyCard>
  );
}
