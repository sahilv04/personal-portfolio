import { SITE_URL, personal } from "@/content/personal";
import { faqs } from "@/content/faq";
import type { FAQ } from "@/content/faq";
import { certifications } from "@/content/education";

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

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role,
  description: personal.summary,
  url: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: new URL("/sahil-verma.jpg", SITE_URL).toString(),
    contentUrl: new URL("/sahil-verma.jpg", SITE_URL).toString(),
    width: 897,
    height: 1200,
    caption: `${personal.name} — ${personal.role}`,
  },
  dateModified: BUILD_DATE,
  email: personal.email,
  address: { "@type": "Place", name: personal.location },
  worksFor: { "@type": "Organization", name: "Webmob Software Solutions" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Punjabi University, Patiala",
    url: "https://www.punjabiuniversity.ac.in/",
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
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "REST APIs",
    "MongoDB",
    "AWS",
    "Cloud computing",
    "R3 Corda",
    "Distributed ledgers",
    "Opensource",
    "Technical leadership",
    "Scrum",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: `${personal.name} — ${personal.role}`,
  inLanguage: "en",
  publisher: { "@type": "Person", name: personal.name },
  dateModified: BUILD_DATE,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${personal.name} — Full Stack Engineering & Technical Leadership`,
  url: SITE_URL,
  areaServed: "Worldwide",
  serviceType: [
    "React development",
    "Angular development",
    "Node.js development",
    "Cloud engineering on AWS",
    "Opensource development",
    "Technical leadership",
  ],
  provider: { "@type": "Person", name: personal.name },
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
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
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
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: `${personal.name} — ${personal.role}` },
    about: { "@type": "Person", name: personal.name, url: SITE_URL },
    dateModified: BUILD_DATE,
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
