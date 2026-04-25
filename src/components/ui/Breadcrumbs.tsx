import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? <Link href={item.href} className="hover:text-cyan-200">{item.label}</Link> : <span>{item.label}</span>}
            {i < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
