export default function Loading() {
  return (
    <div className="grid min-h-[60svh] place-items-center pt-24">
      <div className="flex items-center gap-3 text-ink-dim">
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-accent" />
        <span className="text-sm tracking-wide">Loading…</span>
      </div>
    </div>
  );
}
