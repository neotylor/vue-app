<template>
  <div>
    <h2>Post API test component</h2>
    <div class="active-form">
      <b-form @submit="onSubmit" @reset="onReset" method="post" v-if="show">
        <b-form-group id="input-group-2" label="Your First Name:" label-for="firstname">
          <b-form-input id="firstname" v-model="form.firstName" placeholder="Enter first name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Last Name:" label-for="lastname">
          <b-form-input id="lastname" v-model="form.lastName" placeholder="Enter last name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Age:" label-for="age">
          <b-form-input id="age" v-model="form.age" type="number" placeholder="Enter age" required></b-form-input>
        </b-form-group>

        <b-form-group label="Selecte Gender" v-slot="{ ariaDescribedby }">
          <b-form-radio-group v-model="gender" :options="options" :aria-describedby="ariaDescribedby"
            name="form.gender"></b-form-radio-group>
        </b-form-group>

        <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
          description="We'll never share your email with anyone else.">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"
            required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Phone:" label-for="phone">
          <b-form-input id="phone" v-model="form.phone" type="number" placeholder="Enter phone" required></b-form-input>
        </b-form-group>

        <b-form-group id="user-name" label="Your User Name:" label-for="username">
          <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
        </b-form-group>


        <b-form-group id="password">
          <label for="text-password">Password</label>
          <b-form-input type="password" id="text-password" v-model="form.password"
            aria-describedby="password-help-block"></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        <pre class="m-0" v-if="apiResponse"> Response: {{ apiResponse?.data }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

//bind
Vue.use(VueAxios, axios);

export default {
  name: 'PostAPITest',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        age: 0,
        gender: null,
        email: '',
        phone: '',
        username: '',
        password: '',
      },
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
        { text: 'Other', value: 'other' }
      ],
      show: true,
      apiResponse: null,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      const options = {
        headers: { "content-type": "application/json" }
      }
      Vue.axios.post('https://dummyjson.com/users/add', JSON.stringify(this.form), options)
        // .then(res => res.data)
        .then(res => {
          this.apiResponse = res;
          console.log("response", res)
        })
        .catch(err => console.log(err))
      // alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.age = 0;
      this.form.gender = '';
      this.form.email = '';
      this.form.phone = '';
      this.form.username = '';
      this.form.password = '';
      this.apiResponse = null;

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.active-form {
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
}
</style>