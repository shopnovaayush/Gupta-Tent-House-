/**
 * GUPTA TENT HOUSE — Brand Constants
 * Single source of truth for all brand-related data.
 * SESSION 01 — Project Foundation
 */

// ─── Business Identity ────────────────────────────────────────────────────────

export const BRAND = {
  name: "Gupta Tent House",
  proprietor: "Rakesh Gupta",
  tagline: "Har Khushi Ko Banaayein Yaadgaar",
  taglineEn: "Making Every Celebration Memorable",
  established: 2010,
  phone: "9839821521",
  phoneAlt: "+91 94250 XXXXX",
  email: "info@guptatent.in",
  whatsapp: "9839821521",
  address: {
    line1: "Angel Bakery, Near Laladas Ashram",
    line2: "Bhayara Mode, Dewa Sharif",
    city: "Barabanki",
    state: "Uttar Pradesh",
    pin: "",
  },
  mapUrl: "https://maps.google.com/?q=Angel+Bakery+Near+Laladas+Ashram+Bhayara+Mode+Dewa+Sharif+Barabanki+Uttar+Pradesh",
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
} as const;

// ─── Navigation Links ─────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "Events",     href: "#events" },
  { label: "Services",   href: "#services" },
  { label: "Packages",   href: "#packages" },
  { label: "Gallery",    href: "#gallery" },
  { label: "About",      href: "#about" },
  { label: "Contact",    href: "#contact" },
] as const;

// ─── Services Catalogue ───────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "tents-shamianas",
    icon: "🏕️",
    // TODO: replace with a real tent/shamiana setup photo when available
    image: null,
    title: "Tents & Shamianas",
    description:
      "Grand shamianas, AC tents, transparent marquees, and traditional mandap setups for weddings and large gatherings.",
    tags: ["Wedding", "Reception", "Outdoor"],
  },
  {
    id: "seating-furniture",
    icon: "🪑",
    // TODO: replace with a real banquet chairs/tables photo when available
    image: null,
    title: "Chairs & Tables",
    description:
      "Banquet chairs, plastic chairs, round tables, dining tables — available in bulk for 100 to 10,000+ guests.",
    tags: ["Bulk Rental", "All Events"],
  },
  {
    id: "lighting-decoration",
    icon: "✨",
    // TODO: replace with a real stage lighting/décor photo when available
    image: null,
    title: "Lighting & Décor",
    description:
      "Fairy lights, LED panels, flower decoration, stage backdrop, entrance arches and full venue dressing.",
    tags: ["Stage", "Venue Dressing", "Night Events"],
  },
  {
    id: "catering-equipment",
    icon: "🍽️",
    // TODO: replace with a real buffet/catering equipment photo when available
    image: null,
    title: "Catering Equipment",
    description:
      "Buffet counters, chafing dishes, serving utensils, crockery and cooking equipment on rent.",
    tags: ["Buffet", "Kitchenware"],
  },
  {
    id: "sound-stage",
    icon: "🎧",
    // TODO: replace with a real DJ/sound & stage photo when available
    image: null,
    title: "Sound & Stage",
    description:
      "Professional sound systems, DJ consoles, stage platforms and podiums for all event sizes.",
    tags: ["DJ", "Stage", "Audio"],
  },
  {
    id: "flooring-carpets",
    icon: "🧱",
    // TODO: replace with a real flooring/carpet photo when available
    image: null,
    title: "Flooring & Carpets",
    description:
      "Red carpets, modular flooring, grass matting and premium carpet rolls for indoor and outdoor venues.",
    tags: ["Carpet", "Outdoor", "Indoor"],
  },
] as const;

// ─── Packages ────────────────────────────────────────────────────────────────

export const PACKAGES = [
  {
    id: "basic",
    name: "Saadgi",
    nameEn: "Basic",
    priceFrom: 15000,
    priceSuffix: "/ event",
    highlight: false,
    description: "Perfect for small family functions & intimate gatherings.",
    features: [
      "Shamiana (30×40 ft)",
      "100 Plastic Chairs",
      "10 Folding Tables",
      "Basic Lighting",
      "Setup & Removal",
    ],
    notIncluded: ["Decoration", "Sound System", "Catering Equipment"],
  },
  {
    id: "standard",
    name: "Utsav",
    nameEn: "Standard",
    priceFrom: 45000,
    priceSuffix: "/ event",
    highlight: true,
    badge: "Most Popular",
    description: "Our most popular package for weddings & receptions.",
    features: [
      "AC Tent (50×80 ft)",
      "300 Banquet Chairs",
      "30 Round Tables",
      "Full Fairy Light Setup",
      "Stage Backdrop",
      "Red Carpet Entrance",
      "Setup & Removal",
    ],
    notIncluded: ["Catering Equipment", "Sound System"],
  },
  {
    id: "premium",
    name: "Shaahi",
    nameEn: "Premium",
    priceFrom: 95000,
    priceSuffix: "/ event",
    highlight: false,
    description: "Grand celebrations done the royal way.",
    features: [
      "Transparent Marquee (80×120 ft)",
      "500 Banquet Chairs",
      "50 Round Tables",
      "Professional LED Lighting",
      "Full Flower Decoration",
      "Sound System + DJ Console",
      "Stage with Steps",
      "Red Carpet + Entrance Arch",
      "Catering Equipment",
      "Setup & Removal",
    ],
    notIncluded: [],
  },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya & Rohan Sharma",
    event: "Wedding Reception",
    rating: 5,
    quote:
      "Gupta Tent House ne hamaari shaadi ko sapno jaisi bana diya. Decoration ekdam zabardast tha aur staff bahut helpful tha!",
    quoteEn:
      "Gupta Tent House made our wedding feel like a dream. The decoration was spectacular and the staff was incredibly helpful!",
    location: "Barabanki",
  },
  {
    id: 2,
    name: "Suresh Agarwal",
    event: "Birthday Celebration",
    rating: 5,
    quote:
      "10 saal se inhi ke saath kaam karte hain. Quality aur punctuality dono mein number one hain.",
    quoteEn:
      "We've worked with them for 10 years. They are number one in both quality and punctuality.",
    location: "Lucknow",
  },
  {
    id: 3,
    name: "Meena Joshi",
    event: "Engagement Ceremony",
    rating: 5,
    quote:
      "Budget ke andar itna sundar setup — bilkul expect nahi kiya tha. Shukriya Gupta Tent House!",
    quoteEn:
      "Such a beautiful setup within budget — we did not expect this at all. Thank you Gupta Tent House!",
    location: "Dewa Sharif",
  },
] as const;

// ─── Stats / Social Proof ─────────────────────────────────────────────────────

export const STATS = [
  { value: "15+",   label: "Years of Experience" },
  { value: "5000+", label: "Events Completed" },
  { value: "50+",   label: "Cities Served" },
  { value: "98%",   label: "Happy Clients" },
] as const;

// ─── Color Tokens (JS reference) ─────────────────────────────────────────────
// Mirrors the CSS tokens defined in src/index.css (@theme).

export const COLORS = {
  maroon: "#6B1A2E",
  gold: "#C9A15A",
  ivory: "#FBF6EE",
  charcoal: "#1C1512",
} as const;
