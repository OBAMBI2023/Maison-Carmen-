import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/SimplePage";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — Maison Carmen" },
      { name: "description", content: "Conditions d'utilisation du site Maison Carmen." },
      { property: "og:title", content: "Conditions d'utilisation — Maison Carmen" },
      { property: "og:description", content: "Conditions d'utilisation du site Maison Carmen." },
    ],
  }),
  component: () => (
    <SimplePage eyebrow="Maison Carmen" title="Conditions d'utilisation">
      <p>Contenu à fournir par l'établissement.</p>
    </SimplePage>
  ),
});
