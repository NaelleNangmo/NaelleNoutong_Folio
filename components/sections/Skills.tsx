"use client";

import { useI18n } from "@/lib/i18n";
import { skillCategories, certifications } from "@/lib/data";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Code2, Database, BarChart3, Cloud, Wrench,
  Award, Loader2, CheckCircle2, type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, BarChart3, Cloud, Wrench,
};

export default function Skills() {
  const { t, locale } = useI18n();

  return (
    <SectionWrapper id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("skills.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/40 bg-card/30 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{t(cat.titleKey)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`group inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                        skill.level === "learning"
                          ? "border-accent/30 bg-accent/5 text-accent"
                          : "border-border/60 bg-secondary/30 text-foreground/80"
                      }`}
                    >
                      {skill.level === "learning" ? (
                        <Loader2 className="h-3 w-3 animate-spin-slow" style={{ animationDuration: "3s" }} />
                      ) : (
                        <CheckCircle2 className="h-3 w-3 text-primary/60" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-border/40 bg-card/30 p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/5">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">{t("skills.certifications")}</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between rounded-xl border border-border/40 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{cert.platform}</p>
                </div>
                <span
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${
                    cert.status === "completed"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {cert.status === "completed" ? (
                    <>
                      <CheckCircle2 className="h-3 w-3" />
                      {locale === "fr" ? "Terminé" : "Completed"}
                    </>
                  ) : (
                    <>
                      <Loader2 className="h-3 w-3" />
                      {locale === "fr" ? "En cours" : "In progress"}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 border-t border-border/30 pt-6 text-xs text-muted-foreground/70">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary/60" />
              {t("skills.acquired")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent/60" />
              {t("skills.learning")}
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
