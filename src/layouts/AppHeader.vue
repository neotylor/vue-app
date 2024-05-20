<template>
  <nav role="navigation">
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <router-link to="/about"> about </router-link>
      </li>
      <li>
        <router-link to="/contect"> contect </router-link>
      </li>
      <li>
        <router-link to="/post"> post </router-link>
      </li>
      <li><router-link to="/examples"> examples </router-link>
        <ul class="dropdown">
          <li><router-link to="/examples/life-cycle-methods"> Life Cycle </router-link></li>
          <li><router-link to="/examples/bootstrap-example"> bootstrap example </router-link></li>
          <li><router-link to="/examples/api-examples"> api examples</router-link>
            <ul class="dropdown">
              <li><router-link to="/examples/api-examples/users"> User List </router-link></li>
              <li><router-link to="/examples/api-examples/users/new"> New User </router-link></li>
            </ul>
          </li>
          <li><router-link to="/examples/dynamic-component-example"> Dynamic Component example </router-link></li>
          <li><router-link to="/examples/custom-directive-example"> Custom Directive example </router-link></li>
          <li><router-link to="/examples/data-passing-example"> Data Passing example </router-link></li>
        </ul>
      </li>
      <li>
        <router-link v-bind:to="randomUrl"> rendom </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      randomUrl: this.getRendomUrl(),
    }
  },
  methods: {
    getRendomUrl() {
      return `/${(Math.random() + 1).toString(36).substring(7)}`;
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  text-wrap: nowrap;
}

nav {
  font-family: monospace;
}

ul {
  background: #333;
  list-style: none;
  margin: 0;
  padding-left: 0;
  text-transform: capitalize;
}

li {
  color: #fff;
  background: #333;
  display: inline-block;
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

li a {
  color: #fff;
}

li:hover {
  background: #555;
  cursor: pointer;
}

ul li ul {
  background: orange;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 0.5rem;
  left: 0;
  display: none;
}

ul li:hover>ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}

ul li:hover>ul ul,
ul li ul:hover ul {
  position: absolute;
  left: 100%;
  top: 0%;
}
</style>