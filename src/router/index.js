import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/question',
      name: 'Question',
      component: Questions
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
