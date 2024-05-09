<template>
  <div class="form-wrapper">
    <form @submit="login">
      <input type="text" placeholder="Enter username..." v-model="form.data.username" />
      <input type="password" placeholder="Enter password..." v-model="form.data.password" />
      <button type="submit">Login</button>
    </form>
    <ul v-if="form.error.length">
      <li v-for="e in form.error" :key="e">
        {{ e }}
      </li>
    </ul>
    <h2 class="success" v-if="form.sucess">
      {{ form.sucess }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        data: {
          username: null,
          password: null,
        },
        error: [],
        sucess: null,
      }
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      if (this.form.data.username && this.form.data.password) {
        console.log("user", this.form.data)
        this.form.sucess = "login successfully.";
        return true;
      } else {
        if (!this.form.data.username) {
          this.form.sucess = null;
          this.form.error.push("*Username is required");
        } 
        if (!this.form.data.password) {
          this.form.sucess = null;
          this.form.error.push("*Password is required");
        }
      }
      console.log("form", this.form)
      return false;
    }
  },
}
</script>

<style scoped>
  .form-wrapper ul {
    list-style: none;
    color: red;
  }
  .form-wrapper .success {
    color: green;
  }

</style>