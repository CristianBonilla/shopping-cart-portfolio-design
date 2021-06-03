import Vue, { PluginObject } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as iconPack from '@plugins/font-awesome/icons';

const VueFontAwesome: PluginObject<Vue> = {
  install(Vue) {
    library.add(iconPack);
    Vue.component('FontAwesome', FontAwesomeIcon);
  }
};

Vue.use(VueFontAwesome);

export { VueFontAwesome };
