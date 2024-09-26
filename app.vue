<template>
  <div class="max-w-3xl px-4 mx-auto">
    <header class="mt-8 mb-4 flex justify-between items-end">
      <div>
        <h1 class="text-2xl font-semibold">
          <NuxtLink to="/">My Blog</NuxtLink>
        </h1>
        <p class="text-gray-500">Learn programing easily</p>
      </div>
      <SearchPost />
    </header>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup></script>
