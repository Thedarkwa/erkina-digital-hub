import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-gold font-display text-lg font-bold text-gold-foreground">
              E
            </span>
            <div>
              <div className="font-display text-lg font-bold">ERKINA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-navy-foreground/70">
                Trading & Events
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/70 max-w-xs">
            A trusted multi-business enterprise serving Ghana since 2019.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Divisions
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/electronics" className="hover:text-gold">Electronics & Gadgets</Link></li>
            <li><Link to="/soap" className="hover:text-gold">Soap & Cleaning Materials</Link></li>
            <li><Link to="/real-estate" className="hover:text-gold">Real Estate</Link></li>
            <li><Link to="/tissue" className="hover:text-gold">Tissue & Paper</Link></li>
            <li><Link to="/events" className="hover:text-gold">Event Rentals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>Tema Community One Main Station</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>+233 00 000 0000</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /><span>erkinatradingevents@gmail.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Follow
          </h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-navy-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-navy-foreground/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-navy-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} ERKINA Trading & Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
