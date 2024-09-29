<template>
  <div>
    <h2>Search results for: {{ searchTerm }}</h2>
    <PostCard v-for="post in articles" :post="post" :key="post.slug" />
  </div>
</template>
<script setup>
const router = useRouter();
const searchTerm = router.currentRoute.value.query.search;
const articles = await queryContent("posts")
  .only(["title", "slug", "image", "categories", "date"])
  .where({
    draft: false,
    $or: [
      { title: { $contains: searchTerm } },
      { slug: { $contains: searchTerm } },
    ],
  })
  .limit(10)
  .find();
</script>
<style></style>
