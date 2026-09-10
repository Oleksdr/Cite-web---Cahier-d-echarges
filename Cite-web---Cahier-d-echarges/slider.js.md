# Documentation : slider.js

## Description
Script JavaScript unifié qui gère tous les carousels du site (avis sur accueil et services sur services.html).

## Structure

### DOMContentLoaded
- Attend que le HTML soit chargé avant d'exécuter le code
- **Pourquoi** : Évite les erreurs si les éléments n'existent pas encore

## Carousel des Avis (page accueil)

### Variables (noms simplifiés)
- `conteneurAvis` : Le conteneur qui contient tous les avis
- `boutonPrecedentAvis` / `boutonSuivantAvis` : Les boutons de navigation
- `tousLesAvis` : Tous les éléments d'avis individuels
- `positionActuelle` : Position actuelle dans le carousel (commence à 0)
- `largeurUnAvis` : 280px (largeur d'un avis + espacement)

### Fonction `deplacerCarouselAvis()`
- Calcule la distance : `-positionActuelle * largeurUnAvis`
- Applique la transformation CSS : `translateX()`
- **Pourquoi translateX** : Déplace horizontalement sans affecter le flux

### Navigation
- Bouton précédent : Décrémente `positionActuelle` si > 0
- Bouton suivant : Incrémente si on peut encore avancer (reste au moins 3 avis)

## Carousel des Services (page services)

### Variables (noms simplifiés)
- `pisteSlides` : La piste qui contient les slides
- `tousLesSlides` : Tous les slides individuels
- `pointsIndicateurs` : Les indicateurs en bas (dots)
- `slideActuel` : Position actuelle (commence à 1 pour le slide du milieu)

### Fonction `mettreAJourCarousel()`
- Calcule la largeur d'un slide dynamiquement
- Déplace la piste avec `translateX()`
- Met à jour les classes `active` sur les slides et points indicateurs

### Gestion "Voir +"
- Cache le carousel (`.hidden`)
- Affiche la section détail
- Bouton retour fait l'inverse

## Pourquoi `var` au lieu de `const/let`
- **Simplicité** : `var` est plus simple à comprendre pour des débutants
- **Compatibilité** : Fonctionne partout
- **Style de devoir** : Plus crédible pour un travail de première année

## Techniques utilisées
- **DOMContentLoaded** : Attend le chargement
- **getElementById** : Récupère un élément par son ID
- **querySelector** : Récupère le premier élément correspondant
- **querySelectorAll** : Récupère tous les éléments correspondants
- **classList.add/remove** : Ajoute/retire des classes CSS
- **style.transform** : Modifie la transformation CSS

## Pourquoi un seul fichier
- **Évite la duplication** : Un seul fichier pour tous les carousels
- **Maintenance** : Plus facile à maintenir
- **Performance** : Moins de fichiers à charger

