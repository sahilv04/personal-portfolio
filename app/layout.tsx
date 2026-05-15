import type { Metadata, Viewport } from "next";
import { MedievalSharp } from "next/font/google";
import "./globals.css";

const medievalSharp = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/ui/CursorTrail";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd, personSchema, websiteSchema, professionalServiceSchema } from "@/lib/jsonld";
import { SITE_URL, personal } from "@/content/personal";

const SEO_TITLE = `${personal.name} — Fintech Full Stack Engineer · Technical Lead`;
const SEO_DESCRIPTION = `${personal.name} — Fintech-focused Full Stack Engineer & Technical Lead. R3 Corda Certified, AWS Certified (SAA, AI, CP). Leading teams at Webmob across React, Angular, Node.js & Cloud; previously Specialist Programmer at Infosys delivering for UK clients.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s · ${personal.name} — Fintech Engineer`,
  },
  description: SEO_DESCRIPTION,
  applicationName: `${personal.name} Portfolio`,
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  publisher: personal.name,
  keywords: [
    "Sahil Verma",
    "Sahil Verma Fintech",
    "Sahil Verma Technical Lead",
    "Sahil Verma R3 Corda",
    "Fintech Engineer",
    "Fintech Full Stack Engineer",
    "Blockchain Engineer",
    "Specialist Programmer",
    "Full Stack Engineer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "AWS Certified Cloud Practitioner",
    "Corda Certified Developer",
    "R3 Corda",
    "Infosys",
    "Webmob Software Solutions",
    "Technical Lead",
    "Opensource",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: `${personal.name}`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.role}, based in ${personal.location}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sahilv04",
    images: [
      {
        url: "/opengraph-image",
        alt: `${personal.name} — ${personal.role}, based in ${personal.location}`,
      },
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.svg" },
  verification: {
    other: {
      "msvalidate.01": "53693C8309BC4753CF83A989893E0951",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#060611",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${medievalSharp.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={professionalServiceSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <CursorTrail />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
