// Toggle this to true once the GitHub repository is published.
export const NYC_TAXI_REPO_PUBLISHED = false;
export const NYC_TAXI_REPO_URL = "https://github.com/NaelleNangmo/nyc-taxi-azure-pipeline";

export type ProjectCategory = "fullstack" | "data" | "cloud";

export interface ProjectDetailSection {
  titleKey: string;
  content: { fr: string; en: string };
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  githubUrl: string;
  /** When true, the GitHub button is shown as a real link. When false, a disabled "coming soon" button is shown. */
  repoPublished?: boolean;
  inProgress?: boolean;
  verified: boolean;
  /** Short description used on the gallery card. */
  problem: { fr: string; en: string };
  objective: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  technologies: string[];
  role: { fr: string; en: string };
  learnings?: { fr: string; en: string };
  status: { fr: string; en: string };
  accentColor: string;
  /** Optional custom ordered detail sections for the modal. Falls back to Problem/Objective/Features/Tech/Role/Learnings. */
  detailSections?: ProjectDetailSection[];
}

export const projects: Project[] = [
  {
    slug: "nyc-taxi-azure-pipeline",
    name: "nyc-taxi-azure-pipeline",
    category: "data",
    githubUrl: NYC_TAXI_REPO_URL,
    repoPublished: NYC_TAXI_REPO_PUBLISHED,
    inProgress: true,
    verified: false,
    accentColor: "#72E6FF",
    problem: {
      fr: "Pipeline data de bout en bout construit sur Azure à partir des données publiques de courses de taxis new-yorkais (NYC TLC Trip Records). Un mois de données déjà traité, soit environ 5 millions de lignes : ingestion, nettoyage, transformation (approche ELT) puis analyse et visualisation avec Power BI et Excel. Projet en cours de construction.",
      en: "End-to-end data pipeline built on Azure using public New York taxi trip records (NYC TLC Trip Record Data). One month of data already processed — about 5 million rows: ingestion, cleaning, transformation (ELT approach) then analysis and visualization with Power BI and Excel. Project currently in progress.",
    },
    objective: {
      fr: "Construire un pipeline data complet, de l'ingestion à la visualisation, en s'appuyant sur un jeu de données public réel et volumineux.",
      en: "Build a complete data pipeline, from ingestion to visualization, using a real, large public dataset.",
    },
    features: {
      fr: [
        "Ingestion des données publiques NYC TLC Trip Records",
        "Nettoyage et transformation (approche ELT)",
        "Environ 5 millions de lignes traitées sur un mois",
        "Analyse avec Power BI et Excel",
      ],
      en: [
        "Ingestion of public NYC TLC Trip Record data",
        "Cleaning and transformation (ELT approach)",
        "About 5 million rows processed over one month",
        "Analysis with Power BI and Excel",
      ],
    },
    technologies: ["Python", "SQL", "Azure", "ELT", "Power BI", "Excel"],
    role: {
      fr: "Développeuse data — conception et implémentation complète du pipeline.",
      en: "Data developer — full design and implementation of the pipeline.",
    },
    status: {
      fr: "Projet personnel en cours",
      en: "Personal project in progress",
    },
    detailSections: [
      {
        titleKey: "projects.context",
        content: {
          fr: "Pipeline data de bout en bout construit sur Azure à partir des données publiques de courses de taxis new-yorkais (NYC TLC Trip Records).",
          en: "End-to-end data pipeline built on Azure using public New York taxi trip records (NYC TLC Trip Record Data).",
        },
      },
      {
        titleKey: "projects.done",
        content: {
          fr: "Ingestion, nettoyage et transformation d'environ 5 millions de lignes sur un mois de données (approche ELT).",
          en: "Ingestion, cleaning and transformation of about 5 million rows over one month of data (ELT approach).",
        },
      },
      {
        titleKey: "projects.tech",
        content: { fr: "Python, SQL, Azure, ELT, Power BI, Excel.", en: "Python, SQL, Azure, ELT, Power BI, Excel." },
      },
      {
        titleKey: "projects.nextSteps",
        content: {
          fr: "Extension à davantage de données et tableaux de bord Power BI.",
          en: "Scaling to more data and Power BI dashboards.",
        },
      },
    ],
  },
  {
    slug: "edusmart-cm",
    name: "EDUSMART-CM",
    category: "data",
    githubUrl: "",
    verified: false,
    accentColor: "#A78BFA",
    problem: {
      fr: "Portail enseignant pour le MINESEC (Cameroun) couvrant la saisie des notes, la gestion des présences, les commentaires et la messagerie.",
      en: "Teacher portal for MINESEC (Cameroon) covering grade entry, attendance management, comments and messaging.",
    },
    objective: {
      fr: "Fournir un portail enseignant unifié couvrant les modules notes, présences, commentaires et messagerie, de la maquette au déploiement continu.",
      en: "Provide a unified teacher portal covering grades, attendance, comments and messaging modules, from mockup to continuous deployment.",
    },
    features: {
      fr: [
        "Saisie des notes",
        "Gestion des présences",
        "Commentaires",
        "Messagerie",
        "Maquette de l'interface sous Figma",
        "Développement React avec Vite",
        "Intégration et déploiement continus",
      ],
      en: [
        "Grade entry",
        "Attendance management",
        "Comments",
        "Messaging",
        "Interface mockup in Figma",
        "React development with Vite",
        "Continuous integration and deployment",
      ],
    },
    technologies: ["React", "Vite", "GitHub Actions", "Vercel", "Figma"],
    role: {
      fr: "Cheffe de projet et développeuse front-end : cadrage, maquette de l'interface, développement en React avec Vite, intégration et déploiement continus.",
      en: "Project lead and frontend developer: framing, interface mockup, React development with Vite, continuous integration and deployment.",
    },
    status: {
      fr: "Projet d'équipe",
      en: "Team project",
    },
    detailSections: [
      {
        titleKey: "projects.context",
        content: {
          fr: "Portail enseignant pour le MINESEC (Cameroun) couvrant la saisie des notes, la gestion des présences, les commentaires et la messagerie.",
          en: "Teacher portal for MINESEC (Cameroon) covering grade entry, attendance management, comments and messaging.",
        },
      },
      {
        titleKey: "projects.myRole",
        content: {
          fr: "Cheffe de projet et développeuse front-end : cadrage, maquette de l'interface, développement en React avec Vite, intégration et déploiement continus.",
          en: "Project lead and frontend developer: framing, interface mockup, React development with Vite, continuous integration and deployment.",
        },
      },
      {
        titleKey: "projects.productFraming",
        content: {
          fr: "Modules notes, présences, commentaires et messagerie ; maquette de l'interface.",
          en: "Grades, attendance, comments and messaging modules; interface mockup.",
        },
      },
      {
        titleKey: "projects.stack",
        content: {
          fr: "React, Vite, GitHub Actions, Vercel, Figma.",
          en: "React, Vite, GitHub Actions, Vercel, Figma.",
        },
      },
    ],
  },
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
      fr: "Délivrer une API de suivi académique fiable, conteneurisée et supervisée, intégrée à une chaîne CI/CD complète.",
      en: "Deliver a reliable, containerized and monitored academic tracking API, integrated into a full CI/CD pipeline.",
    },
    features: {
      fr: [
        "API Laravel (Framework PHP)",
        "Conteneurisation Docker avec configuration Nginx",
        "Workflows GitHub Actions pour l'intégration continue",
        "Supervision et journalisation configurées",
        "35 tests automatisés",
        "Base de données MySQL",
        "Pipeline CI/CD GitHub Actions",
        "Conteneurisation Docker",
        "Supervision Prometheus / Grafana",
      ],
      en: [
        "Laravel API (PHP framework)",
        "Docker containerization with Nginx configuration",
        "GitHub Actions workflows for continuous integration",
        "Monitoring and logging configured",
        "35 automated tests",
        "MySQL database",
        "GitHub Actions CI/CD pipeline",
        "Docker containerization",
        "Prometheus / Grafana monitoring",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Docker", "GitHub Actions", "Nginx", "Prometheus", "Grafana"],
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
    slug: "dora",
    name: "DORA",
    category: "cloud",
    githubUrl: "",
    verified: false,
    accentColor: "#A78BFA",
    problem: {
      fr: "Besoin d'une plateforme web d'immigration et de gestion des visas, de la maquette au déploiement conteneurisé.",
      en: "Need for a web platform for immigration and visa management, from mockup to containerized deployment.",
    },
    objective: {
      fr: "Concevoir et intégrer une plateforme d'immigration et de gestion des visas, conteneurisée avec Docker et déployée sur Railway.",
      en: "Design and integrate an immigration and visa management platform, containerized with Docker and deployed on Railway.",
    },
    features: {
      fr: [
        "Conception de pages de la maquette",
        "Intégration des interfaces en Next.js",
        "Architecture et backend Node.js",
        "Application conteneurisée avec Docker",
        "Déploiement sur Railway",
      ],
      en: [
        "Mockup page design",
        "Interface integration in Next.js",
        "Architecture and Node.js backend",
        "Application containerized with Docker",
        "Deployment on Railway",
      ],
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Figma", "Railway"],
    role: {
      fr: "Développeuse — design Figma, intégration front-end Next.js, contribution à l'architecture et au backend Node.js.",
      en: "Developer — Figma design, Next.js frontend integration, contribution to architecture and Node.js backend.",
    },
    status: {
      fr: "Projet applicatif en entreprise",
      en: "Enterprise application project",
    },
    detailSections: [
      {
        titleKey: "projects.context",
        content: {
          fr: "Plateforme web d'immigration et de gestion des visas, réalisée pendant mon stage chez Hes Digital Services.",
          en: "Web platform for immigration and visa management, built during my internship at Hes Digital Services.",
        },
      },
      {
        titleKey: "projects.myRole",
        content: {
          fr: "Design Figma, intégration front-end Next.js, contribution à l'architecture et développement backend Node.js.",
          en: "Figma design, Next.js frontend integration, contribution to architecture and Node.js backend development.",
        },
      },
      {
        titleKey: "projects.productFraming",
        content: {
          fr: "Compréhension des besoins, parcours utilisateurs, collaboration avec l'équipe via GitHub et GitLab.",
          en: "Requirements gathering, user journeys, collaboration with the team via GitHub and GitLab.",
        },
      },
      {
        titleKey: "projects.stack",
        content: {
          fr: "Next.js, Node.js, PostgreSQL, Docker, Figma, Railway.",
          en: "Next.js, Node.js, PostgreSQL, Docker, Figma, Railway.",
        },
      },
    ],
  },
  {
    slug: "camwaterapp",
    name: "CamwaterApp",
    category: "fullstack",
    githubUrl: "https://github.com/NaelleNangmo/CamwaterApp",
    verified: true,
    accentColor: "#A78BFA",
    problem: {
      fr: "Application backend Laravel pour gérer la facturation d'eau : abonnés, factures par tranches de consommation et traçabilité.",
      en: "Laravel backend application to manage water billing: subscribers, tiered consumption invoicing and traceability.",
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
];
