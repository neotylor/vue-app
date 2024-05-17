import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

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
// custom directives
// default values
Vue.directive("size", {
  // el, binding, vnode
  bind(el) {
    el.style.fontSize = "60px";
  }
})
// with values
Vue.directive("customSize", {
  // el, binding, vnode
  bind(el , binding) {
    switch (binding.value) {
      case 'small':
        el.style.fontSize = "20px";
      break;
      case 'medium':
        el.style.fontSize = "40px";
      break;
      case 'large':
        el.style.fontSize = "80px";
      break;
      case 'big':
        el.style.fontSize = "100px";
      break;
        
      default:
        el.style.fontSize = "60px";
      break;
    }
    console.log(el, binding)
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')