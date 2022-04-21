# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/react.svg?style=flat)

React est une bibliothèque JavaScript pour créer des interfaces utilisateur.

* **Déclaratif :** React facilite la création d'interfaces utilisateur interactives. Concevez des vues simples pour chaque état de votre application, React mettra à jour et affichera efficacement les bons composants lorsque vos données changent. Les vues déclaratives rendent votre code plus prévisible, plus simple à comprendre et plus facile à débogguer.
* **Basé sur des "components"** : créez des composants encapsulé qui gèrent leur état, puis composez-les pour créer des interfaces utilisateur complexes. Étant donné que la logique des composants est écrite en JavaScript au lieu de modèles, vous pouvez facilement transmettre des données riches via votre application et conserver l'état hors du DOM.
* **Apprenez une fois, écrivez n'importe où :** nous ne faisons aucune hypothèse sur le reste de votre pile technologique, vous pouvez donc développer de nouvelles fonctionnalités dans React sans réécrire le code existant. React peut également effectuer un rendu sur le serveur à l'aide de Node et alimenter des applications mobiles à l'aide de [React Native](https://reactnative.dev/) .

[Apprendre comment utiliser React dans un projet](https://reactjs.org/docs/getting-started.html).

## Installation

Avant de pouvoir installer React, plusieurs modules doivent être téléchargé et installé via Homebrew :

 

 - Installer Homebrew afin d'avoir accès aux dépôts de téléchargement de la commande brew :
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- Mettre à jour Homebrew :
```bash
brew update
```
- Faire un export du chemin vers le binaire de brew dans ".bashrc ou .zshrc "afin de pouvoir l'exécuter partout dans le système :
```bash
export PATH="/usr/local/bin:$PATH"
```
 - Grâce à brew, installer node (ce qui installera node + npm) :
```bash
brew install node
```
- Test de l'installation des outils :
```bash
npm -v
node -v
```

## Documentation

Vous pouvez trouver la documentation officiel de React [sur cette page web](https://reactjs.org/).  

Bien se mettre à jour sur cette page [ici](https://reactjs.org/docs/getting-started.html), si vous êtes rouillé en react js.

La documentation est divisé en plusieurs sections:

* [Tutoriel](https://reactjs.org/tutorial/tutorial.html)
* [Concept principaux](https://reactjs.org/docs/hello-world.html)
* [Guide avancé](https://reactjs.org/docs/jsx-in-depth.html)
* [API Références](https://reactjs.org/docs/react-api.html)
* [Trouver du support](https://reactjs.org/community/support.html)

## Examples

Quelques exemples sont disponibles [ici](https://reactjs.org/). Ci-dessous un l'implémentation et l'appel d'une fonction de base qui est **render()** dans un **container** le la librairie **react-dom**: 

```jsx
/* Importation de la librairie react-dom/client afin d'avoir accès à "createRoot"*/
import { createRoot } from 'react-dom/client';

/* Fonction de base affichant "Hello" + name envoyé en paramètre dans une div */
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```
Cet exemple affichera "Hello Taylor" dans un conteneur sur la page.

Vous remarquerez que nous avons utilisé une syntaxe de type HTML ; [nous l'appelons JSX](https://reactjs.org/docs/introducing-jsx.html) . JSX n'est pas nécessaire pour utiliser React, mais cela rend le code plus lisible et l'écriture donne l'impression d'écrire du HTML. Si vous utilisez React comme `<script>`balise, lisez [cette section](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx) sur l'intégration de JSX ; sinon, les chaînes d' [outils JavaScript recommandées](https://reactjs.org/docs/create-a-new-react-app.html) le gèrent automatiquement.

## Projet React

Création d'un projet React :
```bash
npm create-react-app appname
```

Puis éxecution :
```bash
cd appname
npm start
```
Cela ouvrira l'application React nouvellement créée dans un nouvel onglet de notre navigateur avec l'URL http://localhost:3000 . Si le port 3000 est occupé, l'application s'ouvrira dans n'importe quel autre port disponible.

### License

React is [MIT licensed](./LICENSE).

