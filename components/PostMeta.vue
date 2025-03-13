<template>
  <div class="inline-flex align-middle">
    <CalendarIcon class="size-4 mr-1" />
    {{ formattedDate }}
  </div>
</template>
<script setup>
import { CalendarIcon } from "@heroicons/vue/24/outline";
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
