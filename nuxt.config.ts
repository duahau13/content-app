// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  routeRules: {
    "/": { prerender: true },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
