<template>
  <main>
    <p class="eyebrow">Wodby Vue starter</p>
    <h1>Hello, Vue.</h1>
    <p>Edit <code>src/App.vue</code> to start building your application.</p>
  </main>
</template>

<style scoped>
main {
  width: min(42rem, calc(100% - 2rem));
  padding: 3rem;
  border: 1px solid #dfe5ef;
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 1.5rem 4rem rgb(38 50 75 / 10%);
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: #087c5e;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 8vw, 5rem);
  letter-spacing: -0.055em;
}

p {
  margin: 1rem 0 0;
  color: #5c667a;
  font-size: 1.05rem;
  line-height: 1.7;
}

code {
  padding: 0.15rem 0.4rem;
  border-radius: 0.35rem;
  color: #087c5e;
  background: #e8f8f2;
}
</style>
