import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import LifeCycle from './components/lifecycle/LifeCycle.vue'
// import PageNotFound from './pages/default/PageNotFound.vue'

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
Vue.config.productionTip = false;

new Vue({
  // router: router,
  render: h => h(App),
}).$mount('#app')
