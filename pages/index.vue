<template>
  <main>
    <div class="grid grid-cols-1 gap-4">
      <PostCard v-for="post in posts" :post="post" />
    </div>
    <nav class="pageNav">
      <Button variant="outline">
        <NuxtLink to="/page/2" v-if="nextPage">Next</NuxtLink>
      </Button>
    </nav>
  </main>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <MoonIcon
          class="icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <SunIcon
          class="icon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
<script setup>
const { data: postList } = await useAsyncData("home", () =>
  queryContent("/posts")
    .only(["title", "slug", "image", "categories", "date", "description"])
    .sort({ date: -1 })
    .where({ draft: false })
    .limit(4)
    .find()
);
const nextPage = postList.value.length === 4;
const posts = postList.value.slice(0, -1);

const colorMode = useColorMode();
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
</script>
<style></style>
