import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, DISHES, type CategoryId } from "@/lib/menu-data";
import { DishCard } from "./DishCard";

export function CategoryCircles({ active, onSelect }: { active?: CategoryId | "all"; onSelect: (c: CategoryId) => void }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-7 lg:overflow-visible">
      {CATEGORIES.map((c) => (
        <button key={c.id} onClick={() => onSelect(c.id)} className="group flex w-28 shrink-0 flex-col items-center text-center lg:w-auto" aria-pressed={active === c.id}>
          <span className={`block size-24 md:size-28 overflow-hidden rounded-full border-4 shadow-soft transition-all ${active === c.id ? "border-primary" : "border-background group-hover:border-accent"}`}>
            <img src={c.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </span>
          <span className="mt-3 font-serif text-sm md:text-base">{c.label}</span>
          <span className={`mt-2 h-px w-6 ${active === c.id ? "bg-primary w-10" : "bg-gold"} transition-all`} />
        </button>
      ))}
    </div>
  );
}

export function MenuBrowser({ category, setCategory, title = "Plats coup de cœur", eyebrow = "Nos recommandations" }: {
  category: CategoryId | "all";
  setCategory: (c: CategoryId | "all") => void;
  title?: string;
  eyebrow?: string;
}) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return DISHES.filter((d) => (category === "all" || d.category === category) && (!s || `${d.name} ${d.description}`.toLowerCase().includes(s)));
  }, [category, q]);

  const chips: { id: CategoryId | "all"; label: string }[] = [{ id: "all", label: "Tous" }, ...CATEGORIES];

  return (
    <section id="plats" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-32">
      <p className="eyebrow">— {eyebrow}</p>
      <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button key={c.id} onClick={() => setCategory(c.id)} aria-pressed={category === c.id}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${category === c.id ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`}>
              {c.label}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-64">
          <span className="sr-only">Rechercher un plat</span>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher un plat…" className="w-full rounded-md border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary" />
        </label>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
        {list.map((d) => <DishCard key={d.id} dish={d} />)}
      </div>
      {list.length === 0 && <p className="mt-10 text-center text-muted-foreground">Aucun plat ne correspond à votre recherche.</p>}
      <p className="mt-8 text-center text-xs text-muted-foreground">Plats et prix donnés à titre d'exemple — menu de démonstration.</p>
    </section>
  );
}
