/**
 * GUPTA TENT HOUSE — Gallery Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in SESSION 04.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  const placeholders = Array.from({ length: 6 });

  return (
    <SectionWrapper id="gallery" className="bg-neutral-50">
      <SectionHeading
        eyebrow="Our Work"
        title="Event Gallery"
        subtitle="A glimpse of the beautiful events we have set up across Barabanki and Uttar Pradesh."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-brand-400 text-sm font-medium"
          >
            📸 Photo {i + 1}
            <br />
            <span className="text-xs opacity-60">Coming in Session 04</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default GallerySection;
