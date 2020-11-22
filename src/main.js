import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "style/iconfont/iconfont.css";
Vue.config.productionTip = false;
import global from './utils/global';

Vue.use(ElementUI);
Vue.use(global)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
