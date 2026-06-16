import { ExternalLink, Mail, Phone } from "lucide-react";
import { buttonVariants, cn } from "./Button";

type LinkButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

type LinkButtonGroupProps = {
  links: LinkButton[];
  className?: string;
  itemClassName?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

function getLinkIcon(href: string, label: string) {
  const value = `${label} ${href}`.toLowerCase();

  if (href.startsWith("mailto:")) return Mail;
  if (href.startsWith("tel:") || value.includes("phone")) return Phone;

  return ExternalLink;
}

export function LinkButtonGroup({
  links,
  className,
  itemClassName,
  variant = "outline",
  size = "md",
}: LinkButtonGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.map((link) => {
        const Icon = getLinkIcon(link.href, link.label);
        const isExternal = link.href.startsWith("http");

        return (
          <a
            className={buttonVariants({
              variant: link.variant ?? variant,
              size,
              className: itemClassName,
            })}
            href={link.href}
            key={`${link.label}-${link.href}`}
            rel={isExternal ? "noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
