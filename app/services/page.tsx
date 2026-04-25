import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Services from Sahil Verma — React and Angular development, Node.js and APIs, AWS cloud engineering, opensource development and technical leadership.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }])} />
      <Section
        eyebrow="Services"
        title="What I do for product teams."
        description="React, Angular, Node.js, Cloud (AWS) and Opensource development — plus tech-lead craft for ~5-engineer teams under scrum."
      >
        <ServicesGrid />
      </Section>
      <CTA />
    </>
  );
}
