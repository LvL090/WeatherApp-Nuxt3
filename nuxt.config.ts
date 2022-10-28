// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig: {
    HELLO: "prueba solo de servidor",
  },
  modules: ["@nuxtjs/tailwindcss"],
});
