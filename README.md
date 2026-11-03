# Vue starter for Wodby

A single-page application for the [Wodby Vue service](https://github.com/wodby/service-vue) and
[Vue stack](https://github.com/wodby/stack-vue).

It includes:

- [Vue](https://vuejs.org) with TypeScript and single-file components, built with [Vite](https://vite.dev)
- client-side routing with [Vue Router](https://router.vuejs.org), including a not-found page
- component tests with [Vitest](https://vitest.dev) and [Vue Test Utils](https://test-utils.vuejs.org)
- Wodby CI that tests, builds and deploys the static build, and checks it after each deployment

## Local development

```shell
npm install
npm run dev
```

Open the local URL printed by Vite. Edit `src/views/HomeView.vue`; the page updates as you save.

Run the tests and build for production (the build checks types first):

```shell
npm test
npm run build
npm run preview
```

## Project structure

- `src/App.vue` — the layout around the current route.
- `src/router/index.ts` — the routes. Add a view in `src/views` and a route for it here.
- `src/views` — one component per page.
- `src/__tests__` — tests that mount the application at a given path.
- `vite.config.ts` — the Vite, Vitest and development server configuration.

## On Wodby

The pipeline in `.wodby/pipeline.yml` runs `npm ci`, `npm test` and `npm run build` in a Node.js container,
then builds the service image from `dist` only and deploys it. If you change the build output directory, change
`wodby ci build --from` as well. After each deployment, `.wodby/post-deployment.yml` checks that Nginx is up and
that a client-side route returns the application.

- Nginx serves the files and answers every path that is not a file with `index.html`, so routes such as `/about`
  work when they are opened directly or reloaded. Files in `dist/assets` have hashed names and are cached for a year.
- The application runs in the browser. Environment variables of the service, including `WODBY_*` and the variables
  of linked services, do not reach it. Values it needs must be in the build (`import.meta.env`) or fetched from an
  API at run time. Never put secrets in the build: everyone who opens the site can read them.

In a Wodby development workspace, the checkout runs with Vite's development server instead of Nginx: changes
appear as you save them, without a deployment. `vite.config.ts` allows the environment's host names from
`WODBY_HOSTS`, which Vite needs to answer requests for them.
