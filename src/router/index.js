import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './defaultRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LayoutDefault',
    component: () => import(/* layout-default' */'layout/default'),
    children: defaultRoutes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
