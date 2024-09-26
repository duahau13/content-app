<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box not-prose" :class="[type]">
    <!-- Conditionally render icons based on prop -->
    <ExclamationCircleIcon v-if="type == 'warning'" class="size-6 icon solid" />
    <XCircleIcon v-else-if="type == 'error'" class="size-6 icon solid" />
    <ExclamationTriangleIcon v-else class="size-6 icon solid" />
    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        <Markdown :use="$slots.details" unwrap="p"></Markdown>
      </div>
    </details>
  </div>
</template>
<script setup>
// import icons from HeroIcons
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps(["type"]);
</script>

<style scoped>
.info-box {
  @apply flex items-start gap-2 p-4 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg;
}

details summary {
  @apply flex font-semibold leading-tight cursor-pointer;
}

details .details {
  @apply text-sm;
}

.info-box .icon {
  @apply shrink-0;
}

.info-box.warning {
  @apply bg-yellow-200 border-yellow-400 text-yellow-600;
}

.info-box.warning .icon.solid {
  @apply fill-yellow-600;
}

.info-box.error {
  @apply bg-red-200 border-red-400 text-red-600;
}

.info-box.error .icon.solid {
  @apply fill-red-600;
}
</style>
