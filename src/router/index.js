// import { createWebHistory, createRouter } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
// define route components by importing
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContectView from '../views/ContectView.vue';
import PostView from '../views/PostView.vue';
import PageNotFound from '../views/default/PageNotFound.vue';

// Define routes, Each routes should map to a component
const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView,
    children: [],
  },
  {
    path: '/about',
    name: "about",
    component: AboutView,
    children: [],
  },
  {
    path: '/contect',
    name: "contect",
    component: ContectView,
    children: [],
  },
  {
    path: '/post',
    name: "post",
    component: PostView,
    children: [],
  },
  {
    path: '*',
    name: "page404",
    component: PageNotFound,
    children: [],
  },
];

// Create the router instance and pass the 'routes' option
// const router = createRouter({
  // provide the history implementation to use
  // history: createWebHistory('./'),
//   routes,
// })

// export default router;

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});