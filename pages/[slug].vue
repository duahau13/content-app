<template>
  <article class="prose">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
          <div class="text-gray-500 text-sm mt-2">
            <PostMeta :author="doc.author" :date="doc.date" />
          </div>
          <span v-for="category in doc.categories">
            <Btn>
              <NuxtLink :to="`/category/${category}`">{{ category }}</NuxtLink>
            </Btn>
          </span>
        </div>
        <img :src="doc.thumbnail" class="w-full h-full object-cover" />
      </header>
      <main class="content p-5">
        <ContentRenderer :value="doc"></ContentRenderer>
      </main>
    </ContentDoc>
  </article>
</template>

<script setup>
const { slug } = useRoute().params;
</script>

<style>
/* .content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
} */
</style>
