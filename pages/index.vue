<template>
  <main>
    <UBlogList orientation="horizontal">
      <!-- <UCard v-for="post in posts" :key="post.slug">
        <template #header>
          {{ post.title }}
        </template>
        <NuxtImg :src="post.image.src" />
        <p>{{ post.description }}</p>
        <template #footer>
          <NuxtLink :to="`/${post.slug}`"> Read more </NuxtLink>
        </template>
      </UCard>  -->

      <UBlogPost
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        orientation="vertical"
        :image="{ src: post.image.src, alt: 'Nuxt 3.9' }"
        :authors="[
          {
            name: post.author,
            avatar: {
              src: 'https://github.com/danielroe.png',
              target: '_blank',
            },
            to: 'https://twitter.com/danielcroe',
          },
        ]"
        :badge="{ label: 'Release' }"
      />
    </UBlogList>
    <nav class="pageNav">
      <UButton>
        <NuxtLink to="/page/2" v-if="nextPage">Next</NuxtLink>
      </UButton>
    </nav>
  </main>
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
</script>
<style></style>
