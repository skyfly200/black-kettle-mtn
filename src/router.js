import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign',
      name: 'sign',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sign" */ './views/Sign.vue'),
      // A component to use while the async component is loading
      loading: LoadingComponent,
      // A component to use if the load fails
      error: ErrorComponent,
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "history" */ './views/History.vue'),
      // A component to use while the async component is loading
      loading: LoadingComponent,
      // A component to use if the load fails
      error: ErrorComponent,
    },
    {
      path: '/mtn',
      name: 'mtn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "mtn" */ './views/Mtn.vue'),
      // A component to use while the async component is loading
      loading: LoadingComponent,
      // A component to use if the load fails
      error: ErrorComponent,
    }
  ]
})
