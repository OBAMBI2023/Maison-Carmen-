import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/SimplePage";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Maison Carmen" },
      { name: "description", content: "L'histoire et la philosophie de Maison Carmen." },
      { property: "og:title", content: "À propos — Maison Carmen" },
      { property: "og:description", content: "L'histoire et la philosophie de Maison Carmen." },
    ],
  }),
  component: () => (
    <SimplePage eyebrow="Maison Carmen" title="À propos">
      <p>Maison Carmen réunit une cuisine savoureuse, un cadre raffiné et un accueil chaleureux. (Texte provisoire à compléter.)</p>
    </SimplePage>
  ),
});
