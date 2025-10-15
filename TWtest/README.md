# TWtest - Projet Next.js avec Tailwind CSS

Un projet moderne créé avec [Next.js](https://nextjs.org) et [Tailwind CSS](https://tailwindcss.com).

## Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Technologies utilisées

- **Next.js 15** - Framework React pour la production
- **React 18** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript** - JavaScript avec typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linter pour identifier et corriger les problèmes

## Structure du projet

```
TWtest/
├── app/
│   ├── globals.css      # Styles globaux avec Tailwind
│   ├── layout.tsx       # Layout principal de l'application
│   └── page.tsx         # Page d'accueil
├── public/              # Fichiers statiques
├── .gitignore
├── next.config.ts       # Configuration Next.js
├── package.json
├── postcss.config.mjs   # Configuration PostCSS
├── tailwind.config.ts   # Configuration Tailwind CSS
└── tsconfig.json        # Configuration TypeScript
```

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## En savoir plus

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

## Déploiement

La manière la plus simple de déployer votre application Next.js est d'utiliser [Vercel](https://vercel.com/new).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

