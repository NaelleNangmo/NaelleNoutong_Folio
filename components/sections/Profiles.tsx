"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Compass,
  Search,
  Code2,
  Database,
  Cloud,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface ProfileCard {
  icon: LucideIcon;
  number: string;
  titleKey: string;
  descKey: string;
  tagKey: string;
  color: string;
  filter: "fullstack" | "data" | "cloud";
}

const profiles: ProfileCard[] = [
  {
    icon: Compass,
    number: "01",
    titleKey: "profiles.po.title",
    descKey: "profiles.po.desc",
    tagKey: "profiles.tag.po",
    color: "#72E6FF",
    filter: "fullstack",
  },
  {
    icon: Search,
    number: "02",
    titleKey: "profiles.ba.title",
    descKey: "profiles.ba.desc",
    tagKey: "profiles.tag.ba",
    color: "#A78BFA",
    filter: "data",
  },
  {
    icon: Code2,
    number: "03",
    titleKey: "profiles.fullstack.title",
    descKey: "profiles.fullstack.desc",
    tagKey: "profiles.tag.fullstack",
    color: "#72E6FF",
    filter: "fullstack",
  },
  {
    icon: Database,
    number: "04",
    titleKey: "profiles.data.title",
    descKey: "profiles.data.desc",
    tagKey: "profiles.tag.data",
    color: "#A78BFA",
    filter: "data",
  },
  {
    icon: Cloud,
    number: "05",
    titleKey: "profiles.cloud.title",
    descKey: "profiles.cloud.desc",
    tagKey: "profiles.tag.cloud",
    color: "#72E6FF",
    filter: "cloud",
  },
];

export default function Profiles() {
  const { t } = useI18n();

  const viewRelated = (filter: ProfileCard["filter"]) => {
    const projectsEl = document.getElementById("projects");
    if (!projectsEl) return;
    window.dispatchEvent(new CustomEvent("projects:filter", { detail: filter }));
    projectsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SectionWrapper id="profiles" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("profiles.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("profiles.title")}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-8 transition-all hover:border-primary/30"
              >
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
                  style={{ background: profile.color }}
                />
                <div className="relative mb-6 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all"
                    style={{
                      borderColor: `${profile.color}40`,
                      background: `${profile.color}10`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: profile.color }} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {profile.number}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">{t(profile.titleKey)}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {t(profile.descKey)}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
                  <span className="rounded-md border border-border/40 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {t(profile.tagKey)}
                  </span>
                  <button
                    onClick={() => viewRelated(profile.filter)}
                    className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    {t("profiles.viewRelated")}
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
