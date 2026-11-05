# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). 

Brief 2 : Développement d'une application JavaScript de gestion d'inventaire d'une pépinière.
Ce projet consiste à concevoir une application en ligne de commande permettant d'enregistrer, de rechercher, de trier et de suivre les quantités de plants disponibles dans une pépinière.
Le projet est réalisé individuellement dans le cadre de la formation Digital Farming School.

## Contexte

Mon outil est destiné à un technicien ou à un responsable de pépinière, qui suit les plants disponibles pour plusieurs producteurs avec peu de temps sur le terrain. Lors de mon stage en riziculture à Arrah, j’ai constaté qu’un technicien agricole ne passe qu’une fois par mois pour plus de cinquante producteurs, donc l’information doit être retrouvée vite, alors que les quantités par espèce sont aujourd’hui dispersées sur des étiquettes et des feuilles séparées. L’utilisateur saisit au clavier un code, un nom commun, un groupe botanique, une quantité de plants et une date de relevé. Le programme vérifie ces saisies, refuse les erreurs en expliquant pourquoi, puis enregistre l’inventaire. Il affiche la liste, les recherches, les tris et une synthèse avec le total, les quantités par groupe, l’espèce la plus abondante et les stocks faibles. Il ne devine pas le groupe botanique, ne remplace pas l’observation agronomique, et son seuil de 10 plants n’est pas une consigne de production.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/rengoku-coder/BRIEF-2-INVENTAIRE-PEPINIERE.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités


- [X] Données lues et enregistrées dans `donnees/plants.json`
- [X] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [X] Lister l'inventaire, message si l'inventaire est vide
- [X] Rechercher par code ou par nom ; filtrer par groupe botanique
- [X] Trier par nombre de plants
- [X] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

Les données sont stockées dans le fichier donnees/plants.json et contiennent initialement 10 lignes de plants fictifs. Chaque ligne comprend 5 champs obligatoires : un code unique (id), un nom commun (nomCommun), un groupe botanique validé par le coach (groupe), un nombre de plants entier positif (nombrePlants), et une date de relevé au format AAAA-MM-JJ (dateReleve).

## Limites

Le seuil de 10 plants est un repère pédagogique de suivi, non une recommandation de production.
Les 10 espèces et 240 plants correspondent au jeu de données de démonstration de l'application.
L'application facilite le suivi des stocks, mais ne remplace pas l'expertise du technicien agricole.
L'historique, les alertes et la gestion multi-pépinières sont des perspectives d'évolution.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

 *TOURE SITAFA , rengoku-coder. Entraide : J'ai bénéficié de l'aide de mes compagnons du SAS (Kamagaté Abdallah, Konaté Kaba, LIADE MARC HENOC) de mon coach à qui j'ai posé des questions quand je ne comprenait pas des instructions  et d'outils d'intelligence artificielle, notamment Claude et ChatGPT, pour mieux comprendre certaines fonctions JavaScript et les outils fournis dans le projet.
J'ai notamment travaillé sur la compréhension de versNombre, estDateValide, demander, async, await, export et close().
