import Vue, { PluginObject } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as iconPack from 'src/plugins/font-awesome/icons';

const VueFontAwesome: PluginObject<Vue> = {
  install(Vue) {
    library.add(iconPack);
    Vue.component('FontIcon', FontAwesomeIcon);
  }
};

Vue.use(VueFontAwesome);

export { VueFontAwesome };
