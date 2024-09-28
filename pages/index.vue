<template>
  <main>
    <PostCard v-for="post in list.posts" :post="post" :key="post.slug" />
    <Btn @click="loadMore">Load more {{ counter.count }}</Btn>
  </main>
</template>
<script setup>
const { data: postList } = useAsyncData("postList", () => {
  return queryContent("/posts")
    .only(["title", "slug", "image", "categories", "date"])
    .sort({ date: -1 })
    .where({ draft: false })
    .limit(3)
    .find();
});
const list = reactive({ posts: postList });
const counter = reactive({ count: 0 });
const loadMore = () => {
  counter.count++;
  let { data: additionalItems } = useAsyncData("additionalItems", () => {
    return queryContent("/posts")
      .only(["title", "slug", "image", "categories", "date"])
      .skip(3)
      .limit(3)
      .find();
  });
  list.posts.push(additionalItems);
};
</script>

<style></style>
