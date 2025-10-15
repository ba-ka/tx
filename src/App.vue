<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <header>
      <h1>
        tholut x -
        <span
          ><RouterLink to="/">[ beranda ]</RouterLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tholutakhyar"
            >[ github ]</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/tholutakhyar"
            >[ instagram ]</a
          ></span
        >
      </h1>
      <p>hanya sebuah blog kecil untuk mengetik apapun yang ingin kukektik</p>
    </header>

    <RouterView />

    <footer>
      <div class="footer-left">&copy; 2022 tx</div>
      <div class="footer-right">
        powered by
        <a href="https://ba-ka.org/" target="_blank">&#12400;-&#12363;</a>
      </div>
    </footer>
  </main>
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/markdown.css";
</style>
