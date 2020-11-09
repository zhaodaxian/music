import '@/style/index.scss';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import "style/iconfont/iconfont.css";
import Icon from '@/baseComponent/icon'
import NButton from '@/baseComponent/NButton'
Vue.component("Icon", Icon)
Vue.component("NButton", NButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
