// import { createWebHistory, createRouter } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
// define route components by importing
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContectView from '../views/ContectView.vue';
import PostView from '../views/PostView.vue';
import ExamplesView from '../views/ExamplesView.vue';
import PageNotFound from '../views/default/PageNotFound.vue';
import AppHeader from '../layouts/AppHeader.vue'
import LifeCycle from '../components/lifecycleMethods/LifeCycle.vue'
import ActiveBoot from '../components/bootstrapExamples/ActiveBoot.vue'
import APITest from '../components/apiExamples/APITest.vue'
import ListTest from '../components/apiExamples/Users/ListTest.vue'
import UserTest from '../components/apiExamples/Users/UserTest.vue'
import DynamicComponentExample from '../components/dynamicComponents/DynamicComponentExample.vue'
import CustomDirectiveExample from '../components/custom-directive/CustomDirectiveExample.vue'

// Define routes, Each routes should map to a component
const routes = [
  {
    path: '/',
    name: "home",
    components: {
      header: AppHeader,
      default: HomeView,
    },
    children: [],
  },
  {
    path: '/about',
    name: "about",
    components: {
      header: AppHeader,
      default: AboutView,
    },
    children: [],
  },
  {
    path: '/contect',
    name: "contect",
    components: {
      header: AppHeader,
      default: ContectView,
    },
    children: [],
  },
  {
    path: '/post',
    name: "post",
    components: {
      header: AppHeader,
      default: PostView,
    },
  },
  {
    path: '/examples',
    name: 'examples',
    components: {
      header: AppHeader,
      default: ExamplesView,
    },
    children: [
      {
        path: '/examples/life-cycle-methods',
        name: 'lifeCycleMethods',
        /* Lifecycle hooks example */
        component: LifeCycle
      },
      {
        path: '/examples/bootstrap-example',
        name: 'bootstrapExamples',
        component: ActiveBoot
      },
      {
        path: '/examples/api-examples',
        name: 'APITest',
        component: APITest
      },
      {
        path: '/examples/api-examples/users',
        name: 'ListTest',
        component: ListTest
      },
      {
        path: '/examples/api-examples/users/new',
        name: 'NewUser',
        component: UserTest
      },
      {
        path: '/examples/api-examples/user/:id',
        name: 'UserTest',
        component: UserTest
      },
      {
        path: '/examples/api-examples/user/:id/edit',
        name: 'UserEdit',
        component: UserTest
      },
      {
        path: '/examples/dynamic-component-example',
        name: 'DynamicComponentExample',
        component: DynamicComponentExample
      },
      {
        path: '/examples/custom-directive-example',
        name: 'CustomDirectiveExample',
        component: CustomDirectiveExample
      },
    ],

  },
  {
    path: '*',
    name: "page404",
    components: {
      // header:AppHeader,
      default: PageNotFound,
    },
    children: [],
  },
];


Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === 'production' ? '/vue-app/' : '/',
  routes
});