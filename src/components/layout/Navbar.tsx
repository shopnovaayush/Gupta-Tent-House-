/**
 * GUPTA TENT HOUSE — Navbar (Layout Shell)
 * SESSION 01 — Project Foundation
 * Full implementation of sticky top navigation with mobile menu.
 */

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { BRAND, NAV_LINKS } from "@/constants/brand";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detect scroll for background change
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
            aria-label="Gupta Tent House — Home"
          >
            {/* Logo mark */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-warm shrink-0 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white text-xl" aria-hidden="true">🏕️</span>
            </div>
            {/* Brand name */}
            <div className="hidden sm:block">
              <div
                className={cn(
                  "font-display font-bold text-lg leading-tight transition-colors duration-300",
                  isScrolled ? "text-brand-800" : "text-white drop-shadow"
                )}
              >
                Gupta Tent House
              </div>
              <div
                className={cn(
                  "text-xs font-medium tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-brand-600" : "text-brand-200"
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
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isScrolled
                    ? "text-neutral-700 hover:text-brand-700 hover:bg-brand-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── CTA Button (Desktop) ── */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              as="a"
              href={`tel:${BRAND.phone}`}
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              leftIcon={<span aria-hidden="true">📞</span>}
              className={
                !isScrolled
                  ? "border-white text-white hover:bg-white hover:text-brand-800"
                  : ""
              }
            >
              Book Now
            </Button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-200",
              isScrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
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
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isMobileOpen}
      >
        <div className="bg-white border-t border-neutral-100 shadow-warm-lg px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-neutral-700 font-medium hover:text-brand-700 hover:bg-brand-50 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <Button
              as="a"
              href={`tel:${BRAND.phone}`}
              variant="primary"
              size="md"
              fullWidth
              leftIcon={<span aria-hidden="true">📞</span>}
            >
              Call to Book
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
