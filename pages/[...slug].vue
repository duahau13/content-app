<template>
  <article v-if="doc">
    <header>
      <div class="text-center p-5">
        <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
        <div class="text-gray-500 text-sm mt-2">
          <PostMeta :author="doc.author" :publishDate="doc.date" />
        </div>
        <span v-for="category in doc.categories">
          <Badge class="mr-2">
            <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
          </Badge>
        </span>
      </div>
      <img
        :src="doc.image.src"
        :alt="doc.image.alt"
        class="w-full h-full object-cover"
      />
    </header>
    <Toc :doc="doc" />
    <main class="prose">
      <ContentRenderer :value="doc"></ContentRenderer>
    </main>
    <PrevNext :prev="prevNext[0]" :next="prevNext[1]" />
    <PostComments :slug="route.params.slug" />
  </article>
  <div v-else>
    <NuxtLayout :name="404">
      <div>
        <div class="text-2xl">You've Arrived Here on Error, boss.</div>
        <Button>
          <NuxtLink to="/">Go to Homepage</NuxtLink>
        </Button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: doc } = await useAsyncData("post-" + route.path, () => {
  return queryCollection("post")
    .path(`/posts${route.path}`)
    .where("draft", "=", false)
    .first();
});

const { data: prevNext } = await useAsyncData("prevNext", () => {
  return queryCollectionItemSurroundings("post", `/posts${route.path}`)
    .where("draft", "=", false)
    .order("date", "DESC");
});
</script>

<style scoped>
.prose {
  max-width: inherit;
}
.prose
  :where(code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  )::before {
  content: none;
}
.prose
  :where(code):not(
    :where([class~="not-prose"], [class~="not-prose"] *)
  )::after {
  content: none;
}
.prose
  :where(p code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  font-size: 0.875em;
  padding: 0.2em 0.4em;
  margin: 0;
  font-weight: 400;
  background-color: var(--tw-prose-pre-code);
  border-radius: 6px;
  white-space: break-spaces;
}
</style>
