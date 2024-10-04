<template>
  <div class="bg-white rounded-2xl overflow-hidden mb-4">
    <NuxtImg :src="post.image.src" fit="inside" sizes="100vw sm:50vw" />
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
const props = defineProps({
  post: {
    title: Object,
    required: true,
  },
});
</script>
<style></style>
