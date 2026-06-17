"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge, LinkButtonGroup, ShinyCard } from "@/infrastructure/libs";
import type { WorkExperienceItem } from "../../types";

type WorkExperienceCardProps = {
  index: number;
  item: WorkExperienceItem;
  prefersReducedMotion: boolean | null;
};

export function WorkExperienceCard({
  index,
  item,
  prefersReducedMotion,
}: WorkExperienceCardProps) {
  return (
    <motion.article
      className="h-full"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <ShinyCard className="h-full p-0" contentClassName="flex h-full flex-col">
        <div className="relative aspect-video border-b border-border-100 bg-surface-200">
          <Image alt={item.imageAlt} className="object-cover" fill src={item.image} />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_42%,color-mix(in_srgb,var(--primary-500)_24%,transparent)),linear-gradient(180deg,transparent_58%,color-mix(in_srgb,var(--background)_46%,transparent))]" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold text-primary-700 dark:text-primary-600">
                {item.type}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                {item.name}
              </h3>
            </div>
            <Badge className="shrink-0" variant="primary">
              {item.period}
            </Badge>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
            {item.stack.map((stackItem) => (
              <Badge key={stackItem} variant="muted">
                {stackItem}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-center text-base leading-8 text-muted-700 dark:text-muted-700 sm:text-left">
            {item.summary}
          </p>
          <ul className="mt-5 grid gap-3">
            {item.bullets.map((bullet) => (
              <li
                className="border-l-2 border-primary-300 pl-4 text-sm leading-7 text-muted-700 dark:text-muted-700"
                key={bullet}
              >
                {bullet}
              </li>
            ))}
          </ul>
          <LinkButtonGroup
            className="mt-auto justify-center pt-5 sm:justify-start"
            links={item.links}
          />
        </div>
      </ShinyCard>
    </motion.article>
  );
}
