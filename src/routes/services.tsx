import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Palette,Briefcase,ShoppingCart,LayoutDashboard,Wrench,Smartphone,
  Package,ArrowRight,LayoutGrid,BookOpen,Users,Mail,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedLinks } from "@/components/RelatedLinks";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NEXGEN CRETIONS" },
      { name: "description", content: "Professional website design, Android app development, website-to-app conversion, APK generation, custom web applications, admin dashboards and maintenance." },
      { property: "og:title", content: "Services — NEXGEN CRETIONS" },
      { property: "og:description",  content: "Explore our website development, Android app development, website-to-app conversion, APK generation, custom web applications and business solutions."},
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),

  component: ServicesPage,
});

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    desc: "Modern, responsive, and premium websites tailored to your brand.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Professional websites for startups, businesses, and companies.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Online stores with secure payments, carts, and order management.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    desc: "Custom dashboards with analytics, reports, and management tools.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "Professional Android applications with modern UI and high performance.",
  },
  {
    icon: Smartphone,
    title: "Website to Android App",
    desc: "Convert your website into a fully functional Android application.",
  },
  {
    icon: Package,
    title: "APK Build & Play Store Ready",
    desc: "Signed APK/AAB generation and Google Play Store deployment support.",
  },
  {
    icon: Wrench,
    title: "Website & App Maintenance",
    desc: "Regular updates, bug fixes, security improvements, and technical support.",
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="Services"
        title={<>Everything you need, <span className="text-gradient-gold">under one roof</span></>}
        description="From websites to Android apps, we design, develop, deploy and maintain complete digital solutions for businesses."
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
