![Logo Github](https://zupimages.net/up/21/46/o76v.png)

# Github



## Description

**GitHub** est un service web d'[hébergement](https://fr.wikipedia.org/wiki/H%C3%A9bergeur_web "Hébergeur web") et de gestion de développement de logiciels, utilisant le [logiciel de gestion de versions](https://fr.wikipedia.org/wiki/Logiciel_de_gestion_de_versions "Logiciel de gestion de versions")  [Git](https://fr.wikipedia.org/wiki/Git).
est centré vers l'aspect social du développement. En plus d'offrir l'hébergement de projets avec  [Git](https://fr.wikipedia.org/wiki/Git "Git"), le site offre de nombreuses fonctionnalités habituellement retrouvées sur les  [réseaux sociaux](https://fr.wikipedia.org/wiki/R%C3%A9seau_social "Réseau social")  comme les flux, la possibilité de suivre des personnes ou des projets ainsi que des graphes de réseaux pour les  [dépôts](https://fr.wikipedia.org/wiki/D%C3%A9p%C3%B4t_(informatique) "Dépôt (informatique)")  (en anglais  _repository_). Celui-ci offre aussi la possibilité de créer un  [wiki](https://fr.wikipedia.org/wiki/Wiki "Wiki")  et une page web pour chaque dépôt. Le site offre aussi un  [logiciel de suivi de problèmes](https://fr.wikipedia.org/wiki/Logiciel_de_suivi_de_probl%C3%A8mes "Logiciel de suivi de problèmes")  (de l'anglais  _issue tracking system_). GitHub propose aussi l'intégration d'un grand nombre de services externes, tels que l'intégration continue, la gestion de versions, badges, chat basés sur les projets, etc.

