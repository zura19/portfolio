import { Code2, Sparkles } from "lucide-react";

type PersonalProjectPreviewProps = {
  title: string;
  stack: string[];
};

export function PersonalProjectPreview({
  title,
  stack,
}: PersonalProjectPreviewProps) {
  return (
    <div className="relative flex h-full min-h-56 overflow-hidden rounded-lg border border-border-100 bg-surface-200 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary-200)_42%,transparent),transparent_58%),linear-gradient(45deg,transparent_35%,color-mix(in_srgb,var(--accent-500)_18%,transparent),transparent_78%)]" />
      <div className="relative z-10 flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="grid size-11 place-items-center rounded-full bg-primary-500 text-white">
            <Code2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <Sparkles
            aria-hidden="true"
            className="size-5 text-primary-700 dark:text-primary-600"
            strokeWidth={1.8}
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-foreground">{title}</p>
          <p className="mt-3 text-sm leading-6 text-muted-700 dark:text-muted-700">
            {stack.slice(0, 3).join(" / ")}
          </p>
        </div>
      </div>
    </div>
  );
}
