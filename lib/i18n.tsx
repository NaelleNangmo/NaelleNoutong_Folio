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
    "nav.projects": "Projets",
    "nav.datalab": "Data Lab",
    "nav.journey": "Parcours",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    "hero.tagline": "I build systems. I connect worlds.",
    "hero.role": "Full Stack · Data Engineering · Cloud & DevOps",
    "hero.explore": "Explorer les projets",
    "hero.resume": "Consulter le CV",
    "hero.scroll": "Défiler",

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
    "projects.back": "Retour à la galerie",
    "projects.problem": "Problématique",
    "projects.objective": "Objectif",
    "projects.features": "Fonctionnalités vérifiées",
    "projects.tech": "Technologies",
    "projects.learnings": "Enseignements",
    "projects.role": "Rôle",
    "projects.verified": "Vérifié sur GitHub",

    "datalab.title": "Data Lab",
    "datalab.subtitle": "La donnée en mouvement",
    "datalab.desc": "Une représentation pédagogique du parcours de la donnée, de la collecte à la visualisation. Cette architecture cible illustre les étapes d'un pipeline data moderne.",
    "datalab.collect": "Collecte",
    "datalab.transform": "Transformation",
    "datalab.store": "Stockage",
    "datalab.analyze": "Analyse",
    "datalab.visualize": "Visualisation",
    "datalab.disclaimer": "Représentation conceptuelle d'une architecture cible. Les pipelines ETL/ELT complets sont en cours d'apprentissage.",

    "journey.title": "Parcours",
    "journey.subtitle": "Formation et expérience",
    "journey.education": "Formation",
    "journey.experience": "Expérience",

    "skills.title": "Compétences",
    "skills.subtitle": "Stack technique",
    "skills.dev": "Développement & API",
    "skills.db": "Bases de données",
    "skills.data": "Data & analyse",
    "skills.cloud": "Cloud, conteneurs & CI/CD",
    "skills.tools": "Outils de développement",
    "skills.certifications": "Certifications & formations",
    "skills.learning": "En apprentissage actif",
    "skills.acquired": "Acquis",

    "contact.title": "Contact",
    "contact.subtitle": "Échangeons",
    "contact.desc": "Disponible pour un stage, une alternance ou un premier poste en data engineering. N'hésitez pas à me contacter via les canaux ci-dessous.",
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
    "nav.projects": "Projects",
    "nav.datalab": "Data Lab",
    "nav.journey": "Journey",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.tagline": "I build systems. I connect worlds.",
    "hero.role": "Full Stack · Data Engineering · Cloud & DevOps",
    "hero.explore": "Explore projects",
    "hero.resume": "View resume",
    "hero.scroll": "Scroll",

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
    "projects.back": "Back to gallery",
    "projects.problem": "Problem",
    "projects.objective": "Objective",
    "projects.features": "Verified features",
    "projects.tech": "Technologies",
    "projects.learnings": "Learnings",
    "projects.role": "Role",
    "projects.verified": "Verified on GitHub",

    "datalab.title": "Data Lab",
    "datalab.subtitle": "Data in motion",
    "datalab.desc": "A pedagogical representation of the data journey, from collection to visualization. This target architecture illustrates the stages of a modern data pipeline.",
    "datalab.collect": "Collection",
    "datalab.transform": "Transformation",
    "datalab.store": "Storage",
    "datalab.analyze": "Analysis",
    "datalab.visualize": "Visualization",
    "datalab.disclaimer": "Conceptual representation of a target architecture. Full ETL/ELT pipelines are in active learning.",

    "journey.title": "Journey",
    "journey.subtitle": "Education and experience",
    "journey.education": "Education",
    "journey.experience": "Experience",

    "skills.title": "Skills",
    "skills.subtitle": "Tech stack",
    "skills.dev": "Development & APIs",
    "skills.db": "Databases",
    "skills.data": "Data & analysis",
    "skills.cloud": "Cloud, containers & CI/CD",
    "skills.tools": "Development tools",
    "skills.certifications": "Certifications & courses",
    "skills.learning": "Actively learning",
    "skills.acquired": "Acquired",

    "contact.title": "Contact",
    "contact.subtitle": "Let's talk",
    "contact.desc": "Available for an internship, work-study or first position in data engineering. Feel free to reach out through the channels below.",
    "contact.email": "Send an email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",

    "footer.rights": "All rights reserved.",
    "footer.built": "Designed and built by Naelle Noutong Nangmo",
  },
};
