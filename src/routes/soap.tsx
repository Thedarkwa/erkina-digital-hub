import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { FlaskConical, Beaker, Droplets } from "lucide-react";
import soapImg from "@/assets/soap.jpg";

export const Route = createFileRoute("/soap")({
  head: () => ({
    meta: [
      { title: "Soap & Cleaning Raw Materials — ERKINA" },
      { name: "description", content: "Wholesale supply of SLES, CDEA, STPP, HPMC, CMC, Cocamidopropyl Betaine and more." },
      { property: "og:title", content: "Soap & Cleaning Raw Materials — ERKINA" },
      { property: "og:image", content: soapImg },
    ],
  }),
  component: SoapPage,
});

const products = [
  { name: "SLES 70%", specs: "Sodium Laureth Sulfate · 25kg, 1kg, 100g" },
  { name: "Cocamidopropyl Betaine", specs: "Mild surfactant · 25kg, 5kg" },
  { name: "CDEA", specs: "Coconut Diethanolamide · 25kg, 1kg" },
  { name: "STPP", specs: "Sodium Tripolyphosphate · 25kg, 5kg" },
  { name: "HPMC", specs: "Hydroxypropyl Methylcellulose · 25kg, 1kg" },
  { name: "CMC", specs: "Carboxymethyl Cellulose · 25kg, 1kg" },
  { name: "Caustic Soda", specs: "Industrial grade · 25kg" },
  { name: "Liquid Soap Color", specs: "Concentrated · 1kg, 100g" },
];

function SoapPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Wholesale Supply"
        title="Soap & Cleaning Raw Materials"
        description="Reliable supply of high-quality chemical ingredients for soap makers, cleaning manufacturers, and industrial buyers."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: FlaskConical, title: "Lab-grade quality", desc: "Tested and certified materials." },
            { icon: Beaker, title: "Multiple sizes", desc: "From 100g samples to 25kg drums." },
            { icon: Droplets, title: "Wholesale pricing", desc: "Best rates for bulk orders." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-accent text-navy">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="font-display text-3xl font-bold">Product Catalog</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              specs={p.specs}
              price="Request Price"
              image={soapImg}
              cta="Request on WhatsApp"
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
