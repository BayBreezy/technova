import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_THEME_COLOR,
  SITE_URL,
} from "./app/utils/seo.js";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  experimental: { typedPages: true },
  watch: ["locales"],

  modules: [
    "nuxt-translation-manager",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "nuxt-security",
    "@vite-pwa/nuxt",
    "nuxt-module-hotjar",
    "@hypernym/nuxt-gsap",
    "nuxt-rellax",
    "../modules/translation",
    "nuxt-marquee",
    "@nuxtjs/seo",
  ],

  // Nuxt GSAP - https://github.com/hypernym-studio/nuxt-gsap
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: { scrollTrigger: true },
  },

  // Nuxt Hotjar - https://github.com/damevin/nuxt-module-hotjar
  hotjar: {
    hotjarId: import.meta.env.HOTJAR_ID,
    scriptVersion: +import.meta.env.HOTJAR_VERSION,
    debug: import.meta.env.NODE_ENV === "development",
  },

  // Nuxt i18n - https://i18n.nuxtjs.org/docs/getting-started
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", isCatchallLocale: true, file: "en.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
      { code: "es", iso: "es-ES", name: "Español", file: "es.json" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: SITE_LOCALE,
    lazy: true,
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      redirectOn: "root",
    },
    compilation: { strictMessage: false },
    baseUrl: SITE_URL,
  },

  // Nuxt Security - https://nuxt-security.vercel.app/documentation/getting-started/setup
  security: {
    headers: {
      crossOriginEmbedderPolicy: "unsafe-none",
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://randomuser.me",
          "https://*.unsplash.com",
          "https://*.hotjar.com",
        ],
        "style-src": ["'self'", "'unsafe-inline'", "https://rsms.me"],
        "script-src": ["'self'", "'unsafe-inline'", "https://*.hotjar.com", "https://*.hotjar.io"],
        "connect-src": [
          "'self'",
          "https://randomuser.me",
          "https://*.unsplash.com",
          "https://*.hotjar.com",
          "https://*.hotjar.io",
          "wss://*.hotjar.com",
        ],
      },
    },
  },

  // Nuxt PWA - https://vite-pwa-org.netlify.app/frameworks/nuxt.html
  pwa: {
    devOptions: { suppressWarnings: true },
    client: { installPrompt: false, periodicSyncForUpdates: 60 * 60 },
    includeAssets: ["favicon.ico", "robots.txt"],
    registerType: "autoUpdate",
    manifest: {
      name: SITE_NAME,
      short_name: SITE_SHORT_NAME,
      icons: [
        {
          src: "/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/icons/pwa-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      start_url: "/",
      display: "standalone",
      background_color: "#FFFFFF",
      theme_color: SITE_THEME_COLOR,
      description: SITE_DESCRIPTION,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
  },

  // Nuxt tailwind - https://tailwindcss.nuxtjs.org/getting-started/installation
  tailwindcss: { exposeConfig: true },

  // Nuxt Color Mode - https://color-mode.nuxtjs.org/
  colorMode: { classSuffix: "" },

  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      { from: "vue-sonner", name: "toast", as: "useSonner" },
    ],
  },

  app: {
    head: {
      title: SITE_NAME,
      titleTemplate: `%s | ${SITE_NAME}`,
    },
  },
  build: { transpile: ["vue-sonner"] },
  site: {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    defaultLocale: SITE_LOCALE,
  },
  schemaOrg: {
    identity: {
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-black.png`,
      type: "Organization",
    },
  },
  sitemap: {
    autoLastmod: true,
    autoI18n: true,
  },
});
