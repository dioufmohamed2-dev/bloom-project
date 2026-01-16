# Bloom Project

## Architecture & Choix Techniques

Ce projet respecte une architecture React modulaire et scalable, conçue pour être maintenable et évolutive sans back-end.

### 1. Structure des Dossiers
L'architecture suit une séparation stricte des responsabilités :
- **`components/`** : Divisé en `layout` (structure globale), `ui` (briques de base réutilisables comme les boutons ou cartes), et `navigation`.
- **`pages/`** : Contient les vues principales correspondant aux routes.
- **`data/`** : Centralise tout le contenu textuel et les configurations (couleurs, liens). Cela agit comme un "CMS statique", permettant de modifier le contenu sans toucher aux composants React.
- **`types.ts`** : Définit les interfaces TypeScript partagées pour garantir la robustesse du code.

### 2. Gestion des Données
Les données des sous-projets (Bloom Agency, Bloom Meulfe) et les textes institutionnels sont stockés dans `data/content.ts`. Cette approche permet une modification rapide par un développeur ou une intégration future facile avec un CMS headless.

### 3. Styling
Utilisation de **Tailwind CSS** pour un design rapide, responsive et cohérent.
Palette imposée respectée :
- Indigo (Primary): `#14197C`
- Royal Blue (Secondary): `#3B5ADB`

### 4. Routing
Utilisation de `react-router-dom` (HashRouter) pour la navigation SPA (Single Page Application) sans rechargement de page, compatible avec un hébergement statique simple.

### 5. Contact
Aucun formulaire backend. Redirection directe vers l'API WhatsApp (`wa.me`) pour une prise de contact immédiate et mobile-friendly.