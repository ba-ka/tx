<template>
  <article>
    <div v-if="this.error">oh tidak, ada yang salah: {{ this.error.message }}</div>
    <div v-else-if="this.post">
      <div class="info-post">
        <span class="date-publish">
          {{ show_date(this.post.create_at) }}
        </span>
        <h1>{{ this.post.title }}</h1>
      </div>
      <div class="markdown-body">
        <Markdown :source="this.post.content"/>
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
</style>

<script>
    import { useFetch } from '../lib/fetch';
    import Markdown from 'vue3-markdown-it';
    import 'highlight.js/styles/github-dark-dimmed.css';
    import moment from 'moment';

    export default {
        data () {
            return {
                loading: false,
                post: null,
                error: null
            }
        },
        components:{
          Markdown
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                const { data, error } = useFetch('https://c.ba-ka.org/api/v1/kami?id='+this.$route.params.id);
                this.post = data;
                this.error = error;
            },
            show_date(value) {
              if (value) {
                return moment(value).format('YYYY - MM - DD HH:mm')
              }
            }
        }
    }
</script>