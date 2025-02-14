// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/seo",
    // "@nuxtjs/tailwindcss",
    // "nuxt-security",
  ],
  // extends: ["@nuxt/ui-pro"],
  routeRules: {
    "/": { prerender: true },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  image: {
    format: ["webp"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  site: {
    url: "https://ai.293979.xyz",
    name: "My Awesome Site",
    description:
      "Welcome to my awesome site where you can find interesting stuff about coding, electronics and more.",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
});
