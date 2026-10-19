import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChefHat, HeartHandshake, Leaf, ShoppingCart, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import promo from "@/assets/promo.jpg";
import { CategoryCircles, MenuBrowser } from "@/components/site/MenuBrowser";
import { useCart } from "@/lib/cart";
import type { CategoryId } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Carmen — Restaurant & Saveurs" },
      { name: "description", content: "Maison Carmen, le goût de l'exception : une cuisine savoureuse, un cadre raffiné. Commandez en ligne." },
      { property: "og:title", content: "Maison Carmen — Restaurant & Saveurs" },
      { property: "og:description", content: "Une cuisine savoureuse, un cadre raffiné et des instants inoubliables." },
    ],
  }),
  component: Index,
});

const PERKS = [
  { icon: Leaf, label: "Produits soigneusement sélectionnés" },
  { icon: ChefHat, label: "Cuisine préparée avec attention" },
  { icon: HeartHandshake, label: "Accueil chaleureux" },
  { icon: Truck, label: "Commande simple et rapide" },
];

function Index() {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const { setOpen } = useCart();
  const pick = (c: CategoryId) => {
    setCategory(c);
    document.getElementById("plats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <img src={hero} alt="Saumon grillé aux herbes et légumes rôtis" width={1600} height={912} className="absolute inset-0 size-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent md:via-cream/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 fade-up">
          <p className="eyebrow">— Maison Carmen —</p>
          <h1 className="mt-4 max-w-xl text-5xl md:text-7xl leading-[1.05]">Le goût de <span className="text-primary italic">l'exception.</span></h1>
          <p className="mt-6 max-w-md text-lg">Une cuisine savoureuse, un cadre raffiné et des instants inoubliables.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Découvrir notre menu <ArrowRight className="size-4" /></Link>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-foreground/70 px-6 py-3 text-sm font-semibold hover:bg-background">
              <ShoppingCart className="size-4" /> Commander maintenant
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <p className="eyebrow">— Notre menu —</p>
        <h2 className="mt-2 mb-10 text-3xl md:text-4xl">Nos catégories</h2>
        <CategoryCircles active={category} onSelect={pick} />
      </section>

      <MenuBrowser category={category} setCategory={setCategory} />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={promo} alt="" loading="lazy" width={1600} height={640} className="absolute inset-0 size-full object-cover opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <h2 className="max-w-md text-3xl md:text-4xl">Le plaisir de bien manger, <span className="text-gold">signé Maison Carmen.</span></h2>
          <Link to="/specialites" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Découvrir nos offres <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <div key={p.label} className="flex items-center gap-4">
            <p.icon className="size-8 shrink-0 text-primary" strokeWidth={1.3} />
            <p className="text-sm font-medium">{p.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}
