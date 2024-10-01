// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    // "nuxt-security",
  ],
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
