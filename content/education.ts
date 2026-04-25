export type Degree = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
  url?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  description?: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
};

export const degrees: Degree[] = [
  {
    institution: "Punjabi University, Patiala",
    degree: "B.Tech in Computer Engineering",
    period: "2016 — 2020",
    location: "Patiala, India",
    highlights: [
      "Studied core software engineering subjects: Data Structures, Algorithms, DBMS, Operating Systems and Computer Architecture",
      "Part of the organizing and discipline committee of the techno-cultural fest at university level",
    ],
    url: "https://www.punjabiuniversity.ac.in/",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    description: "Validates the ability to design, deploy and operate AI/ML workloads on AWS.",
    issued: "Sep 2024",
    expires: "Sep 2027",
    credentialId: "4a80cde2dc594f5fbad19300b2261802",
  },
  {
    name: "AWS Certified AI Practitioner — Early Adopter",
    issuer: "Amazon Web Services",
    description: "Recognised as an early adopter of the AWS AI Practitioner certification track.",
    issued: "Sep 2024",
    credentialId: "2bf30d28-5346-4882-94f0-f3be1bf14651",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    description: "Foundational knowledge of AI and ML concepts and related Microsoft Azure services.",
    issued: "Aug 2024",
    credentialId: "80D3EFD94D9C98CF",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    description: "Designing and deploying scalable, highly available systems on AWS.",
    issued: "Jul 2024",
    expires: "Jul 2027",
    credentialId: "0949b90a-3a81-41d0-ae3e-cdea78720deb",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    description: "Foundational understanding of Azure cloud services, pricing, support and security.",
    issued: "Jul 2024",
    credentialId: "B0742C5A5FA1CF0B",
  },
  {
    name: "Zero to Merge",
    issuer: "Infosys",
    description: "Internal Infosys engineering programme covering production-grade development and code-merge readiness.",
    issued: "Jul 2024",
    credentialId: "HM9RDXK1MC",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational AWS certification covering cloud concepts, services, security and architecture.",
    issued: "Jan 2023",
    expires: "Jan 2026",
    credentialId: "a6c951ff-f802-4122-8d53-c620c83288cc",
  },
  {
    name: "Corda Certified Developer",
    issuer: "R3",
    description: "Developer certification for the Corda distributed ledger platform — CorDapp design and implementation.",
    issued: "Oct 2019",
    credentialId: "7cc39002-3bc1-4f1c-9b21-b111aef6981e",
  },
  {
    name: "Infosys Certified React Native Developer",
    issuer: "Infosys",
    description: "Internal Infosys certification for cross-platform mobile development with React Native.",
  },
];
