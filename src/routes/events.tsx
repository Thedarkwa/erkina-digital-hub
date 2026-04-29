import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Check } from "lucide-react";
import eventsImg from "@/assets/events.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event Rentals — Canopies, Sound, Mist Fans | ERKINA" },
      { name: "description", content: "Bronze, Silver and Gold event rental packages for weddings, parties and corporate events." },
      { property: "og:title", content: "Event Rentals — ERKINA" },
      { property: "og:image", content: eventsImg },
    ],
  }),
  component: EventsPage,
});

const items = [
  "Mist Fans", "Outdoor AC", "Heavy Bluetooth Speakers", "Chairs",
  "Canopies", "Tables", "Sound Systems", "Decoration",
];

const packages = [
  {
    name: "Bronze",
    price: "GHS 3,500",
    items: ["1 Canopy (10x20 ft)", "30 Chairs", "5 Tables", "Basic sound system", "Setup included"],
    accent: false,
  },
  {
    name: "Silver",
    price: "GHS 6,500",
    items: ["2 Canopies", "60 Chairs", "10 Tables", "Premium sound", "2 Mist fans", "Decoration"],
    accent: true,
  },
  {
    name: "Gold",
    price: "GHS 9,500",
    items: ["3 Canopies", "100 Chairs", "15 Tables", "Pro sound + DJ", "Outdoor AC + mist fans", "Full decoration"],
    accent: false,
  },
];

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rentals & Packages"
        title="Event Rentals"
        description="Everything you need for a memorable event — equipment, decoration, and full-service packages."
      />

      {/* Item grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold">Available Equipment</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i} className="rounded-md border border-border bg-card px-4 py-3 text-sm font-medium shadow-card">
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Packages</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Choose your event package</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-card ${
                  p.accent ? "border-gold ring-2 ring-gold/40 shadow-gold" : "border-border"
                }`}
              >
                {p.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <div className="mt-2 font-display text-4xl font-bold text-navy">{p.price}</div>
                <p className="text-sm text-muted-foreground">starting from</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/233000000000"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold ${
                    p.accent
                      ? "bg-gradient-gold text-gold-foreground shadow-gold"
                      : "bg-navy text-navy-foreground hover:bg-navy/90"
                  }`}
                >
                  Book on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
