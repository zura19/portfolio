"use client";

import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { SectionGradient } from "@/infrastructure/pages/portfolio/components/shared/SectionGradient";

type InitialLoaderProps = {
  name: string;
  label: string;
};

export function InitialLoader({ name, label }: InitialLoaderProps) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 text-center text-foreground">
      <SectionGradient variant="impact" />
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid size-16 place-items-center rounded-full border border-border-100 bg-surface-100/80 shadow-xl backdrop-blur">
          <LoaderCircle
            aria-hidden="true"
            className="size-7 animate-spin text-primary-700 dark:text-primary-600"
            strokeWidth={1.8}
          />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary-700 dark:text-primary-600">
          {label}
        </p>
        <h1 className="text-gradient mt-4 text-4xl sm:text-7xl font-extrabold leading-tight">
          {name}
        </h1>
        <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-muted-100 dark:bg-muted-200">
          <motion.div
            className="h-full rounded-full bg-primary-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
