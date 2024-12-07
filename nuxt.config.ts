// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-11",
  devtools: { enabled: false },

  ssr: false,

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  nitro: {
    preset: "cloudflare-pages",
    routeRules: {
      "/api/**": {
        proxy: "https://www.padelshoppen.com/wp-admin/admin-ajax.php",
        proxyHeaders: true, // Forward headers such as cookies
      },
    },
  },
  modules: [
    "nitro-cloudflare-dev",
    "@vite-pwa/nuxt",
    "@nuxt/icon",
    "nuxt-swiper",
    "@tresjs/nuxt",
    "@nuxt/image",
  ],
  pwa: {
    manifest: {
      name: "Padelshoppen App",
      short_name: "Padelshoppen", // Short name for homescreen
      description: "Padelshoppens officielle App", // Description for homescreen
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
          label: "Padelshoppen",
        },
      ],
    },
    registerType: "autoUpdate",
    workbox: {
      navigateFallback: "/", // Use this to handle navigation requests to non-precached URLs
      globPatterns: ["**/*.{js,css,html,png,svg,ico,jpg}"], // Adjust this if needed
      maximumFileSizeToCacheInBytes: 22 * 1024 ** 2,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  css: [
    "@/assets/main.scss", // Added main.scss to global styles
    "@/assets/global_vars.scss", // Ensure it's included globally
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: { link: [{ rel: "manifest", href: "/manifest.webmanifest" }] },
  },

  image: {
    provider: "ipx", // Default provider
    dir: "assets/images", // For local assets
  },

  icon: {
    customCollections: [
      {
        prefix: "pad-icon",
        dir: "./assets/icons",
      },
    ],
  },
});
