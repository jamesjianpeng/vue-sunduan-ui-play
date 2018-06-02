const defaultRoutes = [
  {
    path: '/select',
    name: 'select',
    component: () => import(/* pages-select */'pages/select'),
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* pages-button */'pages/button'),
  },
];

export default defaultRoutes;
