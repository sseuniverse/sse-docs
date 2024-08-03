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
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
