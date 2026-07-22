import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NEXGEN CRETIONS" },
      { name: "description", content: "Learn how NEXGEN CRETIONS collects, uses and protects the information you share when contacting us or using our website." },
      { property: "og:title", content: "Privacy Policy — NEXGEN CRETIONS" },
      { property: "og:description", content: "Our approach to enquiry data, analytics and user privacy at NEXGEN CRETIONS." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});


function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeader as="h1" eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 glass-card rounded-2xl p-8 space-y-4 text-sm text-foreground/85 leading-relaxed">
        <p>We respect your privacy. Any information you submit through our contact form is used only to respond to your enquiry and is never sold or shared.</p>
        <p>We may use basic analytics to improve our website experience. You can request deletion of your data at any time by emailing us.</p>
        <p>For questions about this policy, contact <a className="text-gold" href="mailto:nexgencretions@gmail.com">nexgencretions@gmail.com</a>.</p>
      </div>
    </div>
  );
}
