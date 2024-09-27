<template>
  <ul class="prev-next-cont">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev.slug">
        <ArrowLeftIcon class="icon" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next.slug">
        <span> {{ next.title }} </span>
        <ArrowRightIcon class="icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
// import icons
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
// define prev and next props
defineProps(["prev", "next"]);
</script>

<style scoped>
.prev-next-cont {
  @apply flex gap-4 justify-between p-4 border border-slate-200 rounded-lg;
}
.link-item {
  @apply list-none;
}
.link-item a {
  @apply flex gap-2 items-center;
}
.icon {
  @apply size-16;
}
</style>
