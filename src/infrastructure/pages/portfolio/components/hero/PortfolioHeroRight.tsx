"use client";

import { motion } from "framer-motion";
import type { PortfolioContent } from "../../types";

type PortfolioHeroRightProps = {
  prefersReducedMotion: boolean | null;
  profile: PortfolioContent["profile"];
};

export function PortfolioHeroRight({
  prefersReducedMotion,
  profile,
}: PortfolioHeroRightProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="border-border-100 text-center lg:border-l lg:pl-6 lg:text-left"
    >
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-700 dark:text-muted-700">
            {profile.location}
          </p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {profile.availability}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {profile.metrics.map((metric) => (
            <div
              className="card-gradient rounded-lg border border-border-100 p-5 shadow-sm"
              key={metric.label}
            >
              <p className="text-3xl font-semibold text-primary-700 dark:text-primary-600">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-700 dark:text-muted-700">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
