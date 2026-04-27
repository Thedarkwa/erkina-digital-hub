import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search as SearchIcon, X } from "lucide-react";
import { searchCatalog } from "@/lib/catalog";

export function SearchBar({ onNavigate }: { onNavigate?: () => void }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = q.trim() ? searchCatalog(q).slice(0, 6) : [];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    navigate({ to: "/search", search: { q: q.trim() } });
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div ref={wrapRef} className="relative w-full max-w-md">
      <form onSubmit={submit} className="relative">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search products, services…"
          className="w-full rounded-md border border-border bg-background py-2 pl-9 pr-9 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              setOpen(false);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
            aria-label="Clear"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {open && q.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-border bg-popover shadow-elegant">
          {results.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">
              No matches. Press Enter to search anyway.
            </div>
          ) : (
            <ul className="max-h-80 overflow-auto py-1">
              {results.map((r) => (
                <li key={r.id}>
                  <Link
                    to={r.route}
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-muted"
                  >
                    <img src={r.image} alt="" className="h-10 w-10 rounded object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.category} · {r.price}</div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    navigate({ to: "/search", search: { q: q.trim() } });
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="w-full px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-navy hover:bg-muted hover:text-gold"
                >
                  See all results for "{q.trim()}"
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
