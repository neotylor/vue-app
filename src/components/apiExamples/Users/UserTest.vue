<template>
  <div>
    <h1>User Test</h1>
  </div>
</template>

<script>
export default {
  name: 'UserTest',
  data() {
    return {
      user: this.$route.params.id 
    }
  },
  mounted() {
    console.log('this.user', this.user)
  }
}
</script>