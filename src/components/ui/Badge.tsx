/**
 * GUPTA TENT HOUSE — Badge UI Component
 * SESSION 01 — Project Foundation
 */

import React from "react";
import { cn } from "@/utils/cn";
import type { BadgeVariant } from "@/types";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand:   "bg-maroon-100  text-maroon-800  border border-maroon-200",
  accent:  "bg-gold-100    text-gold-800    border border-gold-200",
  neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  success: "bg-green-100   text-green-800   border border-green-200",
  warning: "bg-yellow-100  text-yellow-800  border border-yellow-200",
};

const dotClasses: Record<BadgeVariant, string> = {
  brand:   "bg-maroon-500",
  accent:  "bg-gold-500",
  neutral: "bg-neutral-400",
  success: "bg-green-500",
  warning: "bg-yellow-500",
};

export function Badge({
  variant = "brand",
  children,
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotClasses[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
