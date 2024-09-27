<template>
  <article>
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
          <div class="text-gray-500 text-sm mt-2">
            <PostMeta :author="doc.author" :date="doc.date" />
          </div>
          <span v-for="category in doc.categories">
            <Btn>
              <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
            </Btn>
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
    </ContentDoc>
  </article>
</template>

<script setup>
const { slug } = useRoute().params;
const { data: prevNext } = useAsyncData("prevNext", () => {
  return queryContent()
    .only(["slug", "title"])
    .sort({ date: 1 })
    .where({ draft: false })
    .findSurround(`/posts/${slug}`);
});
</script>

<style scoped>
.prose {
  max-width: inherit;
}
</style>
