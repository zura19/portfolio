import type { CSSProperties } from "react";

export type SectionGradientVariant =
  | "hero"
  | "profile"
  | "skills"
  | "work"
  | "personal"
  | "impact"
  | "contact";

type SectionGradientProps = {
  variant: SectionGradientVariant;
};

type GradientLayer = {
  className: string;
  style: CSSProperties;
};

const wash = "linear-gradient(180deg,var(--background),color-mix(in srgb,var(--surface-200) 58%,var(--background)),var(--background))";
const layer = (className: string, background: string): GradientLayer => ({
  className,
  style: { background },
});

const layersByVariant: Record<SectionGradientVariant, GradientLayer[]> = {
  hero: [
    layer("absolute inset-0 opacity-95", wash),
    layer("absolute -top-28 -left-16 h-96 w-[76%] -skew-y-6 opacity-75 blur-2xl", "linear-gradient(115deg,color-mix(in srgb,var(--primary-100) 84%,transparent),transparent 72%)"),
    layer("absolute right-[-12%] top-20 h-80 w-[58%] rotate-[-8deg] opacity-55 blur-3xl", "conic-gradient(from 220deg,color-mix(in srgb,var(--accent-500) 24%,transparent),transparent 135deg,color-mix(in srgb,var(--primary-300) 20%,transparent))"),
  ],
  profile: [
    layer("absolute inset-0", "linear-gradient(180deg,color-mix(in srgb,var(--surface-100) 90%,var(--primary-50)),var(--background))"),
    layer("absolute left-[-10%] top-10 h-[520px] w-[62%] rotate-6 opacity-55 blur-3xl", "conic-gradient(from 145deg,color-mix(in srgb,var(--primary-200) 42%,transparent),transparent 110deg,color-mix(in srgb,var(--accent-500) 16%,transparent))"),
    layer("absolute bottom-0 right-0 h-36 w-full opacity-70", "linear-gradient(90deg,transparent,color-mix(in srgb,var(--primary-50) 62%,transparent),transparent)"),
  ],
  skills: [
    layer("absolute inset-0", wash),
    layer("absolute inset-x-0 top-0 h-full opacity-55", "repeating-linear-gradient(135deg,color-mix(in srgb,var(--primary-100) 20%,transparent) 0 1px,transparent 1px 20px)"),
    layer("absolute right-[-8%] top-16 h-80 w-[50%] -rotate-6 opacity-45 blur-2xl", "linear-gradient(120deg,color-mix(in srgb,var(--accent-500) 18%,transparent),transparent 76%)"),
  ],
  work: [
    layer("absolute inset-0", "linear-gradient(180deg,var(--background),color-mix(in srgb,var(--surface-200) 78%,var(--background)))"),
    layer("absolute -left-24 top-20 h-80 w-[54%] -skew-y-6 opacity-65 blur-2xl", "linear-gradient(110deg,color-mix(in srgb,var(--primary-100) 76%,transparent),transparent 72%)"),
    layer("absolute -right-24 bottom-12 h-96 w-[62%] skew-y-6 opacity-55 blur-3xl", "linear-gradient(245deg,color-mix(in srgb,var(--accent-500) 16%,transparent),transparent 70%)"),
  ],
  personal: [
    layer("absolute inset-0", "linear-gradient(180deg,color-mix(in srgb,var(--surface-100) 88%,var(--background)),var(--background))"),
    layer("absolute left-[8%] top-14 h-64 w-[42%] rotate-[-10deg] opacity-55 blur-2xl", "linear-gradient(120deg,color-mix(in srgb,var(--accent-500) 18%,transparent),transparent 70%)"),
    layer("absolute bottom-0 right-[6%] h-80 w-[58%] skew-y-3 opacity-65 blur-3xl", "linear-gradient(215deg,color-mix(in srgb,var(--primary-200) 60%,transparent),transparent 76%)"),
  ],
  impact: [
    layer("absolute inset-0", wash),
    layer("absolute inset-0 opacity-50", "repeating-linear-gradient(90deg,color-mix(in srgb,var(--border-100) 52%,transparent) 0 1px,transparent 1px 48px)"),
    layer("absolute right-[-14%] top-6 h-[460px] w-[62%] opacity-45 blur-2xl", "conic-gradient(from 35deg,color-mix(in srgb,var(--accent-500) 22%,transparent),transparent 125deg,color-mix(in srgb,var(--primary-200) 18%,transparent))"),
  ],
  contact: [
    layer("absolute inset-0", "linear-gradient(180deg,var(--background),color-mix(in srgb,var(--surface-200) 84%,var(--background)))"),
    layer("absolute -bottom-28 left-[-8%] h-96 w-[74%] rotate-3 opacity-70 blur-2xl", "linear-gradient(135deg,color-mix(in srgb,var(--primary-200) 62%,transparent),transparent 76%)"),
    layer("absolute right-[-10%] top-12 h-64 w-[48%] -rotate-12 opacity-50 blur-3xl", "linear-gradient(45deg,color-mix(in srgb,var(--accent-500) 20%,transparent),transparent 72%)"),
  ],
};

export function SectionGradient({ variant }: SectionGradientProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {layersByVariant[variant].map((gradientLayer) => (
        <div
          className={gradientLayer.className}
          key={`${variant}-${gradientLayer.className}`}
          style={gradientLayer.style}
        />
      ))}
    </div>
  );
}
