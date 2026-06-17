"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import type { PortfolioContent } from "../../types";

type RotatingRoleTextProps = {
  prefersReducedMotion: boolean | null;
  profile: PortfolioContent["profile"];
};

const roleTransition: Transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};
const characterVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, filter: "blur(6px)" },
};

export function RotatingRoleText({
  prefersReducedMotion,
  profile,
}: RotatingRoleTextProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const role = profile.roleRotator;
  const activeWord = role.words[activeIndex] ?? role.words[0];

  useEffect(() => {
    if (prefersReducedMotion || role.words.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % role.words.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, role.words.length]);

  return (
    <p
      aria-label={profile.role}
      className="mt-4 flex justify-center text-lg sm:text-2xl font-medium text-muted-700 dark:text-muted-700 lg:justify-start"
    >
      <motion.span
        className="inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start"
        layout
        transition={{ layout: roleTransition }}
      >
        <motion.span layout>{role.prefix}</motion.span>
        <motion.span
          className="relative inline-flex overflow-hidden rounded-full border border-primary-300/70 bg-primary-50 px-4 py-1 text-primary-700 shadow-sm shadow-primary-500/10 dark:bg-primary-100 dark:text-primary-700"
          layout
          transition={{ layout: roleTransition }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              animate="visible"
              className="inline-flex whitespace-nowrap"
              exit="exit"
              initial={prefersReducedMotion ? false : "hidden"}
              key={activeWord}
              layout
              transition={{
                staggerChildren: prefersReducedMotion ? 0 : 0.045,
                staggerDirection: 1,
              }}
            >
              {activeWord.split("").map((character, index) => (
                <motion.span
                  className="inline-block"
                  key={`${activeWord}-${character}-${index}`}
                  transition={roleTransition}
                  variants={characterVariants}
                >
                  {character}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        <motion.span layout>{role.suffix}</motion.span>
      </motion.span>
    </p>
  );
}
