<script setup lang="ts">
import { version } from 'vue'

const mode = import.meta.env.MODE
const builtAtIso = __BUILD_TIME__
const builtAt = new Date(builtAtIso).toLocaleString()
</script>

<template>
  <section class="hero" aria-labelledby="page-title">
    <p class="status"><span aria-hidden="true"></span> Static build served by Nginx</p>
    <p class="kicker">Vue + Vite + Wodby</p>
    <h1 id="page-title">Your Vue app is running.</h1>
    <p class="intro">
      A single-page application with TypeScript, client-side routing and tests. Edit
      <code>src/views/HomeView.vue</code> to start building.
    </p>
    <div class="actions">
      <a class="primary" href="https://vuejs.org/guide/introduction.html">Build with Vue</a>
      <RouterLink to="/about">See client-side routing</RouterLink>
    </div>
  </section>

  <section class="details" aria-labelledby="build-title">
    <div>
      <p class="number">01</p>
      <h2 id="build-title">Build</h2>
      <p>Values compiled into this bundle when it was built.</p>
    </div>
    <dl>
      <div>
        <dt>Framework</dt>
        <dd>Vue {{ version }}</dd>
      </div>
      <div>
        <dt>Mode</dt>
        <dd>{{ mode }}</dd>
      </div>
      <div>
        <dt>Built at</dt>
        <dd>
          <time :datetime="builtAtIso">{{ builtAt }}</time>
        </dd>
      </div>
    </dl>
  </section>
</template>
