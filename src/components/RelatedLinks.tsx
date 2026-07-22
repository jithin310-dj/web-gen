import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type RelatedLink = {
  to: "/" | "/services" | "/portfolio" | "/tech-content" | "/about" | "/contact";
  title: string;
  desc: string;
  icon: LucideIcon;
};

export function RelatedLinks({
  eyebrow = "Explore more",
  heading = "Keep exploring",
  links,
}: {
  eyebrow?: string;
  heading?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-medium tracking-widest text-gold uppercase">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          {heading}
        </h2>
      </div>
      <nav aria-label="Related pages" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {links.map((l, i) => (
          <motion.div
            key={l.to + l.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={l.to}
              className="glass-card rounded-2xl p-6 hover-lift group block h-full"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <l.icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition" />
              </div>
              <div className="mt-4 text-lg font-semibold">{l.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {l.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </nav>
    </section>
  );
}
