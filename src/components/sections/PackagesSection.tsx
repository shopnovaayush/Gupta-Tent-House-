/**
 * GUPTA TENT HOUSE — Packages Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in SESSION 05.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PACKAGES, BRAND } from "@/constants/brand";
import { cn } from "@/utils/cn";

export function PackagesSection() {
  return (
    <SectionWrapper id="packages" className="bg-white">
      <SectionHeading
        eyebrow="Pricing"
        title="Our Packages"
        subtitle="Transparent pricing with no hidden charges. All packages include setup and removal."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {(PACKAGES as readonly (typeof PACKAGES[number] & { badge?: string })[]).map((pkg) => (
          <div
            key={pkg.id}
            className={cn(
              "card-warm p-6 space-y-5 relative",
              pkg.highlight && "border-brand-500 ring-2 ring-brand-400 ring-offset-2"
            )}
          >
            {pkg.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="accent">{pkg.badge}</Badge>
              </div>
            )}
            <div>
              <div className="font-display text-2xl text-neutral-800">{pkg.name}</div>
              <div className="text-sm text-neutral-400">{pkg.nameEn}</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-brand-700">
                ₹{pkg.priceFrom.toLocaleString("en-IN")}
              </span>
              <span className="text-neutral-400 text-sm">{pkg.priceSuffix}</span>
            </div>
            <p className="text-neutral-500 text-sm">{pkg.description}</p>
            <ul className="space-y-2">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-brand-600 mt-0.5" aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              as="a"
              href={`tel:${BRAND.phone}`}
              variant={pkg.highlight ? "primary" : "outline"}
              size="md"
              fullWidth
            >
              Book This Package
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default PackagesSection;
