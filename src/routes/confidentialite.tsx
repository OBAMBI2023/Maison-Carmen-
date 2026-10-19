import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/SimplePage";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Maison Carmen" },
      { name: "description", content: "Politique de confidentialité de Maison Carmen." },
      { property: "og:title", content: "Politique de confidentialité — Maison Carmen" },
      { property: "og:description", content: "Politique de confidentialité de Maison Carmen." },
    ],
  }),
  component: () => (
    <SimplePage eyebrow="Maison Carmen" title="Politique de confidentialité">
      <p>Contenu à fournir par l'établissement.</p>
    </SimplePage>
  ),
});
