import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { DISHES, type Dish } from "./menu-data";

type Line = { dish: Dish; qty: number };
type Ctx = {
  lines: Line[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (o: boolean) => void;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<Ctx | null>(null);

export function cartSubtotal(lines: { price: number; qty: number }[]) {
  return lines.reduce((s, l) => s + l.price * l.qty, 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const value = useMemo<Ctx>(() => {
    const lines = Object.entries(items)
      .map(([id, qty]) => ({ dish: DISHES.find((d) => d.id === id)!, qty }))
      .filter((l) => l.dish && l.qty > 0);
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: cartSubtotal(lines.map((l) => ({ price: l.dish.price, qty: l.qty }))),
      open,
      setOpen,
      add: (id) => setItems((p) => ({ ...p, [id]: (p[id] ?? 0) + 1 })),
      setQty: (id, qty) =>
        setItems((p) => {
          const n = { ...p };
          if (qty <= 0) delete n[id];
          else n[id] = qty;
          return n;
        }),
      clear: () => setItems({}),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
