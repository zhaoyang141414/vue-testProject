import Vue from 'vue'
import vuex from 'vuex'
import user_store from './user/userComponent'

Vue.use(vuex);

export default new vuex.Store({
   modules:{
       user:user_store
   }
})