<template>
  <main>
    <div class="grid grid-cols-3 gap-4">
      <UCard v-for="post in posts" :key="post.slug">
        <template #header>
          <NuxtImg :src="post.image.src" />
        </template>
        {{ post.title }}
        <p>{{ post.description }}</p>
        <template #footer>
          <NuxtLink :to="`/${post.slug}`"> Read more </NuxtLink>
        </template>
      </UCard>
    </div>
    <nav class="pageNav">
      <UButton>
        <NuxtLink to="/page/2" v-if="nextPage">Next</NuxtLink>
      </UButton>
    </nav>
  </main>
</template>
<script setup>
const { data: postList } = await useAsyncData("home", () =>
  queryContent("/posts")
    .only(["title", "slug", "image", "categories", "date", "description"])
    .sort({ date: -1 })
    .where({ draft: false })
    .limit(4)
    .find()
);
const nextPage = postList.value.length === 4;
const posts = postList.value.slice(0, -1);
</script>
<style></style>
