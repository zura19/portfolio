import { routing } from "@/i18n/routing";
import type { Locale } from "../types";

export const supportedLocales = routing.locales;

export function isSupportedLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function getLocalePath(locale: Locale, href: string) {
  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  return `/${locale}`;
}
