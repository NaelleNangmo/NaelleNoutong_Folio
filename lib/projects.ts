export type ProjectCategory = "fullstack" | "data" | "cloud";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  githubUrl: string;
  verified: boolean;
  problem: { fr: string; en: string };
  objective: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  technologies: string[];
  role: { fr: string; en: string };
  learnings?: { fr: string; en: string };
  status: { fr: string; en: string };
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "suivi-academic-backend",
    name: "suivi-academic-backend",
    category: "cloud",
    githubUrl: "https://github.com/NaelleNangmo/suivi-academic-backend",
    verified: true,
    accentColor: "#72E6FF",
    problem: {
      fr: "Besoin d'une API de suivi académique avec une chaîne de livraison automatisée incluant CI/CD, conteneurs et supervision.",
      en: "Need for an academic tracking API with an automated delivery pipeline including CI/CD, containers and monitoring.",
    },
    objective: {
      fr: "Premier projet test en Laravel visant à intégrer des pratiques DevOps : conteneurisation Docker, workflows GitHub Actions, journalisation et tests automatisés.",
      en: "First Laravel test project aiming to integrate DevOps practices: Docker containerization, GitHub Actions workflows, logging and automated testing.",
    },
    features: {
      fr: [
        "API Laravel (Framework PHP)",
        "Conteneurisation Docker avec configuration Nginx",
        "Workflows GitHub Actions pour l'intégration continue",
        "Supervision et journalisation configurées",
        "35 tests automatisés",
        "Base de données MySQL",
      ],
      en: [
        "Laravel API (PHP framework)",
        "Docker containerization with Nginx configuration",
        "GitHub Actions workflows for continuous integration",
        "Monitoring and logging configured",
        "35 automated tests",
        "MySQL database",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Docker", "GitHub Actions", "Nginx"],
    role: {
      fr: "Développeuse — conception et implémentation complète du projet, de l'API à la chaîne CI/CD.",
      en: "Developer — full design and implementation, from the API to the CI/CD pipeline.",
    },
    learnings: {
      fr: "Mise en pratique des concepts DevOps : conteneurisation, pipelines CI/CD, tests automatisés et supervision.",
      en: "Hands-on DevOps concepts: containerization, CI/CD pipelines, automated testing and monitoring.",
    },
    status: {
      fr: "Projet de formation — dépôt GitHub public",
      en: "Training project — public GitHub repository",
    },
  },
  {
    slug: "camwaterapp",
    name: "CamwaterApp",
    category: "fullstack",
    githubUrl: "https://github.com/NaelleNangmo/CamwaterApp",
    verified: true,
    accentColor: "#A78BFA",
    problem: {
      fr: "Application backend Laravel pour tester les connaissances sur les pipelines CI/CD, appliquée à un domaine de facturation d'eau.",
      en: "Laravel backend application to test CI/CD pipeline knowledge, applied to a water billing domain.",
    },
    objective: {
      fr: "Mettre en pratique les concepts de CI/CD via une application de facturation d'eau avec gestion des abonnés, factures par tranches de consommation et journal de traçabilité.",
      en: "Practice CI/CD concepts through a water billing application with subscriber management, tiered invoicing and an audit trail.",
    },
    features: {
      fr: [
        "Gestion des abonnés",
        "Factures générées par tranches de consommation",
        "Journal de traçabilité",
        "Configuration Docker",
        "Pipelines CI/CD avec GitHub Actions",
        "Base de données MySQL, Redis et MongoDB",
      ],
      en: [
        "Subscriber management",
        "Tiered consumption invoicing",
        "Audit trail logging",
        "Docker configuration",
        "CI/CD pipelines with GitHub Actions",
        "MySQL, Redis and MongoDB databases",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "MongoDB", "Docker", "GitHub Actions"],
    role: {
      fr: "Développeuse — conception et développement du backend et de la chaîne CI/CD.",
      en: "Developer — backend and CI/CD pipeline design and development.",
    },
    learnings: {
      fr: "Approfondissement des pipelines CI/CD et de la gestion multi-bases de données dans un contexte métier réel.",
      en: "Deepening CI/CD pipelines and multi-database management in a real business context.",
    },
    status: {
      fr: "Projet de formation — dépôt GitHub public",
      en: "Training project — public GitHub repository",
    },
  },
  {
    slug: "zommaapp",
    name: "ZommaApp",
    category: "fullstack",
    githubUrl: "https://github.com/NaelleNangmo/ZommaApp",
    verified: true,
    accentColor: "#72E6FF",
    problem: {
      fr: "Besoin d'une application centralisée de gestion des dépôts de boissons pour ZOMA SARL (Cameroun) : stocks, ventes, livraisons et gestion des rôles.",
      en: "Need for a centralized beverage depot management application for ZOMA SARL (Cameroon): stock, sales, deliveries and role management.",
    },
    objective: {
      fr: "Application complète Full Stack avec backend Node.js + Express + PostgreSQL et frontend Next.js 13 + TypeScript + Tailwind CSS.",
      en: "Full Stack application with Node.js + Express + PostgreSQL backend and Next.js 13 + TypeScript + Tailwind CSS frontend.",
    },
    features: {
      fr: [
        "Gestion des stocks de boissons",
        "Suivi des ventes",
        "Gestion des livraisons",
        "Système de rôles (Admin Global, Admin Dépôt, Vendeur, Livreur)",
        "Export CSV des rapports",
        "Frontend Next.js + TypeScript + Tailwind CSS",
        "Backend Node.js + Express + PostgreSQL",
      ],
      en: [
        "Beverage stock management",
        "Sales tracking",
        "Delivery management",
        "Role system (Global Admin, Depot Admin, Seller, Driver)",
        "CSV report export",
        "Next.js + TypeScript + Tailwind CSS frontend",
        "Node.js + Express + PostgreSQL backend",
      ],
    },
    technologies: ["Node.js", "Express", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
    role: {
      fr: "Développeuse Full Stack — conception et développement du backend et du frontend.",
      en: "Full Stack Developer — backend and frontend design and development.",
    },
    learnings: {
      fr: "Architecture Full Stack complète avec gestion des rôles, API REST et interface React.",
      en: "Complete Full Stack architecture with role management, REST API and React interface.",
    },
    status: {
      fr: "Projet applicatif — dépôt GitHub public",
      en: "Application project — public GitHub repository",
    },
  },
  {
    slug: "dora",
    name: "DORA",
    category: "cloud",
    githubUrl: "",
    verified: false,
    accentColor: "#A78BFA",
    problem: {
      fr: "Projet mentionné dans le CV, lié aux pratiques DevOps. Informations à confirmer.",
      en: "Project mentioned in the resume, related to DevOps practices. Information to be confirmed.",
    },
    objective: {
      fr: "Détails techniques à valider à partir des sources disponibles.",
      en: "Technical details to be validated from available sources.",
    },
    features: {
      fr: ["Mentionné dans le CV — fonctionnalités à confirmer"],
      en: ["Mentioned in the resume — features to be confirmed"],
    },
    technologies: ["À confirmer"],
    role: {
      fr: "À préciser",
      en: "To be specified",
    },
    status: {
      fr: "En attente de vérification",
      en: "Pending verification",
    },
  },
  {
    slug: "edusmart-cm",
    name: "EDUSMART-CM",
    category: "data",
    githubUrl: "",
    verified: false,
    accentColor: "#A78BFA",
    problem: {
      fr: "Projet mentionné dans le CV, lié au domaine éducatif. Informations à confirmer.",
      en: "Project mentioned in the resume, related to the education domain. Information to be confirmed.",
    },
    objective: {
      fr: "Détails techniques à valider à partir des sources disponibles.",
      en: "Technical details to be validated from available sources.",
    },
    features: {
      fr: ["Mentionné dans le CV — fonctionnalités à confirmer"],
      en: ["Mentioned in the resume — features to be confirmed"],
    },
    technologies: ["À confirmer"],
    role: {
      fr: "À préciser",
      en: "To be specified",
    },
    status: {
      fr: "En attente de vérification",
      en: "Pending verification",
    },
  },
];
