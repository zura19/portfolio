"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants, cn } from "@/infrastructure/libs";
import type {
  Locale,
  PortfolioContent,
} from "@/infrastructure/pages/portfolio/types";

type LanguageSwitcherProps = {
  languages: PortfolioContent["languages"];
  locale: Locale;
};

export function LanguageSwitcher({ languages, locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center rounded-full border border-border-100 bg-surface-100 p-1 shadow-sm dark:bg-surface-200">
      {languages.map((language) => {
        const isActive = language.locale === locale;

        return (
          <Link
            aria-label={language.label}
            className={cn(
              buttonVariants({
                variant: isActive ? "primary" : "ghost",
                size: "sm",
              }),
              "min-w-9 px-3",
            )}
            href={pathname || "/"}
            key={language.locale}
            locale={language.locale}
          >
            {language.shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
