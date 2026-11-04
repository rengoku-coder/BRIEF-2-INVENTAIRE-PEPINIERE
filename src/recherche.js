// Rechercher et trier les plants.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les plants dont le nom commun CONTIENT le texte cherché,
// sans tenir compte des majuscules : 'PALM' trouve 'palmier à huile'. Éventuellement vide.
export function rechercherParNom(plants, texte) {
    let resultat = [];

    for (let i = 0; i < plants.length; i++) {
        let nom = plants[i].nomCommun.toLowerCase();
        let recherche = texte.toLowerCase();
        if (nom.includes(recherche)) {
            resultat.push(plants[i]);
        }
    } return resultat;
}

// Renvoie un NOUVEAU tableau avec les plants de ce groupe botanique (éventuellement vide).
export function filtrerParGroupe(plants, groupe) {
    let resultat = [];
    for (let i = 0; i < plants.length; i++) {
        if (plants[i].groupe === groupe) {
            resultat.push(plants[i]);
        }
    } return resultat;
}

// Renvoie une COPIE triée par nombre de plants croissant, avec un comparateur numérique.
// Deux plants de même nombre gardent leur ordre d'origine. Le tableau reçu ne doit pas changer d'ordre.
export function trierParNombrePlants(plants) {
  throw new Error('TODO : coder trierParNombrePlants dans src/recherche.js');
}
