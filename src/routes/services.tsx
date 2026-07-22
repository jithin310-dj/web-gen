import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Palette, Briefcase, User, LayoutTemplate, UtensilsCrossed, GraduationCap, School,
  ShoppingCart, LayoutDashboard, RefreshCw, Wrench, Gauge, Search, Bot, Server,
  Globe, Code2, LifeBuoy, ArrowRight, LayoutGrid, BookOpen, Users, Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedLinks } from "@/components/RelatedLinks";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NEXGEN CRETIONS" },
      { name: "description", content: "Custom websites, e-commerce, dashboards, SEO, AI chatbots, hosting and more." },
      { property: "og:title", content: "Services — NEXGEN CRETIONS" },
      { property: "og:description", content: "Explore our full range of web design, development, e-commerce, SEO, AI integration, hosting and support services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),

  component: ServicesPage,
});

const services = [
  { icon: Palette, title: "Custom Website Design", desc: "Unique pixel-perfect designs made for your brand." },
  { icon: Briefcase, title: "Business Websites", desc: "Professional sites that convert visitors into customers." },
  { icon: User, title: "Portfolio Websites", desc: "Showcase your work with a stunning personal brand." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting pages built for campaigns." },
  { icon: UtensilsCrossed, title: "Restaurant Websites", desc: "Menus, reservations and online orders." },
  { icon: School, title: "School Websites", desc: "Modern school sites with admissions & info." },
  { icon: GraduationCap, title: "College Websites", desc: "College portals with departments and events." },
  { icon: ShoppingCart, title: "E-Commerce Websites", desc: "Full-featured stores with payments & carts." },
  { icon: LayoutDashboard, title: "Admin Dashboards", desc: "Powerful custom admin panels & analytics." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Give your old site a modern premium look." },
  { icon: Wrench, title: "Website Maintenance", desc: "Keep your site secure, fast and up to date." },
  { icon: Gauge, title: "Website Optimization", desc: "Speed, Core Web Vitals & Lighthouse tuning." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google with proven SEO." },
  { icon: Bot, title: "AI Chatbot Integration", desc: "24/7 AI assistants trained on your data." },
  { icon: Server, title: "Hosting & Deployment", desc: "Fast global hosting with auto SSL." },
  { icon: Globe, title: "Domain Setup", desc: "End-to-end domain configuration & DNS." },
  { icon: Code2, title: "Custom Web Applications", desc: "SaaS, portals and complex web apps." },
  { icon: LifeBuoy, title: "Technical Support", desc: "Ongoing expert support whenever you need." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="Services"
        title={<>Everything you need, <span className="text-gradient-gold">under one roof</span></>}
        description="From concept to deployment — we handle the full lifecycle of your web presence."
      />


      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 hover-lift group relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/15 transition-colors" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits?</h2>
        <p className="mt-3 text-muted-foreground">
          Browse our <Link to="/portfolio" className="text-gold hover:underline">portfolio</Link> for inspiration,
          read <Link to="/about" className="text-gold hover:underline">about our approach</Link>, or tell us your goals.
        </p>
        <Link to="/contact" className="mt-6 btn-gold inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm">
          Talk to us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <RelatedLinks
        heading="Related pages"
        links={[
          { to: "/portfolio", title: "See it in action", desc: "Case studies of the services above shipped to real clients.", icon: LayoutGrid },
          { to: "/tech-content", title: "Tech Content", desc: "Free tutorials, AI tools and certification updates.", icon: BookOpen },
          { to: "/about", title: "About NEXGEN", desc: "Meet the team and learn how we work.", icon: Users },
          { to: "/contact", title: "Get a quote", desc: "Share your project scope for a custom proposal.", icon: Mail },
        ]}
      />
    </div>
  );
}
