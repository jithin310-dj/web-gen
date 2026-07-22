import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Sparkles, Zap, Shield, Rocket, Code2, Search, Bot, Server,
  Palette, Star, ChevronRight, Instagram, Youtube, MessageCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Briefcase, BookOpen, Users, Mail, LayoutGrid as LayoutGridIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXGEN CRETIONS — Premium Websites That Grow Business" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: HomePage,
});

function useCounter(target: number, duration = 2000, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [inView, setInView] = useState(false);
  const v = useCounter(value, 1800, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
      className="glass-card rounded-2xl p-6 text-center hover-lift"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient-gold">
        {v}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

const TYPE_WORDS = ["Websites", "Brands", "Businesses", "Futures"];

function TypingWord() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = TYPE_WORDS[i];
    const speed = del ? 60 : 120;
    const timer = setTimeout(() => {
      if (!del && text === word) return setTimeout(() => setDel(true), 1200) as unknown as void;
      if (del && text === "") {
        setDel(false);
        setI((v) => (v + 1) % TYPE_WORDS.length);
        return;
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, i]);
  return (
    <span className="text-gradient-gold">
      {text}
      <span className="inline-block w-1 h-[0.9em] bg-gold ml-1 animate-pulse translate-y-1" />
    </span>
  );
}

const featureServices = [
  { icon: Palette, title: "Custom Design", desc: "Pixel-perfect UI tailored to your brand." },
  { icon: Code2, title: "Development", desc: "Modern React, Next & TypeScript stacks." },
  { icon: Search, title: "SEO Ready", desc: "Rank higher with optimized structure." },
  { icon: Bot, title: "AI Integration", desc: "Chatbots and AI features built in." },
  { icon: Server, title: "Hosting & Deploy", desc: "Fast, secure and always online." },
  { icon: Shield, title: "Secure", desc: "Best practices, HTTPS and hardened." },
];

const whyUs = [
  "Modern UI", "Fast Loading", "Responsive Design", "Affordable Pricing",
  "Custom Development", "SEO Friendly", "Secure Websites", "Latest Technologies",
  "Professional Support", "Lifetime Guidance",
];

const process = [
  { n: "01", t: "Requirement Discussion" },
  { n: "02", t: "Planning" },
  { n: "03", t: "UI/UX Design" },
  { n: "04", t: "Development" },
  { n: "05", t: "Testing" },
  { n: "06", t: "Deployment" },
  { n: "07", t: "Support" },
];

const testimonials = [
  { name: "Arjun Reddy", role: "Startup Founder", text: "NEXGEN built our SaaS site in 10 days. It's blazing fast and looks premium. Traffic doubled." },
  { name: "Priya Sharma", role: "Restaurant Owner", text: "Beautiful design, easy ordering, mobile-first. Our online orders went up 3× within a month." },
  { name: "Vikram Kumar", role: "College Student", text: "Their AI content and free certification posts helped me land my first internship. Legends." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 md:pt-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-widest text-gold uppercase">
              <Sparkles className="h-3 w-3" /> Building Your Digital Future
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
              Build Powerful <br />
              <TypingWord /> <br />
              <span className="text-foreground/90">That Grow.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              We create modern, fast, responsive and SEO-friendly websites tailored to your business.
              Plus AI tools, internships, free certifications and career resources.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost-gold inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm">
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Floating cards */}
          <div className="relative mt-20 hidden md:block h-40">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-4 glass-card rounded-2xl p-4 w-56"
            >
              <div className="flex items-center gap-2 text-gold text-xs font-semibold"><Zap className="h-3 w-3" /> Lighthouse 98</div>
              <div className="mt-2 text-xs text-muted-foreground">Performance • SEO • A11y</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[8%] top-10 glass-card rounded-2xl p-4 w-56"
            >
              <div className="flex items-center gap-2 text-gold text-xs font-semibold"><Rocket className="h-3 w-3" /> Deployed in 48h</div>
              <div className="mt-2 text-xs text-muted-foreground">Global CDN • Auto SSL</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 glass-card rounded-2xl p-4 w-56"
            >
              <div className="flex items-center gap-2 text-gold text-xs font-semibold"><Bot className="h-3 w-3" /> AI Chatbot Ready</div>
              <div className="mt-2 text-xs text-muted-foreground">GPT-powered integrations</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-auto max-w-7xl px-4 -mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat value={50} suffix="+" label="Projects Completed" />
          <Stat value={100} suffix="+" label="Students Helped" />
          <Stat value={24} suffix="/7" label="Support" />
          <Stat value={100} suffix="%" label="Responsive Design" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-28">
        <SectionHeader
          eyebrow="What we do"
          title={<>Premium services, <span className="text-gradient-gold">built to scale</span></>}
          description="Everything you need to launch, grow and dominate online."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 hover-lift group"
            >
              <div className="h-12 w-12 rounded-xl bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-ghost-gold inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Why choose us" title={<>Reasons clients <span className="text-gradient-gold">stay for life</span></>} />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass rounded-xl px-4 py-4 flex items-center gap-3 hover-lift"
            >
              <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_currentColor]" />
              <span className="text-sm font-medium">{w}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-4 py-28">
        <SectionHeader eyebrow="Work Process" title={<>How we <span className="text-gradient-gold">deliver</span></>} />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center relative"
              >
                <div className="mx-auto h-16 w-16 rounded-full glass border-gold/30 flex items-center justify-center text-gold font-bold text-sm relative z-10 bg-background">
                  {p.n}
                </div>
                <div className="mt-3 text-sm font-medium">{p.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative mx-auto max-w-7xl px-4 py-28">
        <SectionHeader eyebrow="Testimonials" title={<>Loved by <span className="text-gradient-gold">founders & students</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 hover-lift"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section className="relative mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Community" title={<>Join us on <span className="text-gradient-gold">social</span></>} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Instagram, name: "Instagram", handle: "@nexgen_cretions", href: "https://www.instagram.com/nexgen_cretions", color: "from-pink-500/20 to-purple-500/20" },
            { icon: Youtube, name: "YouTube", handle: "@nexgencreations", href: "https://www.youtube.com/@nexgencreations", color: "from-red-500/20 to-orange-500/20" },
            { icon: MessageCircle, name: "WhatsApp", handle: "Channel", href: "https://whatsapp.com/channel/0029Vb8Eh6YDTkKD57GAHZ2I", color: "from-green-500/20 to-emerald-500/20" },
          ].map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={`glass-card rounded-2xl p-6 hover-lift bg-gradient-to-br ${s.color}`}>
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-black/40 flex items-center justify-center text-gold">
                  <s.icon className="h-6 w-6" />
                </div>
                <ChevronRight className="h-5 w-5 text-gold" />
              </div>
              <div className="mt-4 text-lg font-semibold">{s.name}</div>
              <div className="text-sm text-muted-foreground">{s.handle}</div>
            </a>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <RelatedLinks
        eyebrow="Explore the site"
        heading="Dive deeper into NEXGEN"
        links={[
          { to: "/services", title: "All Services", desc: "18+ services from custom design to AI chatbots and hosting.", icon: Briefcase },
          { to: "/portfolio", title: "Our Portfolio", desc: "Real projects across business, hospitality, education and SaaS.", icon: LayoutGridIcon },
          { to: "/tech-content", title: "Tech Content", desc: "AI tools, free certifications, internships and career guidance.", icon: BookOpen },
          { to: "/about", title: "About Us", desc: "Our mission, values and the roadmap we're building.", icon: Users },
          { to: "/contact", title: "Contact", desc: "Share your project idea and get a tailored quote.", icon: Mail },
        ]}
      />

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to build your <span className="text-gradient-gold">dream website?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Let's turn your vision into a premium, high-performing website.
            </p>
            <Link to="/contact" className="mt-8 btn-gold inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
