"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "fr" | "en";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (stored === "fr" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l);
    }
  };

  const t = (key: string): string => {
    const dict = translations[locale];
    return dict[key] ?? translations.fr[key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

const translations: Record<Locale, Record<string, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.profiles": "Profils",
    "nav.projects": "Projets",
    "nav.datalab": "Data Lab",
    "nav.journey": "Parcours",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "hero.tagline": "I build systems. I connect worlds.",
    "hero.role": "Full Stack · Data Engineering · Cloud & DevOps",
    "hero.also": "Également : Product Owner junior · Business Analyst · Gestion de projet IT",
    "hero.available": "Disponible : stage de 4 à 6 mois dès avril 2027 · Alternance dès septembre 2027",
    "hero.explore": "Explorer les projets",
    "hero.resume": "Consulter le CV",
    "hero.scroll": "Défiler",

    "profiles.title": "Un parcours, plusieurs rôles",
    "profiles.subtitle": "Cinq profils, une même ingénieure",
    "profiles.viewRelated": "Voir les projets liés",
    "profiles.po.title": "Product Owner junior",
    "profiles.ba.title": "Business Analyst",
    "profiles.fullstack.title": "Développement Full Stack",
    "profiles.data.title": "Data Engineering & Analytics",
    "profiles.cloud.title": "Cloud & DevOps",
    "profiles.po.desc": "Je clarifie les besoins, je priorise et je fais le lien entre les utilisateurs et l'équipe technique. Cadrage, spécifications, backlog, parcours utilisateurs et maquettes Figma.",
    "profiles.ba.desc": "Je questionne les besoins, je structure l'information et je transforme des demandes complexes en spécifications claires et exploitables, avec une bonne base en SQL et en API.",
    "profiles.fullstack.desc": "Applications web et API : React, Next.js, Node.js, Laravel, bases relationnelles, déploiement conteneurisé.",
    "profiles.data.desc": "Pipelines de données, SQL, Python, ELT, modélisation et visualisation avec Power BI, autour de gros volumes de données (projet NYC Taxi, en cours).",
    "profiles.cloud.desc": "Docker, CI/CD avec GitHub Actions, supervision avec Prometheus et Grafana, bases de données conteneurisées.",
    "profiles.tag.po": "Produit",
    "profiles.tag.ba": "Analyse",
    "profiles.tag.fullstack": "Développement",
    "profiles.tag.data": "Data",
    "profiles.tag.cloud": "Cloud & DevOps",

    "about.title": "À propos",
    "about.subtitle": "Une vision, trois univers",
    "about.intro": "Étudiante en Master 1 Ingénierie des Données à 3iL Ingénieurs (Limoges) depuis septembre 2026. Mon parcours : un Bachelor en développement Full Stack (IUC / 3iL) et un DEC en Informatique, génie logiciel (IUC / CCNB). Développeuse Full Stack, je me spécialise en data engineering : architectures de données, modélisation, chaînes de livraison automatisées, MLOps et cloud.",
    "about.fullstack.title": "Développement Full Stack",
    "about.fullstack.desc": "Conception et développement d'applications web et d'API. Interfaces React, back-end Node.js et Laravel, bases de données relationnelles.",
    "about.data.title": "Data Engineering",
    "about.data.desc": "Architectures de données, modélisation, pipelines. Python et SQL avancé en apprentissage actif. Objectif : rejoindre une équipe data.",
    "about.cloud.title": "Cloud & DevOps",
    "about.cloud.desc": "Conteneurisation Docker, intégration continue avec GitHub Actions, supervision et journalisation. Pratiques CI/CD appliquées à des projets réels.",

    "projects.title": "Projets",
    "projects.subtitle": "Des idées en systèmes",
    "projects.filter.all": "Tous",
    "projects.filter.fullstack": "Full Stack",
    "projects.filter.data": "Data",
    "projects.filter.cloud": "Cloud & DevOps",
    "projects.viewDetail": "Voir la fiche",
    "projects.github": "Code source",
    "projects.repoSoon": "Dépôt GitHub bientôt disponible",
    "projects.back": "Retour à la galerie",
    "projects.problem": "Problématique",
    "projects.objective": "Objectif",
    "projects.features": "Fonctionnalités vérifiées",
    "projects.tech": "Technologies",
    "projects.learnings": "Enseignements",
    "projects.role": "Rôle",
    "projects.verified": "Vérifié sur GitHub",
    "projects.inProgress": "En cours",
    "projects.context": "Contexte",
    "projects.done": "Ce qui est déjà fait",
    "projects.nextSteps": "Prochaines étapes",
    "projects.productFraming": "Cadrage produit",
    "projects.myRole": "Mon rôle",
    "projects.stack": "Stack",

    "datalab.title": "Data Lab",
    "datalab.subtitle": "La donnée en mouvement",
    "datalab.desc": "Une représentation pédagogique du parcours de la donnée, de la collecte à la visualisation. Cette architecture cible illustre les étapes d'un pipeline data moderne.",
    "datalab.collect": "Collecte",
    "datalab.transform": "Transformation",
    "datalab.store": "Stockage",
    "datalab.analyze": "Analyse",
    "datalab.visualize": "Visualisation",
    "datalab.disclaimer": "Cette architecture est celle que j'applique dans mon projet NYC Taxi Azure Pipeline : un mois de données, environ 5 millions de lignes, en cours de construction.",
    "datalab.highlight.title": "NYC Taxi Azure Pipeline",
    "datalab.highlight.metricRows": "≈ 5 M de lignes",
    "datalab.highlight.metricMonth": "1 mois de données",
    "datalab.highlight.metricCloud": "Azure",

    "journey.title": "Parcours",
    "journey.subtitle": "Formation et expérience",
    "journey.education": "Formation",
    "journey.experience": "Expérience",
    "journey.interests": "Centres d'intérêt",

    "skills.title": "Compétences",
    "skills.subtitle": "Stack technique",
    "skills.dev": "Développement & API",
    "skills.db": "Bases de données",
    "skills.data": "Data & analyse",
    "skills.cloud": "Cloud, conteneurs & CI/CD",
    "skills.tools": "Outils de développement",
    "skills.office": "Bureautique & reporting",
    "skills.product": "Produit & gestion de projet",
    "skills.soft": "Compétences humaines",
    "skills.certifications": "Formations & certifications complémentaires",
    "skills.learning": "En apprentissage actif",
    "skills.acquired": "Acquis",
    "skills.level.intermediate": "Intermédiaire à avancé",

    "soft.teamwork.name": "Travail d'équipe",
    "soft.teamwork.desc": "Collaboration au quotidien avec développeurs et designers, via GitHub et GitLab.",
    "soft.listening.name": "Écoute",
    "soft.listening.desc": "Je prends le temps de comprendre les besoins avant de proposer une solution.",
    "soft.curiosity.name": "Curiosité",
    "soft.curiosity.desc": "J'apprends en construisant et je m'intéresse aux usages concrets de l'IA et de la donnée.",
    "soft.communication.name": "Communication",
    "soft.communication.desc": "Je clarifie les priorités et facilite les échanges entre utilisateurs et équipes techniques.",
    "soft.organization.name": "Sens de l'organisation",
    "soft.organization.desc": "Planification, suivi des tâches et des livrables, anticipation des échéances.",
    "soft.initiative.name": "Esprit d'initiative",
    "soft.initiative.desc": "Je propose des idées et je vais au bout des missions confiées.",
    "soft.adaptability.name": "Adaptabilité",
    "soft.adaptability.desc": "Parcours entre Cameroun, Canada et France, avec plusieurs langues de travail.",
    "soft.rigor.name": "Rigueur et persévérance",
    "soft.rigor.desc": "Attention à la qualité du résultat et fiabilité dans le suivi.",

    "contact.title": "Contact",
    "contact.subtitle": "Échangeons",
    "contact.desc": "Disponible pour un stage (4 à 6 mois) dès avril 2027 et une alternance dès septembre 2027 : Product Owner junior, Business Analyst, Data, Full Stack, Cloud & DevOps.",
    "contact.email": "Envoyer un email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",

    "footer.rights": "Tous droits réservés.",
    "footer.built": "Conçu et développé par Naelle Noutong Nangmo",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.profiles": "Profiles",
    "nav.projects": "Projects",
    "nav.datalab": "Data Lab",
    "nav.journey": "Journey",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.tagline": "I build systems. I connect worlds.",
    "hero.role": "Full Stack · Data Engineering · Cloud & DevOps",
    "hero.also": "Also: Junior Product Owner · Business Analyst · IT Project Management",
    "hero.available": "Available: 4–6-month internship from April 2027 · Apprenticeship from September 2027",
    "hero.explore": "Explore projects",
    "hero.resume": "View resume",
    "hero.scroll": "Scroll",

    "profiles.title": "One background, several roles",
    "profiles.subtitle": "Five profiles, one engineer",
    "profiles.viewRelated": "View related projects",
    "profiles.po.title": "Junior Product Owner",
    "profiles.ba.title": "Business Analyst",
    "profiles.fullstack.title": "Full Stack Development",
    "profiles.data.title": "Data Engineering & Analytics",
    "profiles.cloud.title": "Cloud & DevOps",
    "profiles.po.desc": "I clarify needs, set priorities and bridge users and the technical team. Framing, specifications, backlog, user journeys and Figma mockups.",
    "profiles.ba.desc": "I question needs, structure information and turn complex requests into clear, actionable specifications, with a solid grounding in SQL and APIs.",
    "profiles.fullstack.desc": "Web apps and APIs: React, Next.js, Node.js, Laravel, relational databases, containerized deployment.",
    "profiles.data.desc": "Data pipelines, SQL, Python, ELT, modeling and visualization with Power BI, around large data volumes (NYC Taxi project, in progress).",
    "profiles.cloud.desc": "Docker, CI/CD with GitHub Actions, monitoring with Prometheus and Grafana, containerized databases.",
    "profiles.tag.po": "Product",
    "profiles.tag.ba": "Analysis",
    "profiles.tag.fullstack": "Development",
    "profiles.tag.data": "Data",
    "profiles.tag.cloud": "Cloud & DevOps",

    "about.title": "About",
    "about.subtitle": "One vision, three universes",
    "about.intro": "Master's 1 student in Data Engineering at 3iL Ingénieurs (Limoges, France) since September 2026. My path: a Bachelor in Full Stack development (IUC / 3iL) and a DEC in Computer Science, software engineering (IUC / CCNB). A Full Stack developer specializing in data engineering: data architectures, modeling, automated delivery pipelines, MLOps and cloud.",
    "about.fullstack.title": "Full Stack Development",
    "about.fullstack.desc": "Design and development of web applications and APIs. React frontends, Node.js and Laravel backends, relational databases.",
    "about.data.title": "Data Engineering",
    "about.data.desc": "Data architectures, modeling, pipelines. Python and advanced SQL actively in progress. Goal: join a data team.",
    "about.cloud.title": "Cloud & DevOps",
    "about.cloud.desc": "Docker containerization, continuous integration with GitHub Actions, monitoring and logging. CI/CD practices applied to real projects.",

    "projects.title": "Projects",
    "projects.subtitle": "Ideas into systems",
    "projects.filter.all": "All",
    "projects.filter.fullstack": "Full Stack",
    "projects.filter.data": "Data",
    "projects.filter.cloud": "Cloud & DevOps",
    "projects.viewDetail": "View details",
    "projects.github": "Source code",
    "projects.repoSoon": "GitHub repo coming soon",
    "projects.back": "Back to gallery",
    "projects.problem": "Problem",
    "projects.objective": "Objective",
    "projects.features": "Verified features",
    "projects.tech": "Technologies",
    "projects.learnings": "Learnings",
    "projects.role": "Role",
    "projects.verified": "Verified on GitHub",
    "projects.inProgress": "In progress",
    "projects.context": "Context",
    "projects.done": "What's already done",
    "projects.nextSteps": "Next steps",
    "projects.productFraming": "Product framing",
    "projects.myRole": "My role",
    "projects.stack": "Stack",

    "datalab.title": "Data Lab",
    "datalab.subtitle": "Data in motion",
    "datalab.desc": "A pedagogical representation of the data journey, from collection to visualization. This target architecture illustrates the stages of a modern data pipeline.",
    "datalab.collect": "Collection",
    "datalab.transform": "Transformation",
    "datalab.store": "Storage",
    "datalab.analyze": "Analysis",
    "datalab.visualize": "Visualization",
    "datalab.disclaimer": "This is the architecture I am applying in my NYC Taxi Azure Pipeline project: one month of data, about 5 million rows, currently in progress.",
    "datalab.highlight.title": "NYC Taxi Azure Pipeline",
    "datalab.highlight.metricRows": "≈ 5 M rows",
    "datalab.highlight.metricMonth": "1 month of data",
    "datalab.highlight.metricCloud": "Azure",

    "journey.title": "Journey",
    "journey.subtitle": "Education and experience",
    "journey.education": "Education",
    "journey.experience": "Experience",
    "journey.interests": "Interests",

    "skills.title": "Skills",
    "skills.subtitle": "Tech stack",
    "skills.dev": "Development & APIs",
    "skills.db": "Databases",
    "skills.data": "Data & analysis",
    "skills.cloud": "Cloud, containers & CI/CD",
    "skills.tools": "Development tools",
    "skills.office": "Office & reporting",
    "skills.product": "Product & project management",
    "skills.soft": "Soft skills",
    "skills.certifications": "Complementary courses & certifications",
    "skills.learning": "Actively learning",
    "skills.acquired": "Acquired",
    "skills.level.intermediate": "Intermediate to advanced",

    "soft.teamwork.name": "Teamwork",
    "soft.teamwork.desc": "Daily collaboration with developers and designers, via GitHub and GitLab.",
    "soft.listening.name": "Listening",
    "soft.listening.desc": "I take the time to understand needs before proposing a solution.",
    "soft.curiosity.name": "Curiosity",
    "soft.curiosity.desc": "I learn by building and I am interested in the concrete uses of AI and data.",
    "soft.communication.name": "Communication",
    "soft.communication.desc": "I clarify priorities and ease communication between users and technical teams.",
    "soft.organization.name": "Organization",
    "soft.organization.desc": "Planning, tracking of tasks and deliverables, anticipation of deadlines.",
    "soft.initiative.name": "Initiative",
    "soft.initiative.desc": "I propose ideas and I carry my assignments through to the end.",
    "soft.adaptability.name": "Adaptability",
    "soft.adaptability.desc": "Path across Cameroon, Canada and France, with several working languages.",
    "soft.rigor.name": "Rigor and perseverance",
    "soft.rigor.desc": "Attention to the quality of the result and reliability in follow-up.",

    "contact.title": "Contact",
    "contact.subtitle": "Let's talk",
    "contact.desc": "Available for a 4–6-month internship from April 2027 and an apprenticeship from September 2027: Junior Product Owner, Business Analyst, Data, Full Stack, Cloud & DevOps.",
    "contact.email": "Send an email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",

    "footer.rights": "All rights reserved.",
    "footer.built": "Designed and built by Naelle Noutong Nangmo",
  },
};
