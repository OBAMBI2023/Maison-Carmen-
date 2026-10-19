import { ChefHat } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <ChefHat className="size-6 text-gold" strokeWidth={1.4} />
      <span className={`font-serif text-2xl md:text-3xl ${inverted ? "text-ink-foreground" : "text-primary"}`}>Maison Carmen</span>
      <span className={`mt-1 text-[9px] tracking-[0.35em] uppercase ${inverted ? "text-ink-foreground/70" : "text-muted-foreground"}`}>Restaurant &amp; Saveurs</span>
    </span>
  );
}
