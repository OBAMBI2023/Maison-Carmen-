import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Mail, Menu, Phone, Search, ShoppingBag, Truck, X } from "lucide-react";
import { SITE } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { Logo } from "./Logo";

const LEFT = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Notre menu" },
  { to: "/a-propos", label: "À propos" },
] as const;
const RIGHT = [
  { to: "/specialites", label: "Nos spécialités" },
  { to: "/contact", label: "Contact" },
] as const;

const linkCls = "text-sm font-medium pb-1 border-b-2 border-transparent transition-colors hover:text-primary";
const active = { className: "text-primary border-primary" };

export function Header() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
      <div className="bg-cream text-xs">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-primary"><Phone className="size-3.5 text-primary" />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="size-3.5 text-primary" />{SITE.email}</a>
          </div>
          <p className="flex items-center gap-2 mx-auto md:mx-0"><Truck className="size-3.5 text-primary" />{SITE.promo}</p>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-muted-foreground">Suivez-nous</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="size-3.5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="size-3.5" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        <nav className="hidden lg:flex gap-10" aria-label="Navigation principale">
          {LEFT.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls} activeProps={active} activeOptions={{ exact: true }}>{l.label}</Link>
          ))}
        </nav>
        <button className="lg:hidden justify-self-start p-2" aria-label="Ouvrir le menu" onClick={() => setMobile(!mobile)}>
          {mobile ? <X /> : <Menu />}
        </button>
        <Link to="/" aria-label="Maison Carmen — accueil"><Logo /></Link>
        <div className="flex items-center justify-end gap-10">
          <nav className="hidden lg:flex gap-10">
            {RIGHT.map((l) => (
              <Link key={l.to} to={l.to} className={linkCls} activeProps={active}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/menu" aria-label="Rechercher un plat" className="hidden sm:block hover:text-primary"><Search className="size-5" /></Link>
            <button onClick={() => setOpen(true)} aria-label={`Panier, ${count} article(s)`} className="relative hover:text-primary">
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 size-5 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">{count}</span>
              )}
            </button>
          </div>
        </div>
      </div>
      {mobile && (
        <nav className="lg:hidden border-t bg-background px-4 py-3 flex flex-col">
          {[...LEFT, ...RIGHT].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobile(false)} className="py-3 border-b last:border-0 font-medium" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
