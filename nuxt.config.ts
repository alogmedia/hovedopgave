// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  ssr: true,

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: ["nitro-cloudflare-dev"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
