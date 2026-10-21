"use client";

import { useI18n } from "@/lib/i18n";
import { contactInfo } from "@/lib/data";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail, Github, Linkedin, Globe, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();

  const links = [
    {
      icon: Mail,
      label: t("contact.email"),
      href: `mailto:${contactInfo.email}`,
      value: contactInfo.email,
      color: "#72E6FF",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      href: contactInfo.linkedin,
      value: "naelle-nangmo",
      color: "#72E6FF",
    },
    {
      icon: Github,
      label: t("contact.github"),
      href: contactInfo.github,
      value: "NaelleNangmo",
      color: "#A78BFA",
    },
    {
      icon: Globe,
      label: t("contact.portfolio"),
      href: contactInfo.portfolio,
      value: "naellenangmo.github.io",
      color: "#A78BFA",
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("contact.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("contact.desc")}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-6 transition-all hover:border-primary/30"
              >
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
                  style={{ background: link.color }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl border transition-all"
                  style={{
                    borderColor: `${link.color}40`,
                    background: `${link.color}10`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: link.color }} />
                </div>
                <div className="relative flex-1">
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="relative h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
