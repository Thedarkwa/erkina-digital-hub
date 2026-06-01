import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MapPin, Ruler, FileCheck, Quote } from "lucide-react";
import realEstateImg from "@/assets/real-estate.jpg";
import shai1 from "@/assets/shai-hills-1.jpg.asset.json";
import shai2 from "@/assets/shai-hills-2.jpg.asset.json";
import shai3 from "@/assets/shai-hills-3.jpg.asset.json";
import shai4 from "@/assets/shai-hills-4.jpg.asset.json";
import shai5 from "@/assets/shai-hills-5.jpg.asset.json";

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Real Estate — Shai Hills Land Plots | ERKINA" },
      { name: "description", content: "Premium land plots in Shai Hills, Ghana. Full plots from GHS 50,000, half plots from GHS 25,000." },
      { property: "og:title", content: "Real Estate — ERKINA" },
      { property: "og:image", content: shai1.url },
    ],
  }),
  component: RealEstatePage,
});

const listings = [
  { title: "Shai Hills — Full Plot", size: "70 x 100 ft", location: "Shai Hills, Greater Accra", price: "GHS 50,000", docs: "Indenture, Site Plan, Allocation", image: shai1.url },
  { title: "Shai Hills — Half Plot", size: "70 x 50 ft", location: "Shai Hills, Greater Accra", price: "GHS 25,000", docs: "Indenture, Site Plan", image: shai2.url },
  { title: "Shai Hills — Full Plot (Demarcated)", size: "70 x 100 ft", location: "Shai Hills, Greater Accra", price: "GHS 50,000", docs: "Indenture, Site Plan, Allocation", image: shai3.url },
  { title: "Shai Hills — Half Plot (Developing Area)", size: "70 x 50 ft", location: "Shai Hills, Greater Accra", price: "GHS 25,000", docs: "Indenture, Site Plan", image: shai4.url },
  { title: "Shai Hills — Full Plot (Near Development)", size: "70 x 100 ft", location: "Shai Hills, Greater Accra", price: "GHS 50,000", docs: "Indenture, Site Plan, Allocation", image: shai5.url },
];

function RealEstatePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Shai Hills · Land · Property"
        title="Real Estate"
        description="Premium land plots in Shai Hills. We currently sell in Shai Hills only. Documents verified. Site visits arranged within 48 hours."
      />

      {/* Listings */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-bold">Available Land Listings — Shai Hills</h2>
        <p className="mt-2 text-muted-foreground">Full plot: GHS 50,000 · Half plot: GHS 25,000</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {listings.map((l) => (
            <article key={l.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={l.image} alt={l.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{l.title}</h3>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">{l.price}</span>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Ruler className="h-4 w-4 text-gold" /> {l.size}</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {l.location}</li>
                  <li className="col-span-2 flex items-start gap-2"><FileCheck className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {l.docs}</li>
                </ul>
                <a href="https://wa.me/233559890111" className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground hover:bg-navy/90">
                  Inquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold">Property Management</h3>
            <p className="mt-3 text-muted-foreground">End-to-end management for landlords — rent collection, tenant screening, maintenance.</p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold">Development Services</h3>
            <p className="mt-3 text-muted-foreground">From land acquisition to turn-key project delivery, we partner on residential and commercial builds.</p>
          </div>
        </div>
      </section>

      {/* Site Viewing Form */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card lg:p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Book a viewing</div>
          <h2 className="mt-2 font-display text-3xl font-bold">Site Viewing Request</h2>
          <form className="mt-8 grid gap-5">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your full name" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Phone number</label>
                <input className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm" placeholder="+233 ..." />
              </div>
              <div>
                <label className="text-sm font-medium">Preferred date</label>
                <input type="date" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Property of interest</label>
              <select className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm">
                {listings.map((l) => <option key={l.title}>{l.title}</option>)}
              </select>
            </div>
            <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
              Request Viewing
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="ERKINA Office Location"
            src="https://www.google.com/maps?q=Tema+Community+One,+Ghana&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy text-navy-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">What our clients say</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { quote: "ERKINA helped me secure my plot in Tema with full documents in just two weeks.", name: "Akosua M.", role: "Landowner" },
              { quote: "Professional team, clear paperwork, and they walked me through every step.", name: "Kwame O.", role: "Developer" },
              { quote: "Best property service in Tema. Trustworthy and fast.", name: "Esi A.", role: "First-time buyer" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-3 text-navy-foreground/85">"{t.quote}"</p>
                <div className="mt-5 text-sm font-semibold text-gold">{t.name}</div>
                <div className="text-xs text-navy-foreground/60">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
