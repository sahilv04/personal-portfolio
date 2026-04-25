export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-slate-300">{description}</p> : null}
    </div>
  );
}
