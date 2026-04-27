import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Cpu, FlaskConical, Building2, Scroll, PartyPopper, ShieldCheck, Truck, Award, Headphones } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import heroImg from "@/assets/hero-erkina.jpg";
import electronicsImg from "@/assets/electronics.jpg";
import soapImg from "@/assets/soap.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import tissueImg from "@/assets/tissue.jpg";
import eventsImg from "@/assets/events.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERKINA Trading & Events — A Premium Multi-Business Enterprise" },
      { name: "description", content: "Trading | Real Estate | Tissue Manufacturing | Event Rentals. Serving Ghana since 2019." },
      { property: "og:title", content: "ERKINA Trading & Events" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const categories = [
  { to: "/electronics", title: "Electronics & Gadgets", desc: "Speakers, tablets, fans, CCTV", icon: Cpu, image: electronicsImg },
  { to: "/soap", title: "Cleaning & Soap Ingredients", desc: "SLES, CDEA, STPP, HPMC & more", icon: FlaskConical, image: soapImg },
  { to: "/real-estate", title: "Real Estate", desc: "Lands, property management", icon: Building2, image: realEstateImg },
  { to: "/tissue", title: "Tissue & Paper Products", desc: "Toilet rolls & wholesale supply", icon: Scroll, image: tissueImg },
  { to: "/events", title: "Event Rentals", desc: "Canopies, sound, mist fans", icon: PartyPopper, image: eventsImg },
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-hero text-navy-foreground">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Since 2019 · Tema, Ghana
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl text-balance">
              ERKINA <span className="text-gold">Trading</span> & Events
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-foreground/85 sm:text-xl">
              Trading · Real Estate · Tissue Manufacturing · Event Rentals
            </p>
            <p className="mt-3 max-w-xl text-base text-navy-foreground/70">
              A trusted multi-business enterprise delivering quality products, reliable service, and exceptional support across Ghana.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/real-estate"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                Explore Divisions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/30 bg-navy-foreground/5 px-7 py-3.5 text-sm font-semibold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/10"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-navy-foreground/15 pt-10 sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Trusted since 2019" },
              { icon: Truck, label: "Nationwide delivery" },
              { icon: Award, label: "Quality assured" },
              { icon: MessageCircle, label: "Direct WhatsApp" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3 text-sm text-navy-foreground/80">
                <t.icon className="h-5 w-5 text-gold" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Our Divisions</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Five businesses. One trusted partner.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Explore each division and discover the products and services we offer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-accent text-navy">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Featured</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Popular products & services
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard name="Bluetooth Speaker" price="GHS 850" specs="Heavy bass, 12hr battery" image={electronicsImg} />
            <ProductCard name="SLES 70%" price="Request price" specs="25kg drum, surfactant" image={soapImg} />
            <ProductCard name="Premium Toilet Roll" price="Wholesale only" specs="2-ply, 24 rolls/case" image={tissueImg} />
            <ProductCard name="Gold Event Package" price="From GHS 9,500" specs="Canopy, sound, mist fan" image={eventsImg} cta="Book on WhatsApp" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">
                Ready to do business with <span className="text-gold">ERKINA</span>?
              </h2>
              <p className="mt-4 text-navy-foreground/80">
                Whether you're a retail buyer, wholesaler, distributor, or event client — we're one message away.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a href="https://wa.me/233000000000" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-semibold">
                Contact Page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
