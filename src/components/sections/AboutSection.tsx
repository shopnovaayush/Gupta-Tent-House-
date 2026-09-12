/**
 * GUPTA TENT HOUSE — About Section (Placeholder)
 * SESSION 01 — Project Foundation
 * NOTE: Full implementation in a later session.
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND, STATS } from "@/constants/brand";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-brand-950 text-white">
      <SectionHeading
        eyebrow="Our Story"
        title="About Gupta Tent House"
        subtitle={`Serving families across Madhya Pradesh since ${BRAND.established} — with love, quality, and commitment.`}
        titleClassName="text-white"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-display text-3xl text-brand-400 font-bold mb-1">{stat.value}</div>
            <div className="text-neutral-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-4 text-neutral-300 text-base leading-relaxed">
        <p>
          Founded by the Gupta family in {BRAND.established}, we started with a small set of shamianas and
          a big dream — to make every celebration in Indore truly special. Today, we are a trusted name
          across Madhya Pradesh.
        </p>
        <p>
          Our team of experienced professionals handles everything from delivery and setup to complete event
          styling. We believe that every family deserves a beautiful event regardless of budget.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
