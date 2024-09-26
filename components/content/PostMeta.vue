<template>
  <div>{{ formattedDate }}</div>
</template>
<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  // categories: {
  //   type: Array,
  //   default: ''
  // }
});

const formattedDate = computed(() => {
  return new Date(props.date).toDateString();
});
</script>
<style></style>
