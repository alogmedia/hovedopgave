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
        proxyHeaders: true,
      },
    },
  },

  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/icon",
    "nuxt-swiper",
    "@tresjs/nuxt",
    "@nuxt/image",
  ],

  pwa: {
    manifest: {
      name: "Padelshoppen App",
      short_name: "Padelshoppen",
      description: "Padelshoppens officielle App",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
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
      navigateFallback: '/offline.html', 
      globPatterns: ['**/*.{js,css,html,png,svg,ico,jpg,json,woff2,webp,mp4}'],
      additionalManifestEntries: [
        { url: '/', revision: null },
        { url: '/points', revision: null },
        { url: '/error', revision: null },
        { url: '/kurv', revision: null },
        { url: '/guide', revision: null },
        { url: '/produkt', revision: null },

      ],
      maximumFileSizeToCacheInBytes: 22 * 1024 ** 2, // 22 MB limit
      runtimeCaching: [
        {
          urlPattern: /^\/_nuxt\/builds\/meta\/.*\.json$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'nuxt-meta-cache',
            expiration: {
              maxAgeSeconds: 24 * 60 * 60,
              maxEntries: 20,
            },
          },
        },
        {
          urlPattern: /^\/_nuxt\/builds\/meta\/.*\.json$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'nuxt-meta-cache',
            networkTimeoutSeconds: 10,
          },
        },
        {
          urlPattern: /.*\.(js|css|png|jpg|jpeg|svg|ico|webp|woff2|mp4)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-assets-cache',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60,
              maxEntries: 100,
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: false,
      type: "module",
    },
  },

  css: [
    "@/assets/main.scss",
    "@/assets/global_vars.scss",
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: { link: [{ rel: "manifest", href: "/manifest.webmanifest" }] },
  },

  image: {
    provider: "ipx",
    dir: "assets/images",
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
