# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : Sitafa, Toure, rengoku-coder

1. **Une fonction que j'ai écrite**, et comment elle marche : J'ai écrit la fonction listerPlants dans le fichier src/registre.js.
Cette fonction permet d'afficher les espèces enregistrées dans l'inventaire.
Elle vérifie d'abord si la liste est vide. Si aucun plant n'est enregistré, elle renvoie le message « Aucun plant enregistré. ».
Dans le cas contraire, elle parcourt les plants, formate chaque enregistrement avec la fonction formaterPlant, puis rassemble les résultats dans une seule chaîne de caractères en séparant les lignes par des retours à la ligne.
2. **Une difficulté, et sa solution** : J'ai rencontré plusieurs difficultés pendant le travail avec Git.

La première était le message error: remote origin already exists. Il indiquait que le dépôt distant nommé origin était déjà enregistré. J'ai utilisé git remote -v pour vérifier l'adresse existante, puis git remote set-url origin pour la corriger.
J'ai également rencontré le message error: unknown subcommand: origin, parce que j'avais placé les mots de la commande dans le mauvais ordre. J'ai compris que la commande Git doit respecter une syntaxe précise.
Enfin, j'ai dû corriger un problème lié à un commit contenant un mauvais code. J'ai créé une branche de sauvegarde avant de revenir au commit précédent et de mettre à jour le dépôt distant.
Ces difficultés m'ont permis de mieux comprendre la gestion des dépôts distants, des commits et de l'historique Git.
3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : 
J'ai bénéficié de l'aide de mes compagnons du SAS (Kamagaté Abdallah, Konaté Kaba, LIADE MARC HENOC) de mon coach à qui j'ai posé des questions quand je ne comprenait pas des instructions  et d'outils d'intelligence artificielle, notamment Claude et ChatGPT, pour mieux comprendre certaines fonctions JavaScript et les outils fournis dans le projet.
J'ai notamment travaillé sur la compréhension de versNombre, estDateValide, demander, async, await, export et close().

