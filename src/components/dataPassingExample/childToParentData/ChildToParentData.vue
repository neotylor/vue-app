<template>
  <div>
    <h1>example of $emit</h1>
    <h2>ParentComponent</h2>
    <pre>{{ user }}</pre>
    <!-- <ChildComponent :user="user" v-on:updateUser="updateUser"/> -->
    <ChildComponent :user="user" v-on:updateUser="updateUser($event)"/>
    <ChildSiblingComponent :getUser="getUserName"/>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue"
import ChildSiblingComponent from "./ChildSiblingComponent.vue"

export default {
  name: 'ChildToParentData',
  components: {
    ChildComponent,
    ChildSiblingComponent
  },
  data() {
    return {
      parentData: "ParentData",
      user: {
        name: "Peter Pen"
      },
    }
  },
  methods: {
    getUserName(name) {
      console.log(name);
      this.user.name = name;
    },
    updateUser(user) {
      this.user = user;
    },
  },
}
</script>

<style scoped>
div {
  border: 1cap solid #ccc;
  max-width: 90%;
  margin-inline: auto;
  margin-top: 5cap;
}
</style>