<template>
  <div>
    <h1>Employees List</h1>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Maiden Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData.users" :key="user.id">
          <td>{{ user?.firstName }}</td>
          <td>{{ user?.maidenName }}</td>
          <td>{{ user?.lastName }}</td>
          <td>{{ user?.email }}</td>
          <td>{{ user?.phone }}</td>
          <td>{{ user?.username }}</td>
          <td>{{ user?.company?.name }}</td>
          <td>{{ user?.company?.title }}</td>
          <td>{{ user?.company?.department }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

//bind
Vue.use(VueAxios, axios);

export default {
  name: "EmployeesList",
  data() {
    return { userData: null };
  },
  mounted() {
    Vue.axios.get('https://dummyjson.com/users?limit=10')
      .then(res => res.data)
      .then(res => {
        this.userData = res;
      })
      .catch(err => console.log(err))
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
  text-align: left;
  background-color: #6567b3;
  color: white;
}
</style>