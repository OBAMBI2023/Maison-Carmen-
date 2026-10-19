import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/SimplePage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Carmen" },
      { name: "description", content: "Contactez Maison Carmen par téléphone ou e-mail." },
      { property: "og:title", content: "Contact — Maison Carmen" },
      { property: "og:description", content: "Contactez Maison Carmen par téléphone ou e-mail." },
    ],
  }),
  component: () => (
    <SimplePage eyebrow="Maison Carmen" title="Contact">
      <p>Téléphone : <a className="text-primary" href="tel:+2250758483726">+225 07 58 48 37 26</a></p><p>E-mail : <a className="text-primary" href="mailto:contact@maisoncarmen.net">contact@maisoncarmen.net</a></p><p>Horaires : Lundi – Dimanche · 11h00 – 23h00</p>
    </SimplePage>
  ),
});
