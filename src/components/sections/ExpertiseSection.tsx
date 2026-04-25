import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';

export function ExpertiseSection() {
  return (
    <section className="py-16" id="expertise">
      <SectionHeader
        eyebrow="What I Do"
        title="Technical Expertise"
        description="React, TypeScript, Node.js, Angular, and cloud delivery across enterprise projects."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {profile.whatIDo.map((item) => (
          <GlassCard key={item.title}>
            <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-slate-100">Leadership & Delivery</h3>
        <p className="mt-2 text-slate-300">
          Sahil has led teams of around five engineers, run code review workflows, followed scrum delivery models, and
          supported technical hiring.
        </p>
      </div>
    </section>
  );
}
