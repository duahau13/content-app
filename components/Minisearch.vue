<script setup>
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
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
  <div class="flex items-center border-b-2 px-3 py-1">
    <Search size="16" class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <Input
      v-model="query"
      id="search"
      type="text"
      placeholder="Search..."
      class="border-none focus-visible:ring-0 shadow-none p-0"
    />
  </div>
  <ul class="p-4 pt-0 pl-8">
    <li v-for="link of result" :key="link.id" class="py-2 text-sm">
      <NuxtLink :to="link.id.substring(7)" @click="clearSearch">{{
        link.title
      }}</NuxtLink>
      <!-- <p class="text-gray-500 text-xs">{{ link.content }}</p> -->
    </li>
  </ul>
</template>
