import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Target, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ERKINA Trading & Events" },
      { name: "description", content: "ERKINA is a multi-business enterprise serving Ghana since 2019, based in Tema Community One." },
      { property: "og:title", content: "About — ERKINA" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="A multi-business enterprise built on trust"
        description="Since 2019, ERKINA has grown from a single trading operation into a five-division enterprise serving individuals and businesses across Ghana."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-2xl border-l-4 border-gold bg-card p-8 shadow-card lg:p-10">
          <Target className="h-8 w-8 text-gold" />
          <h2 className="mt-4 font-display text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground italic">
            "To serve individuals and businesses with reliable trading solutions and event services by offering quality products, timely delivery, and exceptional customer support."
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <MapPin className="h-6 w-6 text-gold" />
            <h3 className="mt-3 font-display text-lg font-semibold">Location</h3>
            <p className="mt-1 text-muted-foreground">Tema Community One Main Station</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Calendar className="h-6 w-6 text-gold" />
            <h3 className="mt-3 font-display text-lg font-semibold">Operating Since</h3>
            <p className="mt-1 text-muted-foreground">2019 — over five years of dedicated service</p>
          </div>
        </div>

        <div className="mt-12 prose prose-neutral max-w-none">
          <h2 className="font-display text-2xl font-bold">What we do</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ERKINA Trading & Events is a Ghanaian multi-business enterprise. Our five divisions — Electronics, Soap & Cleaning Materials, Real Estate, Tissue Manufacturing, and Event Rentals — work together to serve a broad customer base of retail buyers, businesses, distributors, and event clients.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe in clear pricing, verified documents, on-time delivery, and direct customer communication. Most of our customers reach us on WhatsApp — and we like it that way.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
