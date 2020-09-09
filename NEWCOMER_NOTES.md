Interrogations avant début de l'exercice : 
1) Qu'est-ce que "create-esm" ?
2) Quel est le "meilleur" nombre de sample à créer pour l'exercice ?
3) Pourquoi utiliser Yarn ?
   Je supppose que cela est du au fait que Yarn était, à une époque, plus rapide que npm
   
Problème  rencontrés lors de l'exercice numéro 1 :
- Lorsque je lance "yarn" j'ai un message d'erreur (Error: spawn yarn ENOENT), je sais pas si c'est volontaire.
- Dans le doute, j'ai mis en commentaire l'appel au .yarn.js présent dans le .yarnrc
- Je vais continuer d'avancer sur l'exercice et voir si je rencontre de nouveaux problèmes
- J'ai relancer l'installation des dépendances, cela a l'air de fonctionner
- Je tente de lancer la commande "yarn generate-sample-locations -n 1000 --file ./bin/sample-locations.csv"
- J'ai une erreur "(node:4252) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension."
- La correction de cette erreur est plutot clair, néanmoins, je ne sais pas si cette erreur est "normale"
- J'ai ajouté le "type": "module" au package.json
- J'ai relancer la commande
- Cette fois j'ai une nouvelle erreur car le programme tente d'importer "faker/locale/fr" sans l'extension ".js"
- J'ajoute l'extension .js
- Je relance la commande
- La commande semble s'être lancer correctement et le .csv s'est généré correctement.


Je passe au dossier de l'API.
Temps réalisées : ~15mn

Interrogation non résolue : 
- L'utilisation d'un .yarnrc appelant un .yarn.js
 
 API :
 - Même erreur concernant le .yarnrc
 - Je tente de lancer le serveur en lancant le yarn start
 - Update du package.json en ajoutant le "type": "module"
 - Update des imports en ajoutant le ".js" nécessaire
 - Je pense qu'il y a un "meilleur" moyen, car normalement Node.js peut s'occuper d'importer les fichiers sans forcément
 importer les extensions, il faudrait investiger un peu plus.
 - Je relance le yarn start
 - J'ai deux erreurs lors du lancement : 
    - error: __dirname is not defined
    - error: Unhandled Rejection at: Promise
- Ces erreurs doivent être liées...
- Modification du path 
- Déplacement du sample-locations.csv dans le dossier data de l'API
- Je tente d'accéder au http://localhost:4000/locations
- Cela semble fonctionner

Temps réalisés: ~18mn



Je passe au dossier du front.
- Bonne nouvelle ! Pas de .yarnrc, je lance directement la commande yarn
- Actuellement sur windows (Pas le choix :( ) la commande REACT_APP_API_ORIGIN=http://localhost:4000 yarn start ne fonctionne pas
('REACT_APP_API_ORIGIN' n’est pas reconnu en tant que commande interne)
- En passant par gitbash cela fonctionne
- L'appli web semble de fonctionner correctement

Temps réalisés: 2mn

Je vais push mes modifications et faire une pause avant d'effectuer la seconde étape.
J'ai du écrire un peu vite, je referais une passe concernant les fautes d'orthographe 
et je formaterais mieux le .md :)

PS: Ajout du .idea dans le .gitignore 

-----
WebApp
- 
 -> tentative du clean de l'input
 -> Visiblement je ne peux avoir d'effet de bord sur une fonction render.
 - J'ai compris le problème mais je ne sais pas comment passer outre cette erreur
 Délais ~1h

API
---
 - Ajout du rateLimiter ~10mn
 - Ajout de la fonction Country Breakdown ~20mn
 - Ajout de la fonction Fake entries cleanup ~5mn
 - Ajout de la clusterisation de l'application
    - Pour le coup je ne suis pas sur de cette solution.
    - Le problème étant que je n'ai pas constater de pic particuler au démarrage de l'application
    - J'ai donc clusterisé l'application "par défaut" comme on fait sur node.js habituellement
    - Néanmoins je ne peux vérifier ma solution à 100%
    - Je reste donc cette sceptique concernant cette solution 
    
 
 
Temps total : 140mn
    

