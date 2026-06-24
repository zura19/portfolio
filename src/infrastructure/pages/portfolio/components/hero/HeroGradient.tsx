import { LineWaves } from "@/infrastructure/libs/react-bits";

export function HeroGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,color-mix(in_srgb,var(--surface-200)_56%,var(--background))_56%,var(--background)_100%)]" />
      <div className="absolute inset-0 opacity-80 mix-blend-multiply dark:mix-blend-screen">
        <LineWaves
          brightness={0.26}
          color1="#2dd4b3"
          color2="#6366f1"
          color3="#99f6df"
          edgeFadeWidth={0.15}
          innerLineCount={34}
          mouseInfluence={0.8}
          outerLineCount={42}
          speed={0.22}
          warpIntensity={0.72}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(0deg,var(--background)_0%,transparent_74%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,var(--background)_0%,transparent_100%)]" />
    </div>
  );
}
