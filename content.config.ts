import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    post: defineCollection({
      source: "posts/*.md",
      type: "page",
      schema: z.object({
        title: z.string().nonempty(),
        author: z.string().nonempty(),
        date: z.date(),
        draft: z.boolean(),
        description: z.string().nonempty(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        image: z.object({
          src: z.string().url(),
          alt: z.string(),
        }),
        slug: z.string().nonempty(),
      }),
    }),
  },
});
