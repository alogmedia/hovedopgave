// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: ["nitro-cloudflare-dev", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Your App Name",
      short_name: "AppShortName",
      description: "A description of your PWA",
      theme_color: "#ffffff", // Customize your theme color
      background_color: "#ffffff", // Background color when the app is loading
      display: "standalone", // Use 'standalone' for a native app feel
      orientation: "portrait",
      icons: [
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icon192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/", // Use this to handle navigation requests to non-precached URLs
      globPatterns: ["**/*.{js,css,html,png,svg,ico,jpg}"], // Adjust this if needed
    },
  },
  css: [
    "@/assets/main.scss", // Added main.scss to global styles
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: { link: [{ rel: "manifest", href: "/manifest.webmanifest" }] },
  },
});
