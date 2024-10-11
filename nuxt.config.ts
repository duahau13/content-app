// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    // "nuxt-security",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  routeRules: {
    "/": { prerender: true },
  },
  content: {
    highlight: {
      theme: "github-dark",
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
