import Vue, { ComponentOptions } from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const options: ComponentOptions<Vue> = {
  render: createElement => createElement(App),
  router
};

new Vue(options)
  .$mount('#app');
