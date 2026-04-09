// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    exposeConfig: false, // No expone la configuración de Tailwind en DevTools
    viewer: false, // Activa visor en DevTools
    cssPath: "./app/assets/css/main.css",
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api.kambista.com/v1",
    },
  },
});
