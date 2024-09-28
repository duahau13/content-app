<template>
  <div
    v-for="post in postList"
    :key="post._path"
    class="blog-card bg-white rounded-2xl overflow-hidden mb-4"
  >
    <div class="h-[320px] relative">
      <img
        :src="post.image.src"
        :alt="post.image.alt"
        class="w-full h-full object-cover absolute"
      />
    </div>
    <div class="blog-card--meta p-4">
      <h3 class="text-2xl font-semibold">
        <NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink>
      </h3>
      <span class="text-sm text-gray-500 mr-4">{{ post.date }}</span>
      <span v-for="category in post.categories" class="mr-2">
        <Btn>
          <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
        </Btn>
      </span>
    </div>
  </div>
</template>
<script setup>
const { data: postList } = useAsyncData("postList", () => {
  return queryContent("/posts")
    .sort({ date: -1 })
    .limit(3)
    .where({ draft: false })
    .find();
});
</script>

<style></style>
