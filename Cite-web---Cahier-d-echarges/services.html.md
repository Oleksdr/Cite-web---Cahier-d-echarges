# Documentation : services.html

## Description
Page présentant les services digitaux d'Econocom avec un carousel interactif.

## Structure

### Section Container
- Fond violet avec logo et texte d'introduction
- Deux colonnes : texte à gauche, image à droite
- Bouton "Rejoignez-nous"

### Carousel Section
- Titre "Découvrez nos solutions"
- Bouton "Voir +" pour afficher les détails
- 3 slides avec navigation (précédent/suivant)
- Dots indicateurs en bas

### Section Détail
- Cachée par défaut (classe `hidden`)
- S'affiche quand on clique sur "Voir +"
- Bouton retour pour revenir au carousel

## Pourquoi cette structure

### Carousel
- Permet de présenter plusieurs services sans surcharger la page
- Navigation intuitive avec boutons et dots
- Slide centrale mise en avant (opacité 1, les autres à 0.4)

### Section détail
- Permet d'afficher plus d'informations sans quitter la page
- Utilise la classe `hidden` pour masquer/afficher

## JavaScript
- `slider.js` : Gère la navigation du carousel et l'affichage des détails

## Classes importantes
- `.active` : Slide actuellement visible
- `.hidden` : Masque un élément (display: none)
- `#track` : ID de la piste du carousel
- `#section-detail` : ID de la section détail

