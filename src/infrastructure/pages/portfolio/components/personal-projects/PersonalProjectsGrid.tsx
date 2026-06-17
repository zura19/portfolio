"use client";

import Image from "next/image";
import { Badge, LinkButtonGroup, ShinyCard } from "@/infrastructure/libs";
import type { PersonalProjectItem } from "../../types";
import { PersonalProjectPreview } from "./PersonalProjectPreview";

type PersonalProjectsGridProps = {
  projects: PersonalProjectItem[];
};

export function PersonalProjectsGrid({ projects }: PersonalProjectsGridProps) {
  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <ShinyCard
          className="p-0"
          contentClassName="grid md:grid-cols-[0.82fr_1.18fr]"
          key={project.title}
        >
          <div className="relative min-h-56 overflow-hidden rounded-t-lg border-b border-border-100 md:rounded-l-lg md:rounded-tr-none md:border-b-0 md:border-r">
            {project.image ? (
              <Image
                alt={project.imageAlt ?? project.title}
                className="object-cover"
                fill
                src={project.image}
              />
            ) : (
              <PersonalProjectPreview
                title={project.title}
                stack={project.stack}
              />
            )}
          </div>
          <div className="flex flex-col p-6 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-600">
                Personal project
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-muted-700 dark:text-muted-700">
                {project.description}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
              {project.stack.map((item) => (
                <Badge key={item} variant="muted">
                  {item}
                </Badge>
              ))}
            </div>
            <LinkButtonGroup
              className="mt-auto justify-center pt-6 sm:justify-start"
              links={[project.link]}
            />
          </div>
        </ShinyCard>
      ))}
    </div>
  );
}
