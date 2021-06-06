import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Auth from '@views/Auth.vue';
import Home from '@views/Home.vue';

declare const process: {
  env: {
    BASE_URL: string;
  };
};

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    redirect: '/auth'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
