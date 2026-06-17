"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/infrastructure/libs";
import type { PortfolioContent } from "@/infrastructure/pages/portfolio/types";

type ProjectAvailabilityNoticeProps = {
  notice: PortfolioContent["projectNotice"];
};

export function ProjectAvailabilityNotice({
  notice,
}: ProjectAvailabilityNoticeProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          animate={{ opacity: 1, y: 0, scale: 1 }}
          aria-label={notice.title}
          className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-lg border border-primary-300/60 bg-surface-100/90 p-4 text-left shadow-2xl shadow-primary-500/10 backdrop-blur-xl"
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex gap-3 pr-10">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-700 dark:bg-primary-100 dark:text-primary-700">
              <AlertTriangle
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.9}
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {notice.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-700 dark:text-muted-700">
                {notice.message}
              </p>
            </div>
          </div>
          <Button
            aria-label={notice.closeLabel}
            className="absolute right-3 top-3"
            onClick={() => setIsVisible(false)}
            size="icon"
            variant="ghost"
          >
            <X aria-hidden="true" className="size-4" strokeWidth={1.9} />
          </Button>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
