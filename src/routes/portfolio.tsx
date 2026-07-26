import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase,ShoppingCart, User,Smartphone , Wheat, Bot, LayoutGrid, BookOpen, Users, Mail, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedLinks } from "@/components/RelatedLinks";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — NEXGEN CRETIONS" },
      { name: "description", content: "Selected work: business, restaurant, portfolio, educational and AI dashboard projects." },
      { property: "og:title", content: "Portfolio — NEXGEN CRETIONS" },
      { property: "og:description", content: "A glimpse of premium websites and web apps we've shipped across business, hospitality, education and SaaS." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),

  component: PortfolioPage,
});

const projects = [
  { icon: Briefcase, title: "Business Website", desc: "Modern corporate website with services and CMS.", tag: "Business", gradient: "from-yellow-500/20 to-amber-500/10" },
  { icon: User, title: "Portfolio Website", desc: "Professional portfolio showcasing skills and projects.", tag: "Personal", gradient: "from-purple-500/20 to-pink-500/10" },
  { icon: ShoppingCart, title: "E-Commerce Website", desc: "Online store with payments and order management.", tag: "E-Commerce", gradient: "from-emerald-500/20 to-green-500/10" },
  { icon: Wheat, title: "Rice Mill Website", desc: "Product catalog with B2B enquiries.", tag: "Industry", gradient: "from-lime-500/20 to-green-500/10" },
  { icon: Smartphone, title: "Android App Development", desc: "Modern Android apps with responsive UI.", tag: "Mobile App", gradient: "from-cyan-500/20 to-blue-500/10" },
  { icon: Bot, title: "AI Dashboard", desc: "AI-powered analytics and automation platform.", tag: "AI", gradient: "from-fuchsia-500/20 to-indigo-500/10" },
];

function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="Portfolio"
        title={<>Selected <span className="text-gradient-gold">work</span></>}
        description="A glimpse of projects we've shipped across industries."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
            className="glass-card rounded-2xl overflow-hidden hover-lift group"
          >
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative h-24 w-24 rounded-2xl bg-black/40 ring-1 ring-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                <p.icon className="h-12 w-12" />
              </div>
              <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1 rounded-full glass text-gold">{p.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-bright transition-colors"
              >
                Request a similar build <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Like what you see?</h2>
        <p className="mt-3 text-muted-foreground">
          Explore our full <Link to="/services" className="text-gold hover:underline">services</Link> or
          start your <Link to="/contact" className="text-gold hover:underline">project brief</Link> today.
        </p>
        <Link to="/contact" className="mt-6 btn-gold inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm">
          Start a project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <RelatedLinks
        heading="Related pages"
        links={[
          { to: "/services", title: "All Services", desc: "Everything we offer, from design to AI integration.", icon: LayoutGrid },
          { to: "/tech-content", title: "Tech Content", desc: "AI tools, certifications and coding tutorials.", icon: BookOpen },
          { to: "/about", title: "About Us", desc: "Our story, mission and process.", icon: Users },
          { to: "/contact", title: "Contact", desc: "Tell us about your next website.", icon: Mail },
        ]}
      />
    </div>
  );
}
