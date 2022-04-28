[![angular-logo](https://github.com/angular/angular/raw/master/aio/src/assets/images/logos/angular/angular.png)](https://github.com/angular/angular/blob/master/aio/src/assets/images/logos/angular/angular.png)
 [![CI status](https://camo.githubusercontent.com/de85a05dd455c4aaf5de626ecd9dd67147585c54cd0f52f16c8feb9740235fbe/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f6275696c642f6769746875622f616e67756c61722f616e67756c61722f6d61737465722e7376673f6c6f676f3d636972636c656369266c6f676f436f6c6f723d666666266c6162656c3d436972636c654349)](https://circleci.com/gh/angular/workflows/angular/tree/master) [![Angular on npm](https://camo.githubusercontent.com/77afb106c5d247ed3488e658f56956b4fd844057e87070353629148e09d4dfef/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40616e67756c61722f636f72652e7376673f6c6f676f3d6e706d266c6f676f436f6c6f723d666666266c6162656c3d4e504d2b7061636b61676526636f6c6f723d6c696d65677265656e)](https://www.npmjs.com/@angular/core)

## La description
[Angular.js](https://angularjs.org/)  est un framework de développement frontal open source populaire principalement utilisé pour développer des applications Web dynamiques à page unique (SPA).

AngularJS transfère tout le contenu du serveur vers le navigateur et charge toutes les pages Web simultanément. Une fois le contenu chargé, cliquer sur n'importe quel lien de la page ne recharge pas tout le contenu de la page ; au lieu de cela, il met simplement à jour les sections de la page.

La différence la plus significative entre les sites traditionnels et ceux basés sur Angular est qu'Angular s'attend à ce que le navigateur crée la page. Cela ne met pas beaucoup de charge sur le serveur et entraîne par conséquent [chargement de page plus rapide](https://geekflare.com/fr/reduce-webapp-loading-time/).

-   Liaison de données - La fonctionnalité de liaison de données bidirectionnelle évite aux développeurs d'écrire beaucoup de code. Il s'agit de la synchronisation automatique des données entre les composants du modèle et de la vue.
-   Modèles - Les modèles HTML sont analysés par le navigateur directement dans le DOM.
-   Injection de dépendances - js a une injection de dépendances (DI) intégrée qui facilite le développement naturel, la compréhension et les tests.
-   Directives - Avec cette fonctionnalité, il devient facile de créer des balises HTML personnalisées qui agissent comme de nouveaux widgets personnalisés. Il peut également être utilisé pour manipuler les attributs DOM.
-   Le développement est plus rapide par rapport au développement HTML + Javascript conventionnel si vous maîtrisez bien Angular.js
-   Il peut être configuré en MVC ainsi qu'en architecture MVW

## Philosophie

Angular reste un framework en majorité axé sur de la SPA (Single Page Application). La mécanique de rafraichissement de la page et de l'allègement de charge de calcul pour le coté serveur et vraiment bien implémenté.

##  Installation

Installez le CLI angular globalement :
```bash
npm install -g @angular/cli
```

## Details

Lorsqu'il existe plusieurs vues pour une application, ReactJS est le meilleur choix car pour chaque vue, un widget différent est nécessaire. Divers composants ou widgets peuvent ensuite être transférés sur les vues. L'utilisation d'Angular for Views n'est pas une bonne idée car elle peut entraîner de nombreuses complications et problèmes indésirables. Par conséquent, ReactJS est mieux utilisé pour créer des vues basées sur des widgets / components.
