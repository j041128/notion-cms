// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/scripts'],
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  vite: { 
    plugins: [
      tailwindcss()
    ],
  },
  runtimeConfig: {
    public: {
      NUXT_APP_URL: process.env.NUXT_APP_URL,
      CORS_PROXY: process.env.CORS_PROXY,
      GOOGLE_FORM_ACTION: process.env.GOOGLE_FORM_ACTION,
      googleMaps: {
        mapId: process.env.GOOGLE_MAPS_MAP_ID,
      },
      scripts: {
        googleMaps: {
          apiKey: process.env.NUXT_PUBLIC_SCRIPTS_GOOGLE_MAPS_API_KEY
        }
      }

    }
  },
  routeRules: {
    '/api/gallery': {
      ssr: false,
    },
    '/api/proxy/**': {
      ssr: false,
    }
  }
})