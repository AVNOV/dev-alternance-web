![Vue logo](https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67)
[![Downloads](https://camo.githubusercontent.com/a59bbe40866f28928406c8775963465180a4c338b16a0122d327a6cdaf8fbc08/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652e7376673f73616e6974697a653d74727565)](https://npmcharts.com/compare/vue?minimal=true)  [![Version](https://camo.githubusercontent.com/6a1ee221c99c800e8d3b104c99033afa11d84c16f58e77632d21ed9d2370f49d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652e7376673f73616e6974697a653d74727565)](https://www.npmjs.com/package/vue)  [![License](https://camo.githubusercontent.com/9cd15767dc45dd1a09a15c0751f65623b4040bc28f13875a3803250e3d95e167/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652e7376673f73616e6974697a653d74727565)](https://fr.wikipedia.org/wiki/Licence_MIT)

Vue est un framework JavaScript pour la création d'interfaces utilisateur. Il s'appuie sur les standards HTML, CSS et JavaScript et fournit un modèle de programmation déclaratif et basé sur des composants qui vous aide à développer efficacement des interfaces utilisateur, qu'elles soient simples ou complexes.

L'exemple ci-dessus illustre les deux fonctionnalités principales de Vue :

-   **Rendu déclaratif** : Vue étend le HTML standard avec une syntaxe de modèle qui nous permet de décrire de manière déclarative la sortie HTML en fonction de l'état JavaScript.
    
-   **Réactivité** : Vue suit automatiquement les changements d'état de JavaScript et met efficacement à jour le DOM lorsque des changements se produisent.

## Installation

## [npm](https://docs.npmjs.com/about-npm)

npm est la méthode d’installation recommandée lors du développement de grosses applications avec Vue. Il s’associe bien avec des empaqueteurs de modules comme  [webpack](https://webpack.js.org/)  ou  [Browserify](http://browserify.org/). Vue fournit également des outils d’accompagnement pour la rédaction de  [Composants Mono-fichier](https://fr.vuejs.org/v2/guide/single-file-components.html).

Dernière version stable :
```bash
npm install vue
```

## [cli](https://fr.vuejs.org/v2/guide/installation.html#CLI)

Vue.js offre une  [CLI officielle](https://github.com/vuejs/vue-cli)  (« interface en ligne de commande ») pour mettre rapidement en place les bases d’une application monopage ambitieuse. Il offre une série de builds pré-configurés pour un workflow frontend moderne. Cela ne prend que quelques minutes pour commencer et lancer des rechargements à chaud, de l’analyse syntaxique à la sauvegarde, et des builds prêts pour la production. Consultez  [la documentation Vue CLI](https://cli.vuejs.org/)  pour plus de détails.

Utiliser la CLI nécessite des connaissances préalables en Node.js et les outils de build associés. Si vous êtes nouveau sur Vue ou les outils de build front-end, nous vous recommandons fortement de parcourir  [le guide](https://fr.vuejs.org/v2/guide/)  sans aucun outil de build avant d’utiliser l’interface CLI.

## Exemples

### [Runtime + Compiler vs. Runtime seul](https://fr.vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-seul "Runtime + Compiler vs. Runtime seul")

Si vous avez besoin de compiler des templates en temps réel (par ex. : passer une chaîne de caractère à l’option  `template`, ou monter un élément en vous servant de sa représentation HTML dans le DOM comme template) vous aurez besoin du compilateur et donc du build complet :

```javascript
// ceci a besoin d'un compilateur
new Vue({
  template: '<div>{{ hi }}</div>'
})

// ceci n'en a pas besoin
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

En utilisant  `vue-loader`  ou  `vueify`, les templates à l’intérieur des fichiers  `*.vue`  sont pré-compilés en JavaScript pendant l’étape de build. Vous n’avez donc pas réellement besoin du compilateur dans le paquetage final et pouvez dans ce cas utiliser la version du build Runtime.

## Documentation

Plus d'information [ici](https://fr.vuejs.org/v2/guide/installation.html)

### License

Vuejs is [MIT licensed](https://fr.wikipedia.org/wiki/Licence_MIT).

