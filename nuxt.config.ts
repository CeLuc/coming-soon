export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  app: {
    head: {
      titleTemplate: 'CeLuc - %s',
    },
  },
  css: ['~/assets/css/poppins.css'],

  image: {
    directus: {
      baseURL: 'https://dam.celuc.de/assets/',
      modifiers: {
        format: 'webp',
      },
    },
    presets: {
      background: {
        modifiers: {
          fit: 'contain',
        },
      },
    },
  },
})