Les documentations des projets sont écrites en langage  [Markdown](https://fr.wikipedia.org/wiki/Markdown "Markdown")  (fichiers .md).

Cet outil va nous permettre en tant qu'utilisateur & administrateur de suivre l'avancement du projet ansi que la rédaction de documentations. De plus, les "issues" écrites sur Github pourrons être fermé directement avec l'utilisation de "gitcz" qui donne en plus accès à des messages de "commit" personnalisés et autres personnalisations.

##  Les commandes Git

### **Git config**

-   L’une des commandes git les plus utilisées est  **git config.** On l’utilise pour configurer les préférences de l’utilisateur : son mail, l’algorithme utilisé pour diff, le nom d’utilisateur et le format de fichier etc. Par exemple, la commande suivante peut être utilisée pour définir le mail d’un utilisateur:

```bash
git config --global user.email sam@google.com
```    

### **Git init**

-   Cette commande est utilisée pour créer un nouveau dépôt  [GIT](https://www.hostinger.fr/tutoriels/comment-utiliser-une-branche-git)  :
```bash    
git init
```  

### **Git add**

-   La  **commande git add** peut être utilisée pour ajouter des fichiers à l’index. Par exemple, la commande suivante ajoutera un fichier nommé temp.txt dans le répertoire local de l’index:
```bash    
    git add temp.txt
``` 

### **Clone git**

-   La  **commande git clone** est utilisée pour la vérification des dépôts. Si le dépôt se trouve sur un serveur distant, utilisez:
```bash  
git clone https://github.com/AVNOV/dev-cerns.git
```  
-   Inversement, si une copie de travail d’un dépôt local doit être créée, utilisez:
```bash
git clone /chemin/vers/dépôt
```

### **Git commit**

-   La  **commande git commit** permet de  **valider les modifications apportées** au HEAD. Notez que tout commit ne se fera pas dans le dépôt distant.
```bash
git commit –m “Description du commit”
```
- Le paquet "gitcz" (npm dans projet javascript) peut être utilisé pour des commits personnalisés :
```bash
git cz
```

### **Git status**

-   La  **commande git status** affiche la liste des fichiers modifiés ainsi que les fichiers qui doivent encore être ajoutés ou validés. Usage:
```bash
git status
```

### **Git push**

-   **Git push** est une autre commandes  [GIT](https://www.hostinger.fr/tutoriels/meilleurs-clients-git-gui/)  de base. Un simple push envoie les modifications locales apportées à la branche principale associée :
```bash
git push origin master
```

### **Git checkout**

-   La  **commande git checkout** peut être utilisée pour créer des branches ou pour basculer entre elles. Par exemple nous allons créer une branche:
```bash
git checkout -b <nom-branche>
```
-   Pour passer simplement d’une branche à une autre, utilisez:
```bash
git checkout <nom-branche>
```

### **Git remote**

-   Cette commande **remote** permet à un utilisateur de se connecter à un dépôt distant. La commande suivante répertorie les dépôts distants actuellement configurés:
```bash
git remote –v
```
-   Cette commande permet à l’utilisateur de connecter le dépôt local à un serveur distant:
```bash
git remote add origin <93.188.160.58>
```

### **Branche git**

-   La  **commande git branch** peut être utilisée pour répertorier, créer ou supprimer des branches. Pour répertorier toutes les branches présentes dans le dépôt, utilisez:
```bash
git branch
```
-   Pour supprimer une branche:
```bash
git branch –d <nom-branche>
```

### **Git pull**

-   Pour fusionner toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local, la commande pull est utilisée. Usage:
```bash
    git pull
```

### **Git merge**

-   La  **commande git merge** est utilisée pour fusionner une branche dans la branche active. Usage:
```bash
git merge <nom-branche>
```

### **Git diff**

-   La  **commande git diff** permet de lister les conflits. Pour visualiser les conflits d’un fichier, utilisez
```bash
git diff --base <nom-fichier>
```
-   La commande suivante est utilisée pour afficher les conflits entre les branches à fusionner avant de les fusionner:
```bash
git diff <branche-source> <branche-cible>
```
-   Pour simplement énumérer tous les conflits actuels, utilisez:
```bash
git diff
```
### **Git log**

-   L’  **exécution de**  cette commande génère le log d’une branche. Un exemple de sortie :
```bash
git log

$    commit 15f4b6c44b3c8344caasdac9e4be13246e21sadw 
$    Author: Alex Hunter <alexh@gmail.com> 
$    Date: Mon Oct 1 12:56:29 2016 -0600
```    

### **Git reset**

-   Pour réinitialiser l’index et le répertoire de travail à l’état du dernier commit, la  **commande git reset** est utilisée :
```bash
git reset --hard HEAD
```

### **Git rm**

-   **Git rm** peut être utilisé pour supprimer des fichiers de l’index et du répertoire de travail. Usage:
```bash
git rm nomfichier.txt
```
### **Git stash**

-   L’une des moins connues,  **git stash** aide à enregistrer les changements qui ne doivent pas être commit immédiatement. C’est un commit temporaire. Usage:
```bash
git stash
```

### **Git show**

-   Pour afficher des informations sur tout fichier git, utilisez la  **commande git show** . Par exemple:
```bash
git show
```

### **Git fetch**

-   **Git fetch** permet à un utilisateur d’extraire tous les fichiers du dépôt distant qui ne sont pas actuellement dans le répertoire de travail local. Exemple d’utilisation:
```bash
git fetch origin
```

### **Git ls-tree**

-   Pour afficher un fichier arborescent avec le nom et le mode de chaque élément, et la valeur SHA-1 du blob, utilisez la  **commande git ls-tree** . Par exemple:
```bash
git ls-tree HEAD
```

### **Git cat-file**

-   À l’aide de la valeur SHA-1, affichez le type d’un fichier à l’aide de la  **commande git cat-file** . Par exemple:
```bash
git cat-file –p d670460b4b4aece5915caf5c68d12f560a9fe3e4
```

### **Git grep**

-   **Git grep** permet à un  **utilisateur de rechercher** dans les arbres de contenu des expressions et / ou des mots. Par exemple, pour  _rechercher www.hostinger.com_ dans tous les fichiers, utilisez:
```bash
git grep "www.hostinger.com"
```

### **Gitk**

-   **Gitk** est l’interface graphique du dépôt local. Vous pouvez l’appeler en exécutant:
```bash
gitk
```
### **Git rebase**

-   La  **commande git rebase** est utilisée pour la réapplication des commits sur une autre branche. Par exemple:
```bash
git rebase master
```

Il est important de signaler que des IDE tels que Visual Studio Code & Codium donne accès à toutes ces commands directement avec des objets cliquables et accessible via leurs interfaces graphiques
