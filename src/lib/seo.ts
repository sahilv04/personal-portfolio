import type { Metadata } from 'next';
import { siteConfig } from './site';

type MetaProps = {
  title: string;
  description: string;
  path?: string;
};

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({ title, description, path = '/' }: MetaProps): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
