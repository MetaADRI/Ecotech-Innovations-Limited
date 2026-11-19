/**
 * ECOTECH INNOVATIONS — SITE CONTENT (single source of truth)
 * Edit this file to update company details, services, platforms, contact info,
 * enquiry routing, and page content across the website.
 */

export const site = {
  name: "Ecotech Innovations Limited",
  shortName: "Ecotech Innovations",
  tagline: "Trading, consultancy, monitoring and digital solutions for growth.",
  description:
    "Ecotech Innovations Limited is a Zambian company engaged in wholesale trading, business consultancy, independent project monitoring and MVT verification, logistics and freight brokerage, agriculture commodity sourcing and supply, and digital platforms.",
  established: 2021,
  cities: ["Lusaka", "Ndola"],

  // Contact (use ecotechinnoltd@gmail.com everywhere for contact/enquiry/notifications)
  email: "ecotechinnoltd@gmail.com",
  enquiryEmail: "ecotechinnoltd@gmail.com",
  emailCareers: "ecotechinnoltd@gmail.com",
  phonePrimary: "+260 76 9723838",
  addressHeadOffice: "Lusaka, Zambia (Head Office)",
  addressBranch: "Ndola, Zambia (Branch Office)",

  // Legacy aliases kept for compatibility with existing components
  phoneLusaka: "+260 76 9723838",
  addressLusaka: "Lusaka, Zambia (Head Office)",
  addressNdola: "Ndola, Zambia (Branch Office)",

  // Enquiry backend endpoint (set for deployed backend, e.g. https://api.example.com/api/enquiries)
  enquiryEndpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT || "",
  formspreeContact: "",
  formspreeVolunteer: "",

  // Socials
  facebook: "https://www.facebook.com/profile.php?id=100040816121761",
  linkedin: "https://www.linkedin.com/company/ecotech-innovations-limited/",

  highlights: [
    { label: "Core business", value: "Wholesale trading" },
    { label: "Cement partner", value: "Authorized agent — Chilanga Cement PLC" },
    { label: "Coverage", value: "Zambia & regional partners" },
  ],

  stats: {
    founded: 2021,
    cities: 2,
  },

  testimonials: [
    {
      quote:
        "Ecotech Innovations provided dependable sourcing and clear communication from enquiry to delivery.",
      name: "Business client",
      role: "Trading & supply partner",
    },
    {
      quote:
        "Their consultancy support made our registration and compliance process straightforward and well-coordinated.",
      name: "SME client",
      role: "Business registration & compliance",
    },
    {
      quote:
        "Professional coordination and timely updates helped us manage logistics and freight requirements with confidence.",
      name: "Operations partner",
      role: "Logistics & freight brokerage",
    },
  ],
};

/** Company milestones (high-level). */
export const milestones = [
  {
    year: "2021",
    title: "Company established",
    text: "Ecotech Innovations Limited was established in Zambia to deliver trading, consultancy and practical business solutions.",
  },
  {
    year: "Today",
    title: "Diversified operations",
    text: "Core wholesale trading supported by consultancy, compliance services, logistics and freight brokerage, agriculture commodity sourcing, and digital platforms.",
  },
  {
    year: "Partnership",
    title: "Authorized cement agency",
    text: "Serving as an authorized agent for Chilanga Cement PLC as part of our trading and supply operations.",
  },
  {
    year: "Growing portfolio",
    title: "Monitoring, logistics and platforms",
    text: "Expanding independent project monitoring and MVT verification, logistics consultancy, and digital platforms including FixCycle, MobiLink and Lala.",
  },
  {
    year: "Coming soon",
    title: "Mining operations",
    text: "Mining is part of our growth pipeline and is currently marked as Coming Soon.",
  },
];

/** Home "What we do" / core business areas. */
export const divisions = [
  {
    id: "trading",
    code: "01 — TRADING",
    title: "Wholesale Trading & Supply",
    desc: "Core wholesale trading and sourcing across construction, fuels, vehicles, consumer and household goods.",
    href: "/services#wholesale-trading",
    services: [
      "Cement (authorized agent for Chilanga Cement PLC)",
      "Maize and agricultural commodities",
      "Fuels and acids — sourced and supplied",
      "Importation of cars",
      "Consumer goods and household items",
      "General wholesale trading and sourcing",
    ],
  },
  {
    id: "consultancy",
    code: "02 — CONSULTANCY",
    title: "Business Consultancy & Compliance",
    desc: "Registration and statutory compliance support for businesses operating in Zambia.",
    href: "/services#business-consultancy",
    services: [
      "PACRA registration and compliance",
      "ZRA registration and compliance",
      "NAPSA registration and compliance",
      "NHIMA registration and compliance",
      "Workers Compensation compliance",
      "CEEC and related business compliance support",
    ],
  },
  {
    id: "monitoring-logistics",
    code: "03 — MONITORING & LOGISTICS",
    title: "Monitoring, Logistics & Brokerage",
    desc: "Independent oversight, logistics management consultancy and freight brokerage services.",
    href: "/services#monitoring-logistics",
    services: [
      "Independent project monitoring",
      "MVT verification",
      "Logistics management consultancy",
      "Freight brokerage and coordination",
    ],
  },
  {
    id: "agri-mining-digital",
    code: "04 — GROWTH SECTORS",
    title: "Agriculture, Mining & Digital Platforms",
    desc: "Commodity sourcing and supply, mining pipeline, and in-house digital platforms.",
    href: "/services#agriculture-mining-digital",
    services: [
      "Agriculture commodity sourcing and supply",
      "Maize, soya beans, groundnuts, beans, rice, etc.",
      "Mining (Coming Soon)",
      "FixCycle, MobiLink and Lala platforms",
    ],
  },
];

