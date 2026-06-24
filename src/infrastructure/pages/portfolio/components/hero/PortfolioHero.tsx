"use client";

import { useReducedMotion } from "framer-motion";
import type { PortfolioContent } from "../../types";
import { HeroGradient } from "./HeroGradient";
import { PortfolioHeroLeft } from "./PortfolioHeroLeft";
import { PortfolioHeroRight } from "./PortfolioHeroRight";

type PortfolioHeroProps = {
  content: PortfolioContent;
};

export function PortfolioHero({ content }: PortfolioHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const profile = content.profile;

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:px-12">
      <HeroGradient />
      <div className="relative z-10 mx-auto grid min-h-[82svh] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <PortfolioHeroLeft
          prefersReducedMotion={prefersReducedMotion}
          profile={profile}
        />
        <PortfolioHeroRight
          content={content}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </section>
  );
}
