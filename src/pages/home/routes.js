import loadable from '@loadable/component';

const homeRoutes = [
  {
    path: '/',
    component: loadable(() => import('./index')),
  },
];

export default homeRoutes;
