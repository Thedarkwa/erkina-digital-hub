import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { searchCatalog } from "@/lib/catalog";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  head: ({ search }) => ({
    meta: [
      { title: search.q ? `Search: ${search.q} — ERKINA` : "Search — ERKINA Trading & Events" },
      { name: "description", content: "Search products and services across ERKINA Trading & Events." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const results = searchCatalog(q);

  return (
    <PageShell>
      <section className="bg-gradient-hero text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Search</div>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {q ? <>Results for "<span className="text-gold">{q}</span>"</> : "Search our catalog"}
          </h1>
          <p className="mt-3 text-navy-foreground/80">
            {q
              ? `${results.length} ${results.length === 1 ? "item" : "items"} found across all divisions.`
              : "Type a product name, category, or keyword in the search bar above."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {q && results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
            <SearchIcon className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-4 font-display text-2xl font-semibold">No matches found</h2>
            <p className="mt-2 text-muted-foreground">
              Try a different keyword or browse a division directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["/electronics", "/soap", "/tissue", "/real-estate", "/events"].map((r) => (
                <Link
                  key={r}
                  to={r}
                  className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:border-gold hover:text-navy"
                >
                  {r.replace("/", "").replace("-", " ")} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((item) => (
              <div key={item.id} className="space-y-2">
                <ProductCard
                  name={item.name}
                  price={item.price}
                  specs={item.specs}
                  image={item.image}
                />
                <Link
                  to={item.route}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-navy hover:text-gold"
                >
                  {item.category} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
