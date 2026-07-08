// Fonctions pures : formater, filtrer, trier (testées)


// Formatages

  // Arrondissement : "13e arrondissement" → "Paris 13"
export const formaterArr = (texteArr) => {
  if (!texteArr) {
    return "Paris";
  }
  const resultatArr = texteArr.match(/\d+/); // peut être remplacer par une fonction avec un split(" "), puis un parseInt() sur le premier élément du tableau, mais regex est plus simple
  if (resultatArr) {
    const numero = resultatArr[0]; 
        return `Paris ${numero}`; 
  }
  return texteArr;
};

// Autres fonctions

  // Texte compteur
export const texteCompteur = (combienAffiches, total) => {
  return `${combienAffiches} jardins trouvés • ${total} résultats`;
};

  // Création de cartes
export const creerCarte = (jardin) => {
  const grid = document.querySelector('.grid');
  const card = document.createElement('article');
  card.classList.add('card');

  card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">🌿 ${jardin.nom_ev}</h3>
        <button class="heart-btn" aria-label="Ajouter aux favoris"></button>
      </div>
      <p class="card-type">Jardin partagé - ${jardin.arrondissement}</p>
      <hr class="divider">
      <ul class="card-info">
        <li>🏷️ Association La Baleine Verte</li>
        <li>📍 Adresse : 10 rue Erard</li>
        <li>🌐 <a href="#">Site web</a></li>
      </ul>
      <div class="details-toggle">Détails<i class="fa fa-chevron-down"></i></div>
      <div class="card-expanded">
        <ul class="card-details">
          <li>📏 Surface : 450 m²</li>
          <li>📰 Ouvert depuis : 2012</li>
          <li>🏛️ Terrain : Ville de Paris</li>
        </ul>
        <a href="https://www.google.com/maps/search/?api=1&query=10+rue+Erard+Paris" target="_blank" rel="noopener" class="cta-button">
          <i class="fa fa-location-arrow"></i> S'y rendre
        </a>
      </div>
    `;
grid.appendChild(card);
};
