<template>
    <div>
      <h2>Child Sibling Component</h2>
      <h3>update by Props method (HOF)</h3>
      <p> User Name: {{ user.name }}</p>
      <button type="button" v-on:click="getUser(user.name)">Update User Name</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildSiblingComponent',
    data() {
      return {
        user: {
          name: 'Vijendra'
        },
      }
    },
    props: {
      getUser: Function,
    },
  }
  </script>