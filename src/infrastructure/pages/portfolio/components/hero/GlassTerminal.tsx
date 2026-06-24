"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Badge } from "@/infrastructure/libs";
import type { PortfolioContent } from "../../types";

type GlassTerminalProps = {
  content: PortfolioContent;
  prefersReducedMotion: boolean | null;
};

export function GlassTerminal({
  content,
  prefersReducedMotion,
}: GlassTerminalProps) {
  const profile = content.profile;
  const skills = content.skills.flatMap((group) => group.items).slice(0, 8);

  return (
    <motion.div
      animate={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: [0, 2.5, -1.5, 0],
              rotateY: [0, -3, 2, 0],
              y: [0, -10, 4, 0],
            }
      }
      className="overflow-hidden rounded-2xl border border-border-100/80 bg-surface-100/72 shadow-2xl shadow-primary-900/10 backdrop-blur-2xl dark:bg-surface-100/66"
      style={{
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: 9,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <div className="flex items-center justify-between border-b border-border-100/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-700">
          <Terminal aria-hidden="true" className="size-4" strokeWidth={1.8} />
          portfolio.tsx
        </div>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <div className="rounded-xl border border-border-100 bg-background/70 p-4 font-mono text-sm leading-7">
          <p>
            <span className="text-primary-700 dark:text-primary-600">
              const
            </span>{" "}
            developer = {"{"}
          </p>
          <p className="pl-4 text-muted-700">name: "{profile.name}",</p>
          <p className="pl-4 text-muted-700">role: "{profile.role}",</p>
          <p className="pl-4 text-muted-700">location: "{profile.location}",</p>
          <p>{"}"}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary-700 dark:text-primary-600">
            Current focus
          </p>
          <p className="mt-2 text-xl font-semibold leading-8 text-foreground">
            {profile.availability}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {profile.metrics.map((metric) => (
            <div
              className="rounded-xl border border-border-100 bg-background/62 p-4"
              key={metric.value}
            >
              <p className="text-lg font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-700">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
