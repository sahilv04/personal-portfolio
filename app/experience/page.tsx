import Section from "@/components/ui/Section";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Professional experience of Sahil Verma — Specialist Programmer at Infosys (London), Technical Lead at Webmob Software Solutions, and Software Developer at OATI on the Deal Entry product team.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Experience", href: "/experience" }])} />
      <Section
        eyebrow="Experience"
        title="A timeline of full stack engineering and technical leadership."
        description="From OATI's Deal Entry product, through Technical Lead at Webmob, to Specialist Programmer at Infosys in London — leading teams and shipping enterprise software."
      >
        <ExperienceTimeline />
      </Section>
      <CTA />
    </>
  );
}
