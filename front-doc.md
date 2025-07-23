on commance ce projet on tappant la commande 

`npm create vite@latest`

ensuite dans le terminal on aura plusieurs choix à faire.

```bash
> npx
> create-vite

│
◇  Project name:
│  toko
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
│
◇  Scaffolding project in /Users/tim/Projets/chatToko/toko...
│
└  Done. Now run:

  cd toko
  npm install
  npm run dev
```
**Si le code source est déjà disponible sur la machine → il faut directement passer à la dernière étape (Done. Now run :)**  
Une fois fait, on peut bosser sur le code.  
👉 [Voir la partie « Structure Complète et rôles des dossiers »](#structure-complète-et-rôles-des-dossiers) pour plus d’informations sur la structure du projet.


- **et sinon on poursuit**

il faut installer prittier 

` npm install -D prettier prettier-plugin-tailwindcss` + un fichier .prettierrc avec le contenu de base :

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 4
}
```

ensuite on structure nos dossier avec les commandes suivantes : 

```bash
    mkdir -p src/components/{atoms,molecules,organisms,templates,pages}
    mkdir -p src/{layouts,routes,context,services,types,utils,styles}
```

maintenant on passe à l'installation de TailwindCSS + PostCSS 
on reste sur la version 3 car la 4 est encore beta et puis l'abondon du postcss parrait peu bénéfique à ce jour et cet instant précis - peut être on va regreter et il faudra faire la migration vers la version 4
```bash 
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
```

1. Configurer tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. Crée : src/styles/tailwind.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Importer Tailwind dans main.tsx
```ts
import './styles/tailwind.css'
```
------
### Structure Complète et rôles des dossiers

```css
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── layouts/
├── routes/
├── context/
├── hooks/
├── services/
├── types/
├── utils/
├── styles/
├── main.tsx
├── App.tsx
├── vite-env.d.ts
```

Dossier **components** - regroupe les composants visuels réutilisables.

- /atoms 
    - les plus petites unités de l'UI
    - Exemples: **Button**, **Input**, **Icon**, **Badge**
    - **Ils n'ont aucune logique métier, seulement l'affichage.**

- /molecules
    - Groupe d'atoms
    - Exemples: LabeledInput (labal + input), AvatarWithName, SearchBar
    - **Ils peuvent avoir une petite logique local, stylèstique ou d'animation.**

- /organisms
    - Sections complètes de l'interface, autonomes et intelligentes.
    - Exemples: **chatbox**, **sidebar**, **header**
    - **Contiennent plusieurs molecules et atoms, avec logique métier.**

- /templates
    - Structure de page générique sans données dynamique.
    - Exemples: ChatTemplate (header + sidebar + chatbox)
    - **Utilisé pour définir le "squelette visuel" des pages.**

- /pages
    - Composants réliés aux routes.
    - Exemples: Home.tsx, Chat.tsx, Login.tsx
    - **Elles utilisent les templates + données réelles + appels API.**

- /layouts
    - Composants utilisés pour structurer plusieurs pages à la fois.
    - Exemples : MainLayout, AuthLayout, DashboardLayout
    - Contient souvent : Header, Sidebar, Outlet

- /routes 
    - Regroupe la définition des routes React Router.
    - Exemple : routes/index.tsx avec :<br>
                `<Route path="/chat" element={<ChatPage />} />`
    - Centralise la navigation de l'app.  

- /context
    - Gère les contextes globaux via React Context API.
    - Exemples :
        - AuthContext (utilisateur connecté)
        - ChatContext (messages en cache)
    - Permet le partage d’état entre composants sans prop drilling.

- /hooks
    - Custom Hooks (useFetch, useOnlineStatus, etc.)
    - Extraits de logique réutilisables.
    - Souvent couplés à des services ou au contexte.

- services/
    - Gère les appels aux APIs, WebSocket, ou localStorage.
    - Exemples :
        - chat.service.ts → WebSocket / HTTP pour les messages
        - auth.service.ts → login/logout/refresh token

- /types
    - Définit tous les types TypeScript partagés.
    - Exemples :
    - types/user.ts → User, UserRole
    - types/message.ts → Message, Attachment

- /utils
    - Fonctions utilitaires.
    - Exemples :
        - formatDate()
        - isEmptyObject()
        - parseMessagePayload()

- /styles
    - Contient les fichiers CSS globaux ou Tailwind : tailwind.css
    - éventuellement : variables.css, animations.css

- Autres fichiers Fichier	
    - main.tsx Point d’entrée de l’app (ReactDOM.createRoot)
    - App.tsx Composant racine (peut contenir le routeur)
    - vite-env.d.ts	Types Vite + import.meta.env etc.

-----
bjectif du composant Heading
On veut créer un composant typographique réutilisable pour tous nos titres (h1, h2, etc.).
Pourquoi ?

✅ Centraliser les tailles et styles (text-4xl, etc.)
✅ Éviter de réécrire des classes Tailwind à chaque fois
✅ Rendre notre code plus lisible et cohérent

----- 