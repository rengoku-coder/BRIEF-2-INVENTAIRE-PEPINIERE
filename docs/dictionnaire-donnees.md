# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — |N07|
| `nomCommun` | Nom commun de l'espèce végétale enregistrée| texte| non vide et obligatoire| — | cacao |
| `groupe` |Groupe botanique auquel appartient l'espèce | texte | Obligatoire, doit être angiosperme ou gymnosperme| — | gymnosperme |
| `nombrePlants` | Quantitité des plants disponibles pour l'espèce enregitrée | Nombre entier | Obligatoire et doit être un nombre entier positif ou nul,doit supérieur ou égale à 0| plants |45|
| `dateReleve` | Date à laquelle le comptage de l'espèce a été effectué | texte au format date| Date doit être réelle au format AAAA-MM-JJ | date | 2026-10-24 |

**Listes de valeurs autorisées** : 
Pour le champ groupe, les valeurs autorisées sont :
angiosperme : sont des plantes dont les graines sont enfermées dans un fruit.
gymnosperme : sont des plantes dont les graines ne sont pas enfermées dans un fruit.
Les groupes doivent être attribués à partir de la fiche botanique de référence fournie par le formateur. On ne doit pas inventer ou deviner une classification.

Pour le champ nombrePlants :
Valeur minimale : 0.
Les nombres décimaux sont interdits.
Les valeurs négatives sont interdites.
Les textes comme douze sont interdits.

Pour le champ dateReleve :
le format obligatoire : AAAA-MM-JJ.
l'exemple valide : 2026-10-24.
l'exemple invalide : 24/10/2026.
Une date inexistante, comme 2026-02-30, est refusée.



**Sources** :
Les informations utilisées pour construire ce dictionnaire proviennent de :
1. SUJET.md : consignes et exigences du projet.
2. donnees/plants.json : structure des enregistrements et données initiales de la pépinière.
