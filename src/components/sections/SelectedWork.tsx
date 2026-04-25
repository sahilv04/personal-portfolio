import { profile } from '@/data/profile';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function SelectedWork() {
  return (
    <section className="py-16" id="selected-work">
      <SectionHeader
        eyebrow="Selected Work"
        title="Representative Project Outcomes"
        description="Anonymized case-study style highlights based on real domains and responsibilities."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {profile.work.map((work) => (
          <GlassCard key={work.title}>
            <h3 className="text-lg font-semibold text-white">{work.title}</h3>
            <p className="mt-2 text-slate-300">{work.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
