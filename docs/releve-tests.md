# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
Nombre d'espèces enregistrées : 10 epèces
Espèce angiosperme : 8 espèces de N01 à N08 
Espèce gymnosperme : 2 espèces de N09 à N10
Quantité d'angiosperme : 30 + 45 + 20 + 50 + 25 + 18 + 12 + 22 = 222 plants
quantité de gynosperme : 8 + 10 = 18 plants
Les lignes à 10 plants ou moins : N09 (pin) : 8 plants, N10 (cycas) : 10 plants.


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajout valide (ex: N12, hévéa, angiosperme, 5 plants, 2026-10-30)|Enregistrement réussi, message de confirmation, plant visible dans l'inventaire et persistant après redémarrage de l'app |Conforme à l'attendu, Écriture correcte dans plants.json | Sitafa Toure|
| Ajout valide (ex: N11, papayer, angiosperme, 17 plants, 2026-10-29)|Enregistrement réussi, message de confirmation, plant visible dans l'inventaire et persistant après redémarrage de l'app.| Conforme à l'attendu, Écriture correcte dans plants.json|Sitafa Toure |
| Ajout invalide (quantité négative ou décimale)|message d'erreur explicite sans faire planter le programme, retour au menu| Conforme à l'attendu,la saisie erronée est bloquée et signalée|Sitafa Toure |
| Recherche introuvable, ex: code ou nom inexistant| Message indiquant qu'aucun résultat n'a été trouvé pour la recherche effectuée| Conforme à l'attendu. Aucun plant retourné, affichage d'un message clair|Sitafa Toure |
| Tri par nombre de plants (Choix 4)| Affichage de la liste des plants triée par ordre croissant du nombre de plants (commençant par N09 avec 8 plants)|Conforme à l'attendu,tri numérique correct| Sitafa Toure|
| Synthèse des quantités (Choix 5)| Affichage du stock total (240), répartition par groupe (angiospermes/gymnospermes), stocks faibles (N09, N10) et espèce la plus abondante (N04)| Conforme à l'attendu. Chiffres conformes aux calculs de référence|Sitafa Toure |
|Choix inconnu dans le menu (ex: saisie de l'option 9) |Affichage d'un message d'erreur signalant un choix invalide et réaffichage du menu principal |Conforme à l'attendu. L'application gère proprement l'erreur de saisie | Sitafa Toure|
| | | | |


**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : 
Mon projet sera cloné depuis le dépôt GitHub sur un autre ordinateur afin de vérifier son bon fonctionnement. L'application sera lancée avec node app.js, puis les tests automatisés seront exécutés avec npm test. Cette vérification permettra de s'assurer que le projet fonctionne correctement dans un nouvel environnement et que les instructions du README sont suffisantes pour son installation et son utilisation.
