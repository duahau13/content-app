<template>
  <article>
    <ContentDoc :path="`/posts/${slug}`">
      <template v-slot="{ doc }">
        <header>
          <div class="text-center p-5">
            <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
            <div class="text-gray-500 text-sm mt-2">
              <PostMeta :author="doc.author" :date="doc.date" />
            </div>
            <span v-for="category in doc.categories">
              <Btn>
                <NuxtLink :to="`/category/${category}`">{{
                  category
                }}</NuxtLink>
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
      </template>
      <template #not-found>
        <NuxtLayout :name="404">
          <div class="container">
            <div class="text-2xl">You've Arrived Here on Error, boss.</div>
            <NuxtLink to="/">Go to Homepage</NuxtLink>
          </div>
        </NuxtLayout>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const { slug } = useRoute().params;
const { data: prevNext } = await useAsyncData("prevNext", () =>
  queryContent()
    .only(["slug", "title"])
    .sort({ date: 1 })
    .where({ draft: false })
    .findSurround(`/posts/${slug}`)
);
console.log(prevNext);
</script>

<style scoped>
.prose {
  max-width: inherit;
}
</style>
