# **Projet Solo M1-DevMobile Faouizi MZEBLA** 
![logo](https://user-images.githubusercontent.com/56970054/226587270-6a25990f-0b1f-4e14-844f-43739af20f02.png)

## Description
### Création d'une application mobile en React Native listant des recettes de cuisines et permettant d'en ajouter de nouvelles.

#### Modules utilisés :
- Styled-Component : `npm install styled-components`
- React Navigation : `npm install @react-navigation/native`
- AsyncStorage : `npm install @react-native-async-storage/async-storage`
- Axios : `npm install axios`
- Notifee : `npm install --save @notifee/react-native`
- Firebase : `npm install --save @react-native-firebase/app` / `npm install --save @react-native-firebase/auth`


## Installation : 
`npm install`

### Utilisation d'une API de recettes :

- https://spoonacular.com/food-api

_Si l'API renvoie une requête 402 c'est qu'elle a atteint sa limite hebdomadaire._

### Fait : 

- [x] Avoir un routeur
- [x] Le site doit etre responsive (Mobile First)
- [x] Avoir un système d'authentification (si nécessaire) Register / Login
- [x] Utiliser les styled-Components
- [x] Être codé proprement (avoir une structure propre de code et bien découper ses composants)
- [x] Avoir les normes récentes de code (ES6+)
- [x] Avoir un système de retour utilisateur, notifier les succes/erreurs, faire un affichage en cas de non reponse de l’api, faire un loader durant les call API etc.


### **Visualisation de recettes aléatoires et possibilité de voir en détail la recette selectionné :**

![qemu-system-x86_64_faEM0OwNH1](https://user-images.githubusercontent.com/56970054/227199424-b91494d2-b571-4c05-8054-40e286c0b5a7.gif)


### **Système de recherche avec possibilité d'ajouter les recettes recherchées au favori :**

![qemu-system-x86_64_mWlhkcrpND](https://user-images.githubusercontent.com/56970054/227198194-66088c20-addc-4a7d-825c-7489e845dd27.gif)

### **Page de Connexion et d'Inscription avec Firebase permettant de voir sa page profil lors de l'authentification :**

![qemu-system-x86_64_qcxEo07IxE](https://user-images.githubusercontent.com/56970054/227199934-1373e3b9-f530-48ae-804d-b8a66fa8db8e.gif)

### **Page pour ajouter des recettes :** 

![qemu-system-x86_64_HnXEev3g0Y](https://user-images.githubusercontent.com/56970054/227203605-3241440b-037b-4124-8a90-ecbac7c4e71f.gif)




### Bonus :

- Utilisation de Firebase pour l'inscription et la connexion

- Création d'une page profil

- Système de Notification avec Notifee lors de la déconnexion / connexion et lors de l'ajout d'une recette

- Ajout d'une page Favori pour pouvoir garder de côté les recettes intéressantes

### Expérimentation :

- Installation de Expo pour voir l'app directement sur son téléphone (IOS)

![image](https://user-images.githubusercontent.com/56970054/226435141-739c0d8c-fec1-4b79-aa3a-db24191e7a09.png)



