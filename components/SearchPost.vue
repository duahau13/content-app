<script lang="ts" setup>
const searchTerm = ref("");
const { data: articles, refresh } = await useAsyncData("posts", () =>
  queryContent("posts")
    .only(["title", "slug"])
    .where({
      draft: false,
      $or: [
        { title: { $contains: searchTerm.value } },
        { slug: { $contains: searchTerm.value } },
      ],
    })
    .limit(10)
    .find()
);
const search = () => {
  refresh();
};
const clearSearch = () => {
  searchTerm.value = "";
};
</script>

<template>
  <main class="relative">
    <input v-model="searchTerm" @input="search" />
    <ul v-if="searchTerm" class="absolute bg-white w-full">
      <li v-for="result in articles" :key="result.slug">
        <NuxtLink :to="`/${result.slug}`" @click="clearSearch">
          {{ result.title }}
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
