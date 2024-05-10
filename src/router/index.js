import { createWebHistory, createRouter } from 'vue-router'
// define route components by importing
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContectView from '../views/ContectView.vue';
import PostView from '../views/PostView.vue';

// Define routes, Each routes should map to a component
const routes = [
  {
    path: '/',
    // name: "home",
    component: HomeView
  },
  {
    path: '/about',
    // name: "about",
    component: AboutView
  },
  {
    path: '/contect',
    // name: "contect",
    component: ContectView
  },
  {
    path: '/post',
    // name: "post",
    component: PostView
  },
];

// Create the router instance and pass the 'routes' option
const router = createRouter({
  // provide the history implementation to use
  history: createWebHistory('./'),
  routes,
})

export default router;