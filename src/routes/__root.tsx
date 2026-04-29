import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { RouteTransitionLoader } from "@/components/RouteTransitionLoader";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ERKINA Trading & Events — Trading, Real Estate, Tissue, Events" },
      {
        name: "description",
        content:
          "ERKINA Trading & Events: trusted multi-business enterprise in Ghana — trading, real estate, tissue manufacturing, event rentals & cleaning materials.",
      },
      { name: "author", content: "ERKINA Trading & Events" },
      { property: "og:title", content: "ERKINA Trading & Events — Trading, Real Estate, Tissue, Events" },
      { property: "og:description", content: "ERKINA TRADING & EVENTS is a corporate website and product showcase platform." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "twitter:title", content: "ERKINA Trading & Events — Trading, Real Estate, Tissue, Events" },
      { name: "description", content: "ERKINA TRADING & EVENTS is a corporate website and product showcase platform." },
      { name: "twitter:description", content: "ERKINA TRADING & EVENTS is a corporate website and product showcase platform." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <RouteTransitionLoader />
      <div key={pathname} className="animate-fade-in">
        <Outlet />
      </div>
    </>
  );
}
