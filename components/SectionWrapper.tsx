"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}
