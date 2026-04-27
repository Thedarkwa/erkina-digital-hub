import { MessageCircle } from "lucide-react";

export function ProductCard({
  name,
  price,
  specs,
  image,
  cta = "Order on WhatsApp",
}: {
  name: string;
  price: string;
  specs?: string;
  image: string;
  cta?: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-elegant hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
        {specs && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{specs}</p>}
        <div className="mt-3 font-semibold text-navy">{price}</div>
        <a
          href="https://wa.me/233000000000"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy/90"
        >
          <MessageCircle className="h-4 w-4" /> {cta}
        </a>
      </div>
    </div>
  );
}
