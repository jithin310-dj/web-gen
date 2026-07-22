import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — NEXGEN CRETIONS" },
      { name: "description", content: "Terms governing use of NEXGEN CRETIONS websites and services, including scope, deliverables, ownership and support." },
      { property: "og:title", content: "Terms & Conditions — NEXGEN CRETIONS" },
      { property: "og:description", content: "The agreement covering how NEXGEN CRETIONS delivers work, handles ownership and provides support." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});


function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeader as="h1" eyebrow="Legal" title="Terms &amp; Conditions" />
      <div className="mt-10 glass-card rounded-2xl p-8 space-y-4 text-sm text-foreground/85 leading-relaxed">
        <p>By using our website and services, you agree to these terms. Deliverables, timelines and payments are agreed in each project scope document.</p>
        <p>All content remains the property of the respective owners. NEXGEN CRETIONS retains rights to showcase completed work in our portfolio unless otherwise agreed.</p>
        <p>For questions, contact <a className="text-gold" href="mailto:nexgencretions@gmail.com">nexgencretions@gmail.com</a>.</p>
      </div>
    </div>
  );
}
