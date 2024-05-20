<template>
  <div>
    <h2>Child Component</h2>
    <h3>update by $emit</h3>
    <form @submit="submitForm">
      <input type="text" v-model="userData.name" placeholder="User name"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    user: Object,
  },
  data() {
    return {
      userData: {
        name: "",
      },
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$emit("updateUser", this.userData)
      alert('Submit')
    }
  },
  mounted() {
    console.log("user is mounted", this.user, this.userData)
    // this.userData = this.user
  }
}
</script>