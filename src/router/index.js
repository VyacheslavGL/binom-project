import Vue from 'vue'
import VueRouter from 'vue-router'
import Allfilms from '../components/Allfilms.vue'
import Detailsfilm from '../components/Detailsfilm.vue'
import Axios from 'axios'

Vue.use(VueRouter);
Vue.prototype.$http = Axios;

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Allfilms
  },
  {
    path: '/detailsfilm',
    name: 'Detailsfilm',
    component: Detailsfilm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
