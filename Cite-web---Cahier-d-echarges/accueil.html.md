# Documentation : accueil.html

## Description
Page d'accueil du site Econocom. C'est la première page que les visiteurs voient.

## Structure HTML

### Head
- `meta charset="UTF-8"` : Encodage pour les caractères français (é, è, à, etc.)
- `meta name="viewport"` : Responsive design pour mobile
- `meta name="description"` : Description pour les moteurs de recherche (SEO)
- `title` : Titre affiché dans l'onglet du navigateur

### Header
- Logo cliquable qui renvoie à `accueil.html`
- Menu de navigation avec checkbox pour mobile
- Classe `active` sur "Accueil" pour indiquer la page actuelle

### Main-content (wrapper)
- Div qui entoure tout le contenu principal
- Permet au footer de rester en bas grâce à `flex: 1` en CSS

## Sections

### Section Hero (`.img-head`)
- Image de fond avec texte par-dessus
- `position: relative` sur la section, `position: absolute` sur le texte
- **Pourquoi** : Permet de superposer le texte sur l'image

### Section Valeurs
- Utilise la balise HTML `<details>` pour afficher/masquer le contenu
- Pas besoin de JavaScript, tout est géré par le CSS
- Classes utilisées : `.carte-valeur`, `.bouton-valeur`, `.contenu-valeur`
- **Pourquoi `<details>`** : Solution native HTML, accessible et simple

### Section Avis
- Carousel d'avis clients
- Utilise `slider.js` pour la navigation
- 6 avis au total, 3 visibles à la fois

## Pourquoi ces balises HTML

### `<section>`
- Balise sémantique pour structurer le contenu
- Meilleur pour l'accessibilité et le SEO

### `<details>` et `<summary>`
- Balises natives HTML pour créer des sections dépliables
- **Avantage** : Pas besoin de JavaScript
- Accessible par défaut (clavier, lecteurs d'écran)
- Simple à comprendre pour des débutants

### `<nav>`
- Balise sémantique pour la navigation
- Indique aux lecteurs d'écran que c'est un menu

### `<footer>`
- Balise sémantique pour le pied de page
- Contient les informations de contact et réseaux sociaux

## JavaScript
- `slider.js` : Gère uniquement le carousel des avis (boutons précédent/suivant)
- **Note** : Les valeurs utilisent maintenant `<details>` HTML au lieu de JavaScript

