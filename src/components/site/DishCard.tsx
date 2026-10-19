import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { formatFCFA, type Dish } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";

export function DishCard({ dish }: { dish: Dish }) {
  const { add } = useCart();
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={dish.image} alt={dish.name} loading="lazy" width={944} height={704} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {dish.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold text-primary">{dish.badge}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg leading-snug">{dish.name}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{dish.description}</p>
        <p className="mt-3 font-semibold">{formatFCFA(dish.price)}</p>
        <button
          onClick={() => { add(dish.id); toast.success(`${dish.name} ajouté au panier`); }}
          className="mt-3 flex items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ShoppingCart className="size-4" /> Ajouter au panier
        </button>
      </div>
    </article>
  );
}
