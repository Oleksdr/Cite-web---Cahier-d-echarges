# Documentation : services.css

## Description
Styles pour la page services, incluant le carousel et les sections de contenu.

## Variables locales
- `--main-text`, `--light-text`, `--border-color`, `--bg-button` : Variables spécifiques au carousel
- **Pourquoi** : Permet d'avoir des couleurs différentes pour le carousel tout en gardant la cohérence

## Carousel

### Carousel Section
- `max-width: 900px` : Limite la largeur pour un meilleur rendu
- Centré avec `margin: auto`

### Carousel Header
- `position: relative` : Pour positionner le bouton "Voir +" en absolu
- `justify-content: center` : Centre le titre

### Bouton "Voir +"
- `position: absolute` avec `right: 0` : Positionné à droite
- `border-radius: 50%` : Cercle parfait
- `width: 70px, height: 70px` : Taille fixe pour un bouton rond

### Slider Track
- `display: flex` : Les slides sont alignés horizontalement
- `transition: transform 0.5s` : Animation douce lors du déplacement
- `cubic-bezier(0.4, 0, 0.2, 1)` : Courbe d'animation personnalisée (ease-in-out)

### Slides
- `min-width: 33.33%` : Chaque slide prend 1/3 de la largeur
- `opacity: 0.4` : Slides non actives sont semi-transparentes
- `.active` : Opacité 1 et légèrement agrandi (`scale(1.05)`)

### Dots
- `width: 10px, height: 10px` : Petits cercles
- `.active` : Rempli pour indiquer la position actuelle

## Container
- `background-color: var(--couleur-violet-fonce)` : Fond violet
- `padding: 60px 30px` : Grand espacement pour aérer

## Contenu
- `display: flex` avec `justify-content: space-between` : Deux colonnes espacées
- Image et texte côte à côte

## Section Détail
- `padding: 40px 200px` : Grand espacement horizontal
- `max-width: 1200px` : Limite la largeur pour la lisibilité
- `animation: fadeIn` : Effet d'apparition en fondu

### Animation fadeIn
- `from { opacity: 0 }` : Commence invisible
- `to { opacity: 1 }` : Devient visible
- `transform: translateY(10px)` : Légère translation vers le bas

## Responsive
- `@media (max-width: 768px)` : Sur mobile, padding réduit à 20px

## Pourquoi ces unités
- **px** : Unités fixes simples
- **%** : Pourcentages pour les largeurs relatives (33.33%)
- **max-width** : Limite la largeur pour la lisibilité sur grands écrans

