# Test d'évaluation Frontend Meilleurs Agents

[![MeilleursAgents logo](images/logo-ma.png)](https://www.meilleursagents.com)

## Présentation

Ce dépôt contient les instructions pour le test technique frontend de Meilleurs Agents.

Son objectif est de nous donner un aperçu de tes connaissances techniques pratiques à travers la réalisation d'une application en rapport avec ce que nous faisons en tant que Frontend Engineer chez Meilleurs Agents.

## Objectif

L'objectif est de développer le code client d'une application permettant de visualiser tous les messages envoyés à une agence sur base d'une API fournie.

Les messages peuvent être de différents types : email, SMS, vocal.

L'application est donc destinée à un collaborateur d'une agence.
Le collaborateur peut visualiser les messages pour une ou plusieurs agences à laquelle il est attaché.

L'application demandée est une version simplifiée d'une de nos applications existantes.

Enfin, il y a quelques questions à répondre dans le document [SOLUTION.md](SOLUTION.md).

## Démarrage du test

Ce dépôt étant un template, il est possible de créer un nouveau projet en utilisant celui-ci comme [template](https://github.com/MeilleursAgents/frontend-technical-test/generate). Voir le gros bouton vert avec écrit `Template` dessus. Merci de laisser le projet généré en privé.

[![MeilleursAgents logo](images/dépôt-privé.png)](https://github.com/MeilleursAgents/FrontendTechTest/generate)

Alternativement, cloner ce dépôt.

    git clone git@github.com:MeilleursAgents/frontend-technical-test.git

## Restitution

Merci d'envoyer un `.zip` du dépôt **complet** (sans le dossier `node_modules`) au tech recruter avec lequel tu es en contact.

Si tu n'as pas encore postulé, tu peux nous faire parvenir le test technique à l'adresse suivante avec tes coordonées : frontend-technical-test@meilleursagents.com

⚠️ Les C.V. seuls ne sont pas acceptés à cette adresse mail. Pour postuler, toutes nos offres sont disponibles sur notre [page carrière](https://carriere.meilleursagents.com/) ou directement sur [Welcome to the Jungle](https://www.welcometothejungle.com/fr/companies/meilleursagents/jobs)

## Durée de réalisation

La durée de réalisation n'est pas limitée, l'idée est de prendre son temps, de respecter les consignes et de nous faire parvenir le résultat lorsqu'il te paraît satisfaisant.

## Fonctionalités logiques et techniques

### Requis pour le passage à la présentation du test

**Fonctionnalités produit :**

- Je peux changer d'agence, via le select et l'URL, et je vois la liste des messages de la dite agence
- Je peux faire défiler la liste des messages sur plusieurs pages, quelque soit la taille de l'écran
- Je clique sur un message et je vois le détail du message
- Si le message n'était pas lu le compteur se décrémente

**Implémentations techniques :**

- Intégrer la version mobile et desktop
- Intégrer la possibilité de changer d'agence via le select HTML natif et l'URL (routing)
- Intégrer la vue agence avec la liste des messages
- Intégrer la lecture d'un message en donnant la possibilité d'y accéder depuis l'URL (routing)
- Respecter la structure de routing `/realtors/:id` et `/realtors/:id/messages/:id`
- Gérer le compteur de message non-lus (envoyer une requête à l'API pour faire persister la donnée)
- Gérer la pagination (infinite scroll)
- Fidélité des écrans avec les maquettes fournies

### Apprécié avec l'implémentation

⚠️ Attendu pour les rôles de Senior et Principal Engineer

- Tests (unitaires, fonctionnels) : une couverture de 100% n'est pas nécessaire, mais la pertinence est appréciée
- Bonnes pratiques d'accessibilité
- Dates relatives sur la liste des messages (ex: "Hier", "Il y a 2 heures")

### Contraintes techniques

- Utiliser une librairie/un framework JS
- Utiliser l'API fournie
- Développer l'application dans le dossier `front`

### Libertés techniques

- Utilisation de tooling, alternative au CSS ou non pour le style
- Utilisation de TypeScript ou JavaScript

### Boilerplate React

[Vite + React + Typescript + Eslint + Prettier](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier) : le plus proche de nos nouvelles applications destinées aux clients professionnels.

    rm front/.gitkeep && git clone git@github.com:TheSwordBreaker/vite-reactts-eslint-prettier.git ./front

[Next.js](https://nextjs.org/docs/api-reference/create-next-app) : ce que nous utilisons pour le site grand public en server side rendering

    npx create-next-app ./front

[Create React App](https://create-react-app.dev/) : la base

    npx create-react-app ./front

Un autre framework que React peut également être utilisé, tel que Vue.js, Angular, etc.

## Design

Les maquettes au format [Figma](Maquettes.fig) et [PDF](Maquettes.pdf) sont fournies.
Des [assets](assets) sont disponibles dans le dossier du même nom.

## API Docker

### Installation

Pour installer Docker Desktop, se rendre sur le site de [Docker](https://www.docker.com/get-started).

### Lancer l'API

Le [Swagger](https://swagger.io/solutions/api-documentation/) et l'API sont disponibles à l'adresse http://localhost:8080 en lançant la commande suivante :

    docker run -p 8080:8080 --rm --name MA-FTT-API meilleursagents/frontend-technical-test-api

### API Endpoints

- Realtor list

  - `curl http://localhost:8080/realtors`

- Realtor details

  - `curl http://localhost:8080/realtors/101`

- Realtor messages list

  - `curl http://localhost:8080/realtors/101/messages`
  - `curl http://localhost:8080/realtors/101/messages?page=2`
  - `curl http://localhost:8080/realtors/101/messages?page=2&page_size=20`
  - `curl http://localhost:8080/realtors/101/messages?page=2&page_size=20&sort=date:desc`

- Single message details

  - `curl http://localhost:8080/realtors/101/messages/1001`

- Mark a message as read (data can only be `application/json`)
  - `curl -X PATCH -H "Content-Type: application/json" http://localhost:8080/realtors/101/messages/1001 -d '{"read":false}'` (explicit mark as unread)

### API Schemas

You'll find every schemas in the "Schemas" section of the documentation
The pagination header is called `X-Pagination` and the format is called `PaginationMetadata`
