import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/ui/CursorTrail";
import { JsonLd, personSchema, websiteSchema, professionalServiceSchema } from "@/lib/jsonld";
import { SITE_URL, personal } from "@/content/personal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s · ${personal.name}`,
  },
  description: personal.metaDescription,
  applicationName: `${personal.name} Portfolio`,
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  publisher: personal.name,
  keywords: [
    "Sahil Verma",
    "Specialist Programmer",
    "Full Stack Engineer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "AWS Certified Cloud Practitioner",
    "Corda Certified Developer",
    "R3 Corda",
    "Infosys",
    "Technical Lead",
    "Opensource",
    "London Developer",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${personal.name} — ${personal.role}`,
    description: personal.metaDescription,
    siteName: `${personal.name}`,
  },
  twitter: { card: "summary_large_image", creator: "@sahilv04" },
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
    <html lang="en" className="dark">
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
      </body>
    </html>
  );
}
