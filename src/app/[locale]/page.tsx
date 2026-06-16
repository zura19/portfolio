import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  getPortfolioContent,
  PortfolioPage,
} from "@/infrastructure/pages/portfolio";
import type { Locale, PortfolioContent } from "@/infrastructure/pages/portfolio";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Portfolio.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await getMessages()) as { Portfolio: PortfolioContent };

  return (
    <PortfolioPage
      content={getPortfolioContent(messages)}
      locale={locale as Locale}
    />
  );
}
