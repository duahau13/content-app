// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode", // "nuxt-security",
    "shadcn-nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  routeRules: {
    "/": { prerender: true },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
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
  // site: {
  //   url: "https://ai.293979.xyz",
  //   name: "My Awesome Site",
  //   description:
  //     "Welcome to my awesome site where you can find interesting stuff about coding, electronics and more.",
  //   defaultLocale: "en",
  // },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-03-11",
});
