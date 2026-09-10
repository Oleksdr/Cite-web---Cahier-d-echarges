# Documentation : accueil.css

## Description
Styles spécifiques à la page d'accueil.

## Sections principales

### Section Hero (`.img-head`)
- `height: 500px` : Hauteur fixe pour l'image hero
- `margin-top: 80px` : Espace pour le header fixe
- `overflow: hidden` : Cache ce qui dépasse
- `object-fit: cover` : L'image remplit le conteneur sans déformation

### Contenu Hero (`.img-head-content`)
- `position: absolute` : Positionné par-dessus l'image
- `top: 20px, left: 20px` : Position en haut à gauche
- **Pourquoi absolute** : Permet de superposer le texte sur l'image

### Bouton (`.btn`)
- `border-radius: 20px` : Coins arrondis pour un look moderne
- `cursor: pointer` : Curseur main au survol
- `transition` : Animation douce au hover

### Section Valeurs (`.valeurs`)
- `background-color: var(--couleur-gris-clair)` : Fond clair pour se démarquer
- `display: grid` avec `grid-template-columns: repeat(2, 1fr)` : Grille de 2 colonnes
- Classes utilisées :
  - `.liste-valeurs` : Conteneur de la grille
  - `.carte-valeur` : Chaque carte (balise `<details>`)
  - `.bouton-valeur` : Le titre cliquable (balise `<summary>`)
  - `.contenu-valeur` : Le contenu qui s'affiche (dans `<details>`)
- **CSS pour `<details>`** : Utilise `[open]` pour styler l'état ouvert

### Section Avis
- `width: 900px` : Largeur fixe pour le wrapper
- `overflow: hidden` : Cache les avis qui dépassent
- `flex: 0 0 250px` : Chaque avis fait 250px de large, ne rétrécit pas

### Avis Item
- `box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)` : Ombre légère pour effet 3D
- `border-radius: 8px` : Coins arrondis
- `text-align: center` : Texte centré dans les cartes

### Avatar
- `border-radius: 50%` : Cercle parfait
- `margin: 0 auto` : Centré horizontalement

## Unités utilisées
- **px** : Pixels pour les tailles fixes (hauteurs, largeurs)
- **%** : Pourcentages pour les largeurs relatives (100%)
- **em/rem** : Non utilisés, on préfère px pour la simplicité

## Pourquoi ces choix
- **px** : Plus simple à comprendre pour des débutants
- **flexbox** : Facilite l'alignement et la mise en page
- **variables CSS** : Réutilise les couleurs définies dans `variables.css`

