"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Code2, Database, Cloud, ArrowUpRight } from "lucide-react";

const universes = [
  {
    icon: Code2,
    titleKey: "about.fullstack.title",
    descKey: "about.fullstack.desc",
    color: "#72E6FF",
    glow: "shadow-primary/20",
  },
  {
    icon: Database,
    titleKey: "about.data.title",
    descKey: "about.data.desc",
    color: "#A78BFA",
    glow: "shadow-accent/20",
  },
  {
    icon: Cloud,
    titleKey: "about.cloud.title",
    descKey: "about.cloud.desc",
    color: "#72E6FF",
    glow: "shadow-primary/20",
  },
];

export default function About() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("about.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("about.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("about.intro")}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {universes.map((universe, i) => {
            const Icon = universe.icon;
            return (
              <motion.div
                key={universe.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-8 transition-all hover:border-primary/30"
              >
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
                  style={{ background: universe.color }}
                />
                <div className="relative mb-6 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all"
                    style={{
                      borderColor: `${universe.color}40`,
                      background: `${universe.color}10`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: universe.color }} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">{t(universe.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(universe.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
