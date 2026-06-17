"use client";

import { useState } from "react";
import { Button } from "@/infrastructure/libs";
import type { PersonalProjectItem } from "../../types";
import { PersonalProjectCard } from "./PersonalProjectCard";

type PersonalProjectsGridProps = {
  projects: PersonalProjectItem[];
  showMoreLabel: string;
};

const visibleProjectCount = 5;
const fadedProjectCount = 6;

export function PersonalProjectsGrid({
  projects,
  showMoreLabel,
}: PersonalProjectsGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, fadedProjectCount);

  return (
    <div className="relative">
      <div className="grid gap-5">
        {visibleProjects.map((project, index) => {
          const shouldFadeProject =
            !isExpanded && index === visibleProjectCount;

          if (!shouldFadeProject) {
            return (
              <PersonalProjectCard key={project.title} project={project} />
            );
          }

          return (
            <div className="relative" key={project.title}>
              <PersonalProjectCard project={project} />
              <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_42%,rgba(0,0,0,0.9)_100%)] px-5 pb-10">
                <Button
                  className="pointer-events-auto"
                  onClick={() => setIsExpanded(true)}
                  size="lg"
                  variant="primary"
                >
                  {showMoreLabel}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
