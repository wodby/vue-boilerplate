<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="hero" aria-labelledby="page-title">
    <p class="kicker">Client-side routing</p>
    <h1 id="page-title">Routes without a server.</h1>
    <p class="intro">
      Vue Router rendered this page in the browser. Reload it or open it in a new tab: Nginx
      answers paths that are not files with <code>index.html</code>, so deep links work without
      extra configuration.
    </p>
    <div class="actions">
      <RouterLink class="primary" to="/">Back to home</RouterLink>
      <a href="https://router.vuejs.org/guide/">Learn Vue Router</a>
    </div>
  </section>

  <section class="details" aria-labelledby="route-title">
    <div>
      <p class="number">02</p>
      <h2 id="route-title">This route</h2>
      <p>
        Add a view in <code>src/views</code> and a route for it in <code>src/router/index.ts</code>.
      </p>
    </div>
    <dl>
      <div>
        <dt>Path</dt>
        <dd>
          <code>{{ route.path }}</code>
        </dd>
      </div>
      <div>
        <dt>Rendered by</dt>
        <dd>Vue Router</dd>
      </div>
      <div>
        <dt>Served as</dt>
        <dd><code>index.html</code></dd>
      </div>
    </dl>
  </section>
</template>
