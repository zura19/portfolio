"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/infrastructure/libs";
import type {
  Locale,
  PortfolioContent,
} from "@/infrastructure/pages/portfolio/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type PortfolioNavProps = {
  content: PortfolioContent;
  locale: Locale;
};

export function PortfolioNav({ content, locale }: PortfolioNavProps) {
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 0 0 rgba(0,0,0,0)", "0 18px 50px rgba(15, 70, 64, 0.14)"],
  );

  return (
    <motion.header
      style={{ boxShadow: shadow }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border-100/80 bg-background/80 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-sm font-semibold text-foreground"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-500 text-sm text-white">
            <Code2 aria-hidden="true" className="size-4" strokeWidth={2} />
          </span>
          <span className="truncate">{content.profile.name}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {content.nav.map((item) => (
            <Link
              className={buttonVariants({ variant: "ghost", size: "md" })}
              href={`/${item.href}`}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher languages={content.languages} locale={locale} />
          <ThemeToggle label={content.theme.toggleLabel} />
        </div>
      </nav>
    </motion.header>
  );
}
