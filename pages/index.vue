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
    <div>
      <Accordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
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

// const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];
</script>
<style></style>
