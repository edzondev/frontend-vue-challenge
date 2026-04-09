// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "pinia-plugin-persistedstate/nuxt",
  ],
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
    ],
  },
  tailwindcss: {
    exposeConfig: false, // No expone la configuración de Tailwind en DevTools
    viewer: false, // Activa visor en DevTools
    cssPath: "./app/assets/css/main.css",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "vee-validate",
        "@vee-validate/zod",
        "zod",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api.kambista.com/v1",
    },
  },
});
