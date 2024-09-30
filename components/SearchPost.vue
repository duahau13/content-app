<script lang="ts" setup>
const searchTerm = ref("");
const { data: results, refresh } = await useAsyncData("posts", () =>
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
const toSearchPage = (keyword: string) => {
  navigateTo({
    path: "/search",
    query: {
      keyword: keyword,
      sort: "asc",
    },
  });
  clearSearchTerm();
};
const clearSearchTerm = () => {
  searchTerm.value = "";
};
</script>

<template>
  <main class="relative">
    <input v-model="searchTerm" @input="search" />
    <ul v-if="searchTerm" class="absolute bg-white w-full">
      <li v-for="result in results" :key="result.slug">
        <NuxtLink :to="`/${result.slug}`" @click="clearSearchTerm">
          {{ result.title }}
        </NuxtLink>
      </li>
      <Btn v-if="results" @click="toSearchPage(searchTerm)"
        >View search results</Btn
      >
    </ul>
  </main>
</template>
