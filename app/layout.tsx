import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    `${site.name} is a Zambian sustainability-driven technology company. ` +
    "We build smart, eco-friendly digital marketplaces like FixCycle that connect communities, " +
    "reduce carbon footprints, and drive Africa's green economy.",
  keywords: [
    "Ecotech Innovations",
    "FixCycle",
    "FixCycle Pro",
    "Zambia",
    "green technology",
    "sustainability",
    "Lusaka",
    "Ndola",
    "home services",
    "tech volunteers",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Zambian sustainability-driven technology: smart eco-friendly marketplaces, green logistics, agri-tech and research consultancy.",
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
