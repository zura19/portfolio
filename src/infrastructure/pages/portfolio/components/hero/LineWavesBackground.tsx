"use client";

import { motion } from "framer-motion";

type LineWavesBackgroundProps = {
  prefersReducedMotion: boolean | null;
};

const waves = [
  "M-180 160 C80 40 210 310 480 190 S850 20 1120 160 S1420 310 1660 150",
  "M-170 220 C90 90 240 360 500 250 S860 80 1140 230 S1410 390 1660 220",
  "M-190 285 C90 150 260 420 530 320 S890 140 1150 300 S1410 455 1670 292",
  "M-160 350 C110 220 280 500 550 385 S910 210 1175 370 S1430 525 1680 360",
  "M-180 425 C70 300 270 565 535 455 S900 280 1160 440 S1430 600 1670 430",
  "M-150 500 C120 360 310 650 565 520 S930 350 1185 510 S1445 670 1660 505",
];

export function LineWavesBackground({
  prefersReducedMotion,
}: LineWavesBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,color-mix(in_srgb,var(--primary-200)_48%,transparent),transparent_34%),radial-gradient(circle_at_78%_22%,color-mix(in_srgb,var(--accent-500)_16%,transparent),transparent_36%),linear-gradient(180deg,var(--background),color-mix(in_srgb,var(--surface-200)_56%,var(--background)),var(--background))]" />
      <motion.svg
        className="absolute -left-[18%] top-6 h-[82%] w-[136%] opacity-90"
        fill="none"
        initial={false}
        viewBox="0 0 1480 720"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-line-wave" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--primary-100)" stopOpacity="0" />
            <stop offset="28%" stopColor="var(--primary-500)" stopOpacity="0.58" />
            <stop offset="66%" stopColor="var(--accent-500)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--primary-200)" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-line-glow" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.g
          animate={prefersReducedMotion ? undefined : { x: [-18, 18, -18] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        >
          {waves.map((wave, index) => (
            <motion.path
              d={wave}
              filter="url(#hero-line-glow)"
              key={wave}
              stroke="url(#hero-line-wave)"
              strokeLinecap="round"
              strokeWidth={index % 2 === 0 ? 1.35 : 0.9}
              initial={prefersReducedMotion ? false : { pathLength: 0.42 }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { pathLength: [0.48, 1, 0.48], opacity: [0.3, 0.92, 0.3] }
              }
              transition={{
                duration: 8 + index * 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_18%,transparent_82%,var(--background)_100%)]" />
    </div>
  );
}
