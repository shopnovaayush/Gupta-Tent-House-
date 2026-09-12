/**
 * GUPTA TENT HOUSE — SectionHeading UI Component
 * Reusable centered section title + subtitle block.
 * SESSION 01 — Project Foundation
 */

import { cn } from "@/utils/cn";
import { Badge } from "./Badge";
import type { BadgeVariant } from "@/types";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: BadgeVariant;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "brand",
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3 mb-12", alignClass, className)}>
      {eyebrow && (
        <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative ornament line */}
      <div className="flex items-center gap-2 mt-1">
        <div className="h-0.5 w-8 bg-gold-300 rounded-full" />
        <div className="h-1.5 w-1.5 bg-gold-500 rounded-full" />
        <div className="h-0.5 w-16 bg-maroon-600 rounded-full" />
        <div className="h-1.5 w-1.5 bg-gold-500 rounded-full" />
        <div className="h-0.5 w-8 bg-gold-300 rounded-full" />
      </div>
    </div>
  );
}

export default SectionHeading;
