const ITEMS = [
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "Next.js",
  "AWS",
  "GraphQL",
  "MongoDB",
  "Micro-Frontends",
  "Technical Leadership",
  "Opensource",
  "Scrum Delivery",
];

/** Ink ticker tape running between hero and body — pure CSS loop. */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap px-6 font-mono text-xs uppercase tracking-[0.22em] text-paper"
        >
          <span aria-hidden className="mr-6 text-vermilion">✦</span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-3">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
