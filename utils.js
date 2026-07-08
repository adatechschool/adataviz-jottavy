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
        return `Paris ${numero}e`; 
  }
  return texteArr;
};

export const formaterNom = (texteNom) => {
  if (!texteNom) {
    return "Nom manquant";
  }
  const premiereLettreNom = texteNom.charAt(0).toUpperCase();
  const resteDuTexteNom = texteNom.slice(1)
  return `${premiereLettreNom}${resteDuTexteNom}`; 
  console.log(`Nom formaté : ${premiereLettreNom}${resteDuTexteNom}`);
};

export const formaterAnim = (texteAnim) => {
  if (!texteAnim) {
    return "Animateur manquant";
  }
  let texteAnimNettoye = texteAnim.replaceAll("(", " (");
  texteAnimNettoye = texteAnimNettoye.replaceAll("  (", " (");
  texteAnimNettoye = texteAnimNettoye.replaceAll("eme", "e");
  texteAnimNettoye = texteAnimNettoye.replaceAll("°", "e");

  const premiereLettreAnim = texteAnimNettoye.charAt(0).toUpperCase();
  const resteDuTexteAnim = texteAnimNettoye.slice(1).toLowerCase();
  return `${premiereLettreAnim}${resteDuTexteAnim}`;
};


// Autres fonctions

  // Texte compteur
export const texteCompteur = (combienAffiches, total) => {
  return `${combienAffiches} jardins trouvés • ${total} résultats`;
};

  // Création de cartes
export const creerCarte = (jardin) => {
  if (jardin.date_fermeture) {
    return; // On arrête la fonction si présence d'une date de fermeture dans le JSON
  }

  const grid = document.querySelector('.grid');
  const card = document.createElement('article');
  card.classList.add('card');

  const arrondissementFormate = formaterArr(jardin.arrondissement);
  const nomFormate = formaterNom(jardin.nom_ev);
  const animFormate = formaterAnim(jardin.nom_gerant);

  card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">🌿 ${nomFormate}</h3>
        <button class="heart-btn" aria-label="Ajouter aux favoris"></button>
      </div>
      <p class="card-type">${arrondissementFormate}</p>
            <hr class="divider">
      <ul class="card-info">
        <li>📍 ${jardin.adresse}</li>
        <li>🏷️ ${animFormate}</li>
        <li>🌐 <a href="${jardin.site_web}" target="_blank" rel="noopener">Site web</a>📧<a href="mailto:${jardin.email}" target="_blank" rel="noopener">Email</a></li>
      </ul>
      <div class="details-toggle">Détails<i class="fa fa-chevron-down"></i></div>
      <div class="card-expanded">
        <ul class="card-details">
        <li>📏 Surface : Non renseignée</li>
        <li>🏛️ Terrain : ${jardin.domaine}</li>
        </ul>
        <a href="https://www.google.com/maps/search/?api=1&query=10+rue+Erard+Paris" target="_blank" rel="noopener" class="cta-button">
          <i class="fa fa-location-arrow"></i> S'y rendre
        </a>
      </div>
    `;

// Gestion du déploiement des détails dans les cartes
const toggleBtn = card.querySelector('.details-toggle');
const cardExpanded = card.querySelector('.card-expanded');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  cardExpanded.classList.toggle('is-open');
  if (cardExpanded.classList.contains('is-open')) {
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }
});

grid.appendChild(card);
};
