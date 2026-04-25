export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Production-grade UI built for speed, scale and accessibility.",
    items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Redux", "Next.js"],
  },
  {
    title: "Backend",
    blurb: "Pragmatic backend work that keeps the product moving.",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Cloud-native delivery — AWS Solutions Architect Associate, Cloud Practitioner and AI Practitioner; Azure Fundamentals + AI Fundamentals.",
    items: ["AWS", "Solutions Architect", "AI Practitioner", "Azure", "CI/CD", "Docker", "Linux", "Observability"],
  },
  {
    title: "Blockchain",
    blurb: "Distributed-ledger work — Corda Certified Developer (R3).",
    items: ["Corda", "R3", "CorDapps", "Distributed ledgers", "Smart contracts"],
  },
  {
    title: "Tooling",
    blurb: "Build, test, deploy — boring infrastructure done right.",
    items: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "Jest", "Cypress"],
  },
  {
    title: "Leadership",
    blurb: "Tech-lead craft across teams of around five engineers.",
    items: [
      "Team leadership",
      "Scrum & sprint planning",
      "Code review culture",
      "Technical interviewing",
      "Estimation & delivery",
      "Mentorship",
    ],
  },
];
