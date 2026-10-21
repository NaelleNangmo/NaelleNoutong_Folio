"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Database, GitBranch, HardDrive, BarChart3, Eye } from "lucide-react";

const DataLabScene = dynamic(() => import("@/components/three/DataLabScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center" />,
});

const stages = [
  { icon: Database, key: "datalab.collect", color: "#72E6FF" },
  { icon: GitBranch, key: "datalab.transform", color: "#72E6FF" },
  { icon: HardDrive, key: "datalab.store", color: "#A78BFA" },
  { icon: BarChart3, key: "datalab.analyze", color: "#A78BFA" },
  { icon: Eye, key: "datalab.visualize", color: "#72E6FF" },
];

export default function DataLab() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper id="datalab" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/60">
            {t("datalab.subtitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("datalab.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("datalab.desc")}
          </p>
        </motion.div>

        <div className="relative h-[400px] overflow-hidden rounded-3xl border border-border/40 bg-card/20 md:h-[500px]">
          <div className="absolute inset-0 bg-cosmic" />
          {mounted && (
            <div className="absolute inset-0">
              <DataLabScene />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/30 p-5 text-center transition-all hover:border-primary/30"
              >
                <div className="absolute top-0 left-0 h-px w-full overflow-hidden">
                  <div
                    className="h-full w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: stage.color }}
                  />
                </div>
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
                  style={{
                    borderColor: `${stage.color}40`,
                    background: `${stage.color}10`,
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: stage.color }} />
                </div>
                <p className="text-sm font-medium">{t(stage.key)}</p>
                <span className="mt-2 block font-mono text-xs text-muted-foreground/40">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-muted-foreground/60"
        >
          {t("datalab.disclaimer")}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
