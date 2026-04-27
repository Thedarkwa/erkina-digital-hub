import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { catalog } from "@/lib/catalog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/electronics", label: "Electronics", category: "Electronics" as const },
  { to: "/soap", label: "Soap & Cleaning", category: "Soap & Cleaning" as const },
  { to: "/real-estate", label: "Real Estate", category: "Real Estate" as const },
  { to: "/tissue", label: "Tissue & Paper", category: "Tissue & Paper" as const },
  { to: "/events", label: "Event Rentals", category: "Event Rentals" as const },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold font-display text-lg font-bold text-gold-foreground shadow-gold">
            E
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight">ERKINA</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Trading & Events
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => {
            const items = "category" in n ? catalog.filter((c) => c.category === n.category) : [];
            const hasMenu = items.length > 0;
            return (
              <div key={n.to} className="group relative">
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ className: "inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold text-navy" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  {hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
                </Link>
                {hasMenu && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-border bg-popover shadow-elegant">
                      <div className="border-b border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        {n.label}
                      </div>
                      <ul className="max-h-96 overflow-auto py-1">
                        {items.map((it) => (
                          <li key={it.id}>
                            <Link
                              to={n.to}
                              className="flex items-center gap-3 px-3 py-2 hover:bg-muted"
                            >
                              <img src={it.image} alt="" className="h-9 w-9 shrink-0 rounded object-cover" />
                              <div className="min-w-0 flex-1">
                                <div className="truncate text-sm font-medium">{it.name}</div>
                                <div className="truncate text-xs text-muted-foreground">{it.price}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={n.to}
                        className="block border-t border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted hover:text-gold"
                      >
                        View all {n.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex flex-1 justify-end items-center gap-3 pl-6">
          <SearchBar />
          <a
            href="https://wa.me/233000000000"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 rounded-md bg-gradient-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
          >
            WhatsApp
          </a>
        </div>
        <button
          className="xl:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="p-4 md:hidden">
            <SearchBar onNavigate={() => setOpen(false)} />
          </div>
          <nav className="flex flex-col px-4 pb-4 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/233000000000"
              className="mt-2 rounded-md bg-gradient-gold px-4 py-2 text-center text-sm font-semibold text-gold-foreground"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
