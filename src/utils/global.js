import Vue from 'vue';
import * as utils from "./index"
// import Icon from '@/base/icon'
// import NButton from '@/base/NButton'
// Vue.component("Icon", Icon)
// Vue.component("NButton", NButton)
Vue.prototype.$utils = utils

export default {
  install () {
    const requireComponent = require.context(
      '@/base',
      true,
      /[a-z0-9]+\.(jsx?|vue)$/i,
    )
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name
      if (componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    });
    
  }
}