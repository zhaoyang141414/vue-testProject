import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/index'
import './sass/common.css'
import store from './components/store/Store'

Vue.config.productionTip = false;
Vue.prototype.tools = new Vue;

Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.use(vuex);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components:{App},
  template:'<App/>',
})
