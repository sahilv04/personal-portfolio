import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ExperienceTimeline() {
  return (
    <section className="py-16" id="experience">
      <SectionHeader eyebrow="Career" title="Experience" />
      <ol className="space-y-6 border-l border-cyan-300/40 pl-6">
        {profile.experience.map((job) => (
          <li key={job.company + job.period}>
            <p className="text-sm uppercase tracking-wide text-cyan-200">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-100">
              {job.title} · {job.company}
            </h3>
            <p className="text-sm text-slate-400">{job.location}</p>
            <p className="mt-2 text-slate-300">{job.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
