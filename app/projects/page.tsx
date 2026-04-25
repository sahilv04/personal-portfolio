import Section from "@/components/ui/Section";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb } from "@/lib/jsonld";
import CTA from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected projects and case studies by Sahil Verma — enterprise platforms at Infosys, financial-domain apps at Webmob, the Deal Entry product at OATI, and ongoing opensource work.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }])} />
      <Section
        eyebrow="Selected work"
        title="Projects, case studies and the systems behind them."
        description="A focused set of platforms across enterprise applications, finance, the power sector and opensource — what was built, how it was led, and what shipped."
      >
        <ProjectsGrid />
      </Section>
      <CTA />
    </>
  );
}
