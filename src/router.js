import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Conversion from './views/conversion/Conversion'
import Result from './views/result/Result'
import Teach from './views/teach/Teach'
import ToB from './views/teach/components/ToB'
import ToD from './views/teach/components/ToD'
import Else from './views/teach/components/Else'
import Compare from "./views/compare/Compare";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/compare',
      name: 'compare',
      component: Compare
    },
    {
      path: '/conversion',
      name: 'conversion',
      component: Conversion
    },
    {
      path: '/teach',
      name: 'teach',
      component: Teach,
      children: [
        {
          path: 'toB',
          component: ToB
        },
        {
          path: 'toD',
          component: ToD
        },
        {
          path: 'else',
          component: Else
        }
      ]
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
/*    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
