export function HeroGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,color-mix(in_srgb,var(--surface-200)_56%,var(--background))_56%,var(--background)_100%)]" />
      <div className="absolute bottom-[-62%] left-1/2 h-[150%] w-[165%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--primary-200)_78%,transparent)_0%,color-mix(in_srgb,var(--primary-300)_34%,transparent)_34%,color-mix(in_srgb,var(--accent-500)_16%,transparent)_54%,transparent_74%)] blur-2xl" />
      <div className="absolute bottom-[-42%] left-1/2 h-[106%] w-[118%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--primary-100)_86%,transparent)_0%,color-mix(in_srgb,var(--primary-500)_22%,transparent)_44%,transparent_72%)] blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(0deg,var(--background)_0%,transparent_74%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,var(--background)_0%,transparent_100%)]" />
    </div>
  );
}
