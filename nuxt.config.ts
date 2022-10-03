// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  build: {
    transpile: ['yup', '@vee-validate/rules'],
  },

  css: [
    '@/assets/css/tailwind.css'
  ],

})
