import hero from "@/assets/hero.jpg";
import pasta from "@/assets/pasta.jpg";
import beef from "@/assets/beef.jpg";
import fondant from "@/assets/fondant.jpg";
import chicken from "@/assets/chicken.jpg";
import juice from "@/assets/juice.jpg";
import salad from "@/assets/salad.jpg";

// DONNÉES DE DÉMONSTRATION — ne constituent pas le menu officiel de Maison Carmen.
export const SITE = {
  phone: "+225 07 58 48 37 26",
  email: "contact@maisoncarmen.net",
  hours: "Lundi – Dimanche · 11h00 – 23h00",
  promo: "Livraison disponible · Commandez dès maintenant !",
};

export type CategoryId =
  | "entrees" | "plats" | "grillades" | "accompagnements" | "desserts" | "boissons" | "specialites";

export const CATEGORIES: { id: CategoryId; label: string; image: string }[] = [
  { id: "entrees", label: "Entrées", image: salad },
  { id: "plats", label: "Plats principaux", image: beef },
  { id: "grillades", label: "Grillades", image: chicken },
  { id: "accompagnements", label: "Accompagnements", image: chicken },
  { id: "desserts", label: "Desserts", image: fondant },
  { id: "boissons", label: "Boissons", image: juice },
  { id: "specialites", label: "Spécialités de la maison", image: hero },
];

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  image: string;
  badge?: "Populaire" | "Nouveau" | "Spécialité";
};

export const DISHES: Dish[] = [
  { id: "saumon", name: "Saumon grillé aux herbes", description: "Filet de saumon grillé, légumes de saison et sauce citronnée.", price: 12500, category: "specialites", image: hero, badge: "Populaire" },
  { id: "pates", name: "Pâtes crémeuses aux crevettes", description: "Pâtes fraîches, crevettes, sauce crémeuse au parmesan.", price: 9500, category: "plats", image: pasta, badge: "Nouveau" },
  { id: "filet", name: "Filet de bœuf sauce au poivre", description: "Tendre filet de bœuf, sauce au poivre et purée maison.", price: 15000, category: "plats", image: beef, badge: "Spécialité" },
  { id: "fondant", name: "Fondant au chocolat", description: "Cœur coulant au chocolat, glace vanille.", price: 6500, category: "desserts", image: fondant },
  { id: "poulet", name: "Poulet braisé & brochettes", description: "Poulet mariné, brochettes grillées et alloco doré.", price: 8500, category: "grillades", image: chicken, badge: "Populaire" },
  { id: "salade", name: "Salade fraîcheur avocat", description: "Jeunes pousses, avocat, tomates cerises, vinaigrette.", price: 5000, category: "entrees", image: salad },
  { id: "alloco", name: "Alloco maison", description: "Bananes plantains frites, servies dorées.", price: 2000, category: "accompagnements", image: chicken },
  { id: "jus", name: "Jus naturel de mangue", description: "100 % naturel, sans conservateur.", price: 3000, category: "boissons", image: juice },
];

export const formatFCFA = (n: number) =>
  `${new Intl.NumberFormat("fr-FR").format(n).replace(/\u202f|\u00a0/g, " ")} FCFA`;
