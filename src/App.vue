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
            >[ gh ]</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/tholutakhyar"
            >[ ig ]</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@tholutx"
            >[ yt ]</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/tholutakhyar"
            >[ tw / x]</a
          ></span
        >
      </h1>
      <p>hanya sebuah blog kecil untuk mengetik apapun yang ingin kukektik</p>
    </header>

    <RouterView />

    <footer>
      <div class="footer-left">&copy; {{ new Date().getFullYear() }} tx</div>
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
