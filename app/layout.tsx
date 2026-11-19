import type { Metadata, Viewport } from "next";
import { Inter, Poppins, IBM_Plex_Mono } from "next/font/google";
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

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2e28" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Wholesale Trading, Consultancy & Solutions`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ecotech Innovations Limited",
    "wholesale trading Zambia",
    "Chilanga Cement PLC authorized agent",
    "cement supply Zambia",
    "fuels and acids supply",
    "importation of cars Zambia",
    "consumer goods and household items",
    "agriculture commodity sourcing",
    "maize soya beans groundnuts beans rice",
    "business consultancy Zambia",
    "PACRA registration",
    "ZRA compliance",
    "NAPSA registration",
    "NHIMA registration",
    "Workers Compensation",
    "CEEC compliance",
    "independent project monitoring and MVT verification",
    "logistics management consultancy",
    "freight brokerage Zambia",
    "mining coming soon",
    "FixCycle",
    "MobiLink",
    "Lala",
    "Lusaka",
    "Ndola",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
  openGraph: {
    title: `${site.name} | Wholesale Trading, Consultancy & Solutions`,
    description: site.description,
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
      className={`${inter.variable} ${poppins.variable} ${plexMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('ecotech-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-surface font-sans text-brand-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[2px] focus:bg-lime focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-forest-deep"
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
