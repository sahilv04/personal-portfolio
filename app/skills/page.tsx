import Section from "@/components/ui/Section";
import SkillsGrid from "@/components/sections/SkillsGrid";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Skills",
  description:
    "Technical skills of Sahil Verma — React, Angular, TypeScript, Node.js, Express, MongoDB, AWS (Cloud Practitioner, Solutions Architect Associate, AI Practitioner), Azure Fundamentals, R3 Corda (Certified Developer), Docker and Opensource.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Skills", href: "/skills" }])} />
      <JsonLd data={pageSchema({ type: "CollectionPage", name: "Skills of Sahil Verma", description: "Frontend (React, Angular), backend (Node.js), cloud (AWS), distributed ledgers (R3 Corda).", path: "/skills" })} />
      <Section
        eyebrow="Skills"
        title="A full stack toolkit, sharpened on enterprise code."
        description="Frontend (React, Angular), backend (Node.js, REST), cloud (AWS), distributed ledgers (R3 Corda) and the leadership rituals around them."
      >
        <SkillsGrid />
      </Section>
      <CTA />
    </>
  );
}
