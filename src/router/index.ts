import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

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
    component: () => import('@views/Auth.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@views/Home.vue')
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
