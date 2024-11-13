// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-11",
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: ["nitro-cloudflare-dev", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Paddelshoppen PWA",
      short_name: "paddelpwa", // Short name for homescreen
      description: "Paddelshoppen PWA", // Description for homescreen
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
          src: "/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/icon192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon64.png",
          sizes: "64x64",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "/screenshot1.png",
          sizes: "413x914",
          type: "image/png",
          label: "Paddelshoppen PWA",
        },
      ],
    },
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/", // Use this to handle navigation requests to non-precached URLs
      globPatterns: ["**/*.{js,css,html,png,svg,ico,jpg}"], // Adjust this if needed
    },
    devOptions: {
      enabled: true,
      type: "module",
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
