<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="hero" aria-labelledby="page-title">
    <p class="kicker">404</p>
    <h1 id="page-title">Page not found.</h1>
    <p class="intro">
      No route matches <code>{{ route.path }}</code>. The catch-all route in
      <code>src/router/index.ts</code> renders this page.
    </p>
    <div class="actions">
      <RouterLink class="primary" to="/">Back to home</RouterLink>
    </div>
  </section>
</template>
