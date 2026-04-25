import { SectionHeader } from '@/components/ui/SectionHeader';

const skillGroups = {
  Frontend: ['React', 'TypeScript', 'Redux', 'Angular', 'Responsive UI Architecture'],
  Backend: ['Node.js', 'Express', 'REST API design', 'Integration workflows'],
  Cloud: ['AWS', 'GCP', 'VM deployments', 'Database integration', 'Streaming jobs'],
  Leadership: ['Code reviews', 'Scrum delivery', 'Team leadership', 'Technical interviews'],
};

export function SkillsSection() {
  return (
    <section className="py-16" id="technical-expertise">
      <SectionHeader
        eyebrow="Technical Expertise"
        title="Modern Full-Stack and Cloud-Capable Engineering"
        description="Core technologies and engineering capabilities Sahil uses to deliver enterprise-grade products."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <article key={group} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-cyan-200">{group}</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-slate-200">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-white/20 px-3 py-1">{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
