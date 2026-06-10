import Section from "@/components/ui/Section";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema, itemListSchema } from "@/lib/jsonld";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/content/personal";
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
      <JsonLd data={pageSchema({ type: "CollectionPage", name: "Projects by Sahil Verma", description: "Selected projects and case studies — enterprise platforms, financial-domain apps and opensource work.", path: "/projects" })} />
      <JsonLd
        data={itemListSchema({
          name: "Projects by Sahil Verma",
          description: "Enterprise platforms across finance, power, audit, media and opensource.",
          items: projects.map((p) => ({
            name: p.name,
            url: new URL(`/projects#${p.slug}`, SITE_URL).toString(),
            description: p.tagline,
          })),
        })}
      />
      <Section
        index="03"
        relief="dodeca"
        titleAs="h1"
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
