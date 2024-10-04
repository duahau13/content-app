<template>
  <div>
    <h2>Search results for: {{ keyword }}</h2>
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
const { keyword } = router.currentRoute.value.query;
const wordArray = keyword.match(/\b\w+\b/g);
const { data: posts, refresh } = await useAsyncData("categoryPostList", () =>
  queryContent("posts")
    .only(["title", "slug", "image", "categories", "date"])
    .where({
      draft: false,
      $or: [
        { title: { $contains: wordArray } },
        { slug: { $contains: wordArray } },
      ],
    })
    .limit(10)
    .find()
);
</script>
<style></style>
