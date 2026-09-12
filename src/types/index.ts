/**
 * GUPTA TENT HOUSE — Shared TypeScript Types
 * SESSION 01 — Project Foundation
 */

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: readonly string[];
}

// ─── Packages ────────────────────────────────────────────────────────────────

export interface Package {
  id: string;
  name: string;
  nameEn: string;
  priceFrom: number;
  priceSuffix: string;
  highlight: boolean;
  badge?: string;
  description: string;
  features: readonly string[];
  notIncluded: readonly string[];
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  quote: string;
  quoteEn: string;
  location: string;
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

// ─── Button ──────────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize    = "sm" | "md" | "lg" | "xl";

// ─── Badge ───────────────────────────────────────────────────────────────────

export type BadgeVariant = "brand" | "accent" | "neutral" | "success" | "warning";

// ─── Section ─────────────────────────────────────────────────────────────────

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Extra container class */
  containerClassName?: string;
  /** Whether to add default section-py padding */
  padded?: boolean;
}
