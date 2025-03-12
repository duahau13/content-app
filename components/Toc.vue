<template>
  <nav class="toc">
    <header class="toc-header">
      <h3 class="text-xl font-bold mt-0">Table of contents</h3>
    </header>
    <ul class="toc-links">
      <li v-for="link of doc.body.toc.links" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
        <ul v-if="link.children" class="ml-4 list-disc text-gray-500">
          <li v-for="link1 of link.children" :key="link1.id">
            <a :href="`#${link1.id}`">{{ link1.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  doc: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.toc {
  @apply p-4 bg-slate-50 border border-slate-200 rounded-lg;
  @apply max-h-[calc(100vh-6rem)] overflow-auto;
}
.toc-header {
  @apply pb-2 mb-2 border-b border-slate-200;
}
.toc-links {
  @apply flex flex-col gap-2 px-2;
}
.toc-link {
  @apply text-slate-500;
}
.toc-link._3 {
  @apply pl-3;
}
.toc-link._4 {
  @apply pl-6;
}
.toc-link._undefined {
  @apply pl-8;
}
</style>
