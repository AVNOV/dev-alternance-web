
  

[![Logo Nest](https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667)](http://nestjs.com/)

# NESTJS

[Un framework Node.js](http://nodejs.org/) progressif pour créer des applications côté serveur efficaces et évolutives.

[![Version MNP](https://camo.githubusercontent.com/ddeb61629220ec52a44c20ed3409dc47fa42a397dc79a9b09f198a6c90f97d4a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e6573746a732f636f72652e737667)](https://www.npmjs.com/~nestjscore)  [![Licence de package](https://camo.githubusercontent.com/b54941784e15a6fe045f1d2e4903243d550af0f5f792e9e7efb51df9efb519ea/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f406e6573746a732f636f72652e737667)](https://www.npmjs.com/~nestjscore)  [![Téléchargements du MNP](https://camo.githubusercontent.com/6c8328951e755df856401fcef8e75c7bfdc73e5d7dfde5f70d59e0fe4a09032b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f406e6573746a732f636f6d6d6f6e2e737667)](https://www.npmjs.com/~nestjscore)

## La description

Nest est un framework permettant de créer des applications côté serveur [Node.js](http://nodejs.org/) efficaces et évolutives . Il utilise JavaScript moderne, est construit avec [TypeScript](http://www.typescriptlang.org/) (préserve la compatibilité avec JavaScript pur) et combine des éléments de POO (programmation orientée objet), FP (programmation fonctionnelle) et FRP (programmation réactive fonctionnelle).

Sous le capot, Nest utilise [Express](https://expressjs.com/) , mais offre également une compatibilité avec un large éventail d'autres bibliothèques, comme par exemple [Fastify](https://github.com/fastify/fastify) , permettant une utilisation facile de la myriade de plugins tiers disponibles.

-   Nest.js fonctionne parfaitement sous forme de monolithe et sous forme de micro-service.
-   Il est simple à utiliser, rapide à apprendre et facile à installer.
-   Il s’appuie sur TypeScript, mais utilisable en JavaScript.
-   Une interface en ligne de commande (CLI) complète pour stimuler la productivité et faciliter le développement.
-   La prise en charge native de dizaines de modules essentiels comme TypeORM, Mongoose, GraphQL, Logging, Validation, Caching, Guards, WebSockets, etc.
-   Applications très simples à tester
-   Une excellente documentation 🔥
-   Une architecture simple et scalable pour les gros serveurs.

## Philosophie

Ces dernières années, grâce à Node.js, JavaScript est devenu la "lingua franca" du web pour les applications front et backend, donnant lieu à des projets impressionnants comme [Angular](https://angular.io/) , [React](https://github.com/facebook/react) et [Vue](https://github.com/vuejs/vue) qui améliorent la productivité des développeurs et permettent la construction d'applications rapides et backend. applications frontales testables et extensibles. Cependant, côté serveur, bien qu'il existe de nombreuses bibliothèques, aides et outils superbes pour Node, aucun d'entre eux ne résout efficacement le problème principal - l'architecture.

Nest vise à fournir une architecture d'application prête à l'emploi qui permet la création sans effort d'applications hautement testables, évolutives, faiblement couplées et facilement maintenables. L'architecture est fortement inspirée d'Angular.

##  Installation

Pour commencer, vous pouvez soit échafauder le projet avec la [CLI Nest](https://docs.nestjs.com/cli/overview) , soit cloner un projet de démarrage (les deux produiront le même résultat).

Pour échafauder le projet avec la CLI Nest, exécutez les commandes suivantes. Cela créera un nouveau répertoire de projet et remplira le répertoire avec les fichiers Nest de base initiaux et les modules de support, créant ainsi une structure de base conventionnelle pour votre projet. La création d'un nouveau projet avec la **CLI Nest** est recommandée pour les nouveaux utilisateurs. Nous continuerons avec cette approche dans [Premiers pas](https://docs.nestjs.com/first-steps) .

```bash
npm i -g @nestjs/cli
```

#### Alternatives (test) [#](https://docs.nestjs.com/#alternatives)

Alternativement, pour installer le projet de démarrage TypeScript avec **Git** :

```bash
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
npm run start
```
