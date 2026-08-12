import type { Metadata, Viewport } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Tint the mobile browser chrome (status bar / URL bar) to match the site.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2233" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ecotech Innovations Limited | Trade, Sourcing, Freight, Compliance & Green Tech — Zambia",
    template: `%s | ${site.name}`,
  },
  description:
    "Ecotech Innovations Limited (EIL) is a Zambian company offering export & import trading, " +
    "strategic sourcing & procurement, freight brokerage, business registration & compliance, " +
    "plus green-tech platforms like FixCycle serving households across Zambia.",
  keywords: [
    "Ecotech Innovations",
    "FixCycle",
    "FixCycle Pro",
    "Zambia",
    "export import trading Zambia",
    "strategic sourcing & procurement",
    "freight brokerage",
    "business registration Zambia",
    "PACRA registration",
    "NAPSA registration",
    "NHIMA registration",
    "green technology",
    "green logistics",
    "agri-tech",
    "sustainability",
    "Lusaka",
    "Ndola",
    "home services",
    "tech volunteers",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ecotech Innovations Limited | Trade, Sourcing, Freight, Compliance & Green Tech — Zambia",
    description:
      "Zambian company delivering export/import trade, sourcing & procurement, freight brokerage, and business consultancy — alongside green-tech marketplaces for households.",
    type: "website",
    locale: "en_ZM",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Apply theme before first paint to avoid a flash of the wrong mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('ecotech-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-surface font-sans text-brand-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-green focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
