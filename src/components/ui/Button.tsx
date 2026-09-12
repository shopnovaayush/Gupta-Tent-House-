/**
 * GUPTA TENT HOUSE — Button UI Component
 * SESSION 01 — Project Foundation
 */

import React from "react";
import { cn } from "@/utils/cn";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders as an anchor tag */
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  /** Show a loading spinner */
  loading?: boolean;
  /** Icon placed before label */
  leftIcon?: React.ReactNode;
  /** Icon placed after label */
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-maroon-700 text-ivory hover:bg-maroon-800 active:bg-maroon-900 shadow-warm focus-visible:ring-maroon-500",
  secondary:
    "bg-maroon-100 text-maroon-900 hover:bg-maroon-200 active:bg-maroon-300 focus-visible:ring-maroon-400",
  outline:
    "border-2 border-maroon-700 text-maroon-700 bg-transparent hover:bg-maroon-50 active:bg-maroon-100 focus-visible:ring-maroon-500",
  ghost:
    "bg-transparent text-maroon-700 hover:bg-maroon-50 active:bg-maroon-100 focus-visible:ring-maroon-400",
  danger:
    "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 shadow focus-visible:ring-red-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5 rounded-lg",
  md: "px-5 py-2.5 text-sm gap-2   rounded-xl",
  lg: "px-6 py-3   text-base gap-2   rounded-xl",
  xl: "px-8 py-4   text-lg  gap-2.5 rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const classes = cn(
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && !loading && (
        <span className="shrink-0">{rightIcon}</span>
      )}
    </>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
