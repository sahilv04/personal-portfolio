export type Service = {
  title: string;
  blurb: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "React Development",
    blurb: "Production-grade React applications — components, state, performance, accessibility.",
    bullets: ["Architecture & design systems", "State management", "Performance & a11y"],
  },
  {
    title: "Angular Development",
    blurb: "Enterprise Angular apps with strong typing, modular architecture and testable code.",
    bullets: ["Modules & lazy routes", "RxJS data flows", "Testing & maintainability"],
  },
  {
    title: "Node.js & APIs",
    blurb: "Node.js services and REST APIs — pragmatic, observable, well-tested.",
    bullets: ["REST & service design", "MongoDB / SQL", "Auth, validation, logging"],
  },
  {
    title: "Cloud Engineering",
    blurb: "AWS-first cloud delivery — AWS Certified Cloud Practitioner.",
    bullets: ["AWS services & IAM", "CI/CD pipelines", "Cost & observability"],
  },
  {
    title: "Opensource Development",
    blurb: "Opensource contribution and authorship — public, reusable, maintained.",
    bullets: ["Library design & docs", "Community contribution", "Long-term maintenance"],
  },
  {
    title: "Technical Leadership",
    blurb: "Tech-lead craft — leading ~5-engineer teams through scrum delivery and review culture.",
    bullets: ["Scrum & estimation", "Code review culture", "Technical interviewing"],
  },
];
