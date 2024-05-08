<template>
  <div id="app1">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LifeCycle /> -->
    <PageNotFound />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LifeCycle from './components/lifecycle/LifeCycle.vue'
import PageNotFound from './pages/default/PageNotFound.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LifeCycle,
    PageNotFound
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
