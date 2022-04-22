# React Redux

![img](https://i.ibb.co/JmHT22y/react-redux.png)
[![version npm](https://camo.githubusercontent.com/85e203bef08d354ea64e21478acbb17bd2dc28f42b8a2281d19a9b92dfc06b47/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d72656475782e7376673f7374796c653d666c61742d737175617265)](https://www.npmjs.com/package/react-redux)

Fixations React officielles pour [Redux](https://github.com/reduxjs/redux) .  
Performant et flexible.

React Redux 8.0 nécessite **React 16.8.3 ou version ultérieure** (ou React Native 0.59 ou version ultérieure).
Pour utiliser React Redux avec votre application React, installez-la en tant que dépendance.

## Installation Redux[](https://redux.js.org/introduction/installation#redux-toolkit "Lien direct vers la rubrique")

Redux Toolkit comprend le noyau Redux, ainsi que d'autres packages clés que nous estimons essentiels pour créer des applications Redux (telles que Redux Thunk et Reselect).

Il est disponible sous forme de package sur NPM pour une utilisation avec un groupeur de modules ou dans une application Node :

```bash
// if using npm //
npm install @reduxjs/toolkit
// if using yarb //
yarn add @reduxjs/toolkit
```

Il est également disponible sous forme de version UMD, qui peut être chargée à partir [du `dist`dossier sur unpkg](https://unpkg.com/@reduxjs/toolkit/dist/) . Les versions UMD rendent Redux Toolkit disponible en tant que `window.RTK`variable globale.

Pour installer la version stable :

```bash
// if using npm //
npm install redux
// if using yarn //
yarn add redux
```

Si vous ne l'êtes pas, vous pouvez [accéder à ces fichiers sur unpkg](https://unpkg.com/redux/) , les télécharger ou pointer votre gestionnaire de paquets vers eux.

Le plus souvent, les gens utilisent Redux comme une collection de modules [CommonJS .](http://www.commonjs.org/) Ces modules sont ce que vous obtenez lorsque vous importez `redux`dans un [environnement Webpack](https://webpack.js.org/) , [Browserify](http://browserify.org/) ou Node. Si vous aimez vivre à la limite et utiliser [Rollup](https://rollupjs.org/) , nous le soutenons également.

Si vous n'utilisez pas de groupeur de modules, c'est également très bien. Le `redux`package npm inclut des versions [UMD de production et de développement précompilées dans le](https://github.com/umdjs/umd) [`dist`dossier](https://unpkg.com/redux/dist/) . Ils peuvent être utilisés directement sans bundler et sont donc compatibles avec de nombreux chargeurs et environnements de modules JavaScript populaires. Par exemple, vous pouvez déposer une version UMD en tant que [`<script>`balise](https://unpkg.com/redux/dist/redux.js) sur la page ou [demander à Bower de l'installer](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975) . Les builds UMD rendent Redux disponible en tant que `window.Redux`variable globale.

Le code source Redux est écrit en ES2015, mais nous précompilons les versions CommonJS et UMD vers ES5 afin qu'elles fonctionnent dans [n'importe quel navigateur moderne](https://caniuse.com/#feat=es5) . Vous n'avez pas besoin d'utiliser Babel ou un module bundler pour [démarrer avec Redux](https://redux.js.org/introduction/examples#counter-vanilla) .

## Complémentaires

Très probablement, vous aurez également besoin [des liaisons React](https://github.com/reduxjs/react-redux) et [des outils de développement](https://github.com/reduxjs/redux-devtools) .

```bash
npm install react-redux
npm install --save-dev @redux-devtools/core
```

Notez que contrairement à Redux lui-même, de nombreux packages de l'écosystème Redux ne fournissent pas de versions UMD. Nous vous recommandons donc d'utiliser des bundles de modules CommonJS tels que [Webpack](https://webpack.js.org/) et [Browserify](http://browserify.org/) pour une expérience de développement des plus confortables.
Vous devrez également [installer Redux](https://redux.js.org/introduction/installation) et [configurer un magasin Redux](https://redux.js.org/recipes/configuring-your-store/) dans votre application.


## [](https://github.com/reduxjs/react-redux/blob/master/README.md#documentation)Documentation

Les documents React Redux sont publiés sur **[https://react-redux.js.org](https://react-redux.js.org/)** .

## [](https://github.com/reduxjs/react-redux/blob/master/README.md#how-does-it-work)Comment ça marche?

Le post [L'histoire et la mise en œuvre de React-Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/) explique ce qu'il fait, comment il fonctionne et comment l'API et la mise en œuvre ont évolué au fil du temps.

Il y a aussi une discussion [Deep Dive into React-Redux](https://blog.isquaredsoftware.com/2019/06/presentation-react-redux-deep-dive/) qui couvre une partie du même matériel à un niveau supérieur.

## [](https://github.com/reduxjs/react-redux/blob/master/README.md#license)Licence

[MIT](https://github.com/reduxjs/react-redux/blob/master/LICENSE.md)
