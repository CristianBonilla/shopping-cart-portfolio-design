import Vue, { ComponentOptions } from 'vue';
import App from '@/App.vue';
import router from '@/router';

Vue.config.productionTip = false;

const options: ComponentOptions<Vue> = {
  render: rootElement => rootElement(App),
  router
};

new Vue(options).$mount('#app');
