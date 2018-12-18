import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/index'
import './sass/common.css'
import store from './components/store/Store'
import i18n from './i18n/i18n'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.prototype.tools = new Vue; // 引用的全局组件
Vue.prototype.$ajax = axios; // 使用原型链方式引用axious
Vue.prototype.$qs = qs; // 处理post方式的json传递格式

// Vue.use(axios)  
Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.use(vuex);

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components:{App},
  template:'<App/>',
})
