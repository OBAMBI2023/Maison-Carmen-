import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CategoryCircles, MenuBrowser } from "@/components/site/MenuBrowser";
import type { CategoryId } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Notre menu — Maison Carmen" },
      { name: "description", content: "Entrées, plats, grillades, desserts et boissons de Maison Carmen." },
      { property: "og:title", content: "Notre menu — Maison Carmen" },
      { property: "og:description", content: "Découvrez et commandez les plats de Maison Carmen." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16 text-center">
        <p className="eyebrow">— La carte —</p>
        <h1 className="mt-2 mb-10 text-4xl md:text-5xl">Notre menu</h1>
        <CategoryCircles active={category} onSelect={setCategory} />
      </section>
      <MenuBrowser category={category} setCategory={setCategory} title="Tous nos plats" eyebrow="À la carte" />
    </>
  );
}
