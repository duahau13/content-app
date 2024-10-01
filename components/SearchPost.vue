<script setup>
const searchTerm = ref("");
const showResults = ref(false);
const { data: totalPosts } = await useAsyncData("totalPosts", () =>
  queryContent("posts")
    .where({
      draft: false,
    })
    .count()
);
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
    .limit(6)
    .find()
);
const search = () => {
  refresh();
  showResults.value = false;
  if (
    searchTerm.value.length > 2 &&
    results.value.length !== totalPosts.value
  ) {
    showResults.value = true;
  }
};
const toSearchPage = (keyword) => {
  navigateTo({
    path: "/search",
    query: {
      keyword: keyword,
      sort: "asc",
    },
  });
};
const clearSearchTerm = () => {
  searchTerm.value = "";
  showResults.value = false;
};
</script>

<template>
  <main class="relative">
    <input
      v-model="searchTerm"
      @input="search"
      @keyup.enter="toSearchPage(searchTerm)"
      type="text"
      id="searchBox"
    />
    <ul v-if="showResults" class="absolute bg-white w-full">
      <li v-for="result in results" :key="result.slug">
        <NuxtLink :to="`/${result.slug}`" @click="clearSearchTerm">
          {{ result.title }}
        </NuxtLink>
      </li>
      <Btn @click="toSearchPage(searchTerm)">...View more results...</Btn>
    </ul>
  </main>
</template>
