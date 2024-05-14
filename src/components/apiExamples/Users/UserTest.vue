<template>
  <div>
    <h1>User Test {{ this.$route?.name === 'UserEdit' ? 'Edit page' : this.$route?.name === 'NewUser' ? 'Create page' :
      'Detail page' }}</h1>
    <b-card class="mt-3 container" header="Response Data Result">
      <div class="active-form text-start">
        <b-form @submit="onSubmit" @reset="onReset" method="post" v-if="show">
          <b-form-group id="input-group-2" label="Your First Name:" label-for="firstname" aria-readonly="">
            <b-form-input v-bind:readonly="!isUpdatePage" id="firstname" v-model="form.firstName"
              placeholder="Enter first name" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Last Name:" label-for="lastname">
            <b-form-input v-bind:readonly="!isUpdatePage" id="lastname" v-model="form.lastName"
              placeholder="Enter last name" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Age:" label-for="age">
            <b-form-input v-bind:readonly="!isUpdatePage" id="age" v-model="form.age" type="number"
              placeholder="Enter age" required></b-form-input>
          </b-form-group>

          <b-form-group label="Selecte Gender" v-slot="{ ariaDescribedby }">
            <b-form-radio-group v-model="form.gender" :options="options" :aria-describedby="ariaDescribedby"
              name="form.gender" v-bind:disabled="!isUpdatePage"></b-form-radio-group>
          </b-form-group>

          <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
            description="We'll never share your email with anyone else.">
            <b-form-input v-bind:readonly="!isUpdatePage" id="input-1" v-model="form.email" type="email"
              placeholder="Enter email" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Phone:" label-for="phone">
            <b-form-input v-bind:readonly="!isUpdatePage" id="phone" v-model="form.phone" placeholder="Enter phone"
              required></b-form-input>
          </b-form-group>

          <b-form-group id="user-name" label="Your User Name:" label-for="username">
            <b-form-input v-bind:readonly="!isUpdatePage" id="username" v-model="form.username"
              placeholder="Enter username" required></b-form-input>
          </b-form-group>


          <b-form-group id="password">
            <label for="text-password">Password</label>
            <b-form-input v-bind:readonly="!isUpdatePage" type="password" id="text-password" v-model="form.password"
              aria-describedby="password-help-block"></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 8-20 characters long, contain letters and numbers, and must not
              contain spaces, special characters, or emoji.
            </b-form-text>
          </b-form-group>
          <div class="action d-flex gap-2">
            <b-button type="submit" variant="primary" v-if="isUpdatePage">Submit</b-button>
            <b-button type="reset" variant="danger" v-if="isUpdatePage">Reset</b-button>
            <b-button type="submit" variant="primary" @click="$router.go(-1)">Back</b-button>
          </div>

        </b-form>
        <b-card class="mt-3" header="Response Data Result"  v-if="apiResponse">
          <pre class="m-0">Response: Record {{ this.$route?.name === 'UserEdit' ? 'Update' : 'Create' }} successfully</pre>
          <pre class="m-0">{{ apiResponse }}</pre>
        </b-card>
      </div>
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
  name: 'UserTest',
  data() {
    return {
      user: this.$route.params.id,
      userData: null,
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
      isUpdatePage: this.$route?.name === 'UserEdit' || this.$route?.name === 'NewUser',
    }
  },
  methods: {
    getUser() {
      if (this.user && this.user?.trim() !== '') {
        Vue.axios.get(`https://dummyjson.com/users/${this.user}`)
          .then(res => res.data)
          .then(res => {
            const { firstName, lastName, age, gender, email, phone, username, password } = res;
            this.form = { firstName, lastName, age, gender, email, phone, username, password };
            this.userData = res;
          })
          .catch(err => console.log(err))
      } else {
        console.log("Invailid User Id")
      }
    },
    onSubmit(event) {
      event.preventDefault()
      const options = {
        headers: { "content-type": "application/json" }
      }
      if (this.user && this.user?.trim() !== '') {
        Vue.axios.put(`https://dummyjson.com/users/${this.user}`, JSON.stringify(this.form), options)
          // .then(res => res.json())
          // .then(console.log);
          // .then(res => res.data)
          .then(res => {
            this.apiResponse = res;
            console.log("response", res)
          })
          .catch(err => console.log(err))
      } else {
        Vue.axios.post('https://dummyjson.com/users/add', JSON.stringify(this.form), options)
          // .then(res => res.data)
          .then(res => {
            this.apiResponse = res;
            console.log("response", res)
          })
          .catch(err => console.log(err))
        // alert(JSON.stringify(this.form))
      }
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

  },
  mounted() {
    this.getUser();
    console.log('this.user', this.user, this.$route)
  }
}
</script>