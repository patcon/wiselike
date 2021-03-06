import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Me from '@/components/Me'
import Profile from '../components/Profile.vue'
import Wisdom from '@/components/Wisdom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/profile/:userId',
      name: 'profile',
      component: Profile
    },
    {
      path: '/wisdom/:userId',
      name: 'wisdom',
      component: Wisdom
    }
  ]
})
