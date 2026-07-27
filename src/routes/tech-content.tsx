import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot, Brain, Briefcase, Award, Building2, Newspaper, Code2, Atom, FileCode2,
  Cpu, TrendingUp, Lightbulb, GitBranch, MessageSquareCode, Cloud, BookOpen,
  Github, AppWindow, Rocket, LayoutGrid, Users, Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedLinks } from "@/components/RelatedLinks";

export const Route = createFileRoute("/tech-content")({
  head: () => ({
    meta: [
      { title: "Tech Content — Learn, Build, Grow | NEXGEN CRETIONS" },
      { name: "description", content: "AI tools, internships, free certifications, tutorials and career guidance." },
      { property: "og:title", content: "Tech Content — NEXGEN CRETIONS" },
      { property: "og:description", content: "Daily tech drops covering AI, web development, certifications, internships and career growth for students and pros." },
      { property: "og:url", content: "/tech-content" },
    ],
    links: [{ rel: "canonical", href: "/tech-content" }],
  }),

  component: TechContentPage,
});

const categories = [
  { icon: Bot, name: "AI Tools" },
  { icon: Brain, name: "Artificial Intelligence" },
  { icon: Briefcase, name: "Internship Updates" },
  { icon: Award, name: "Free Certifications" },
  { icon: Building2, name: "MNC Certifications" },
  // { icon: Newspaper, name: "Tech News" },
  { icon: Code2, name: "Web Development" },
  // { icon: Atom, name: "React" },
  // { icon: FileCode2, name: "JavaScript" },
  { icon: FileCode2, name: "Python" },
  // { icon: Cpu, name: "Machine Learning" },
  // { icon: TrendingUp, name: "Career Guidance" },
  // { icon: Lightbulb, name: "Coding Tips" },
  // { icon: GitBranch, name: "Git & GitHub" },
  // { icon: MessageSquareCode, name: "Interview Preparation" },
  { icon: Cloud, name: "Cloud Computing" },
  // { icon: BookOpen, name: "Programming Tutorials" },
  { icon: Github, name: "Open Source" },
  { icon: AppWindow, name: "Productivity Apps" },
  { icon: Rocket, name: "Latest Technology" },
];

function TechContentPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="Tech Content"
        title={<>Learn • Build • <span className="text-gradient-gold">Grow</span></>}
        description="We regularly publish tech content to help students, developers and professionals stay ahead."
      />


      <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((c) => (
          <div
            key={c.name}
            className="rounded-2xl p-5 group flex items-center gap-4"
          >
            <div className="h-11 w-11 rounded-xl bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center text-gold shrink-0">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-medium">{c.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Follow us for daily <span className="text-gradient-gold">tech drops</span></h2>
        <p className="mt-3 text-muted-foreground">New AI tools, jobs and free courses every week on our channels.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="https://www.instagram.com/nexgen_cretions" target="_blank" rel="noreferrer" className="btn-gold rounded-xl px-6 py-3 text-sm">Instagram</a>
          <a href="https://www.youtube.com/@nexgencreations" target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-xl px-6 py-3 text-sm">YouTube</a>
          <a href="https://whatsapp.com/channel/0029Vb8Eh6YDTkKD57GAHZ2I" target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-xl px-6 py-3 text-sm">WhatsApp</a>
        </div>
      </div>

      <RelatedLinks
        heading="Related pages"
        links={[
          { to: "/services", title: "Our Services", desc: "Websites, apps, SEO and AI integrations for your brand.", icon: LayoutGrid },
          { to: "/portfolio", title: "Portfolio", desc: "Projects we've shipped across industries.", icon: BookOpen },
          { to: "/about", title: "About NEXGEN", desc: "Our mission to empower students and founders.", icon: Users },
          { to: "/contact", title: "Contact", desc: "Have a question or a project idea? Say hi.", icon: Mail },
        ]}
      />
    </div>
  );
}
