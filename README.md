# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
# or with bun
bun run build
```

You can preview the production build with `npm run preview`.

## Deployment

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

### Prerequisites

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to **Pages** under "Code and automation"
3. Under **Source**, select "GitHub Actions"
4. Push to the `main` branch or manually trigger the workflow

The workflow will automatically:
- Install dependencies using Bun
- Build the site with `bun run build`
- Deploy to GitHub Pages

Your site will be available at: `https://<username>.github.io/<repository-name>/`
