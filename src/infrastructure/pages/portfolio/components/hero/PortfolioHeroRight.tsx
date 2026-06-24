"use client";

import { motion } from "framer-motion";
import type { PortfolioContent } from "../../types";
import { GlassTerminal } from "./GlassTerminal";

type PortfolioHeroRightProps = {
  content: PortfolioContent;
  prefersReducedMotion: boolean | null;
};

export function PortfolioHeroRight({
  content,
  prefersReducedMotion,
}: PortfolioHeroRightProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-primary-200/25 blur-3xl dark:bg-primary-500/10" />
      <div className="relative">
        <GlassTerminal
          content={content}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </motion.div>
  );
}
