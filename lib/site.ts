/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ECOTECH INNOVATIONS — SITE CONTENT
 * Everything the CEO might want to tweak lives here: contact details, stats,
 * testimonials, milestones and form endpoints. Edit once, update site-wide.
 * All numbers marked "placeholder" should be replaced with real data.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Ecotech Innovations Limited",
  shortName: "Ecotech",
  tagline: "Innovating Today for a Sustainable Tomorrow.",
  established: 2021,
  cities: ["Lusaka", "Ndola"],

  // ── Contact details ──
  email: "ecotechinnoltd@gmail.com", // CEO email
  emailCareers: "ecotechinnoltd@gmail.com", // careers go to the same inbox for now
  phoneLusaka: "+260 76 9723838", // CEO / main line (placeholder Ndola line below)
  phoneNdola: "+260 212 000 000",
  addressLusaka: "Lusaka, Zambia (Head Office)",
  addressNdola: "Ndola, Zambia (Branch Office)",

  // ── Official socials ──
  facebook: "https://www.facebook.com/profile.php?id=100040816121761",
  linkedin: "https://www.linkedin.com/company/ecotech-innovations-limited/",

  // ── Forms: set your Formspree / Web3Forms id to go live, or leave empty
  //    to use the graceful "email us directly" fallback. ──
  formspreeContact: "", // e.g. "https://formspree.io/f/abcdwxyz"
  formspreeVolunteer: "", // e.g. "https://formspree.io/f/abcdwxyz"

  // ── Home hero stats (placeholders) ──
  stats: {
    founded: 2021,
    cities: 2,
    artisans: 500,
    downloads: 10000,
    co2Tonnes: 250,
    jobsCreated: 120,
    homesServed: 3000,
  },

  // ── Testimonials (text-only placeholders to start) ──
  testimonials: [
    {
      quote:
        "I booked a plumber on FixCycle and someone arrived within the hour — verified, professional, and at a fair price. It has completely changed how I find help at home.",
      name: "Namwali M.",
      role: "FixCycle customer · Lusaka",
    },
    {
      quote:
        "FixCycle Pro gave me a steady stream of jobs I didn't have to chase. The digital payments mean I get paid on time, every single time.",
      name: "Joseph K.",
      role: "Electrician · Ndola",
    },
    {
      quote:
        "Ecotech thinks about impact first. It's rare to find a company this young with such a clear vision for Zambia's green economy.",
      name: "Community partner",
      role: "NGO collaborator · Lusaka",
    },
    {
      quote:
        "Joining as a global tech volunteer let me work on real product challenges while giving back. The team is small, fast and genuinely mission-driven.",
      name: "Remote volunteer",
      role: "Software developer · Global",
    },
  ],
};

/** Company milestones for the About timeline (year → story). */
export const milestones = [
  {
    year: 2021,
    title: "Ecotech Innovations is founded",
    text: "Founded in Lusaka with a mission to build smart, eco-friendly digital marketplaces that connect communities and reduce carbon footprints.",
  },
  {
    year: 2022,
    title: "FixCycle beta launches",
    text: "The first version of FixCycle goes live, matching households with verified local service providers across Lusaka.",
  },
  {
    year: 2023,
    title: "Expansion to Ndola & FixCycle Pro",
    text: "Operations extend to the Copperbelt, and FixCycle Pro launches so skilled artisans can find jobs and get paid digitally.",
  },
  {
    year: 2024,
    title: "Green sector pilots",
    text: "Pilot programmes begin in green logistics, agri-tech and supply-chain innovation with community and business partners.",
  },
  {
    year: 2025,
    title: "Global Tech Volunteers programme",
    text: "We open our doors to developers and engineers worldwide to help build Africa's next impact platform.",
  },
  {
    year: 2026,
    title: "Scaling impact",
    text: "Growing the FixCycle network, deepening sustainability metrics, and expanding our reach across Zambia.",
  },
];

