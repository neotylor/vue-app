<template>
  <div id="app">
    <h1>Examples</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ExamplesView",
}
</script>

<style scoped>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* font-family: monospace; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>