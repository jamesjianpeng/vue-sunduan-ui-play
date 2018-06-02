import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutDefault from 'layout/default';
import defaultRoutes from './defaultRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LayoutDefault',
    component: LayoutDefault,
    children: defaultRoutes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
