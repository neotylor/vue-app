<template>
  <div id="app">
    <router-view name="header"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomePage data="Hello From props" /> -->
    <!-- <LoginPage /> -->
    <!-- <PageNotFound /> -->
    <!-- <EmployeesList /> -->
    <!-- <APITest /> -->
    <!-- <h1>Hello App!</h1> -->
    <!-- <p> -->
      <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
    <!-- </p> -->


    <router-view />
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';

// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from "./components/HomePage.vue";
// import LoginPage from "./components/Login.vue";
// import PageNotFound from './pages/default/PageNotFound.vue';

// import EmployeesList from "./components/apiExamples/EmployeesList.vue";
// import APITest from './components/apiExamples/APITest.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomePage, 
    // LoginPage,
    // LifeCycle,
    // PageNotFound,
    // EmployeesList,
    // APITest,
    // RouterView,
    // RouterLink,
  }
}
</script>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* font-family: monospace; */
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
