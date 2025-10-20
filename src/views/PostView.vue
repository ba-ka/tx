<template>
  <article>
    <div v-if="this.error">
      oh tidak, ada yang salah: {{ this.error.message }}
    </div>
    <div v-else-if="this.post">
      <div class="info-post">
        <span class="date-publish">
          {{ showDate(this.post.burogu.created_at) }}
        </span>
        <h1>{{ this.post.burogu.title }}</h1>
      </div>
      <div class="markdown-body">
        <Markdown :source="this.post.burogu.content" />
      </div>
    </div>
    <div v-else>memuat...</div>
  </article>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.markdown-body {
  text-align: justify;
}
</style>

<script>
import { useFetch } from "../lib/fetch";
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/github-dark-dimmed.css";
import moment from "moment";

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  components: {
    Markdown,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { data, error } = useFetch(
        "https://x.ba-ka.org/uwu/burogu/" + this.$route.params.id
      );
      this.post = data;
      this.error = error;
    },
    showDate(value) {
      if (value) {
        return moment(value).format("YYYY/MM/DD HH:mm");
      }
    },
  },
};
</script>
