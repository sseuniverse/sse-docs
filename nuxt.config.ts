import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: ["@sse-ui/nuxt"],
  colorMode: { disableTransition: true },
  typescript: { strict: false },
  future: { compatibilityVersion: 4 },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxthq/studio",
    "nuxt-og-image",
    "nuxt-component-meta",
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton", "UIcon"].includes(c.pascalName)
      );
      globals.forEach((c) => (c.global = true));
    },
  },

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": { prerender: true },
    "/api/search.json": { prerender: true },
    "/ui/components": { redirect: "/ui/components/aside", prerender: false },
    "/ui/getting-started": {
      redirect: "/ui/getting-started/installation",
      prerender: false,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  componentMeta: {
    exclude: [
      "@nuxt/content",
      "@nuxt/ui-templates",
      "@nuxtjs/color-mode",
      "@nuxtjs/mdc",
      "nuxt/dist",
      "nuxt-og-image",
      "nuxt-site-config",
      resolve("./components")
    ],
    metaFields: {
      type: false,
      props: true,
      slots: true,
      events: false,
      exposed: false,
    },
  },

  site: {
    url: process.env.URL,
  },
});
