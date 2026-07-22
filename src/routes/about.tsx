import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NEXGEN CRETIONS" },
      { name: "description", content: "NEXGEN CRETIONS is a digital agency building premium websites and sharing AI tools, internships and tech resources for students and creators." },
      { property: "og:title", content: "About — NEXGEN CRETIONS" },
      { property: "og:description", content: "Meet the studio behind NEXGEN CRETIONS — our mission, vision, values and the tech topics we publish for the community." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),

  component: AboutPage,
});

const topics = [
  "AI Tools", "Internship Opportunities", "Free Certifications", "MNC Certification Programs",
  "AI Learning Resources", "Web Development Tutorials", "Programming Tips", "Career Guidance",
  "Tech News", "Productivity Tools", "Coding Resources", "Interview Preparation",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="About us"
        title={<>About <span className="text-gradient-gold">NEXGEN CRETIONS</span></>}
        description="A digital agency helping businesses grow online — and students grow in tech."
      />


      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Target, t: "Our Mission", d: "Empower businesses and creators with premium websites and future-ready tech." },
          { icon: Eye, t: "Our Vision", d: "Become the go-to studio for modern web experiences and tech education." },
          { icon: Heart, t: "Our Values", d: "Craft, transparency, speed and long-term partnerships." },
        ].map((v, i) => (
          <motion.div
            key={v.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 hover-lift"
          >
            <div className="h-12 w-12 rounded-xl bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center text-gold">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{v.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 space-y-6 text-foreground/85 leading-relaxed">
        <p>
          <span className="text-gradient-gold font-semibold">NEXGEN CRETIONS</span> is a digital agency dedicated to
          helping businesses establish a powerful online presence through custom website design and development.
        </p>
        <p>
          We build modern, responsive, fast, and secure websites tailored to each client's needs — whether you're a
          startup, business owner, personal brand, or organization. Our sites look professional and deliver results.
        </p>
        <p>
          In addition to development, we create valuable technology content across our social platforms. We regularly
          share:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {topics.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <p className="pt-4 border-t border-gold/10">
          Our goal is to help businesses grow online while helping students and professionals stay ahead in technology.
        </p>
      </div>
    </div>
  );
}
