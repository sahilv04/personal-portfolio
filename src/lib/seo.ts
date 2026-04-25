import type { Metadata } from 'next';
import { siteConfig } from './site';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description
  },
  alternates: {
    canonical: '/'
  }
};

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      type: 'website'
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image'
    }
  };
}
