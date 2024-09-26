<template>
  <div>
    <ContentList
      path="/posts"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div
        v-for="post in list"
        :key="post._path"
        class="blog-card bg-white rounded-2xl overflow-hidden mb-4"
      >
        <div class="h-[320px] relative">
          <img
            :src="post.thumbnail"
            class="w-full h-full object-cover absolute"
          />
        </div>
        <div class="blog-card--meta p-4">
          <h3 class="text-2xl font-semibold">
            <NuxtLink :to="`/${post.slug}`">{{ post.title }}</NuxtLink>
          </h3>
          <span class="text-sm text-gray-500 mr-4">{{ post.date }}</span>
          <span v-for="category in post.categories" class="mr-2">
            <Btn>
              <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
            </Btn>
          </span>
        </div>
      </div>
    </ContentList>
  </div>
</template>
<script setup></script>
<style></style>
