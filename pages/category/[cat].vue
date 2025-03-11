<template>
  <PostCard v-for="post in categoryPostList" :post="post" :key="post.slug" />
</template>
<script setup>
const { cat } = useRoute().params;
const { data: categoryPostList } = await useAsyncData(
  "categoryPostList",
  () => {
    return queryCollection("post").where("categories", "=", cat).all();
  }
  // queryContent()
  //   .where({ categories: { $contains: cat } })
  //   .find()
);
console.log(cat);
</script>
<style></style>
