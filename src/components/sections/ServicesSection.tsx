/**
 * GUPTA TENT HOUSE — Services Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in SESSION 03.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SERVICES } from "@/constants/brand";

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="From intimate gatherings to grand weddings — we have everything you need to make your event perfect."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div key={service.id} className="card-warm overflow-hidden">
            {/* Image tile — swaps to a real photo automatically once `image` is set */}
            <div className="relative aspect-video bg-gradient-to-br from-maroon-700 to-maroon-900 flex items-center justify-center">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <span className="text-5xl" aria-hidden="true">{service.icon}</span>
                  <span className="absolute bottom-2 right-3 text-[10px] font-medium tracking-wide uppercase text-gold-200/80">
                    Photo coming soon
                  </span>
                </>
              )}
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-semibold text-neutral-800 text-lg">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="brand" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ServicesSection;
