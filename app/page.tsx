import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Marquee from "@/components/sections/Marquee";
import Section from "@/components/ui/Section";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SkillsGrid from "@/components/sections/SkillsGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { JsonLd, faqSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <Marquee />
      <AboutPreview />
      <Section
        eyebrow="Selected work"
        title="Enterprise platforms across finance, power and the cloud."
        description="A focused set of case studies from Infosys, Webmob and OATI — what I built, how I led and what shipped."
      >
        <ProjectsGrid limit={2} />
      </Section>
      <Section
        eyebrow="Skills"
        title="A full stack engineer's toolkit — frontend, backend, cloud."
        description="React and Angular, Node.js services, AWS cloud delivery, R3 Corda for distributed-ledger work."
      >
        <SkillsGrid />
      </Section>
      <Section
        eyebrow="Services"
        title="What I do for product teams."
        description="React, Angular, Node.js, Cloud (AWS) and Opensource development — plus technical leadership."
      >
        <ServicesGrid />
      </Section>
      <Section
        eyebrow="FAQ"
        title="Frequently asked"
        description="Quick answers for product leaders, founders and engineering managers."
      >
        <FAQ />
      </Section>
      <CTA />
    </>
  );
}
