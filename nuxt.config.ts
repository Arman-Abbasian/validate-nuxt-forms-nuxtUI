// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css:['@/assets/css/main.css'],
  appConfig: {
    ui: {
      primary: 'success', // Ensure this matches the Tailwind config
      gray: 'secondary',
    },
  },
  devServer: {
    port: 8000
  },
})