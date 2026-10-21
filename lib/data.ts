export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: string;
  skills: { name: string; level: "acquired" | "learning" }[];
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

export interface Certification {
  name: string;
  platform: string;
  status: "completed" | "in-progress";
}

export const certifications: Certification[] = [
  { name: "Microsoft Learn", platform: "Microsoft", status: "completed" },
  { name: "Cours Coursera", platform: "Coursera", status: "completed" },
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
    title: { fr: "Master 1 Ingénierie des Données", en: "Master 1 Data Engineering" },
    place: { fr: "Groupe 3iL Ingénieurs, Limoges", en: "Groupe 3iL Ingénieurs, Limoges" },
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
    year: "Exp.",
    title: { fr: "Hes Digital Services", en: "Hes Digital Services" },
    place: { fr: "Développement Full Stack", en: "Full Stack development" },
    desc: {
      fr: "Développement Full Stack : modélisation et optimisation de schémas relationnels, réalisation de plus de 15 endpoints REST en Node.js/Laravel reliés à des interfaces React.",
      en: "Full Stack development: relational schema modeling and optimization, 15+ REST endpoints in Node.js/Laravel connected to React interfaces.",
    },
  },
];

export const languages = [
  { name: "Français", level: { fr: "Langue maternelle", en: "Native" } },
  { name: "English", level: { fr: "Courant", en: "Fluent" } },
  { name: "Deutsch", level: { fr: "Débutant", en: "Beginner" } },
  { name: "ภาษาไทย", level: { fr: "Intermédiaire", en: "Intermediate" } },
];

export const contactInfo = {
  email: "naellenangmo@gmail.com",
  github: "https://github.com/NaelleNangmo/NaelleNangmo",
  linkedin: "https://www.linkedin.com/in/naelle-nangmo-5450b7366",
  portfolio: "https://naellenangmo.github.io/",
};
