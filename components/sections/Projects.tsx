"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { projects, Project, ProjectCategory } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowUpRight, ArrowLeft, Github, CheckCircle2, AlertCircle, X } from "lucide-react";

type Filter = "all" | ProjectCategory;

const filterCategories: { id: Filter; key: string }[] = [
  { id: "all", key: "projects.filter.all" },
  { id: "fullstack", key: "projects.filter.fullstack" },
  { id: "data", key: "projects.filter.data" },
  { id: "cloud", key: "projects.filter.cloud" },
];

export default function Projects() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("projects.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("projects.title")}
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat.id
                  ? "text-primary-foreground"
                  : "border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              style={filter === cat.id ? { background: "hsl(var(--primary))" } : {}}
            >
              {t(cat.key)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/40 bg-card/40 transition-all hover:border-primary/30"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-30"
                  style={{ background: project.accentColor }}
                />

                <div className="relative p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all"
                      style={{
                        borderColor: `${project.accentColor}40`,
                        background: `${project.accentColor}10`,
                      }}
                    >
                      <span
                        className="font-mono text-sm font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    {project.verified ? (
                      <CheckCircle2 className="h-4 w-4 text-primary/60" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-muted-foreground/40" />
                    )}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.problem[locale]}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-md px-2 py-0.5 font-mono text-xs text-muted-foreground/60">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-border/30 pt-4">
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {project.status[locale]}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {t("projects.viewDetail")}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetailModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </SectionWrapper>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t, locale } = useI18n();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl scrollbar-hide"
          >
            <div
              className="h-2 w-full"
              style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
            />

            <div className="p-6 md:p-10">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: `${project.accentColor}40`,
                        background: `${project.accentColor}10`,
                      }}
                    >
                      <span
                        className="font-mono text-lg font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </span>
                    {project.verified && (
                      <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">
                        <CheckCircle2 className="h-3 w-3" />
                        {t("projects.verified")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {project.status[locale]}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <DetailBlock title={t("projects.problem")} content={project.problem[locale]} />
                <DetailBlock title={t("projects.objective")} content={project.objective[locale]} />
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
                  {t("projects.features")}
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features[locale].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: project.accentColor }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
                  {t("projects.tech")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/60 px-3 py-1 font-mono text-xs"
                      style={{ color: project.accentColor }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <DetailBlock title={t("projects.role")} content={project.role[locale]} />
                {project.learnings && (
                  <DetailBlock
                    title={t("projects.learnings")}
                    content={project.learnings[locale]}
                  />
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/30 pt-6">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t("projects.back")}
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border/60 px-4 py-2 text-sm font-medium transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    {t("projects.github")}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary/60">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}
