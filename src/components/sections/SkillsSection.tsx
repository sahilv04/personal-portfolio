import { SectionHeader } from '@/components/ui/SectionHeader';

const skillGroups = {
  Frontend: ['React', 'TypeScript', 'Redux', 'Angular', 'Responsive UI Architecture'],
  Backend: ['Node.js', 'Express', 'REST API Design', 'Integration Patterns'],
  Cloud: ['AWS', 'GCP', 'VM Deployments', 'Database Integration', 'Streaming Jobs'],
  Delivery: ['Scrum', 'Code Reviews', 'Team Leadership', 'Technical Interviews']
};

export function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <SectionHeader eyebrow="Stack" title="Technical Expertise" />
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <article key={group} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-slate-100">{group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-cyan-300/40 px-3 py-1 text-sm text-cyan-100">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
