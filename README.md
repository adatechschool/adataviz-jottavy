# 🌿 Les Jardins Partagés de Paris

> Un site vitrine dynamique pour explorer et éventuellement rejoindre ces coins de verdure parisiens.

---

## ✨ Fonctionnalités

- **Cartes dynamiques** : Liste des jardins avec détails dépliables (gestionnaire, contacts, etc.).
- **Compteur en temps réel** : Affichage dynamique du nombre de jardins récupérés en direct via l'API.

---

## 🛠️ Stack Technique

- **Langages** : HTML5 / CSS3 / JavaScript (Vanilla)
- **Bundler** : Vite
- **Icons & Fonts** :
  - Font Awesome 4.7 pour les icônes
  - Polices Eczar & Work Sans via Google Fonts

---

## 🚀 Lancer le projet en local

Ne faites pas l'erreur de le lancer avec Node directement ! Passez par le serveur Vite intégré :

1. Installez les dépendances (à ne faire qu'à la première ouverture) : npm install
2. Lancez le serveur de développement : npm run dev
3. Ouvrez votre navigateur sur l'adresse locale générée (généralement http://localhost:5173).

---

## 📂 Structure du Projet

- index.html (Page principale : Liste des jardins)
- main.js (Logique principale : Fetch API, manipulation du DOM)
- utils.js (Fonctions outils : Formatage texte, calculs du compteur etc.)
- style.css (Style graphique)
