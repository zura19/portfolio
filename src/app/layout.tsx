import type { Metadata } from "next";
import { Geist_Mono, Outfit, Inter } from "next/font/google";
import { cn } from "@/infrastructure/libs";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise Portfolio",
  description: "A multilingual enterprise portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", outfit.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
