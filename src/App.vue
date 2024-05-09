<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomePage data="Hello From props" /> -->
    <!-- <LoginPage /> -->
    <!-- <LifeCycle /> -->
    <!-- <PageNotFound /> -->
    <!-- <EmployeesList /> -->
    <ActiveBoot />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from "./components/HomePage.vue";
// import LoginPage from "./components/Login.vue";
// import PageNotFound from './pages/default/PageNotFound.vue';
/* Lifecycle hooks example */
// import LifeCycle from './components/lifecycleMethods/LifeCycle.vue'
// import EmployeesList from "./components/apiExamples/EmployeesList.vue";
import ActiveBoot from './components/bootstrapExamples/ActiveBoot.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomePage, 
    // LoginPage,
    // LifeCycle,
    // PageNotFound,
    // EmployeesList,
    ActiveBoot,
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
