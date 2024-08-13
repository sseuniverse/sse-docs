![nuxt-ui-docs-social-card](https://github.com/nuxt-ui-pro/docs/assets/739984/f64e13d9-9ae0-4e03-bf7f-6be4c36cd9ba)

# SSE UI - Docs

[![SSE Nuxt UI](https://img.shields.io/badge/Made%20with-SSE%20Nuxt%20UI-00DC82?logo=nuxt.js&labelColor=020420)](https://sseworld.github.io)

- [Live demo](https://sse-saas.netlify.app/)
- [Play on Stackblitz](https://stackblitz.com/github/sseworld/sse-docs)
- [Documentation](#) Comming Soon...
- [Clone on Nuxt Studio](https://nuxt.studio/themes/docs)

## Quick Start

```bash [Terminal]
git clone https://github.com/sseuniverse/sse-docs
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Studio integration

Add `@nuxthq/studio` dependency to your package.json:

```bash
# npm
npm install --save-dev @nuxthq/studio

# pnpm
pnpm add -D @nuxthq/studio

# yarn
yarn add -D @nuxthq/studio

# bun
bun add -d @nuxthq/studio
```

Add this module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/get-started/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.


# ISSUE

"D:\next\sse-nuxt-ui\docs\node_modules\@iconify\vue\package.json" package.json "
```json
{
  "name": "@iconify/vue",
  "description": "Iconify icon component for Vue 3.",
  "author": "Vjacheslav Trushkin",
  "version": "4.1.2",
  "license": "MIT",
  "bugs": "https://github.com/iconify/iconify/issues",
  "homepage": "https://iconify.design/",
  "funding": "https://github.com/sponsors/cyberalien",
  "repository": {
    "type": "git",
    "url": "https://github.com/iconify/iconify.git",
    "directory": "components/vue"
  },
  "main": "dist/iconify.js",
  "module": "dist/iconify.mjs",
  "types": "dist/iconify.d.ts",
  "exports": {
    "./*": "./*",
    ".": {
      "import": "./dist/iconify.mjs",
      "types": "./dist/iconify.d.ts",
      "default": "./dist/iconify.js"
    },
    "./offline": {
      "import": "./dist/offline.mjs",
      "types": "./dist/offline.d.ts",
      "default": "./dist/offline.js"
    },
    "./dist/offline": {
      "import": "./dist/offline.mjs",
      "types": "./dist/offline.d.ts",
      "default": "./dist/offline.js"
    }
  },
  "dependencies": {
    "@iconify/types": "^2.0.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.24.4",
    "@microsoft/api-extractor": "^7.43.1",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@types/jest": "^29.5.12",
    "@vitejs/plugin-vue": "^4.6.2",
    "@vue/test-utils": "^2.4.5",
    "jsdom": "^21.1.2",
    "rollup": "^3.29.4",
    "typescript": "^5.4.5",
    "vitest": "^0.29.8",
    "vue": "^3.4.21",
    "@iconify/core": "^2.0.2",
    "@iconify/utils": "^2.1.23"
  },
  "peerDependencies": {
    "vue": ">=3"
  },
  "scripts": {
    "build": "node build",
    "build:lib": "tsc -b",
    "build:dist": "rollup -c rollup.config.mjs",
    "prebuild:api": "api-extractor run --local --verbose --config api-extractor.offline.json",
    "build:api": "api-extractor run --local --verbose --config api-extractor.iconify.json",
    "test": "vitest"
  }
}" to package.json "{
  "name": "@iconify/vue",
  "description": "Iconify icon component for Vue 3.",
  "author": "Vjacheslav Trushkin",
  "version": "4.1.2",
  "license": "MIT",
  "bugs": "https://github.com/iconify/iconify/issues",
  "homepage": "https://iconify.design/",
  "funding": "https://github.com/sponsors/cyberalien",
  "repository": {
    "type": "git",
    "url": "https://github.com/iconify/iconify.git",
    "directory": "components/vue"
  },
  "main": "dist/iconify.js",
  "module": "dist/iconify.mjs",
  "types": "dist/iconify.d.ts",
  "exports": {
    "./*": "./*",
    ".": {
      "import": "./dist/iconify.mjs",
      "types": "./dist/iconify.d.ts",
      "default": "./dist/iconify.js"
    },
    "./offline": {
      "import": "./dist/offline.mjs",
      "types": "./dist/offline.d.ts",
      "default": "./dist/offline.js"
    },
    "./dist/offline": {
      "import": "./dist/offline.mjs",
      "types": "./dist/offline.d.ts",
      "default": "./dist/offline.js"
    }
  },
  "dependencies": {
    "@iconify/types": "^2.0.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.24.4",
    "@microsoft/api-extractor": "^7.43.1",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@types/jest": "^29.5.12",
    "@vitejs/plugin-vue": "^4.6.2",
    "@vue/test-utils": "^2.4.5",
    "jsdom": "^21.1.2",
    "rollup": "^3.29.4",
    "typescript": "^5.4.5",
    "vitest": "^0.29.8",
    "vue": "^3.4.21",
    "@iconify/core": "^2.0.2",
    "@iconify/utils": "^2.1.23"
  },
  "peerDependencies": {
    "vue": ">=3"
  },
  "scripts": {
    "build": "node build",
    "build:lib": "tsc -b",
    "build:dist": "rollup -c rollup.config.mjs",
    "prebuild:api": "api-extractor run --local --verbose --config api-extractor.offline.json",
    "build:api": "api-extractor run --local --verbose --config api-extractor.iconify.json",
    "test": "vitest"
  }
}"
```

```yml
