# Site Web Econocom - Documentation Complète

## 📋 Description du Projet

Ce site web présente l'entreprise Econocom et ses services. Il a été développé en HTML, CSS et JavaScript pour un projet de première année de BUT Informatique.

## 🎯 Objectifs du Projet

- Créer un site web professionnel et moderne
- Utiliser uniquement HTML, CSS et JavaScript de base
- Code simple et compréhensible pour des débutants
- Design responsive (adapté mobile, tablette, ordinateur)

## 📁 Structure du Projet

```
Econocom/
├── accueil.html          # Page d'accueil
├── equipements.html      # Page équipements
├── services.html         # Page services
├── financement.html      # Page financement
├── audiovisuel.html      # Page audiovisuel
├── secteur.html          # Page secteur d'activité
├── nousrejoindre.html    # Page recrutement
├── css/
│   ├── variables.css     # Variables CSS (couleurs, etc.)
│   ├── header.css        # Styles du menu de navigation
│   ├── footer.css        # Styles du pied de page
│   ├── accueil.css       # Styles de la page d'accueil
│   ├── equipements.css   # Styles de la page équipements
│   ├── services.css      # Styles de la page services
│   ├── financement.css   # Styles de la page financement
│   ├── audiovisuel.css   # Styles de la page audiovisuel
│   ├── secteur.css       # Styles de la page secteur
│   └── nousrejoindre.css # Styles de la page recrutement
├── js/
│   └── slider.js         # Script pour les carousels
└── img/                  # Toutes les images du site
```

## 🎨 Organisation du CSS

### Variables CSS (`variables.css`)

Toutes les couleurs du site sont définies dans ce fichier pour faciliter les modifications :

```css
--couleur-violet-fonce: #3e0d81
--couleur-violet-clair: #a954f3
--couleur-orange: #ff8679
--couleur-blanc: #ffffff
--couleur-noir: #000000
--couleur-gris: #666666
--couleur-gris-clair: #f0f0f0
```

**Pourquoi ?** Si on veut changer une couleur partout, on modifie juste ici !

### Fichiers CSS par Page

Chaque page a son propre fichier CSS pour :
- Garder le code organisé
- Faciliter la maintenance
- Éviter les conflits entre pages

## 🏗️ Structure HTML

### Structure Générale

Toutes les pages suivent cette structure :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Métadonnées et liens CSS -->
</head>
<body>
    <header>
        <!-- Menu de navigation -->
    </header>
    <main>
        <!-- Contenu de la page -->
    </main>
    <footer>
        <!-- Pied de page -->
    </footer>
</body>
</html>
```

### Balises Sémantiques Utilisées

- `<header>` : En-tête avec le menu
- `<nav>` : Menu de navigation
- `<main>` : Contenu principal
- `<section>` : Section de contenu
- `<footer>` : Pied de page
- `<details>` : Contenu dépliable (remplace JavaScript)

**Pourquoi ces balises ?** Elles aident les moteurs de recherche et les lecteurs d'écran à comprendre la structure.

## 💡 Techniques Utilisées

### 1. Détails HTML au lieu de JavaScript

Au lieu d'utiliser JavaScript pour afficher/masquer du contenu, on utilise la balise `<details>` :

```html
<details class="carte-valeur">
    <summary class="bouton-valeur">Titre</summary>
    <div class="contenu-valeur">
        <p>Contenu qui s'affiche quand on clique</p>
    </div>
