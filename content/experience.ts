export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Webmob Software Solutions Pvt Ltd",
    role: "Technical Lead",
    period: "2024 — Present",
    location: "Chandigarh, India",
    summary:
      "Returned to Webmob to lead frontend architecture and delivery on enterprise-grade applications. Owning architecture, code review, sprint planning and team mentorship.",
    highlights: [
      "Lead frontend architecture across React, Next.js and TypeScript codebases",
      "Own estimation, sprint planning and delivery for cross-functional product teams",
      "Set engineering standards — review patterns, typing, release rituals",
      "Run client-facing technical conversations from scoping through demos",
    ],
  },
  {
    company: "Infosys",
    role: "Specialist Programmer",
    period: "April 2021 — 2024",
    location: "London, UK (on-site) · India",
    summary:
      "Led a team of around five engineers building and maintaining enterprise-level, highly responsive applications. A multi-year stretch was delivered on-site for UK clients in London — close to the business, in the same time zone, in the same room when it mattered.",
    highlights: [
      "Multi-year on-site delivery for UK clients in London",
      "Lead a team of ~5 engineers across feature delivery and incident response",
      "Architect and maintain enterprise-grade highly responsive applications",
      "Drive code review culture and engineering standards within the team",
      "Run scrum process — planning, estimation, demos and retrospectives",
    ],
  },
  {
    company: "Webmob Software Solutions Pvt Ltd",
    role: "Technical Lead",
    period: "Jan 2019 — April 2021",
    location: "Mohali, Punjab, India",
    summary:
      "First tenure at Webmob: led a team of around five engineers building enterprise applications in the financial domain. Owned scrum delivery and actively contributed to recruitment by running technical interviews.",
    highlights: [
      "Led ~5-engineer team delivering enterprise apps in the financial domain",
      "Ran scrum process end-to-end — sprint planning, estimation, releases",
      "Active contributor to hiring — conducted technical interviews",
      "Set engineering standards and reviewed PRs across the team",
    ],
  },
  {
    company: "Open Access Technology Pvt Ltd (OATI)",
    role: "Software Developer",
    period: "July 2016 — Dec 2018",
    location: "Mohali, Punjab, India",
    summary:
      "OATI is a product company building software for clients in the power domain. Worked on the core Deal Entry product team, developing and maintaining enterprise applications used by power-sector clients.",
    highlights: [
      "Member of the core Deal Entry product team",
      "Developed and maintained enterprise applications for power-domain clients",
      "Hardened skills in production-grade product engineering",
    ],
  },
];
