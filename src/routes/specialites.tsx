import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MenuBrowser } from "@/components/site/MenuBrowser";
import type { CategoryId } from "@/lib/menu-data";

export const Route = createFileRoute("/specialites")({
  head: () => ({
    meta: [
      { title: "Nos spécialités — Maison Carmen" },
      { name: "description", content: "Les spécialités et offres de la maison Carmen." },
      { property: "og:title", content: "Nos spécialités — Maison Carmen" },
      { property: "og:description", content: "Les plats signature de Maison Carmen." },
    ],
  }),
  component: Page,
});

function Page() {
  const [category, setCategory] = useState<CategoryId | "all">("specialites");
  return <MenuBrowser category={category} setCategory={setCategory} title="Nos spécialités" eyebrow="Signature" />;
}
