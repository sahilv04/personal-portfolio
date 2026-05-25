export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Production-grade UI built for speed, scale and accessibility.",
    items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Redux", "Next.js", "Micro-Frontend Architecture", "SASS", "Kendo UI"],
  },
  {
    title: "Backend",
    blurb: "Pragmatic backend work that keeps the product moving.",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB", "SQL", "MS SQL Server", "PostgreSQL", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Cloud-native delivery — AWS Solutions Architect Associate, Cloud Practitioner and AI Practitioner; Azure Fundamentals + AI Fundamentals.",
    items: ["AWS", "Solutions Architect", "AI Practitioner", "Azure", "Jenkins", "Azure Pipelines", "CI/CD", "Docker", "Linux", "Observability"],
  },
  {
    title: "Tooling",
    blurb: "Build, test, deploy — boring infrastructure done right.",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "SonarQube", "Azure ADO", "Jira", "Trello", "Contentful", "Jest", "React Testing Library", "Cypress", "Webpack", "Vite", "VS Code"],
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
