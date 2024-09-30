<template>
  <div>
    <h2>Search results for: {{ searchTerm }}</h2>
    <div v-if="posts.length > 0">
      <PostCard v-for="post in posts" :post="post" :key="post.slug" />
    </div>
    <div v-else>
      <p>Not found. Please try different keyword.</p>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const searchTerm = router.currentRoute.value.query.keyword;
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("posts")
    .only(["title", "slug", "image", "categories", "date"])
    .where({
      draft: false,
      $or: [
        { title: { $contains: searchTerm } },
        { slug: { $contains: searchTerm } },
      ],
    })
    .limit(10)
    .find()
);
</script>
<style></style>
