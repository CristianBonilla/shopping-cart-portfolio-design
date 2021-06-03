import Vue, { ComponentOptions } from 'vue';
import App from 'src/App.vue';
import router from 'src/router';
import 'src/plugins';

Vue.config.productionTip = false;

const root$ = document.querySelector('root') as HTMLElement;
const options: ComponentOptions<Vue> = {
  render: rootElement => rootElement(App),
  router
};

new Vue(options).$mount(root$);
