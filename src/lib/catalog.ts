import electronicsImg from "@/assets/electronics.jpg";
import soapImg from "@/assets/soap.jpg";
import tissueImg from "@/assets/tissue.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import eventsImg from "@/assets/events.jpg";

export type CatalogItem = {
  id: string;
  name: string;
  category: "Electronics" | "Soap & Cleaning" | "Tissue & Paper" | "Real Estate" | "Event Rentals";
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

  // Real Estate
  { id: "land-tema", name: "Land Plot — Tema", category: "Real Estate", price: "Contact agent", specs: "100x100 ft, documents ready", image: realEstateImg, route: "/real-estate" },
  { id: "land-kasoa", name: "Land Plot — Kasoa", category: "Real Estate", price: "Contact agent", specs: "70x100 ft, fenced", image: realEstateImg, route: "/real-estate" },

  // Events
  { id: "gold-package", name: "Gold Event Package", category: "Event Rentals", price: "From GHS 9,500", specs: "Canopy, sound, mist fan", image: eventsImg, route: "/events" },
  { id: "silver-package", name: "Silver Event Package", category: "Event Rentals", price: "From GHS 6,000", specs: "Canopy + chairs + sound", image: eventsImg, route: "/events" },
  { id: "bronze-package", name: "Bronze Event Package", category: "Event Rentals", price: "From GHS 3,500", specs: "Canopy + chairs", image: eventsImg, route: "/events" },
  { id: "mist-fan", name: "Industrial Mist Fan", category: "Event Rentals", price: "Per day", specs: "Outdoor cooling, large coverage", image: eventsImg, route: "/events" },
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
