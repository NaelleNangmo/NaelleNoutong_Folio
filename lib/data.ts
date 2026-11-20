export type SkillLevel = "acquired" | "learning";

export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: string;
  skills: { name: string; level: SkillLevel; levelLabelKey?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "dev",
    titleKey: "skills.dev",
    icon: "Code2",
    skills: [
      { name: "Node.js", level: "acquired" },
      { name: "Express", level: "acquired" },
      { name: "NestJS", level: "acquired" },
      { name: "Laravel", level: "acquired" },
      { name: "C# / .NET", level: "acquired" },
      { name: "TypeScript", level: "acquired" },
      { name: "Angular", level: "acquired" },
      { name: "Next.js", level: "acquired" },
      { name: "React", level: "acquired" },
      { name: "Tailwind CSS", level: "acquired" },
      { name: "Flutter", level: "acquired" },
      { name: "Swagger", level: "acquired" },
    ],
  },
  {
    id: "db",
    titleKey: "skills.db",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "acquired" },
      { name: "MySQL", level: "acquired" },
      { name: "MongoDB", level: "acquired" },
      { name: "Redis", level: "acquired" },
      { name: "Modélisation relationnelle", level: "acquired" },
    ],
  },
  {
    id: "data",
    titleKey: "skills.data",
    icon: "BarChart3",
    skills: [
      { name: "Python", level: "learning" },
      { name: "SQL avancé", level: "learning" },
      { name: "ETL / ELT", level: "learning" },
      { name: "Pandas", level: "learning" },
      { name: "Power BI", level: "learning" },
    ],
  },
  {
    id: "cloud",
    titleKey: "skills.cloud",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "acquired" },
      { name: "GitHub Actions", level: "acquired" },
      { name: "CI/CD", level: "acquired" },
      { name: "Nginx", level: "acquired" },
      { name: "Monitoring / Logging", level: "acquired" },
      { name: "Git", level: "acquired" },
      { name: "Microsoft Azure", level: "learning" },
      { name: "Prometheus", level: "learning" },
      { name: "Grafana", level: "learning" },
    ],
  },
  {
    id: "office",
    titleKey: "skills.office",
    icon: "FileSpreadsheet",
    skills: [
      { name: "Word", level: "acquired", levelLabelKey: "skills.level.intermediate" },
      { name: "Excel", level: "acquired", levelLabelKey: "skills.level.intermediate" },
      { name: "Power BI", level: "learning" },
    ],
  },
  {
    id: "product",
    titleKey: "skills.product",
    icon: "KanbanSquare",
    skills: [
      { name: "Figma", level: "acquired" },
      { name: "Jira", level: "acquired" },
      { name: "Trello", level: "acquired" },
      { name: "GitHub Projects", level: "acquired" },
      { name: "Agile / Scrum", level: "acquired" },
      { name: "Kanban", level: "acquired" },
      { name: "Spécifications fonctionnelles", level: "acquired" },
      { name: "Parcours utilisateurs", level: "acquired" },
      { name: "Planification et suivi des livrables", level: "acquired" },
    ],
  },
  {
    id: "tools",
    titleKey: "skills.tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: "acquired" },
      { name: "Postman", level: "acquired" },
      { name: "pgAdmin", level: "acquired" },
      { name: "Linux", level: "acquired" },
    ],
  },
];

export interface SoftSkill {
  nameKey: string;
  descKey: string;
}

export const softSkills: SoftSkill[] = [
  { nameKey: "soft.teamwork.name", descKey: "soft.teamwork.desc" },
  { nameKey: "soft.listening.name", descKey: "soft.listening.desc" },
  { nameKey: "soft.curiosity.name", descKey: "soft.curiosity.desc" },
  { nameKey: "soft.communication.name", descKey: "soft.communication.desc" },
  { nameKey: "soft.organization.name", descKey: "soft.organization.desc" },
  { nameKey: "soft.initiative.name", descKey: "soft.initiative.desc" },
  { nameKey: "soft.adaptability.name", descKey: "soft.adaptability.desc" },
  { nameKey: "soft.rigor.name", descKey: "soft.rigor.desc" },
];

export interface Certification {
  name: string;
  platform: string;
  status: "completed" | "in-progress";
}

export const certifications: Certification[] = [
  { name: "Introduction to Microsoft Azure Data (DP-900T00-A)", platform: "Microsoft Learn", status: "completed" },
  { name: "Design and manage analytics solutions using Power BI", platform: "Microsoft Learn", status: "completed" },
  { name: "AI Fundamentals & Responsible AI Practices (2026)", platform: "Coursera", status: "completed" },
];

