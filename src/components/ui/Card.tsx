/**
 * GUPTA TENT HOUSE — Card UI Component
 * SESSION 02 — Design System
 *
 * Simple, reusable surface for grouping content (services, packages,
 * testimonials, etc.). Composable via CardHeader / CardTitle /
 * CardDescription / CardContent / CardFooter.
 */

import React from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift + shadow on hover */
  hoverable?: boolean;
  /** Removes default padding, useful when composing with CardContent etc. */
  padded?: boolean;
}

export function Card({
  hoverable = false,
  padded = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-neutral-200 rounded-2xl shadow-warm-sm transition-all duration-250",
        hoverable && "hover:shadow-warm-lg hover:-translate-y-1",
        padded && "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-xl md:text-2xl text-neutral-900 leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-neutral-500 text-sm leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-neutral-700 text-sm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 mt-5 pt-4 border-t border-neutral-100", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
