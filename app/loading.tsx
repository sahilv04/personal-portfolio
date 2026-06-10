export default function Loading() {
  return (
    <div className="grid min-h-[60svh] place-items-center">
      <div className="flex items-center gap-3 text-ink-soft">
        <span className="inline-block h-2.5 w-2.5 animate-pulse bg-vermilion" />
        <span className="font-mono text-xs uppercase tracking-[0.3em]">Setting type…</span>
      </div>
    </div>
  );
}
