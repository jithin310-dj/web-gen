import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest text-gold uppercase rounded-full glass">
          {eyebrow}
        </span>
      )}
      <Heading className="text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</Heading>
      {description && <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>}
    </motion.div>
  );
}
