<script setup>
import MiniSearch from "minisearch";

const query = ref("");
const { data: value } = await useAsyncData("search", () =>
  queryCollectionSearchSections("post")
);

const miniSearch = new MiniSearch({
  fields: ["title"],
  storeFields: ["title"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
});

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(value));
const result = computed(() => miniSearch.search(toValue(query)));

const clearSearch = () => (query.value = "");
</script>

<template>
  <div class="relative">
    <input v-model="query" type="text" placeholder="Search..." />
    <ul>
      <li v-for="link of result" :key="link.id" class="mt-2">
        <NuxtLink :to="link.id.substring(7)" @click="clearSearch">{{
          link.title
        }}</NuxtLink>
        <!-- <p class="text-gray-500 text-xs">{{ link.content }}</p> -->
      </li>
    </ul>
  </div>
</template>
