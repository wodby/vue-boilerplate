<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink class="brand" to="/">Vue on Wodby</RouterLink>
    <nav aria-label="Main">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <span>Built with Vite, served by Nginx</span>
    <a href="https://wodby.com/docs/2.0/">Wodby documentation</a>
  </footer>
</template>
