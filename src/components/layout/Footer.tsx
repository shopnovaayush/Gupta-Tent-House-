/**
 * GUPTA TENT HOUSE — Footer (Layout Shell)
 * SESSION 01 — Project Foundation
 */

import { BRAND, NAV_LINKS, SERVICES } from "@/constants/brand";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">

      {/* ── Top CTA Band ── */}
      <div className="bg-gradient-to-r from-brand-800 to-brand-700">
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-1">
              Ready to Plan Your Event?
            </h3>
            <p className="text-brand-200 text-sm">
              Call us today for a free quote — we serve Barabanki & surrounding districts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              as="a"
              href={`tel:${BRAND.phone}`}
              variant="secondary"
              size="lg"
              leftIcon={<span aria-hidden="true">📞</span>}
            >
              {BRAND.phone}
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-800"
              leftIcon={<span aria-hidden="true">💬</span>}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shrink-0">
                <span className="text-xl" aria-hidden="true">🏕️</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  Gupta Tent House
                </div>
                <div className="text-xs text-brand-400 tracking-widest uppercase">
                  Est. {BRAND.established}
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {BRAND.tagline} — Making every celebration memorable for over 15 years in Barabanki.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {Object.entries(BRAND.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform}`}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-brand-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {platform === "facebook"  && "f"}
                  {platform === "instagram" && "📷"}
                  {platform === "youtube"   && "▶"}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-brand-400 transition-colors duration-150 flex items-center gap-1"
                  >
                    <span className="text-brand-600" aria-hidden="true">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-neutral-400 hover:text-brand-400 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-brand-500 mt-0.5" aria-hidden="true">📍</span>
                <span>
                  {BRAND.address.line1},<br />
                  {BRAND.address.line2},<br />
                  {BRAND.address.city} — {BRAND.address.pin}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500" aria-hidden="true">📞</span>
                <a href={`tel:${BRAND.phone}`} className="hover:text-brand-400 transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500" aria-hidden="true">📞</span>
                <a href={`tel:${BRAND.phoneAlt}`} className="hover:text-brand-400 transition-colors">
                  {BRAND.phoneAlt}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500" aria-hidden="true">✉️</span>
                <a href={`mailto:${BRAND.email}`} className="hover:text-brand-400 transition-colors">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-neutral-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {year} {BRAND.name}. All rights reserved.</p>
          <p>Made with ❤️ in Barabanki, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
