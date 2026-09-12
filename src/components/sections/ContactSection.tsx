/**
 * GUPTA TENT HOUSE — Contact Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in a later session.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/constants/brand";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-neutral-50">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to help you plan your perfect event. Reach out today for a free consultation."
      />

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="card-warm p-6 text-center space-y-3">
          <div className="text-4xl" aria-hidden="true">📞</div>
          <h4 className="font-semibold text-neutral-800">Call Us</h4>
          <p className="text-neutral-500 text-sm">Mon – Sun, 8 AM – 10 PM</p>
          <Button as="a" href={`tel:${BRAND.phone}`} variant="primary" size="md" fullWidth>
            {BRAND.phone}
          </Button>
        </div>

        {/* WhatsApp */}
        <div className="card-warm p-6 text-center space-y-3">
          <div className="text-4xl" aria-hidden="true">💬</div>
          <h4 className="font-semibold text-neutral-800">WhatsApp</h4>
          <p className="text-neutral-500 text-sm">Quick replies guaranteed</p>
          <Button
            as="a"
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            variant="outline"
            size="md"
            fullWidth
          >
            Chat on WhatsApp
          </Button>
        </div>

        {/* Address */}
        <div className="card-warm p-6 sm:col-span-2 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-2xl" aria-hidden="true">📍</span>
            <div>
              <h4 className="font-semibold text-neutral-800 mb-1">Visit Our Store</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {BRAND.address.line1}, {BRAND.address.line2},<br />
                {BRAND.address.city}, {BRAND.address.state} — {BRAND.address.pin}
              </p>
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-maroon-600 text-sm font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
