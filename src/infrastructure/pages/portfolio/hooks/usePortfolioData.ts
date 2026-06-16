"use client";

import { useEffect, useState } from "react";
import type { Locale } from "../types";

let hasShownInitialLoader = false;

export function usePortfolioData(locale: Locale) {
  const [isLoading, setIsLoading] = useState(!hasShownInitialLoader);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    hasShownInitialLoader = true;
    const timeoutId = window.setTimeout(() => setIsLoading(false), 2000);

    return () => window.clearTimeout(timeoutId);
  }, [isLoading]);

  return { isLoading };
}
