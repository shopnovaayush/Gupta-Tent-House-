/**
 * GUPTA TENT HOUSE — Hero Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in SESSION 02.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BRAND, STATS } from "@/constants/brand";

export function HeroSection() {
  return (
    <SectionWrapper
      id="home"
      padded={false}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-900 via-brand-950 to-neutral-900"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #b45309 0,
            #b45309 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent" aria-hidden="true" />

      <div className="container-site relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="mb-6">
            <Badge variant="brand" dot>
              Est. {BRAND.established} · Trusted in UP
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Har Khushi Ko{" "}
            <span className="text-gradient-brand">Banaayein</span>{" "}
            Yaadgaar
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Premium tents, shamianas, chairs, décor & full event setup — for
            weddings, receptions, and every celebration in between.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              as="a"
              href={`tel:${BRAND.phone}`}
              variant="primary"
              size="xl"
              leftIcon={<span aria-hidden="true">📞</span>}
            >
              Get Free Quote
            </Button>
            <Button
              as="a"
              href="#services"
              variant="outline"
              size="xl"
              className="border-white/40 text-white hover:bg-white/10"
            >
              View Services
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-3xl md:text-4xl text-brand-400 font-bold">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-xs md:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
