import Vue from 'vue'
import VueRouter from 'vue-router'
import Allfilms from '../components/Allfilms.vue'
import Detailsfilm from '../components/Detailsfilm.vue'


Vue.use(VueRouter);


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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
