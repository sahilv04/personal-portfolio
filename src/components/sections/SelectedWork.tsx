import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';

export function SelectedWork() {
  return (
    <section className="py-16" id="work">
      <SectionHeader eyebrow="Portfolio" title="Selected Work" description="Anonymized case studies from enterprise delivery." />
      <div className="grid gap-6 md:grid-cols-2">
        {profile.selectedWork.map((project) => (
          <GlassCard key={project.title}>
            <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
            <p className="mt-2 text-slate-300">{project.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
