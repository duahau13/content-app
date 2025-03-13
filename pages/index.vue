<template>
  <main>
    <div class="grid grid-cols-1 gap-4">
      <PostCard v-for="post in posts" :post="post" />
    </div>
    <nav class="pageNav">
      <Button>
        <NuxtLink to="/page/2" v-if="nextPage">Next</NuxtLink>
      </Button>
    </nav>
  </main>
</template>
<script setup>
const { data: postList } = await useAsyncData("home", () => {
  return queryCollection("post")
    .select("title", "slug", "image", "categories", "date", "description")
    .order("date", "DESC")
    .where("draft", "=", false)
    .limit(4)
    .all();
});
const nextPage = postList.value.length === 4;
const posts = postList.value.slice(0, -1);
</script>
<style></style>
