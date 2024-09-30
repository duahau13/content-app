<template>
  <main>
    <PostCard v-for="post in posts" :post="post" :key="post.slug" />
    <nav class="pageNav">
      <NuxtLink to="/page/2" v-if="nextPage">Next</NuxtLink>
    </nav>
  </main>
</template>
<script setup>
const { data: postList } = await useAsyncData("home", () =>
  queryContent("/posts")
    .only(["title", "slug", "image", "categories", "date"])
    .sort({ date: -1 })
    .where({ draft: false })
    .limit(4)
    .find()
);
const nextPage = postList.value.length === 4;
const posts = postList.value.slice(0, -1);
</script>

<style></style>
