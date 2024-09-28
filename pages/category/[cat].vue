<template>
  <PostCard v-for="post in categoryPostList" :post="post" :key="post.slug" />
</template>
<script setup>
const { cat } = useRoute().params;
const { data: categoryPostList } = useAsyncData("categoryPostList", () => {
  return queryContent()
    .where({ categories: { $contains: cat } })
    .find();
});
</script>
<style></style>
