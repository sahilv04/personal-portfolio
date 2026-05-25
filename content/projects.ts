export type Project = {
  slug: string;
  name: string;
  domain: string;
  tagline: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  outcomes: string[];
  year: string;
  accent: "violet" | "cyan" | "magenta" | "amber";
};

export const projects: Project[] = [
  {
    slug: "trade-confirmation-system-ciao",
    name: "Trade Confirmation System (CIAO)",
    domain: "Energy Trading · Fintech",
    tagline: "Trade confirmation management system for British Petroleum — send, receive and process inbound documents and contracts.",
    summary:
      "At Infosys, built the UI from scratch for CIAO, a trade confirmation management system enabling British Petroleum to send, receive and process inbound documents and contracts. Owned the React frontend end to end, maintained 80% unit test coverage, and led a 3-member team. Deployed via Jenkins and ROSA.",
    role: "Tech Lead — leading a team of 3",
    stack: ["ReactJS", "TypeScript", "SASS", "Jest", "Kendo UI", "Jenkins", "ROSA"],
    highlights: [
      "Developed the UI part of the application from scratch",
      "Maintained 80% unit test coverage",
      "Deployed using Jenkins and ROSA",
      "Led a team of 3 members",
    ],
    outcomes: [
      "Enabled BP to send, receive and process inbound contracts",
      "High-confidence releases backed by strong test coverage",
    ],
    year: "Infosys · 2021 — Present",
    accent: "cyan",
  },
  {
    slug: "ey-via",
    name: "EY VIA",
    domain: "Audit · Risk · Enterprise",
    tagline: "Virtual internal auditing platform for Ernst & Young.",
    summary:
      "Developed a virtual internal auditing platform for Ernst & Young, handling auditing, risk management and report generation based on various factors and calculations.",
    role: "Engineer · Infosys",
    stack: ["React JS", "JavaScript", "NodeJS", "PostgreSQL", "Jest", "SASS"],
    highlights: [
      "Built auditing and risk-management workflows",
      "Implemented report generation based on various factors and calculations",
    ],
    outcomes: [
      "Streamlined internal auditing for an enterprise client",
    ],
    year: "Infosys · 2021 — Present",
    accent: "magenta",
  },
  {
    slug: "sustainability-platform",
    name: "Sustainability Platform",
    domain: "Media · Sustainability",
    tagline: "The Economist Group's global initiative to advance discourse on sustainability among world leaders and businesses.",
    summary:
      "As a Digital Innovation Partner, Infosys powers The Economist Group's latest global initiative to advance discourse on sustainability among world leaders and businesses.",
    role: "Engineer · Infosys (Digital Innovation Partner)",
    stack: ["ReactJS", "NodeJS", "Next JS", "Express", "TypeScript", "Unit testing"],
    highlights: [
      "Built on ReactJS, NodeJS, Next JS and Express",
      "TypeScript across the stack with unit testing",
    ],
    outcomes: [
      "Public platform advancing global sustainability discourse",
    ],
    year: "Infosys · 2021 — Present",
    accent: "amber",
  },
  {
    slug: "enterprise-responsive-platform",
    name: "Enterprise Responsive Platform",
    domain: "Enterprise · Full Stack",
    tagline: "Highly responsive enterprise application powering daily operations for a global client.",
    summary:
      "Lead engineer and team lead on a large enterprise-grade web platform at Infosys. Built with React on the frontend and Node.js on the backend, deployed to cloud, and engineered for performance, accessibility and reliability across a wide user base. Delivered through a tight scrum cadence with code review culture and rigorous QA.",
    role: "Specialist Programmer · Tech Lead — leading a team of ~5 engineers",
    stack: ["React", "Node.js", "JavaScript", "TypeScript", "Cloud / AWS", "REST APIs", "Scrum"],
    highlights: [
      "Lead ~5 engineers across feature delivery, code review and incident response",
      "Architected highly responsive UI with strong performance budgets",
      "Cloud-deployed services with CI/CD and observability baked in",
      "Drove engineering standards — review checklists, PR culture, release rituals",
    ],
    outcomes: [
      "Reliable releases on a predictable scrum cadence",
      "Higher review quality and shared engineering standards across the team",
    ],
    year: "2021 — Present",
    accent: "violet",
  },
  {
    slug: "fintech-platform",
    name: "Fintech Enterprise Platform",
    domain: "Fintech · Enterprise",
    tagline: "Enterprise applications for the financial domain — built and shipped under scrum delivery.",
    summary:
      "As Technical Lead at Webmob Software Solutions, led a team of around five engineers delivering enterprise applications in the financial domain. Owned architecture, code review, sprint planning and recruitment — including conducting technical interviews. The work spanned production-grade React frontends and Node.js services, with strong focus on correctness in a regulated domain.",
    role: "Technical Lead — leading a 5-engineer team",
    stack: ["React", "Node.js", "JavaScript", "REST APIs", "MongoDB", "Scrum", "Code review"],
    highlights: [
      "Led 5-engineer team across multiple financial-domain applications",
      "Owned scrum delivery — planning, estimation, releases, retrospectives",
      "Conducted technical interviews and shaped the engineering hiring bar",
      "Set code review standards and enforced consistent engineering quality",
    ],
    outcomes: [
      "Predictable delivery on a regulated, high-correctness domain",
      "Strengthened the team through better hiring and review culture",
    ],
    year: "2019 — 2021",
    accent: "cyan",
  },
  {
    slug: "power-domain-deal-entry",
    name: "Power Domain — Deal Entry",
    domain: "Energy · Enterprise product",
    tagline: "Core Deal Entry product for power-sector clients at OATI.",
    summary:
      "Member of the core Deal Entry product team at Open Access Technology Pvt Ltd (OATI), a product company serving clients in the power and energy sector. Developed and maintained enterprise applications used by power-domain customers — sharpening fundamentals in production product engineering across a large, long-lived codebase.",
    role: "Software Developer — core product team",
    stack: ["JavaScript", "Enterprise web", "REST APIs", "SQL", "Power-sector domain"],
    highlights: [
      "Worked on the core Deal Entry product used by power-sector clients",
      "Developed and maintained enterprise applications across long-lived modules",
      "Earned production product engineering chops — debugging, performance, releases",
    ],
    outcomes: [
      "Shipped sustained improvements to a mission-critical product",
      "Built a strong foundation for later technical leadership roles",
    ],
    year: "2016 — 2018",
    accent: "amber",
  },
  {
    slug: "opensource-and-blog",
    name: "Opensource & Blogs",
    domain: "Opensource · Writing",
    tagline: "Opensource development and writing — fundamental lessons that change the core of how engineers think.",
    summary:
      "Active in opensource development across React, Node.js and cloud tooling. Writes long-form blog posts focused on fundamental empowerment — powerful lessons designed to shift the way readers approach engineering and life. The blog and opensource work are both invitations: read, fork, improve, share.",
    role: "Author & Maintainer",
    stack: ["React", "Node.js", "Open Source", "Cloud", "AWS", "Writing"],
    highlights: [
      "Maintains opensource projects and contributes upstream",
      "Writes practical, opinionated essays on engineering and craft",
      "Treats opensource and writing as the same discipline — shipping ideas",
    ],
    outcomes: [
      "A growing body of public work that lives outside any single employer",
      "Compounding learning — every article and PR sharpens the next one",
    ],
    year: "Ongoing",
    accent: "magenta",
  },
];
