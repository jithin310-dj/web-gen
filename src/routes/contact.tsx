import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Instagram, Youtube, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build Your Dream Website | NEXGEN CRETIONS" },
      { name: "description", content: "Get in touch with NEXGEN CRETIONS to build your next website or web app." },
      { property: "og:title", content: "Contact — NEXGEN CRETIONS" },
      { property: "og:description", content: "Send us your project brief — we usually reply within 24 hours with next steps and a tailored plan." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});


// TODO: Replace with your EmailJS credentials (Dashboard → Account → API keys)
const EMAILJS_SERVICE = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

const faqs = [
  { q: "How long does website development take?", a: "Most projects ship in 1–3 weeks depending on scope. Landing pages are often live within days." },
  { q: "Can you redesign my existing website?", a: "Yes. We modernize designs, improve performance and keep your content intact." },
  { q: "Do you provide hosting?", a: "Yes — we set up fast global hosting with automatic SSL and CDN." },
  { q: "Do you create eCommerce websites?", a: "Absolutely. Full storefronts with payments, carts, orders and admin panel." },
  { q: "Do you provide website maintenance?", a: "Yes, we offer ongoing maintenance plans to keep your site secure and updated." },
  { q: "How can I contact you?", a: "Email us at nexgencretions@gmail.com or use the form above — we usually reply within 24 hours." },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
  const [turnstileToken, setTurnstileToken] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }
    setStatus("sending");
    try {
      if (EMAILJS_SERVICE.startsWith("YOUR_")) {
        // Fallback: open mail client if EmailJS is not configured yet
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject: ${form.projectType}\nBudget: ${form.budget}\n\n${form.message}`,
        );
        window.location.href = `mailto:nexgencretions@gmail.com?subject=New Project Enquiry from ${form.name}&body=${body}`;
        setStatus("success");
        return;
      }
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          budget: form.budget,
          message: form.message,
          to_email: "nexgencretions@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC },
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const input = "w-full rounded-xl bg-input/50 border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        as="h1"
        eyebrow="Contact"
        title={<>Let's build your <span className="text-gradient-gold">dream website</span></>}
        description="Tell us about your project and we'll get back within 24 hours."
      />


      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass-card rounded-2xl p-6">
            <div className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Reach out</div>
            <a href="mailto:nexgencretions@gmail.com" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
              <Mail className="h-5 w-5 text-gold" /> nexgencretions@gmail.com
            </a>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Follow</div>
            <div className="space-y-3">
              {[
                { icon: Instagram, label: "@nexgen_cretions", href: "https://www.instagram.com/nexgen_cretions" },
                { icon: Youtube, label: "@nexgencreations", href: "https://www.youtube.com/@nexgencreations" },
                 { icon: MessageCircle, label: "+91 79933 63138", href: "https://wa.me/917993363138" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                  <s.icon className="h-5 w-5 text-gold" /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required aria-label="Your name" className={input} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" aria-label="Email address" className={input} placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input aria-label="Phone number" className={input} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select aria-label="Project type" className={input} value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}>
              <option value="">Project type</option>
              <option>Business Website</option>
              <option>Portfolio</option>
              <option>E-Commerce</option>
              <option>Landing Page</option>
              <option>Web App</option>
              <option>Other</option>
            </select>
            <select aria-label="Budget range" className={`${input} sm:col-span-2`} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
              <option value="">Budget range</option>
              <option>Under ₹30,000</option>
              <option>₹30,000 – ₹50,000</option>
              <option>₹50,000 – ₹70,000</option>
              <option>₹70,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
            </select>
          </div>
          <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} onSuccess={(token) => setTurnstileToken(token)} options={{ theme: "auto" }} />

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-gold w-full rounded-xl py-3.5 text-sm inline-flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Project Request
              </>
            )}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-green-400"><CheckCircle2 className="h-4 w-4" /> Sent! We'll get back to you shortly.</div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-400"><AlertCircle className="h-4 w-4" /> Something went wrong. Please email us directly.</div>
          )}
        </motion.form>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <SectionHeader eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient-gold">questions</span></>} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="glass-card rounded-2xl p-5 group"
            >
              <summary className="cursor-pointer list-none font-medium text-sm flex justify-between items-center">
                {f.q}
                <span className="text-gold text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  );
}
