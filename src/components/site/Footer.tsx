import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/menu-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div className="flex lg:justify-start"><Logo inverted /></div>
        <div className="space-y-3">
          <h3 className="font-sans font-semibold text-gold">Nous contacter</h3>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold"><Phone className="size-4" />{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="size-4" />{SITE.email}</a>
          <div className="flex gap-3 pt-1">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-gold"><Facebook className="size-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold"><Instagram className="size-4" /></a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-sans font-semibold text-gold">Horaires d'ouverture</h3>
          <p className="flex items-center gap-2"><Clock className="size-4" />{SITE.hours}</p>
        </div>
        <div className="space-y-3">
          <h3 className="font-sans font-semibold text-gold">Liens utiles</h3>
          <Link to="/conditions" className="block hover:text-gold">Conditions d'utilisation</Link>
          <Link to="/confidentialite" className="block hover:text-gold">Politique de confidentialité</Link>
        </div>
      </div>
      <p className="border-t border-ink-foreground/10 py-5 text-center text-xs text-ink-foreground/60">© 2026 Maison Carmen. Tous droits réservés.</p>
    </footer>
  );
}
