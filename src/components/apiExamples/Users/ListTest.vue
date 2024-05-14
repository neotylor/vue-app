<template>
  <div>
    <h2>User Dummy Api Test</h2>
    <b-container class="bv-example-row">
      <b-row align-h="end">
        <b-col cols="4">
          <router-link to="./users/new">
            <b-button type="button" variant="primary">Create</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <table v-if="userData">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData.users" :key="user.id">
          <td>{{ user?.firstName }}</td>
          <td>{{ user?.lastName }}</td>
          <td>{{ user?.email }}</td>
          <td>{{ user?.phone }}</td>
          <td>{{ user?.username }}</td>
          <td class="d-flex gap-2">
            <b-button type="button" variant="danger" v-on:click="removeUser(user.id)">Remove</b-button>
            <router-link v-bind:to="`./user/${user.id}`">
              <b-button type="button" variant="primary">View</b-button>
            </router-link>
            <router-link v-bind:to="`./user/${user.id}/edit`">
              <b-button type="button" variant="primary">Edit</b-button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <b-card class="mt-3" header="Response Data Result">
      <pre class="m-0" v-if="response">Response: Record remove successfully</pre>
      <pre class="m-0" v-if="response">{{ response }}</pre>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

//bind
Vue.use(VueAxios, axios);

export default {
  name: 'ListTest',
  data() {
    return {
      userData: null,
      response: null,
    };
  },
  methods: {
    getUserData() {
      Vue.axios.get('https://dummyjson.com/users?limit=10')
        .then(res => res.data)
        .then(res => {
          this.userData = res;
        })
        .catch(err => console.log(err))
    },
    removeUser(id) {
      console.log("id is", id);
      Vue.axios.delete('https://dummyjson.com/users/' + id)
        .then(res => res.data)
        .then(res => {
          this.response = res;
          this.userData.users = this.userData.users.filter(user => user.id !== id);
          // alert(this.response.toString());
          // this.getUserData();
        })
        .catch(err => console.log(err))
    },
  },
  mounted() {
    this.getUserData();
  },
}
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 1480px;
  max-width: 1800px;
  margin: 20px auto;
}

td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #6567b3;
  color: white;
}
</style>