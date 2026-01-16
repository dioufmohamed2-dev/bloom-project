import { NavItem, Project, SiteConfig, ValueItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Bloom Project",
  tagline: "Cultiver l'innovation, structurer l'avenir.",
  description: "Bloom Project est la structure mère qui incube et propulse des initiatives ambitieuses. Nous créons un écosystème où chaque projet peut éclore et prospérer.",
  whatsappNumber: "+221704568761", // À remplacer par le vrai numéro
  colors: {
    primary: "#14197C",
    secondary: "#3B5ADB",
  }
};

export const NAVIGATION: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Vision", path: "/vision" },
  { label: "Projets", path: "/projects" },
  { label: "Valeurs", path: "/values" },
  { label: "Contact", path: "/contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "bloom-agency",
    title: "Bloom Agency",
    category: "Agency",
    description: "Une agence digitale dédiée à la transformation numérique des entreprises. Bloom Agency accompagne ses clients dans la définition de leur identité de marque, le développement de solutions web sur-mesure et l'élaboration de stratégies marketing percutantes.",
    features: ["Branding & Identité", "Développement Web", "Conseil Stratégique"]
  },
  {
    id: "bloom-meulfe",
    title: "Bloom Meulfe",
    category: "Community",
    description: "Une initiative communautaire visant à fédérer des talents autour de projets à impact social et culturel. Bloom Meulfe est un laboratoire d'idées où la créativité rencontre l'engagement citoyen.",
    features: ["Événementiel", "Réseautage", "Impact Social"]
  }
];

export const VALUES: ValueItem[] = [
  {
    title: "Excellence",
    description: "Nous visons la plus haute qualité dans chaque projet que nous entreprenons.",
    iconName: "Award"
  },
  {
    title: "Innovation",
    description: "Nous repoussons les limites pour créer des solutions d'avant-garde.",
    iconName: "Lightbulb"
  },
  {
    title: "Intégrité",
    description: "La transparence et l'éthique sont au cœur de nos relations.",
    iconName: "ShieldCheck"
  },
  {
    title: "Collaboration",
    description: "La force du collectif est notre moteur de réussite.",
    iconName: "Users"
  }
];