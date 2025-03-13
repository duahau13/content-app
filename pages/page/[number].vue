<template>
  <main>
    <div class="grid grid-cols-1 gap-4">
      <PostCard v-for="post in posts" :post="post" :key="post.slug" />
    </div>
    <nav class="pageNav">
      <Button>
        <NuxtLink :to="previousPage">Back</NuxtLink>
        <NuxtLink v-if="nextPage" :to="`/page/${currentPage + 1}`"
          >Next</NuxtLink
        >
      </Button>
    </nav>
  </main>
</template>
<script setup>
const { number } = useRoute().params;
const currentPage = parseInt(number);
let previousPage = currentPage - 1 === 1 ? "/" : "`/page/${currentPage - 1}`";

const { data: postList } = await useAsyncData(number, () => {
  return queryCollection("post")
    .select("title", "slug", "image", "categories", "date", "description")
    .order("date", "DESC")
    .where("draft", "=", false)
    .limit(4)
    .skip(3 * (currentPage - 1))
    .all();
});
const nextPage = postList.length === 4;
const posts = nextPage ? postList.slice(0, -1) : postList;
</script>
<style></style>
