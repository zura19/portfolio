"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/infrastructure/libs";
import type { PortfolioContent } from "../../types";

type PortfolioHeroLeftProps = {
  prefersReducedMotion: boolean | null;
  profile: PortfolioContent["profile"];
};

export function PortfolioHeroLeft({
  prefersReducedMotion,
  profile,
}: PortfolioHeroLeftProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center lg:text-left"
    >
      <p className="text-sm font-semibold text-primary-700 dark:text-primary-600">
        {profile.eyebrow}
      </p>
      <h1 className="text-gradient mt-6 max-w-4xl text-5xl font-semibold leading-tight">
        {profile.name}
      </h1>
      <p className="mt-4 text-2xl font-medium text-muted-700 dark:text-muted-700">
        {profile.role}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-9 text-muted-700 dark:text-muted-700">
        {profile.summary}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
        <Link
          href="/#work-experience"
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          {profile.primaryCta}
        </Link>
        <Link
          href="/#contact"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          {profile.secondaryCta}
        </Link>
      </div>
    </motion.div>
  );
}
