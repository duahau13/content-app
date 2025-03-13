<template>
  <div class="inline-flex align-middle">
    <Calendar :size="16" class="mr-1 mt-[2px]" />
    {{ formattedDate }}
  </div>
</template>
<script setup>
import { Calendar } from "lucide-vue-next";
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
});

const formattedDate = computed(() => {
  return new Date(props.publishDate).toDateString();
});
</script>
<style></style>