/** Detailed service groups for the Services page. */
export const serviceGroups = [
  {
    id: "wholesale-trading",
    title: "Wholesale Trading & Supply",
    summary:
      "Wholesale trading is our core business, supplying products and sourcing goods for customers and partners with reliable coordination.",
    highlight: "Currently an authorized agent for Chilanga Cement PLC.",
    items: [
      "Cement supply (authorized agent for Chilanga Cement PLC)",
      "Maize trading and supply",
      "Fuels and acids — sourced and supplied",
      "Importation of cars",
      "Consumer goods and household items",
      "General wholesale trading and product sourcing",
    ],
    cta: "Request a trading enquiry",
  },
  {
    id: "business-consultancy",
    title: "Business Consultancy & Compliance",
    summary:
      "We support businesses with registration and compliance processes so they can start, operate and remain compliant.",
    highlight: "Practical guidance across key statutory and regulatory bodies.",
    items: [
      "Company and business registration support (including PACRA)",
      "ZRA registration and compliance support",
      "NAPSA registration and compliance",
      "NHIMA registration and compliance",
      "Workers Compensation compliance support",
      "CEEC and related compliance assistance",
    ],
    cta: "Discuss consultancy needs",
  },
  {
    id: "monitoring-logistics",
    title: "Independent Monitoring, Logistics & Freight Brokerage",
    summary:
      "Oversight and movement services that help projects and supply chains stay accountable, coordinated and efficient.",
    highlight: "Includes independent project monitoring and MVT verification.",
    items: [
      "Independent project monitoring",
      "MVT verification",
      "Logistics management consultancy",
      "Freight brokerage and shipment coordination",
      "Coordination support for trading and supply movements",
    ],
    cta: "Talk to us about monitoring or logistics",
  },
  {
    id: "agriculture-mining-digital",
    title: "Agriculture, Mining & Digital Platforms",
    summary:
      "Commodity sourcing and supply, a mining pipeline, and digital platforms that support service delivery and access.",
    highlight: "Mining: Coming Soon.",
    items: [
      "Agriculture commodity sourcing and supply: maize, soya beans, groundnuts, beans, rice, etc.",
      "Mining (Coming Soon)",
      "Digital platforms: FixCycle, MobiLink and Lala",
    ],
    cta: "Explore opportunities",
  },
];

/** Agriculture commodities (explicit list for pages). */
export const agricultureCommodities = [
  "Maize",
  "Soya beans",
  "Groundnuts",
  "Beans",
  "Rice",
  "Other agricultural commodities (on enquiry)",
];

/** Digital platforms / solutions portfolio. */
export const platforms = [
  {
    id: "fixcycle",
    tag: "Service Platform",
    title: "FixCycle",
    text: "A platform connecting customers with service providers for repairs, maintenance and related services.",
    href: "/fixcycle",
    external: false,
  },
  {
    id: "mobilink",
    tag: "Mobility & Logistics",
    title: "MobiLink",
    text: "A mobility and parcel-delivery platform supporting efficient movement of people and goods.",
    href: "https://eilzm.com/",
    external: true,
  },
  {
    id: "lala",
    tag: "Accommodation Platform",
    title: "Lala",
    text: "A booking platform for accessible accommodation options.",
    href: "https://www.lalabookings.com/",
    external: true,
  },
];

/** FixCycle reference info kept for existing FixCycle pages/components. */
export const fixcycleWeb = {
  url: "https://fixcyclepro.onrender.com/",
  status: "Under development",
  tagline: "Mobility · Delivery · Services",
  summary:
    "FixCycle is part of our digital platforms portfolio. A browser version is available for preview while development continues.",
  desktopShot: "/fixcycle-web-desktop.png",
  mobileShot: "/fixcycle-web-mobile.png",
  pillars: [
    {
      title: "Service access",
      text: "Connect customers with service providers for repairs and maintenance needs.",
    },
    {
      title: "Platform convenience",
      text: "Digital access to request and coordinate services.",
    },
    {
      title: "Part of our portfolio",
      text: "One of the digital platforms developed and supported by Ecotech Innovations.",
    },
  ],
};

// Compatibility exports for existing pages (kept lightweight / repurposed)
export const impactGoals = [
  { label: "Trading & supply reliability", value: 100, caption: "Core focus" },
  { label: "Compliance support coverage", value: 100, caption: "PACRA, ZRA, NAPSA, NHIMA, Workers Compensation, CEEC, etc." },
  { label: "Monitoring & MVT verification", value: 100, caption: "Independent oversight services" },
  { label: "Mining operations", value: 10, caption: "Coming Soon" },
];

export const volunteerRoles = [] as const;
export const volunteerBenefits = [] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export const contactSubjects = [
  "General enquiry",
  "Wholesale trading & supply",
  "Cement (Chilanga Cement PLC)",
  "Fuels and acids",
  "Vehicle importation",
  "Consumer & household goods",
  "Agriculture commodity sourcing & supply",
  "Business consultancy & compliance",
  "Independent project monitoring / MVT verification",
  "Logistics management consultancy",
  "Freight brokerage",
  "Mining (Coming Soon)",
  "Digital platforms (FixCycle, MobiLink, Lala)",
  "Partnership enquiry",
];