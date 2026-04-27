import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ERKINA Trading & Events" },
      { name: "description", content: "Reach ERKINA via WhatsApp, phone, email, or visit our Tema office." },
      { property: "og:title", content: "Contact — ERKINA" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title="We're one message away"
        description="Reach us through your preferred channel. We respond fastest on WhatsApp."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+233 00 000 0000", href: "https://wa.me/233000000000", primary: true },
            { icon: Phone, label: "Call us", value: "+233 00 000 0000", href: "tel:+233000000000" },
            { icon: Mail, label: "Email", value: "erkinatradingevents@gmail.com", href: "mailto:erkinatradingevents@gmail.com" },
            { icon: MapPin, label: "Visit", value: "Tema Community One Main Station", href: "#map" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                c.primary
                  ? "border-gold bg-gradient-gold text-gold-foreground shadow-gold"
                  : "border-border bg-card shadow-card hover:shadow-elegant"
              }`}
            >
              <c.icon className="h-6 w-6" />
              <div className="mt-4 text-xs uppercase tracking-wider opacity-70">{c.label}</div>
              <div className="mt-1 font-semibold">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <div className="mt-6 grid gap-4">
              <input className="rounded-md border border-input bg-background px-4 py-2.5 text-sm" placeholder="Full name" />
              <input className="rounded-md border border-input bg-background px-4 py-2.5 text-sm" placeholder="Email or phone" />
              <textarea rows={5} className="rounded-md border border-input bg-background px-4 py-2.5 text-sm" placeholder="How can we help?" />
              <button type="button" className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy/90">
                Send Message
              </button>
            </div>
          </form>

          <div id="map" className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="ERKINA Office"
              src="https://www.google.com/maps?q=Tema+Community+One,+Ghana&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full border border-border hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full border border-border hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
