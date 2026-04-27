import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import electronicsImg from "@/assets/electronics.jpg";

export const Route = createFileRoute("/electronics")({
  head: () => ({
    meta: [
      { title: "Electronics & Gadgets — ERKINA Trading & Events" },
      { name: "description", content: "Bluetooth speakers, industrial fans, kids tablets, CCTV cameras and more." },
      { property: "og:title", content: "Electronics & Gadgets — ERKINA" },
      { property: "og:image", content: electronicsImg },
    ],
  }),
  component: ElectronicsPage,
});

const products = [
  { name: "Heavy Bluetooth Speaker", price: "GHS 850", specs: "200W output, deep bass, 12hr battery, USB & FM" },
  { name: "Industrial Standing Fan", price: "GHS 1,200", specs: "26-inch, 3-speed, heavy-duty motor" },
  { name: "Kids Learning Tablet", price: "GHS 480", specs: "7-inch HD, 32GB, parental controls" },
  { name: "Outdoor CCTV Camera", price: "GHS 650", specs: "1080p, IP66 weatherproof, night vision" },
  { name: "Mini Bluetooth Speaker", price: "GHS 220", specs: "Compact, 8hr battery, water resistant" },
  { name: "4-Channel CCTV Kit", price: "GHS 3,200", specs: "DVR + 4 cameras, mobile app access" },
  { name: "Rechargeable Table Fan", price: "GHS 380", specs: "Solar option, USB charging" },
  { name: "Wireless Earbuds", price: "GHS 180", specs: "Touch control, charging case" },
];

function ElectronicsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Catalog"
        title="Electronics & Gadgets"
        description="Quality electronics at the best prices in Ghana. Browse our catalog and order directly via WhatsApp."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} image={electronicsImg} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
