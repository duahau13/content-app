<script setup>
const searchString = ref("");
// clearSearch() {
//   this.searchString.value="";
// }
</script>

<template>
  <main>
    <input v-model="searchString" />
    <ContentList
      v-if="searchString"
      :path="`/posts/${searchString}`"
      fields="title, thumbnail, date"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div v-for="post in list" :key="post._path">
        <NuxtLink :to="`/${post.slug}`" @click="clearSearch">
          {{ post.title }}
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
