"use client";

import type { CSSProperties, HTMLAttributes, MouseEvent } from "react";
import { cn } from "./Button";

type ShinyCardProps = HTMLAttributes<HTMLDivElement> & {
  contentClassName?: string;
  glowSize?: number;
};

type ShinyCardStyle = CSSProperties & {
  "--shine-x": string;
  "--shine-y": string;
  "--shine-size": string;
};

export function ShinyCard({
  children,
  className,
  contentClassName,
  glowSize = 520,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: ShinyCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--shine-x", `${x}px`);
    event.currentTarget.style.setProperty("--shine-y", `${y}px`);
    onMouseMove?.(event);
  }

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    onMouseLeave?.(event);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border-100 bg-surface-100/78 p-5 shadow-sm",
        "before:pointer-events-none before:absolute before:inset-px before:rounded-[inherit] before:bg-[radial-gradient(var(--shine-size)_circle_at_var(--shine-x)_var(--shine-y),color-mix(in_srgb,var(--primary-300)_28%,transparent),transparent_42%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface-100)_86%,var(--primary-100)),transparent_54%)]",
        className,
      )}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={
        {
          "--shine-x": "50%",
          "--shine-y": "50%",
          "--shine-size": `${glowSize}px`,
          ...style,
        } as ShinyCardStyle
      }
      {...props}
    >
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}