</details>
```

**Avantages :**
- Pas besoin de JavaScript
- Accessible par défaut
- Simple à comprendre

### 2. Flexbox et Grid

- **Flexbox** : Pour aligner des éléments en ligne ou colonne
- **Grid** : Pour créer des grilles (ex: 2 colonnes, 3 colonnes)

**Exemple Grid :**
```css
.liste-valeurs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
```

### 3. Variables CSS

Au lieu de répéter les couleurs partout, on utilise des variables :

```css
.bouton {
    background-color: var(--couleur-orange);
}
```

### 4. Unités Utilisées

- **px** : Pixels (taille fixe)
- **vh** : Viewport Height (hauteur de l'écran)
- **%** : Pourcentage (relatif au parent)
- **fr** : Fraction (pour Grid)

**Pourquoi pas rem/em ?** Trop complexe pour un débutant, px est plus simple.

## 🎯 Fonctionnalités JavaScript

### Carousel (`slider.js`)

Le seul fichier JavaScript nécessaire gère les carousels (défilement d'images).

**Fonctionnement :**
1. Récupère les éléments HTML
2. Écoute les clics sur les boutons
3. Déplace le contenu avec `translateX()`

**Variables utilisées :**
- `positionActuelle` : Position actuelle dans le carousel
- `largeurUnAvis` : Largeur d'un élément (280px)
- `distance` : Distance à déplacer

## 📱 Responsive Design

Le site s'adapte à différentes tailles d'écran grâce aux **media queries** :

```css
@media (max-width: 768px) {
    /* Styles pour mobile */
    .liste-valeurs {
        grid-template-columns: 1fr; /* Une seule colonne */
    }
}
```

**Breakpoints utilisés :**
- `768px` : Tablette et mobile
- `1024px` : Petits écrans

## 🎨 Noms de Classes

Les noms de classes sont en français et descriptifs :

- `bouton-valeur` : Bouton pour les valeurs
- `contenu-valeur` : Contenu d'une valeur
- `carte-equipement` : Carte d'un équipement
- `liste-valeurs` : Liste des valeurs

**Pourquoi en français ?** Plus facile à comprendre pour des débutants français.

## 📝 Pages du Site

### Page d'Accueil (`accueil.html`)

- Section hero avec image
- Chiffres clés de l'entreprise
- Valeurs de l'entreprise (avec détails HTML)
- Avis clients (carousel)
- Partenaires et certifications

### Page Équipements (`equipements.html`)

- Liste des équipements disponibles
- Chaque équipement peut être déplié pour voir les détails

### Page Services (`services.html`)

- Présentation des services
- Carousel avec 3 services principaux
- Section détail pour plus d'informations

### Page Financement (`financement.html`)

- Solutions de financement
- Statistiques

### Page Audiovisuel (`audiovisuel.html`)

- Solutions audiovisuelles
- Marque Gather
- Expertises du groupe

### Page Secteur d'Activité (`secteur.html`)

- Secteurs d'intervention
- Activités principales
- Clients

### Page Nous Rejoindre (`nousrejoindre.html`)

- Formulaire de candidature
- Informations sur les postes

## 🔧 Comment Modifier le Site

### Changer une Couleur

1. Ouvrir `css/variables.css`
2. Modifier la valeur de la variable
3. La couleur change partout automatiquement

### Ajouter une Page

1. Créer un nouveau fichier HTML (ex: `nouvelle-page.html`)
2. Copier la structure de base d'une autre page
3. Créer un fichier CSS correspondant (ex: `nouvelle-page.css`)
4. Ajouter le lien dans le menu de navigation

### Modifier le Menu

Le menu est dans le `<header>` de chaque page. Modifier une fois et copier sur toutes les pages.

## 📚 Ressources Utilisées

- **Police** : Inter (Google Fonts)
- **Icônes** : Font Awesome
- **Images** : Stockées localement dans `img/`

## ✅ Bonnes Pratiques Respectées

- ✅ Code indenté et organisé
- ✅ Noms de classes descriptifs
- ✅ HTML sémantique
- ✅ CSS organisé par fichier
- ✅ Commentaires dans le code quand nécessaire
- ✅ Images avec attribut `alt` pour l'accessibilité
- ✅ Responsive design

## 🚀 Pour Ouvrir le Site

1. Ouvrir `accueil.html` dans un navigateur
2. Ou utiliser un serveur local (recommandé) :
   ```bash
   python -m http.server 8000
   ```
   Puis ouvrir `http://localhost:8000/accueil.html`

## 📖 Pour Aller Plus Loin

- Apprendre Flexbox : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Apprendre Grid : https://css-tricks.com/snippets/css/complete-guide-grid/
- Documentation HTML : https://developer.mozilla.org/fr/docs/Web/HTML
- Documentation CSS : https://developer.mozilla.org/fr/docs/Web/CSS

---

**Note :** Ce projet a été conçu pour être simple et compréhensible pour des étudiants débutants en développement web.
