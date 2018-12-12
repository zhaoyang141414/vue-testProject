import Login from '../components/Login'
import main from '../components/MainPage'
import userInfo from '../components/userInfo/UserInfo'
import userGroup from '../components/userGroup/UserGroup'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
  // mode: 'history',
  base: '/dist',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'mainPage',
      // component: require('../components/MainPage')
      component: main,
      children: [
        {
          path: '/main/userInfo',
          name: 'UserInfo',
          component: userInfo
        },
        {
          path: '/main/userGroup',
          name: 'UserGroup',
          component: userGroup
        },
      ]
    },
    // 重定向
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
