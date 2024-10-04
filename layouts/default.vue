<template>
  <div>
    <div class="max-w-6xl px-4 mx-auto">
      <Header />
      <slot />
      <div class="fixed inset-0 bg-gray-100 z-[-1]"></div>
    </div>
  </div>
</template>
<script setup></script>
