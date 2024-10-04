<template>
  <main>
    <PostCard v-for="post in posts" :post="post" :key="post.slug" />
    <nav class="pageNav">
      <Btn>
        <NuxtLink :to="previousPage">Back</NuxtLink>
        <NuxtLink v-if="nextPage" :to="`/page/${currentPage + 1}`"
          >Next</NuxtLink
        >
      </Btn>
    </nav>
  </main>
</template>
<script setup>
const { number } = useRoute().params;
const currentPage = parseInt(number);
let previousPage = currentPage - 1 === 1 ? "/" : "`/page/${currentPage - 1}`";
const postList = await queryContent("/posts")
  .only(["title", "slug", "image", "categories", "date"])
  .sort({ date: -1 })
  .where({ draft: false })
  .limit(4)
  .skip(3 * (currentPage - 1))
  .find();
const nextPage = postList.length === 4;
const posts = nextPage ? postList.slice(0, -1) : postList;
</script>
<style></style>
