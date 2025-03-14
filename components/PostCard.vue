<template>
  <Card class="overflow-hidden">
    <NuxtImg
      :src="post.image.src"
      format="webp"
      loading="lazy"
      width="736"
      height="360"
    />
    <CardContent class="bg-card">
      <h3 class="text-2xl font-semibold pt-6 pb-2">
        <NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink>
      </h3>
      <span class="text-sm text-gray-400 mr-4">{{ formattedDate }}</span>
      <span v-for="category in post.categories">
        <Badge class="mr-2">
          <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
        </Badge>
      </span>
    </CardContent>
  </Card>
</template>
<script setup>
import { Card, CardContent } from "@/components/ui/card";
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const formattedDate = computed(() => {
  return new Date(props.post.date).toDateString();
});
</script>
<style></style>
