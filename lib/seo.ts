import type { Metadata } from "next";
import { SITE_URL, personal } from "@/content/personal";

export const defaultKeywords = [
  "Sahil Verma",
  "Specialist Programmer",
  "Full Stack Engineer",
  "Fintech Engineer",
  "Fintech Full Stack Engineer",
  "Fintech Developer",
  "Blockchain Engineer",
  "React Developer",
  "Angular Developer",
  "Node.js Developer",
  "AWS Certified Cloud Practitioner",
  "Technical Lead",
  "London Developer",
  "Opensource Developer",
  "Enterprise Web Applications",
  "MERN Stack Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "AWS Solutions Architect Associate",
  "AWS Certified AI Practitioner",
  "Chandigarh Developer",
  "Software Engineer India",
  "Micro Frontend Architecture",
  "Engineering Team Lead",
  "Hire Full Stack Engineer",
];

type BuildArgs = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path = "/", keywords = [] }: BuildArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: `${personal.name} — ${personal.role}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sahilv04",
    },
    robots: { index: true, follow: true },
  };
}
