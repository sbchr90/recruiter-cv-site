export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  impact: string[];
  achievements?: string[];
};

export type ProjectItem = {
  title: string;
  architecture: string;
  outcome: string;
  githubRepo?: string;
};

export type SkillCluster = {
  area: string;
  items: string[];
};

export type TalkItem = {
  title: string;
  event: string;
  url: string;
  image?: string;
};

export type FeaturedRepoSummary = {
  fullName: string;
  summary: string;
};

export const profile = {
  name: "Sven Becher",
  title: "Specialist Solution Architect",
  titleQualifier: "Principal-Level",
  location: "Cologne Bonn Region, Germany",
  headline:
    "Principal-level architecture leader for enterprise zero trust and AI security programs, with a track record in major-account transformation, executive stakeholder alignment, and faster solution delivery using coding agents.",
  ctas: {
    linkedin: "https://www.linkedin.com/in/sven-becher-564243161/",
    email: "mailto:sven@svenbecher.com?subject=Recruiter%20Inquiry%20-%20Principal%20Architecture%20Role"
  },
  recentRecognition: "Most recent recognition: Quarterly Impact Award at Zscaler (2026), highlighted on",
  recentRecognitionUrl:
    "https://www.linkedin.com/posts/sven-becher-564243161_thanks-zscaler-and-especially-sebastian-helmer-activity-7439236116253196289-jxSZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACaoA1wBgo9CjnvuiovLgpVjQHIV1bvp6S8",
  snapshot: [
    { label: "Total experience", value: "10+ years" },
    { label: "Current level", value: "Principal" },
    { label: "Core domain", value: "Zero Trust + AI Security" },
    { label: "Enterprise focus", value: "Major Accounts" },
    { label: "Leadership signal", value: "Award-Winning" }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    company: "Zscaler",
    role: "Principal Product Specialist - Zero Trust Networking",
    period: "Sep 2025 - Present",
    impact: [
      "Lead strategic zero trust networking initiatives for enterprise security and cloud transformation programs.",
      "Translate advanced architecture concepts into executive-level business value and adoption outcomes.",
      "Support major-account stakeholders with product strategy and technical leadership across complex environments.",
      "Apply coding agents (including Claude and Cursor) in technical workflows to speed up solution iteration, content creation, and implementation guidance.",
      "Drive AI security conversations with customers as enterprise priorities shift toward safe AI adoption."
    ],
    achievements: ["Quarterly Impact Award (Mar 2026)"]
  },
  {
    company: "Zscaler",
    role: "Senior Sales Engineer - Major Accounts",
    period: "Aug 2024 - Sep 2025",
    impact: [
      "Drove major-account zero trust transformation engagements and roadmap execution.",
      "Aligned security architecture designs with customer business priorities and long-term modernization goals."
    ],
    achievements: ["Special Discretionary CEO Award"]
  },
  {
    company: "Zscaler",
    role: "Senior Sales Engineer",
    period: "Aug 2023 - Jul 2024",
    impact: [
      "Delivered technical leadership for enterprise opportunities in network and cloud security transformation.",
      "Earned recognition for customer impact, including FY23 President's Club and EMEA SE of the Quarter."
    ],
    achievements: ["FY23 President's Club", "EMEA SE of the Quarter"]
  },
  {
    company: "Zscaler",
    role: "Sales Engineer",
    period: "Jan 2022 - Sep 2023",
    impact: [
      "Supported security modernization programs with zero trust architecture guidance and proof-driven adoption.",
      "Built strong outcomes early in role progression, including Bootcamp MVP recognition."
    ],
    achievements: ["Bootcamp MVP"]
  },
  {
    company: "Bechtle",
    role: "Security Consultant",
    period: "Jul 2018 - Dec 2021",
    impact: [
      "Advised enterprise clients on security architecture and integration approaches across diverse environments.",
      "Delivered practical consulting outcomes for infrastructure modernization and risk reduction."
    ]
  },
  {
    company: "CYBERDYNE IT GmbH",
    role: "IT Specialist System Integration",
    period: "Sep 2015 - Jul 2018",
    impact: [
      "Built foundational expertise in systems integration, networking, and operational IT delivery.",
      "Established hands-on technical depth that now underpins enterprise architecture work."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "ZTB Assets Report (Python CLI)",
    architecture:
      "Built a Python CLI to authenticate against the Zero Trust Branch API, paginate discovered device inventory, normalize schema changes, and export CSV/HTML reporting outputs for operational workflows.",
    outcome:
      "Enabled repeatable and automation-friendly asset reporting for inventory snapshots, compliance evidence, and downstream analysis.",
    githubRepo: "sbchr90/ZTB-Assets-Report"
  },
  {
    title: "ZTB SNMP Poller (Python)",
    architecture:
      "Implemented a Python SNMP polling workflow for device telemetry collection with structured output handling for downstream monitoring and automation use cases.",
    outcome:
      "Improved repeatability of network signal collection and created a practical foundation for integrating SNMP insights into operational reporting flows.",
    githubRepo: "sbchr90/ZTB-SNMP-Poller"
  },
  {
    title: "AI-Assisted Solution Engineering Workflow",
    architecture:
      "Agent-supported workflow for architecture drafting, demo asset creation, and security-content production using coding assistants with human validation checkpoints.",
    outcome:
      "Reduced time-to-first-prototype and improved consistency of technical deliverables for customer-facing engagements."
  },
  {
    title: "Major Account Zero Trust Transformation Programs",
    architecture: "Identity-driven access models, policy-based segmentation, and phased migration from legacy perimeter controls.",
    outcome: "Accelerated enterprise adoption of modern security architecture while improving risk posture and user experience."
  },
  {
    title: "Security and Cloud Modernization Advisory",
    architecture: "Cross-domain architecture guidance spanning secure internet access, private access, workload protection, and digital experience visibility.",
    outcome: "Helped organizations align transformation strategy with measurable business and security outcomes."
  }
];

export const skills: SkillCluster[] = [
  { area: "Architecture", items: ["Zero Trust Networking", "AI Security", "Cloud Security", "Security Transformation"] },
  { area: "Agentic Engineering", items: ["Claude", "Cursor", "AI-Assisted Prototyping", "Human-in-the-Loop Validation"] },
  { area: "Go-To-Market", items: ["Major Accounts", "Sales Engineering", "Technical Discovery", "Value Mapping"] },
  { area: "Delivery", items: ["Integration", "Stakeholder Alignment", "Executive Communication", "Adoption Strategy"] }
];

export const featuredRepos: string[] = ["sbchr90/ZTB-Assets-Report", "sbchr90/ZTB-SNMP-Poller"];

export const featuredRepoSummaries: FeaturedRepoSummary[] = [
  {
    fullName: "sbchr90/ZTB-Assets-Report",
    summary: "Python CLI that exports Zero Trust Branch asset inventories into clean CSV/HTML reports for operational and compliance workflows."
  },
  {
    fullName: "sbchr90/ZTB-SNMP-Poller",
    summary: "Python-based SNMP poller that collects network device telemetry in a structured format for monitoring and automation use cases."
  }
];

export const featuredVideos: { id: string; title: string }[] = [
  {
    id: "OjsFIn1ZJFQ",
    title: "Featured YouTube Session"
  }
];

export const featuredTalks: TalkItem[] = [
  {
    title: "Vom Telearbeitsplatz zu secure work from anywhere",
    event: "kommune.digital.forum",
    url: "https://www.kommune-digital-forum.de/de/veranstaltungen/sicheres-und-zeitgemaesses-arbeiten-in-der-verwaltung"
  },
  {
    title: "Kampf der Ransomware! Wie Sie sich mit Zero Trust richtig schützen",
    event: "Foundry / COMPUTERWOCHE Webcast",
    url: "https://webcast.foundryco.com/content/kampf-der-ransomware"
  },
  {
    title: "Speaker contribution at ManuSec Munich 2026",
    event: "ManuSec Europe",
    url: "https://europe.manusecevent.com/agenda/",
    image: "/images/manusec-speaker.png"
  }
];
