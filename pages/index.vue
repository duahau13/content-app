<template>
  <main>
    <PostCard v-for="post in postList" :post="post" :key="post.slug" />
  </main>
</template>
<script setup>
const { data: postList } = useAsyncData("postList", () => {
  return queryContent("/posts")
    .only(["title", "slug", "image", "categories", "date"])
    .sort({ date: -1 })
    .where({ draft: false })
    .find();
});
</script>

<style></style>
