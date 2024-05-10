<template>
  <div>
    <h1>API Test components</h1>
    <!-- <PostAPITest/> -->
    <DeleteAPITest/>
  </div>
</template>

<script>
// import PostAPITest from './PostAPITest.vue';
import DeleteAPITest from './DeleteAPITest.vue';
export default {
  name: 'APITest',
  components: {
    DeleteAPITest,
  }
}
</script>