/** Sustainability goals for the Impact page (label → progress %). */
export const impactGoals = [
  { label: "Carbon reduction target (vs. 2021 baseline)", value: 42, caption: "42% of 2030 goal" },
  { label: "Artisans moved to digital payments", value: 65, caption: "65% of active Pros" },
  { label: "Tree planting partnerships", value: 38, caption: "38% of 10,000 trees" },
  { label: "Homes reached in underserved areas", value: 55, caption: "55% of 2030 goal" },
];

/** Volunteer roles for the Get Involved page. */
export const volunteerRoles = [
  { icon: "code", title: "Frontend / Backend Developers", text: "Ship features for FixCycle and our green-tech tools." },
  { icon: "palette", title: "UI / UX Designers", text: "Shape clean, accessible experiences for Zambian users." },
  { icon: "chart", title: "Data Analysts", text: "Turn impact and product data into decisions and stories." },
  { icon: "clipboard", title: "Project Managers", text: "Keep our sprints and volunteer squads moving." },
] as const;

/** Volunteer benefits list. */
export const volunteerBenefits = [
  "Work on products with real environmental and social impact",
  "100% remote collaboration — join from anywhere",
  "Hands-on mentorship from a mission-driven team",
  "A reference letter recognising your contribution",
  "A fast track to future full-time roles at Ecotech",
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fixcycle", label: "FixCycle" },
  { href: "/solutions", label: "Solutions" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** The four business divisions — home "What we do" cards and site map. */
export const divisions = [
  {
    id: "trading",
    code: "DIV.01 — TRADE",
    title: "Trading & Supply",
    desc: "Connecting businesses to products, equipment and technology.",
    href: "/services#export-import-trading",
    services: [
      "General trading",
      "Industrial supplies",
      "Equipment & technology",
      "Renewable energy products",
      "Procurement & sourcing",
      "Import / export",
      "Corporate supply",
    ],
  },
  {
    id: "consultancy",
    code: "DIV.02 — CONSULT",
    title: "Business Consultancy",
    desc: "Helping organisations solve operational, commercial and strategic challenges.",
    href: "/services#business-consultancy-compliance",
    services: [
      "Business development",
      "Supply-chain consultancy",
      "Logistics consultancy",
      "Project management",
      "Procurement advisory",
      "Market research",
      "Sustainability advisory",
      "Digital transformation",
    ],
  },
  {
    id: "technology",
    code: "DIV.03 — TECH",
    title: "Sustainable Technology",
    desc: "Developing innovative solutions for a cleaner and smarter future.",
    href: "/solutions",
    services: [
      "FixCycle, MobiLink & Lala",
      "Solar solutions",
      "Smart energy solutions",
      "Waste & recycling technologies",
      "Digital platforms",
      "Climate & green technology",
    ],
  },
  {
    id: "logistics",
    code: "DIV.04 — MOVE",
    title: "Logistics & Mobility",
    desc: "Making movement of people, products and services more efficient.",
    href: "/services#freight-brokerage",
    services: [
      "Transport & logistics",
      "Last-mile delivery",
      "Fleet solutions",
      "Intercity transportation",
      "Cargo & parcel logistics",
      "Supply-chain solutions",
      "Electric mobility",
      "Logistics technology",
    ],
  },
];

/** Innovation portfolio platforms for the dark home section. */
export const platforms = [
  {
    tag: "Marketplace",
    title: "FixCycle",
    text: "A digital marketplace connecting households to repair, maintenance and handyman services — building resilience and local livelihoods.",
    href: "https://play.google.com/store/apps/details?id=com.fixcyclehandy.user",
  },
  {
    tag: "Mobility & Parcels",
    title: "MobiLink",
    text: "An intercity ride-sharing and parcel delivery platform, moving people and cargo between Zambia's cities more efficiently.",
    href: "https://eilzm.com/",
  },
  {
    tag: "Hospitality",
    title: "Lala",
    text: "A mobile-first, budget accommodation booking platform via Mobile Money and WhatsApp — covering Lusaka, the Copperbelt and Livingstone.",
    href: "https://www.lalabookings.com/",
  },
];
