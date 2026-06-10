import { SITE_URL, personal } from "@/content/personal";
import { faqs } from "@/content/faq";
import type { FAQ } from "@/content/faq";
import { certifications } from "@/content/education";
import { services } from "@/content/services";
import { skillGroups } from "@/content/skills";

const monthMap: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

function toIso(date?: string) {
  if (!date) return undefined;
  const [m, y] = date.split(" ");
  const mm = monthMap[m];
  if (!mm || !y) return undefined;
  return `${y}-${mm}`;
}

const BUILD_DATE = new Date().toISOString().split("T")[0];

/* Stable node ids — every schema on the site links back to the same
   Person and WebSite entities so crawlers assemble one knowledge graph,
   not a pile of disconnected blobs. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_ID = `${SITE_URL}/#service`;

const personRef = { "@id": PERSON_ID };
const websiteRef = { "@id": WEBSITE_ID };

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: personal.name,
  givenName: "Sahil",
  familyName: "Verma",
  jobTitle: "Fintech Full Stack Engineer & Technical Lead",
  description: personal.summary,
  url: SITE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL },
  image: {
    "@type": "ImageObject",
    url: new URL("/sahil-verma.webp", SITE_URL).toString(),
    contentUrl: new URL("/sahil-verma.webp", SITE_URL).toString(),
    width: 897,
    height: 1200,
    caption: `${personal.name} — ${personal.role}`,
  },
  dateModified: BUILD_DATE,
  email: personal.email,
  nationality: { "@type": "Country", name: "India" },
  knowsLanguage: ["en", "hi", "pa"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandigarh",
    addressCountry: "IN",
  },
  homeLocation: { "@type": "Place", name: "Chandigarh, India" },
  workLocation: { "@type": "Place", name: "Chandigarh, India" },
  worksFor: {
    "@type": "Organization",
    name: "Webmob Software Solutions",
    url: "https://www.webmobinfotech.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Punjabi University, Patiala",
    url: "https://www.punjabiuniversity.ac.in/",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Technical Lead · Full Stack Engineer",
    occupationLocation: { "@type": "City", name: "Chandigarh" },
    skills: skillGroups.flatMap((g) => g.items).join(", "),
  },
  hasCredential: certifications.map((c) => {
    const cred: Record<string, unknown> = {
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: "Certification",
      recognizedBy: { "@type": "Organization", name: c.issuer },
    };
    const issued = toIso(c.issued);
    const expires = toIso(c.expires);
    if (issued) cred.dateCreated = issued;
    if (expires) cred.expires = expires;
    if (c.credentialId) cred.identifier = c.credentialId;
    return cred;
  }),
  sameAs: [
    personal.socials.github,
    personal.socials.linkedin,
    personal.socials.twitter,
    personal.socials.instagram,
    personal.blogUrl,
  ],
  knowsAbout: [
    "Fintech",
    "Financial technology",
    "Blockchain",
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "Micro-frontend architecture",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "AWS",
    "Amazon Web Services",
    "Microsoft Azure",
    "Cloud computing",
    "CI/CD",
    "Docker",
    "Jest",
    "Cypress",
    "Opensource",
    "Technical leadership",
    "Technical interviewing",
    "Scrum",
    "Agile software development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: `${personal.name} — ${personal.role}`,
  description: personal.metaDescription,
  inLanguage: "en",
  publisher: personRef,
  copyrightHolder: personRef,
  about: personRef,
  dateModified: BUILD_DATE,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SERVICE_ID,
  name: `${personal.name} — Full Stack Engineering & Technical Leadership`,
  url: SITE_URL,
  areaServed: "Worldwide",
  serviceType: services.map((s) => s.title),
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
  provider: personRef,
};

export function faqPageSchema(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const faqSchema = faqPageSchema(faqs);

type PageSchemaArgs = {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  name: string;
  description: string;
  path: string;
};

export function pageSchema({ type = "WebPage", name, description, path }: PageSchemaArgs) {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    inLanguage: "en",
    isPartOf: websiteRef,
    about: personRef,
    ...(type === "ProfilePage" || type === "AboutPage" ? { mainEntity: personRef } : {}),
    dateModified: BUILD_DATE,
  };
}

type ItemListArgs = {
  name: string;
  description?: string;
  items: Array<{ name: string; url: string; description?: string }>;
};

/** Collection pages (projects, articles, skills) as an ordered ItemList. */
export function itemListSchema({ name, description, items }: ItemListArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

type ArticleSchemaArgs = {
  title: string;
  description: string;
  slug: string;
  date: string;
  modified?: string;
  tags?: string[];
  image?: string;
  wordCount?: number;
  readingTimeMinutes?: number;
};

export function articleSchema({
  title,
  description,
  slug,
  date,
  modified,
  tags,
  image,
  wordCount,
  readingTimeMinutes,
}: ArticleSchemaArgs) {
  const url = new URL(`/articles/${slug}`, SITE_URL).toString();
  const imageUrl = new URL(image ?? "/opengraph-image", SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: date,
    dateModified: modified ?? date,
    author: personRef,
    publisher: personRef,
    isPartOf: websiteRef,
    image: imageUrl,
    inLanguage: "en",
    keywords: tags && tags.length > 0 ? tags.join(", ") : undefined,
    ...(wordCount ? { wordCount } : {}),
    ...(readingTimeMinutes ? { timeRequired: `PT${readingTimeMinutes}M` } : {}),
  };
}

export function breadcrumb(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
