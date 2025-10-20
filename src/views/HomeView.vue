<script setup>
import { RouterLink } from "vue-router";
import { useFetch } from "../lib/fetch";
const { data, error } = useFetch("https://x.ba-ka.org/uwu/burogu?user_id=3");
</script>

<template>
  <div v-if="error">oh tidak, ada yang salah: {{ error.message }}</div>
  <div v-else-if="data.burogus">
    <div v-for="item in data.burogus" v-bind:key="item.id">
      <RouterLink :to="{ name: 'x', params: { id: item.id } }"
        ><h3>
          <span>[{{ showDate(item.created_at) }}]</span> {{ item.title }}
        </h3></RouterLink
      >
    </div>
  </div>
  <div v-else>memuat...</div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    showDate(value) {
      if (value) {
        return moment(value).format("YYYY/MM/DD");
      }
    },
  },
};
</script>
