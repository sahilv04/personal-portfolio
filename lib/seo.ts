import type { Metadata } from "next";
import { SITE_URL, personal } from "@/content/personal";

export const defaultKeywords = [
  "Sahil Verma",
  "Specialist Programmer",
  "Full Stack Engineer",
  "React Developer",
  "Angular Developer",
  "Node.js Developer",
  "AWS Certified Cloud Practitioner",
  "Corda Certified Developer",
  "R3 Corda",
  "Technical Lead",
  "Infosys",
  "London Developer",
  "Opensource Developer",
  "Enterprise Web Applications",
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
