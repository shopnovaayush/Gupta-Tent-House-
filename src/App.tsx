/**
 * GUPTA TENT HOUSE — App Shell
 * SESSION 01 — Project Foundation
 *
 * Assembles all layout and section components into the full page structure.
 * Each section is a self-contained component ready for deeper implementation
 * in subsequent sessions.
 */

import { Navbar }          from "@/components/layout/Navbar";
import { Footer }          from "@/components/layout/Footer";
import { HeroSection }     from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection }  from "@/components/sections/GallerySection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { AboutSection }    from "@/components/sections/AboutSection";
import { ContactSection }  from "@/components/sections/ContactSection";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <PackagesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
