<script setup>
const searchTerm = ref("");
const toSearchPage = (keyword) => {
  navigateTo({
    path: "/search",
    query: {
      keyword: keyword,
      sort: "asc",
    },
  });
  searchTerm.value = "";
};
</script>

<template>
  <main class="relative">
    <input
      v-model="searchTerm"
      @keyup.enter="toSearchPage(searchTerm)"
      type="text"
      id="searchBox"
    />
  </main>
</template>
