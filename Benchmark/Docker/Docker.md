# Docker
## Description

Docker est une plate-forme logicielle qui vous permet de concevoir, tester et déployer des applications rapidement. Docker intègre les logiciels dans des unités normalisées appelées [conteneurs](https://aws.amazon.com/fr/containers/), qui rassemblent tous les éléments nécessaires à leur fonctionnement, dont les bibliothèques, les outils système, le code et l'environnement d'exécution. Avec Docker, vous pouvez facilement déployer et dimensionner des applications dans n'importe quel environnement, avec l'assurance que votre code s'exécutera correctement.

 ## Fonctionnement
Docker vous offre une méthode standard pour l'exécution de votre code. c'est un système d'exploitation pour conteneurs. De la même manière qu'une [machine virtuelle](https://aws.amazon.com/fr/ec2/) virtualise le matériel serveur (c.-à-d. qu'il n'est plus nécessaire de le gérer directement), les conteneurs virtualisent le système d'exploitation d'un serveur. Docker est installé sur chaque serveur et vous offre des commandes simples que vous pouvez utiliser pour concevoir, démarrer ou arrêter des conteneurs.

![logo](https://i.ibb.co/1r9hb07/monolith-2-VM-vs-Containers-78f841efba175556d82f64d1779eb8b725de398d.png)

## Cas d'utilisation
L'implémentation de docker au sein d'un projet prend du sens lors ce qu'il y a collaboration ou un besoin de partage des environnement de développement. Son implémentation requière un minimum de connaissance technique sur le soft afin de déployer un conteneur bien géré avec une bonne logique. Dans un développement "one-man-army", docker n'est pas vital, l'environnement de dev étant unique et ne s'appliquant qu'à une machine.

## Documentation

[Docker documentation](https://docs.docker.com/)
