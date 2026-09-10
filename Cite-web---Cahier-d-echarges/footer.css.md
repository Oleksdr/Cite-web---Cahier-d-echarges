# Documentation : footer.css

## Description
Styles pour le footer présent sur toutes les pages du site.

## Structure

### Footer principal
- `background-color: var(--couleur-violet-fonce)` : Fond violet foncé
- `border-top: 4px solid` : Bordure en haut pour séparer du contenu
- `padding: 20px 0` : Espacement vertical seulement

### Container
- `display: flex` avec `flex-direction: column` : Organisation en colonne
- `margin-top: 25px` : Espacement depuis le titre

### Contact
- `display: flex` avec `justify-content: space-between` : Les 3 colonnes sont espacées
- `padding: 0 90px` : Grand espacement horizontal pour un look aéré

### Items
- `flex-direction: column` : Les éléments sont empilés verticalement
- `gap: 15px` : Espacement uniforme entre les éléments

### Premier item (contact)
- `border-right: 2px solid` : Séparation visuelle avec les autres colonnes
- `width: 30%` : Prend 30% de la largeur
- `list-style: none` : Supprime les puces de la liste

### Inputs
- `border-radius: 10px` : Coins arrondis
- `height: 30px` : Hauteur fixe pour uniformité

### Boutons
- `background: var(--couleur-orange)` : Couleur orange pour attirer l'attention
- `border-radius: 20px` : Coins très arrondis
- `cursor: pointer` : Indique que c'est cliquable

### Réseaux sociaux
- `display: flex` avec `justify-content: space-between` : Répartis sur toute la largeur
- Images de tailles différentes selon le réseau
- `.blok` : Fond orange pour les labels

## Pourquoi ces choix
- **Flexbox** : Facilite l'alignement et la répartition de l'espace
- **Variables CSS** : Réutilise les couleurs du thème
- **px** : Unités simples et fixes pour un devoir de première année

## Responsive
Pas de media query ici car le footer s'adapte naturellement avec flexbox.

