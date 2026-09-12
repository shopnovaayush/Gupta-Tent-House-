/**
 * GUPTA TENT HOUSE — Navbar (Layout Shell)
 * MICRO SESSION 03 — Navbar Build
 *
 * Sticky, responsive primary navigation. Reusable across all pages —
 * no page-specific state or imports, so it can be dropped into any
 * future route unchanged.
 *
 * Uses the design tokens actually defined in src/index.css
 * (maroon / gold / neutral / ivory) rather than the unregistered
 * "brand-*" utility classes seen elsewhere in the codebase, so
 * colors render as intended.
 */

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { BRAND, NAV_LINKS } from "@/constants/brand";
import { Button } from "@/components/ui/Button";

const QUOTE_MESSAGE =
  "Hi Gupta Tent House, I'd like a free quote for my event.";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Switch from a transparent overlay to a solid bar once the page scrolls.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu if the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Let Escape close the mobile menu from anywhere for keyboard users.
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-warm border-b border-neutral-100"
          : "bg-transparent"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group rounded-lg"
            aria-label={`${BRAND.name} — Home`}
          >
            {/* Temporary monogram mark — replace with final logo when available */}
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-900 flex items-center justify-center shadow-warm shrink-0 group-hover:scale-105 transition-transform duration-200"
              aria-hidden="true"
            >
              <span className="font-display font-bold text-gold-400 text-base md:text-lg tracking-wide">
                GTH
              </span>
            </div>
            {/* Brand name */}
            <div className="hidden sm:block">
              <div
                className={cn(
                  "font-display font-bold text-lg leading-tight transition-colors duration-300",
                  isScrolled ? "text-maroon-800" : "text-white drop-shadow"
                )}
              >
                {BRAND.name}
              </div>
              <div
                className={cn(
                  "text-xs font-medium tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-maroon-600" : "text-gold-200"
                )}
              >
                Est. {BRAND.established}
              </div>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-neutral-700 hover:text-maroon-700 hover:bg-maroon-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Primary CTA (Desktop) ── */}
          <div className="hidden md:flex items-center">
            <Button
              as="a"
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(QUOTE_MESSAGE)}`}
              target="_blank"
              variant="primary"
              size="sm"
              leftIcon={<span aria-hidden="true">💬</span>}
            >
              Get Free Quote
            </Button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-200",
              isScrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-nav-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isMobileOpen}
      >
        <nav
          className="bg-white border-t border-neutral-100 shadow-warm-lg px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              tabIndex={isMobileOpen ? 0 : -1}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-neutral-700 font-medium hover:text-maroon-700 hover:bg-maroon-50 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            {/*
              Plain anchor (not the Button component) — Button's `as="a"`
              branch doesn't forward onClick/tabIndex, which are needed
              here so the hidden panel's CTA can't be tab-focused while
              closed and closes the menu when followed.
            */}
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(QUOTE_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMobileOpen ? 0 : -1}
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center gap-2 w-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maroon-500 px-5 py-2.5 text-sm rounded-xl bg-maroon-700 text-ivory hover:bg-maroon-800 active:bg-maroon-900 shadow-warm"
            >
              <span aria-hidden="true">💬</span>
              <span>Get Free Quote</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
