import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueRouter from 'vue-router'
// import LifeCycle from './components/lifecycle/LifeCycle.vue'
// import PageNotFound from './pages/default/PageNotFound.vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     components: LifeCycle,
//   },
//   {
//     path: '/404',
//     components: PageNotFound
//   }
// ]
// const router = new VueRouter({
//   routes
// })

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
  // router: router,
  render: h => h(App),
}).$mount('#app')
