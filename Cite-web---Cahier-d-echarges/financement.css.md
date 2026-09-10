# Documentation : financement.css

## Description
Styles pour la page financement avec hero, grille de solutions et statistiques.

## Structure similaire à equipements.css
- Même approche pour le hero
- Grille pour les solutions
- Section stats en bas

## Section Hero
- Identique à equipements.css
- `height: 400px`
- Texte superposé avec fond semi-transparent

## Section Solutions

### Solutions Grid
- `grid-template-columns: repeat(3, 1fr)` : 3 colonnes égales
- `gap: 30px` : Espacement entre les cartes
- **Pourquoi grid** : Parfait pour des cartes de même taille

### Solution Card
- `text-align: center` : Tout est centré
- `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)` : Ombre légère
- `padding: 30px` : Espacement interne confortable
- Ombre plus prononcée au hover

### Solution Icon
- `font-size: 48px` : Grande taille pour les emojis
- `margin-bottom: 15px` : Espacement sous l'icône

## Section Stats
- `background: var(--couleur-gris-clair)` : Fond clair
- `border-radius: 10px` : Coins arrondis
- `padding: 40px` : Espacement interne

### Stats Container
- `display: flex` avec `justify-content: space-around` : Répartit les stats
- `flex-wrap: wrap` : Passe à la ligne si nécessaire
- `gap: 40px` : Espacement entre les stats

### Stat Number
- `font-size: 36px` : Grande taille pour attirer l'attention
- `font-weight: bold` : Texte en gras
- Couleur violet foncé

### Stat Label
- `font-size: 16px` : Taille normale
- Couleur grise pour le contraste

## Responsive
- `@media (max-width: 768px)` : Sur mobile
  - Grille solutions passe à 1 colonne
  - Hero réduit à 300px
  - Stats en colonne

## Pourquoi ces choix
- **Grid** : Facilite la création de grilles régulières
- **Flexbox** : Pour centrer et espacer les éléments
- **Emojis** : Simple, pas besoin de bibliothèque
- **px** : Unités fixes et simples

