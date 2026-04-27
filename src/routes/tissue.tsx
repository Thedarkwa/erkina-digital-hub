import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Handshake, Truck, Award } from "lucide-react";
import tissueImg from "@/assets/tissue.jpg";

export const Route = createFileRoute("/tissue")({
  head: () => ({
    meta: [
      { title: "Tissue & Paper Products — ERKINA Manufacturing" },
      { name: "description", content: "Premium toilet rolls, kitchen towels and serviettes. Wholesale & distribution opportunities available." },
      { property: "og:title", content: "Tissue & Paper Products — ERKINA" },
      { property: "og:image", content: tissueImg },
    ],
  }),
  component: TissuePage,
});

function TissuePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Manufacturing"
        title="Tissue & Paper Products"
        description="Locally manufactured tissue products with wholesale pricing for retailers and distributors across Ghana."
      />

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { name: "Premium Toilet Roll", status: "Available", desc: "2-ply, soft, absorbent. 24 rolls per case." },
            { name: "Kitchen Towel", status: "Coming Soon", desc: "Heavy-duty kitchen rolls for the home." },
            { name: "Serviettes", status: "Coming Soon", desc: "Quality dinner napkins for events and households." },
          ].map((p) => (
            <div key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={tissueImg} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${p.status === "Available" ? "bg-accent text-navy" : "bg-muted text-muted-foreground"}`}>
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Distributor */}
      <section className="bg-gradient-hero text-navy-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Become a Distributor</div>
              <h2 className="mt-3 font-display text-4xl font-bold">Partner with us. Grow with us.</h2>
              <p className="mt-4 text-navy-foreground/80">
                Join Ghana's fastest-growing tissue distribution network. Exclusive territories, competitive margins, and full marketing support.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Handshake, label: "Exclusive territory" },
                  { icon: Truck, label: "Free delivery" },
                  { icon: Award, label: "Marketing support" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-sm">
                    <b.icon className="h-5 w-5 text-gold" /> {b.label}
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-8 backdrop-blur">
              <h3 className="font-display text-xl font-semibold">Wholesale & Distribution Form</h3>
              <div className="mt-6 grid gap-4">
                <input className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/50" placeholder="Business name" />
                <input className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/50" placeholder="Contact name" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/50" placeholder="Phone" />
                  <input className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/50" placeholder="Region" />
                </div>
                <select className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground">
                  <option>Wholesale Pricing</option>
                  <option>Become a Distributor</option>
                </select>
                <textarea rows={3} className="rounded-md border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/50" placeholder="Estimated monthly volume" />
                <button type="button" className="rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
