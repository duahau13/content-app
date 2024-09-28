<template>
  <PostCard v-for="post in categoryPostList" :post="post" :key="post.slug" />
</template>
<script setup>
const { cat } = useRoute().params;
const categoryPostList = await queryContent()
  .where({ categories: { $contains: cat } })
  .find();
</script>
<style></style>
