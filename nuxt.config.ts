// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/app/assets/scss/main.scss'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: ['en', 'lv', 'lt', 'ee', 'es', 'pt', 'de', 'ru'],
    defaultLocale: 'ru',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: false
    }
  },
  app: {
    pageTransition: { name: 'page' }
  }
});
