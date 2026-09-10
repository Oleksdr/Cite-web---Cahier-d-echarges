# Documentation : equipements.html

## Description
Page présentant les équipements digitaux disponibles avec une liste de services et les partenaires.

## Structure

### Section Hero
- Image de fond avec texte par-dessus
- Titre "Équipements" et description
- Même structure que financement.html

### Section Services
- Grille 2 colonnes : grande image à gauche, liste d'équipements à droite
- 5 équipements numérotés avec descriptions
- Utilise la balise HTML `<details>` pour afficher/masquer les détails
- **Pas de JavaScript** : Tout est géré par HTML/CSS natif

### Section Partenaires
- 3 cartes partenaires (Apple, Google, Microsoft)
- Logo avec lettre (A, G, W)
- Liste de certifications pour chaque partenaire

## Pourquoi cette structure

### Hero
- Image attractive pour accrocher l'attention
- Texte superposé avec fond semi-transparent pour lisibilité

### Services en grille
- Image grande pour l'impact visuel
- Liste verticale pour faciliter la lecture
- Numérotation claire (1, 2, 3, 4, 5)

### Partenaires
- Grille de 3 colonnes pour présenter équitablement
- Logos simples (lettres) pour rester simple
- Listes avec puces personnalisées (✓)

## Balises HTML utilisées

### `<figure>`
- Balise sémantique pour les images
- Meilleur pour l'accessibilité

### `<main>`
- Balise sémantique pour le contenu principal
- Permet au footer de rester en bas avec flexbox

### `<section>`
- Structure le contenu en sections logiques
- Améliore le SEO et l'accessibilité

## Classes importantes
- `.hero` : Section hero avec image
- `.services` : Grille de services
- `.liste-equipements` : Liste des équipements
- `.carte-equipement` : Carte individuelle (balise `<details>`)
- `.bouton-equipement` : Titre cliquable (balise `<summary>`)
- `.numero-equipement` : Numéro de l'équipement
- `.details-equipement` : Contenu détaillé qui s'affiche
- `.partenaires-certifications` : Section partenaires
- `.partenaire-cert-card` : Carte de partenaire

## Balises HTML spéciales

### `<details>` et `<summary>`
- Utilisées pour créer des sections dépliables
- **Avantage** : Pas besoin de JavaScript
- Accessible par défaut (clavier, lecteurs d'écran)
- Simple à comprendre pour des débutants

