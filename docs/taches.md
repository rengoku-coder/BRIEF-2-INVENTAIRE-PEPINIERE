# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | Du Lundi 02-11-2026 au Mardi 03-11-2026 | | |
| Fiche 2 : lire et écrire le JSON | Mardi 03-11-2026 | | |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | Mardi 03-11-2026 | | |
| Fiche 4 : rechercher et trier ; choix 3 et 4 | Mardi 03-11-2026 | | |
| Fiche 5 : synthèse ; choix 5 |Du mardi 03-11-2026 au Mercredi 04-11-2026| | |
| Tests par un camarade ; mes propres tests | Mercredi 04-11-2026 | | |
| Fiche agronomique ; README ; documents |Mercredi 04-11-2026| | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | Mercredi 04-11-2026| | |
| Bonus | Jeudi 05-11-2026| | |

**Blocages** (le message exact, ce que j'ai essayé, la solution) : 
"error: remote origin already exists." Quand j'ai tapé `git remote add origin`, Git m'a dit que `origin` existait déjà. Je voulais ajouter une adresse GitHub qui était déjà enregistrée. Solution : j'ai vérifié avec `git remote -v`, puis j'ai corrigé l'adresse avec `git remote set-url origin <adresse>`.
"error: unknown subcommand: origin". J'ai tapé `git remote origin add` : les mots étaient dans le mauvais ordre et Git a pris `origin` pour une action. Pour trouver la solution : l'action doit venir avant le nom, donc `git remote add origin mon adresse`.
 Le dernier commit « Etape : Le menu ; ajouter et lister (toutes les fonctions sont au complet) » contenait un mauvais code , et je voulais le supprimer de GitHub. Ce que j'ai fait : j'ai d'abord créé une branche de sauvegarde avec `git branch sauvegarde`, puis j'ai supprimé le commit en local avec `git reset --hard HEAD~1`, qui m'a ramené au commit précédent. Ensuite, j'ai remplacé l'historique de GitHub avec `git push --force`