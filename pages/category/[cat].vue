<template>
  <PostCard v-for="post in categoryPostList" :post="post" :key="post.slug" />
</template>
<script setup>
const { cat } = useRoute().params;
const { data: categoryPostList } = await useAsyncData("categoryPostList", () =>
  queryContent()
    .where({ categories: { $contains: cat } })
    .find()
);
</script>
<style></style>
