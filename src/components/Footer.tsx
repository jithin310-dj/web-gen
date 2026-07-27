import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/nexgen_cretions", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@nexgencreations", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/917993363138", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building modern, fast and premium websites that grow your business — plus the tech content that keeps you ahead.
            </p>
            <a
              href="mailto:nexgencretions@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-bright transition-colors"
            >
              <Mail className="h-4 w-4" /> nexgencretions@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["/", "/services", "/portfolio", "/tech-content", "/about", "/contact"].map((to, i) => (
                <li key={to}>
                  <Link to={to} className="hover:text-gold transition-colors">
                    {["Home", "Services", "Portfolio", "Tech Content", "About", "Contact"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full glass-card hover-lift inline-flex items-center justify-center text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 NEXGEN CRETIONS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
