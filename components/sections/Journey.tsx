"use client";

import { useI18n } from "@/lib/i18n";
import { journeyItems, languages } from "@/lib/data";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { GraduationCap, Briefcase, Languages } from "lucide-react";

export default function Journey() {
  const { t, locale } = useI18n();

  const education = journeyItems.filter((item) => item.type === "education");
  const experience = journeyItems.filter((item) => item.type === "experience");

  return (
    <SectionWrapper id="journey" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("journey.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("journey.title")}
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/5">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{t("journey.education")}</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-8 pl-12 last:mb-0"
                >
                  <div className="absolute left-2 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <p className="mb-1 font-mono text-xs text-primary/80">{item.year}</p>
                  <h4 className="mb-1 text-base font-semibold">{item.title[locale]}</h4>
                  <p className="mb-2 text-sm text-muted-foreground">{item.place[locale]}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground/80">
                    {item.desc[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/5">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{t("journey.experience")}</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-8 pl-12 last:mb-0"
                >
                  <div className="absolute left-2 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <p className="mb-1 font-mono text-xs text-accent/80">{item.year}</p>
                  <h4 className="mb-1 text-base font-semibold">{item.title[locale]}</h4>
                  <p className="mb-2 text-sm text-muted-foreground">{item.place[locale]}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground/80">
                    {item.desc[locale]}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border/40 bg-card/30 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/5">
                  <Languages className="h-4 w-4 text-primary" />
                </div>
                <h4 className="text-sm font-semibold">
                  {locale === "fr" ? "Langues" : "Languages"}
                </h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between rounded-lg border border-border/30 px-3 py-2"
                  >
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {lang.level[locale]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
