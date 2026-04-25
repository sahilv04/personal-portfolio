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
    company: "Infosys",
    role: "Specialist Programmer",
    period: "April 2021 — Present",
    location: "London, United Kingdom",
    summary:
      "Lead a team of around five engineers building and maintaining enterprise-level, highly responsive applications. Run scrum cadence, drive code review culture and own delivery quality across releases.",
    highlights: [
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
      "Led a team of around five engineers building enterprise applications in the financial domain. Owned scrum delivery and actively contributed to recruitment by running technical interviews.",
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
