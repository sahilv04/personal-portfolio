import { AboutSection } from '@/components/sections/AboutSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { FAQJsonLd } from '@/components/ui/JsonLd';

export default function HomePage() {
  return (
    <>
      <FAQJsonLd />
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <SelectedWork />
      <ExperienceTimeline />
      <EducationSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
