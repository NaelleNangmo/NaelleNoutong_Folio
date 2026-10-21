"use client";

import { useI18n } from "@/lib/i18n";
import { contactInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const { t, locale } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/40">
                <span className="font-mono text-xs font-bold text-primary">N</span>
              </span>
              <span className="font-mono text-sm text-foreground/80">Naelle Noutong Nangmo</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {t("footer.built")} · © {year} · {t("footer.rights")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              aria-label="Portfolio"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border/30 pt-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-mono text-xs text-muted-foreground">
            {locale === "fr"
              ? "Full Stack · Data Engineering · Cloud & DevOps"
              : "Full Stack · Data Engineering · Cloud & DevOps"}
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            I build systems. I connect worlds.
          </p>
        </div>
      </div>
    </footer>
  );
}
