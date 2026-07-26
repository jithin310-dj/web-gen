import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "../assets/nexgen-logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import FloatingContact from "../components/FloatingContact";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold inline-flex items-center rounded-xl px-6 py-3 text-sm">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold inline-flex items-center rounded-xl px-5 py-2.5 text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-gold inline-flex items-center rounded-xl px-5 py-2.5 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "DZ7ku-QmDff3nDpY99BqmtPVqsfv4iHbokyYfZxwPxk" },
      { title: "NEXGEN CRETIONS — Premium Websites That Grow Business" },
      {
        name: "description",
        content:
          "NEXGEN CRETIONS builds modern, fast, responsive and SEO-friendly websites. We also share AI tools, internships, certifications and tech resources.",
      },
      { name: "author", content: "NEXGEN CRETIONS" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "NEXGEN CRETIONS — Premium Websites That Grow Business" },
      {
        property: "og:description",
        content: "NEXGEN CRETIONS builds modern, fast, responsive and SEO-friendly websites. We also share AI tools, internships, certifications and tech resources.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NEXGEN CRETIONS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NEXGEN CRETIONS — Premium Websites That Grow Business" },
      { name: "twitter:description", content: "NEXGEN CRETIONS builds modern, fast, responsive and SEO-friendly websites. We also share AI tools, internships, certifications and tech resources." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/181f13ca-309d-421c-aa86-af886024957a/id-preview-04170da2--b18a756c-3782-40f9-8173-5ac8d6cfac7b.lovable.app-1784019188871.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/181f13ca-309d-421c-aa86-af886024957a/id-preview-04170da2--b18a756c-3782-40f9-8173-5ac8d6cfac7b.lovable.app-1784019188871.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/nexgen-logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://nexgen-cretions.lovable.app/#organization",
              name: "NEXGEN CRETIONS",
              url: "https://nexgen-cretions.lovable.app",
              email: "nexgencretions@gmail.com",
              sameAs: [
                "https://www.instagram.com/nexgen_cretions",
                "https://www.youtube.com/@nexgencreations",
                "https://whatsapp.com/channel/0029Vb8Eh6YDTkKD57GAHZ2I",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://nexgen-cretions.lovable.app/#website",
              url: "https://nexgen-cretions.lovable.app",
              name: "NEXGEN CRETIONS",
              publisher: { "@id": "https://nexgen-cretions.lovable.app/#organization" },
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
  <div className="relative min-h-dvh">
    <Navbar />

    <main className="pt-24">
      <Outlet />
    </main>

    <Footer />

    <BackToTop />

    <FloatingContact />
  </div>
</QueryClientProvider>
    
  );
}
