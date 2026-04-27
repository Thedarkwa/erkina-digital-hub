import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

const nav = [
  { to: "/", label: "Home" },
  { to: "/electronics", label: "Electronics" },
  { to: "/soap", label: "Soap & Cleaning" },
  { to: "/real-estate", label: "Real Estate" },
  { to: "/tissue", label: "Tissue & Paper" },
  { to: "/events", label: "Event Rentals" },
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
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-navy" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
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
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
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
