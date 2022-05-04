![Logo CRT](https://i.ibb.co/N2QqDR8/logo-CRT-removebg-preview.png)

# Choix de la pile technologique (Technology stack)

## Context
Le besoin actuel de l'entreprise est la mise en place d'une pile technologique afin de faire un refacto complet de son application web actuelle. Développé sur "Filemaker", ce logiciel / app web commence à montrer des signes faiblesses aux niveaux de ses performances. Le souci étant de le front-end et le back-end sont tout les deux implémenté dans un même fichier. Cette app web va vers de gros problèmes de corruption de fichier et la logique front / back de l'app web pose des souci vis-à-vis de la gestion des données. Une modernisation technologique est donc requise.

## Selection finale
```j
						 --------------------------------------------
						|  FRONT-END   |   INTERFACE  |   DATABASE   |
						|--------------|--------------|--------------|
						| React JS/TS  |    Nest JS   |    Mysql     |
						|      HTML    |              |              |
						|      CSS     |              |              |
						|     Redux    |              |              |
						 --------------------------------------------
```

## Benchmark

Pour ce projet plusieurs technologies étaient en compétition. La vraie guerre se situe au niveau du front-end et pour l'interface. En parlant base de données, il s'avère que mysql reste une valeur sûre pour la gestion des data.

 - **Le Front-End**: En restant dans la famille des framework Javascript, le React fût la technologie sélectionnée. En effet, Angular (design pattern MVVM) qui est un framework apprécié, n'est pas une solution pour ce projet, car il est très axé sur de la SPA (Single page application). Pour une plateforme de ce volume nous avons besoin d'un système de routing. Vue JS, pourrait sembler adapté mais malgré une bonne quantité de modules déjà intégrés de routing et de front, le souci se pose au niveau de la maintenabilité de l'app web car ce framework est assez jeune, son éco système communautaire et "pauvre" ou plutôt "pas très riche" et certains axes pointus de la documentation officielle n'ont pas encore de traduction depuis le chinois...
C'est donc la qu'intervient React avec le JSX (JavaScript XML qui nous permet d'écrire du HTML dans React. JSX facilite l'écriture et l'ajout de HTML dans des objets React.). Ce framework répond en tout point à la demande. Il est flexible, a un temps d'apprentissage que n'est pas énorme et donne accès à des logiques de développement sécurisé, rapide et nous dirons même presque intuitif même s'il demande quand même un petit temps d'adaptation. La construction d'application en react avec sa logique de components avec Redux est fluide. Cela donne vie à des applications, réactives, rapides, et synchronisés lorsque les mécaniques sont bien intégré. De plus, la mise en place de ESLint (outil d'analyse de code statique) nous permettra de produire un code plus propre et en accord avec l'ensemble de l'application.

- **L'Interface**: Le framework NestJs en raison de sa robustesse et flexibilité. Il s'agit d'un cadre d'application Web minimal basé sur node.js qui fournit un ensemble robuste de fonctionnalités pour les applications Web et mobiles. Puisqu'il fournit une couche au-dessus de  [node.js](https://geekflare.com/fr/nodejs-frameworks/), nous pouvons accéder efficacement aux  [Fonctions JavaScript](https://geekflare.com/fr/javascript-frameworks-for-api/). Pour le développement d'API, il contient des gestionnaires intermédiaires et de nombreuses méthodes de service / utilitaire HTTP. NestJs **implique que tous les projets soient structurés et standardisés de la même façon.** Ce qui amène un cadre au développeur qui ne perd pas ses repères lors de l'implémentation de l'API. En plus du fait que le code soit ouvert au Javascript comme au Typescript (Javascript avec des types) apportant de la sécurité et de la logique de code.

- **La Base de données**: Les avantages de [MySQL](https://matob.web.id/fr/avantages-de-base-de-donnees-mysql/) sont nombreux et expliquent sa grande popularité auprès des développeurs : il est totalement **open source et gratuit**, ses **performances sont excellentes** et il est en plus **multi-threadé et multi-utilisateurs**, et est Prévu pour fonctionner parfaitement avec **PHP**. Nous pouvons également ajouter à cela qu’il est facile à mettre en place et à utiliser. Vous pouvez utiliser différents types de données dans [MySQL](https://matob.web.id/fr/avantages-de-base-de-donnees-mysql/), tels que entier, flottant, texte, date et horodatage. Avec ces divers types de données, bien sûr, cela peut vous aider et vous faciliter la gestion d’une base de données. Bien qu’il ne soit pas payant, le système de gestion de base de données [MySQL](https://matob.web.id/fr/avantages-de-base-de-donnees-mysql/)  possède de très bonnes fonctionnalités de sécurité. Avec un système de contrôle d’accès, les administrateurs peuvent déterminer qui a le droit d’obtenir un accès complet à vos bases. Ainsi, l’accès aux données de confidentialité peut être minimisé grâce au contrôle de ce système. MAMP (**acronyme** de : « Macintosh » « Apache » (le serveur web) « MySQL ») est une solution en un clic pour configurer votre serveur Web personnel. Il installe un environnement de serveur local en quelques secondes sur votre ordinateur qui nous permettra de gérer nos bases.
