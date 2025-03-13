<template>
  <div class="py-6 max-w-md">
    <form @submit="submitComment">
      <Textarea
        required
        placeholder="Write your comment"
        v-model="comment.body"
        cols="40"
        rows="4"
      />
      <div class="flex w-full items-center gap-1.5 pt-4">
        <Input
          required
          type="text"
          placeholder="Your name"
          v-model="comment.author"
        />
        <Button type="submit" size="sm">Submit</Button>
      </div>
    </form>
    <span v-if="loadingComments">Loading comments...</span>
    <!-- <h3>Comments (<span v-text="comments ? comments.length : 0" />)</h3> -->
    <div v-if="comments">
      <div v-for="comment in comments">
        <p v-text="sanitize(comment.body)"></p>
        <p>
          <em>- {{ sanitize(comment.author) }}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="module">
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
export default {
  data() {
    return {
      comments: [],
      comment: {
        author: "",
        body: "",
      },
      loadingComments: true,
    };
  },
  props: ["slug"],

  mounted() {
    this.loadComments();
  },

  methods: {
    async loadComments() {
      // this.loadingComments = true;
      const resp = await fetch(
        `https://d1-comments.huyluong82.workers.dev/api/${this.slug}/comments`
      );
      this.comments = await resp.json();
      this.loadingComments = false;
    },
    async submitComment(evt) {
      evt.preventDefault();
      const newComment = {
        body: this.sanitize(this.comment.body),
        author: this.sanitize(this.comment.author),
      };
      const resp = await fetch(
        `https://d1-comments.huyluong82.workers.dev/api/${this.slug}/comments`,
        {
          method: "POST",
          body: JSON.stringify(newComment),
        }
      );
      if (resp.status == 201) this.comments.push(newComment);
      this.comment.author = "";
      this.comment.body = "";
    },
    sanitize(str) {
      str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
      return str.trim();
    },
  },
};
</script>
