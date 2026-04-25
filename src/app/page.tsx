import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { FAQJsonLd, JsonLd } from '@/components/ui/JsonLd';
import { profile } from '@/data/profile';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Sahil Verma — Technical Lead and Full Stack Developer',
  description:
    'Technical Lead portfolio showcasing React, TypeScript, Node.js, cloud architecture, leadership, and enterprise project delivery.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <FAQJsonLd faq={profile.faq} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Sahil Verma - Full Stack and Technical Leadership Services',
          provider: { '@type': 'Person', name: 'Sahil Verma' },
          areaServed: 'Global',
        }}
      />
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <SkillsSection />
      <SelectedWork />
      <ExperienceTimeline />
      <EducationSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
