type JsonLdProps = { data: Record<string, unknown> };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sahil Verma',
        jobTitle: 'Technical Lead · Full Stack Developer',
        description:
          'Technical Lead and Full Stack Developer specializing in React, TypeScript, Node.js, and cloud-capable enterprise systems.',
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Sahil Verma Portfolio',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
      }}
    />
  );
}

export function FAQJsonLd({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  path,
  publishedAt,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: { '@type': 'Person', name: 'Sahil Verma' },
        datePublished: publishedAt,
        dateModified: publishedAt,
        mainEntityOfPage: `${baseUrl}${path}`,
      }}
    />
  );
}
