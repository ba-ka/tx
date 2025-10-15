<!-- <script setup>
import { RouterLink } from "vue-router";
import { useFetch } from "../lib/fetch";
const { data, error } = useFetch(
  "https://c.ba-ka.org/api/v1/kami?userid=61f3b1600c22a792c78228f1"
);
</script> -->

<template>
  coming soon!
  <!-- <div v-if="error">oh tidak, ada yang salah: {{ error.message }}</div>
  <div v-else-if="data">
    <div v-for="item in data.row" v-bind:key="item.id">
      <RouterLink :to="{ name: 'x', params: { id: item.id } }"
        ><h3>
          {{ item.title }} <span>[{{ show_date(item.create_at) }}]</span>
        </h3></RouterLink
      >
    </div>
  </div>
  <div v-else>memuat...</div> -->
</template>

<script>
import moment from "moment";

export default {
  methods: {
    show_date(value) {
      if (value) {
        return moment(value).format("YYYYMMDD");
      }
    },
  },
};
</script>
