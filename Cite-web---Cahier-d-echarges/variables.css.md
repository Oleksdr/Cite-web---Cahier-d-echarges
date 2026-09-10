# Documentation : variables.css

## Description
Ce fichier définit toutes les variables CSS utilisées sur le site. C'est le fichier de base qui centralise toutes les couleurs pour faciliter la maintenance.

## Pourquoi ce fichier existe
- **Centralisation** : Toutes les couleurs sont définies au même endroit
- **Maintenance facile** : Pour changer une couleur sur tout le site, on modifie juste ici
- **Cohérence** : Garantit que toutes les pages utilisent les mêmes couleurs

## Structure

### Variables définies
- `--couleur-violet-fonce` : `#3e0d81` - Couleur principale du header et footer
- `--couleur-violet-clair` : `#a954f3` - Couleur d'accent pour les bordures
- `--couleur-orange` : `#ff8679` - Couleur des boutons et éléments interactifs
- `--couleur-blanc` : `#ffffff` - Texte clair et fonds
- `--couleur-noir` : `#000000` - Texte sombre
- `--couleur-gris` : `#666666` - Texte secondaire
- `--couleur-gris-clair` : `#f0f0f0` - Fond clair

## Pourquoi `:root`
`:root` est utilisé pour définir des variables CSS globales accessibles partout dans le site. C'est l'équivalent de `<html>` mais avec une spécificité plus élevée.

## Utilisation
Dans les autres fichiers CSS, on utilise `var(--nom-variable)` pour récupérer la valeur. Par exemple : `color: var(--couleur-orange);`

## Avantages
- Si on veut changer le thème, on modifie juste ce fichier
- Pas besoin de chercher dans tous les fichiers CSS
- Code plus lisible et maintenable

