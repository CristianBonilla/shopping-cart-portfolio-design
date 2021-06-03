import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@views/Home.vue';

declare const process: {
  env: {
    BASE_URL: string;
  };
};

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
