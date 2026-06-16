"use client";

import { useReducedMotion } from "framer-motion";
import type { WorkExperienceItem } from "../../types";
import { WorkExperienceCard } from "./WorkExperienceCard";

type WorkExperienceShowcaseProps = {
  items: WorkExperienceItem[];
};

export function WorkExperienceShowcase({ items }: WorkExperienceShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item, index) => (
        <WorkExperienceCard
          index={index}
          item={item}
          key={item.name}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}
