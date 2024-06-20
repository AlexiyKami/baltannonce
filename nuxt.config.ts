// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/app/assets/scss/main.scss'],
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page' }
  }
});
