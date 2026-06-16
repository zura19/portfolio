import type { HTMLAttributes } from "react";
import { cn } from "./Button";

type BadgeVariant = "primary" | "muted" | "outline" | "panel";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeClasses: Record<BadgeVariant, string> = {
  primary:
    "border border-border-100 bg-primary-50 text-primary-700 dark:bg-primary-100 dark:text-primary-700",
  muted: "bg-muted-100 text-muted-700 dark:bg-muted-200 dark:text-muted-700",
  outline: "border border-border-100 text-muted-700 dark:text-muted-700",
  panel: "panel-gradient text-primary-700 dark:text-primary-700",
};

export function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        badgeClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
