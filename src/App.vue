<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomePage data="Hello From props" /> -->
    <!-- <LoginPage /> -->
    <!-- <LifeCycle /> -->
    <!-- <PageNotFound /> -->
    <!-- <EmployeesList /> -->
    <!-- <ActiveBoot /> -->
    <!-- <APITest /> -->
    <h1>Hello App!</h1>
    <p>
      <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
    </p>
    <!-- <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main> -->
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> about </router-link>
      <router-link to="/contect"> contect </router-link>
      <router-link to="/post"> post </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';

// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from "./components/HomePage.vue";
// import LoginPage from "./components/Login.vue";
// import PageNotFound from './pages/default/PageNotFound.vue';
/* Lifecycle hooks example */
// import LifeCycle from './components/lifecycleMethods/LifeCycle.vue'
// import EmployeesList from "./components/apiExamples/EmployeesList.vue";
// import ActiveBoot from './components/bootstrapExamples/ActiveBoot.vue';
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
    // ActiveBoot,
    // APITest,
    // RouterView,
    // RouterLink,
  }
}
</script>

<style>
* {
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
}
</style>
