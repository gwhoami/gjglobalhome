import { lazy } from 'react';

const userPagePath = [
  {
    path: '',
    component: lazy(() => import('../pages/users/landing')),
    exact: true,
  },
  {
    path: '/profile/:tabid',
    component: lazy(() => import('../pages/profile/index')),
    exact: true,
  },
  {
    path: '/education/:tabid',
    component: lazy(() => import('../pages/education/index')),
    exact: true,
  },
  {
    path: '/medical/:tabid',
    component: lazy(() => import('../pages/medical/index')),
    exact: true,
  },

  {
    path: '/Events/',
    component: lazy(() => import('../pages/events/index')),
    exact: true,
  },
  {
    path: '/Event/:tabid',
    component: lazy(() => import('../pages/event/index')),
    exact: true,
  },
  {
    path: '/Medicals/',
    component: lazy(() => import('../pages/medicals/index')),
    exact: true,
  },
  // {
  //     path: '/settings',
  //     component: lazy(()=> import('../container/user/userSettings')),
  //     exact: true
  // },
  // {
  //     path: '/singlequote/:productid',
  //     component: lazy(()=> import('../container/user/products/singleQuotation')),
  //     exact: true
  // },
  // {
  //     path: '/profile/:tabname',
  //     component: lazy(()=> import('../container/user/profile/profileHome')),
  //     exact: true
  // },
];

export default userPagePath;
