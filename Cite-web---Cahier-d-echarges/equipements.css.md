# Documentation : equipements.css

## Description
Styles pour la page équipements avec hero, grille de services et partenaires.

## Reset et base
- `font-family: Arial, sans-serif` : Police simple et lisible
- `margin: 0, padding: 0` : Reset des marges par défaut

### Main
- `max-width: 1200px` : Limite la largeur pour la lisibilité
- `margin: 0 auto` : Centre le contenu
- `padding: 100px 20px 20px` : Espace pour le header fixe + marges latérales

## Section Hero
- `height: 400px` : Hauteur fixe
- `border-radius: 8px` : Coins arrondis
- `overflow: hidden` : Cache ce qui dépasse

### Hero Text
- `position: absolute` : Superposé sur l'image
- `top: 50%, transform: translateY(-50%)` : Centré verticalement
- `background: rgba(62, 13, 129, 0.7)` : Fond violet semi-transparent (70% d'opacité)
- **Pourquoi rgba** : Permet la transparence pour voir l'image derrière

## Section Services
- `display: grid` avec `grid-template-columns: 1fr 1fr` : Grille 2 colonnes égales
- `gap: 40px` : Espacement entre les colonnes

### Service Large
- `box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)` : Ombre pour effet 3D
- `object-fit: cover` : Image remplit le conteneur sans déformation

### Carte Équipement (`.carte-equipement`)
- Utilise la balise `<details>` HTML
- `background: var(--couleur-blanc)` : Fond blanc
- `box-shadow` au hover : Ombre plus prononcée au survol
- **CSS pour `<details>`** : Utilise `[open]` pour styler l'état ouvert

### Bouton Équipement (`.bouton-equipement`)
- C'est la balise `<summary>` stylisée
- `display: flex` : Numéro et texte alignés
- `gap: 20px` : Espacement entre les éléments
- `cursor: pointer` : Curseur main au survol

### Numéro Équipement (`.numero-equipement`)
- `width: 50px, height: 50px` : Carré de 50px
- `border-radius: 10px` : Coins arrondis
- Fond violet foncé avec texte blanc
- `flex-shrink: 0` : Ne rétrécit pas

### Détails Équipement (`.details-equipement`)
- Contenu qui s'affiche quand on ouvre le `<details>`
- `padding-left: 90px` : Aligné avec le texte (50px numéro + 20px gap + 20px padding)
- `border-top` : Séparation visuelle

## Section Partenaires
- `grid-template-columns: repeat(3, 1fr)` : Grille de 3 colonnes égales
- `gap: 30px` : Espacement entre les cartes

### Partner Logo
- Carré de 60px avec fond violet clair
- Lettre centrée (A, G, W)

### Partner List
- `list-style: none` : Supprime les puces
- `::before { content: "✓" }` : Ajoute une puce personnalisée
- `position: relative/absolute` : Pour positionner la puce

## Responsive
- `@media (max-width: 768px)` : Sur mobile
  - Grille services passe à 1 colonne
  - Grille partenaires passe à 1 colonne
  - Hero réduit à 300px de hauteur
  - Texte hero réduit et repositionné

## Pourquoi ces choix
- **Grid** : Parfait pour les mises en page en colonnes
- **Flexbox** : Pour aligner les éléments dans les cartes
- **px** : Unités simples et fixes
- **rgba** : Pour la transparence du fond hero

