import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'
import GitHub from '@/components/GitHub'
import HomePage from '@/components/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
    	path: '/page1',
    	name: 'PageOne',
    	component: PageOne
    },
    {
    	path: '/search',
    	name: 'GitHub',
    	component: GitHub
    }
  ]
})
