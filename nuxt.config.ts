// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ], 
  fonts: {
    families: [
      { name: 'Tektur', provider: 'google'}
    ]
  }
});