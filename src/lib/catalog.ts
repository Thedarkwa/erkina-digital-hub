import electronicsImg from "@/assets/electronics.jpg";
import soapImg from "@/assets/soap.jpg";
import tissueImg from "@/assets/tissue.jpg";
import shai1 from "@/assets/shai-hills-1.jpg.asset.json";
import shai2 from "@/assets/shai-hills-2.jpg.asset.json";

export type CatalogItem = {
  id: string;
  name: string;
  category: "Electronics" | "Soap & Cleaning" | "Tissue & Paper" | "Real Estate";
  price: string;
  specs: string;
  image: string;
  route: string;
};

export const catalog: CatalogItem[] = [
  // Electronics
  { id: "bt-speaker", name: "Bluetooth Speaker", category: "Electronics", price: "GHS 850", specs: "Heavy bass, 12hr battery", image: electronicsImg, route: "/electronics" },
  { id: "android-tablet", name: "Android Tablet 10\"", category: "Electronics", price: "GHS 1,800", specs: "4GB RAM, 64GB storage", image: electronicsImg, route: "/electronics" },
  { id: "rechargeable-fan", name: "Rechargeable Fan", category: "Electronics", price: "GHS 650", specs: "16 inch, USB charging", image: electronicsImg, route: "/electronics" },
  { id: "cctv-kit", name: "CCTV 4-Camera Kit", category: "Electronics", price: "GHS 4,200", specs: "1080p, night vision, DVR", image: electronicsImg, route: "/electronics" },

  // Soap & Cleaning
  { id: "sles-70", name: "SLES 70%", category: "Soap & Cleaning", price: "Request price", specs: "25kg drum, surfactant", image: soapImg, route: "/soap" },
  { id: "cdea", name: "CDEA", category: "Soap & Cleaning", price: "Request price", specs: "Foam booster for liquid soap", image: soapImg, route: "/soap" },
  { id: "stpp", name: "STPP", category: "Soap & Cleaning", price: "Request price", specs: "Detergent builder, 25kg", image: soapImg, route: "/soap" },
  { id: "hpmc", name: "HPMC", category: "Soap & Cleaning", price: "Request price", specs: "Thickener, 25kg sack", image: soapImg, route: "/soap" },

  // Tissue
  { id: "toilet-roll", name: "Premium Toilet Roll", category: "Tissue & Paper", price: "Wholesale only", specs: "2-ply, 24 rolls/case", image: tissueImg, route: "/tissue" },
  { id: "kitchen-towel", name: "Kitchen Paper Towel", category: "Tissue & Paper", price: "Wholesale only", specs: "Absorbent, 12 rolls/case", image: tissueImg, route: "/tissue" },
  { id: "serviette", name: "Dinner Serviette", category: "Tissue & Paper", price: "Wholesale only", specs: "Soft, 100 sheets/pack", image: tissueImg, route: "/tissue" },

  // Real Estate — Shai Hills only
  { id: "shai-full-plot", name: "Full Plot — Shai Hills", category: "Real Estate", price: "GHS 50,000", specs: "70x100 ft · Shai Hills, Greater Accra", image: shai1.url, route: "/real-estate" },
  { id: "shai-half-plot", name: "Half Plot — Shai Hills", category: "Real Estate", price: "GHS 25,000", specs: "70x50 ft · Shai Hills, Greater Accra", image: shai2.url, route: "/real-estate" },
];

export function searchCatalog(query: string): CatalogItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return catalog.filter(
    (i) =>
      i.name.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q) ||
      i.specs.toLowerCase().includes(q),
  );
}
