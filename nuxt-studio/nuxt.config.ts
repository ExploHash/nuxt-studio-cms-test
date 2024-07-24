// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', "@nuxt/image"],
  components: {
    dirs: [
      '~/components',
    ]
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-24',

  // force module initialization on dev env
  studio: {
    enabled: true
  }
})