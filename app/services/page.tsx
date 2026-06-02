import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FAQ from "@/components/sections/FAQ";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema, faqPageSchema } from "@/lib/jsonld";
import { servicesFaqs } from "@/content/faq";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "What I Do",
  description:
    "What Sahil Verma does — React and Angular development, Node.js and APIs, AWS cloud engineering, opensource development and technical leadership.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "What I Do", href: "/services" }])} />
      <JsonLd data={pageSchema({ type: "CollectionPage", name: "What Sahil Verma does", description: "React, Angular, Node.js, AWS cloud engineering, opensource and technical leadership.", path: "/services" })} />
      <JsonLd data={faqPageSchema(servicesFaqs)} />
      <Section
        eyebrow="What I do"
        title="What I do for product teams."
        description="React, Angular, Node.js, Cloud (AWS) and Opensource development — plus tech-lead craft for ~5-engineer teams under scrum."
      >
        <ServicesGrid />
      </Section>
      <Section eyebrow="FAQ" title="Common questions.">
        <FAQ items={servicesFaqs} />
      </Section>
      <CTA />
    </>
  );
}
