# Documentation : header.css

## Description
Ce fichier contient tous les styles pour la barre de navigation (header) qui est présente sur toutes les pages.

## Structure principale

### Reset CSS (`*`)
- `margin: 0` et `padding: 0` : Supprime les marges et paddings par défaut du navigateur
- `box-sizing: border-box` : Le padding et la bordure sont inclus dans la largeur/hauteur totale

### Body en Flexbox
- `display: flex` et `flex-direction: column` : Met le body en colonne
- `min-height: 100vh` : Force le body à faire au moins la hauteur de l'écran (100vh = 100% de la hauteur de la fenêtre)
- **Pourquoi** : Cela permet au footer de rester en bas même s'il n'y a pas assez de contenu

### Main-content avec `flex: 1`
- `flex: 1` : Prend tout l'espace disponible, pousse le footer en bas

## Header

### Position fixed
- `position: fixed` : Le header reste en haut même quand on scroll
- `z-index: 1000` : Passe au-dessus des autres éléments
- `top: 0, left: 0, right: 0` : Collé en haut sur toute la largeur

### Pourquoi `padding: 15px 50px`
- `15px` vertical : Espacement confortable
- `50px` horizontal : Espacement large pour un look professionnel

### Navbar
- `display: flex` avec `gap: 20px` : Les liens sont alignés horizontalement avec espacement
- `border-bottom: 2px solid transparent` : Préparation pour l'effet hover
- `transition: border-bottom 0.3s` : Animation douce au survol

### Lien actif (`.active`)
- `border-bottom: 2px solid var(--couleur-orange)` : Souligne la page actuelle en orange
- **Pourquoi** : Indique visuellement sur quelle page on se trouve

## Menu mobile (hamburger)

### Checkbox CSS pur
- `#menu-checkbox { display: none }` : Cache la checkbox mais elle reste fonctionnelle
- `.menu-label` : Le label sert de bouton visuel
- `#menu-checkbox:checked ~ .navbar` : Quand la checkbox est cochée, le menu s'affiche

### Pourquoi cette technique
- **Pas de JavaScript** : Fonctionne uniquement avec CSS
- **Simple** : Parfait pour un devoir de première année
- **Accessible** : Fonctionne avec le clavier

### Responsive
- `@media (max-width: 768px)` : Styles appliqués uniquement sur écrans de moins de 768px
- Menu caché par défaut (`right: -100%`)
- Menu visible quand checkbox cochée (`right: 0`)

## Unités utilisées
- **px** : Pixels, unité fixe et simple
- **vh** : Viewport height (hauteur de l'écran), pour le min-height du body
- **%** : Pourcentages pour les largeurs relatives