export interface JourneyItem {
  id: string;
  type: "education" | "experience";
  year: string;
  title: { fr: string; en: string };
  place: { fr: string; en: string };
  desc: { fr: string; en: string };
}

export const journeyItems: JourneyItem[] = [
  {
    id: "master",
    type: "education",
    year: "2026 —",
    title: {
      fr: "Master Expert en Architecture et Développement Logiciel",
      en: "Expert Master in Software Architecture and Development",
    },
    place: {
      fr: "Groupe 3iL, Limoges (2026–2028, en cours) — Parcours Ingénierie des Données, Cloud & DevOps (RNCP39765)",
      en: "Groupe 3iL, Limoges (2026–2028, in progress) — Data Engineering, Cloud & DevOps track (RNCP39765)",
    },
    desc: {
      fr: "Spécialisation en data engineering : architectures de données, modélisation, pipelines, MLOps et cloud.",
      en: "Specialization in data engineering: data architectures, modeling, pipelines, MLOps and cloud.",
    },
  },
  {
    id: "bachelor",
    type: "education",
    year: "2025 — 2026",
    title: { fr: "Bachelor en développement Full Stack", en: "Bachelor in Full Stack development" },
    place: { fr: "IUC / 3iL, partenariat", en: "IUC / 3iL partnership" },
    desc: {
      fr: "Formation en développement Full Stack : front-end, back-end, API, bases de données.",
      en: "Full Stack development training: frontend, backend, APIs, databases.",
    },
  },
  {
    id: "dec",
    type: "education",
    year: "2023 — 2025",
    title: { fr: "DEC en Informatique, génie logiciel", en: "DEC in Computer Science, software engineering" },
    place: { fr: "IUC / CCNB, partenariat", en: "IUC / CCNB partnership" },
    desc: {
      fr: "Formation en génie logiciel : programmation, conception, tests, méthodologies.",
      en: "Software engineering training: programming, design, testing, methodologies.",
    },
  },
  {
    id: "bac",
    type: "education",
    year: "2023",
    title: { fr: "Baccalauréat scientifique", en: "Scientific Baccalaureate" },
    place: { fr: "Cameroun", en: "Cameroon" },
    desc: {
      fr: "Baccalauréat scientifique — fondement du parcours en informatique.",
      en: "Scientific Baccalaureate — foundation of the computer science journey.",
    },
  },
  {
    id: "hes",
    type: "experience",
    year: "Mai 2025 – Août 2025",
    title: { fr: "Stagiaire en développement web", en: "Web development intern" },
    place: { fr: "Hes Digital Services", en: "Hes Digital Services" },
    desc: {
      fr: "Développement Full Stack : modélisation et optimisation de schémas relationnels, réalisation de plus de 15 endpoints REST en Node.js/Laravel reliés à des interfaces React. Participation à la conception d'une plateforme web de gestion d'entreprise ; maquettes UI/UX sur Figma ; intégration d'interfaces avec Next.js ; développement de fonctionnalités backend avec Node.js (inscription, connexion, authentification) ; collaboration via GitHub et GitLab.",
      en: "Full Stack development: relational schema modeling and optimization, 15+ REST endpoints in Node.js/Laravel connected to React interfaces. Contribution to the design of a business management web platform; UI/UX mockups in Figma; interface integration with Next.js; backend feature development with Node.js (registration, login, authentication); collaboration via GitHub and GitLab.",
    },
  },
];

export const languages = [
  { name: "Français", level: { fr: "Langue maternelle", en: "Native" } },
  { name: "English", level: { fr: "Courant", en: "Fluent" } },
  { name: "Deutsch", level: { fr: "Débutant", en: "Beginner" } },
  { name: "ภาษาไทย", level: { fr: "Intermédiaire", en: "Intermediate" } },
];

export const interests = [
  { fr: "Danse", en: "Dance" },
  { fr: "Musique", en: "Music" },
  { fr: "Voyage", en: "Travel" },
];

export const contactInfo = {
  email: "naellenangmo@gmail.com",
  github: "https://github.com/NaelleNangmo",
  linkedin: "https://www.linkedin.com/in/naelle-nangmo-5450b7366",
  portfolio: "https://naellenoutong-folio.vercel.app/",
};
