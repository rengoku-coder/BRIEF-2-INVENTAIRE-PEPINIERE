// Inventaire de la pépinière — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

async function main() {
  ouvrirSaisie();
  
let plants = [];

  try {
    console.log("==================================================");
    console.log("   INVENTAIRE DE LA PÉPINIÈRE");
    console.log("   Pépinière pédagogique");
    console.log("==================================================");

    plants = await chargerJson(FICHIER_DONNEES);

    console.log(plants.length + " espèce(s) chargée(s) depuis " + FICHIER_DONNEES + ".");

  } catch (erreur) {
    console.log("Impossible de lire " + FICHIER_DONNEES + " : " + erreur.message + ". L'inventaire démarre vide.");
  }

  let choix = "";

  while (choix !== "0") {

    console.log("--------------------- MENU ---------------------");
    console.log("1. Ajouter un plant");
    console.log("2. Lister l'inventaire");
    console.log("3. Rechercher (code, nom, groupe)");
    console.log("4. Trier (nombre de plants)");
    console.log("5. Synthèse des quantités");
    console.log("0. Quitter");

    choix = await demander("Votre choix : ");

    if (choix === null) {
      break;
    }

    if (choix === "0") {
      console.log("Au revoir !");

    } else if (choix === "1") {
          const id = await demander("Code (ex. N11) : ");
    const nomCommun = await demander("Nom commun : ");
    const groupe = await demander("Groupe (angiosperme ou gymnosperme) : ");
    const nombrePlants = await demander("Nombre de plants : ");
    const dateReleve = await demander("Date du relevé (AAAA-MM-JJ) : ");

    const saisie = { id, nomCommun, groupe, nombrePlants, dateReleve };
    const erreurs = ajouterPlant(plants, saisie);

    if (erreurs.length === 0) {
      await enregistrerJson(FICHIER_DONNEES, plants);
      console.log("Plant ajouté et enregistré.");
    } else {
      console.log("Plant non ajouté :");
      console.log(erreurs.join("\n"));
    }

    } else if (choix === "2") {
      console.log("--- Inventaire (" + plants.length + " espèce(s)) ---");
      console.log(listerPlants(plants));

    } else if (choix === "3") {
      console.log("Rechercher");

    } else if (choix === "4") {
      console.log("Trier");

    } else if (choix === "5") {
      console.log("Synthèse des quantités");

    } else {
      console.log("Choix inconnu : « " + choix + " ». Tapez un chiffre du menu.");
    }
  }

  fermerSaisie();
}
  
main();
