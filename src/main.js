import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { RouterLink, RouterView } from 'vue-router';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
// Create Filters 

Vue.filter("uCase", function(val) {
  return val.toUpperCase()
})
Vue.filter("lCase", function(val) {
  return val.toLowerCase()
})
Vue.filter("currencyConvert", function(val) {
  return val * 75
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
.component('RouterLink', RouterLink)
.component('RouterView', RouterView)