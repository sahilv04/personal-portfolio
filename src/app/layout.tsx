import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { defaultMetadata } from '@/lib/seo';
import { PersonJsonLd, WebsiteJsonLd } from '@/components/ui/JsonLd';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebsiteJsonLd />
        <PersonJsonLd />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
