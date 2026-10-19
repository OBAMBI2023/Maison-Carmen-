import { useState } from "react";
import { CheckCircle2, Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatFCFA } from "@/lib/menu-data";

const MODES = ["À emporter", "Livraison", "Sur place"] as const;

export function CartSheet() {
  const { open, setOpen, lines, subtotal, setQty, clear } = useCart();
  const [step, setStep] = useState<"cart" | "form" | "done">("cart");
  const [mode, setMode] = useState<(typeof MODES)[number]>("À emporter");
  const [ref, setRef] = useState("");

  const close = (o: boolean) => { setOpen(o); if (!o && step === "done") setStep("cart"); };

  return (
    <Sheet open={open} onOpenChange={close}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader><SheetTitle className="font-serif text-2xl">{step === "done" ? "Merci !" : step === "form" ? "Vos coordonnées" : "Votre panier"}</SheetTitle></SheetHeader>

        {step === "done" ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
            <CheckCircle2 className="size-14 text-primary" />
            <p className="text-lg font-serif">Commande {ref} enregistrée</p>
            <p className="text-sm text-muted-foreground">Démonstration : aucune commande réelle n'est transmise pour le moment.</p>
            <button onClick={() => close(false)} className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground">Fermer</button>
          </div>
        ) : lines.length === 0 ? (
          <p className="flex-1 grid place-items-center text-muted-foreground">Votre panier est vide.</p>
        ) : step === "cart" ? (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto px-4">
              {lines.map(({ dish, qty }) => (
                <li key={dish.id} className="flex gap-3">
                  <img src={dish.image} alt="" className="size-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{dish.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFCFA(dish.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button aria-label="Diminuer" onClick={() => setQty(dish.id, qty - 1)} className="rounded border p-1"><Minus className="size-3" /></button>
                      <span className="w-6 text-center text-sm">{qty}</span>
                      <button aria-label="Augmenter" onClick={() => setQty(dish.id, qty + 1)} className="rounded border p-1"><Plus className="size-3" /></button>
                      <button aria-label="Retirer" onClick={() => setQty(dish.id, 0)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 className="size-4" /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t p-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Sous-total</span><span>{formatFCFA(subtotal)}</span></div>
              <div className="flex justify-between font-semibold text-base"><span>Total</span><span>{formatFCFA(subtotal)}</span></div>
              <button onClick={() => setStep("form")} className="mt-2 w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90">Commander</button>
            </div>
          </>
        ) : (
          <form className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 pb-4"
            onSubmit={(e) => { e.preventDefault(); setRef(`MC-${Math.floor(1000 + Math.random() * 9000)}`); clear(); setStep("done"); }}>
            <fieldset>
              <legend className="mb-2 text-sm font-medium">Mode de service</legend>
              <div className="grid grid-cols-3 gap-2">
                {MODES.map((m) => (
                  <button type="button" key={m} onClick={() => setMode(m)} aria-pressed={mode === m}
                    className={`rounded-md border py-2 text-xs font-medium ${mode === m ? "border-primary bg-accent" : ""}`}>{m}</button>
                ))}
              </div>
            </fieldset>
            {[
              { n: "name", l: "Nom complet", t: "text" },
              { n: "phone", l: "Téléphone", t: "tel" },
            ].map((f) => (
              <label key={f.n} className="text-sm">{f.l}
                <input required name={f.n} type={f.t} className="mt-1 w-full rounded-md border bg-card px-3 py-2 outline-none focus:border-primary" />
              </label>
            ))}
            {mode === "Livraison" && (
              <label className="text-sm">Adresse de livraison
                <input required name="address" className="mt-1 w-full rounded-md border bg-card px-3 py-2 outline-none focus:border-primary" />
              </label>
            )}
            <label className="text-sm">Remarque (facultatif)
              <textarea name="note" rows={2} className="mt-1 w-full rounded-md border bg-card px-3 py-2 outline-none focus:border-primary" />
            </label>
            <div className="mt-auto space-y-2 border-t pt-4">
              <div className="flex justify-between font-semibold"><span>Total</span><span>{formatFCFA(subtotal)}</span></div>
              <button type="submit" className="w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90">Confirmer la commande</button>
              <button type="button" onClick={() => setStep("cart")} className="w-full text-sm text-muted-foreground hover:text-foreground">Retour au panier</button>
            </div>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}
