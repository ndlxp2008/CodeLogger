import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';

import { learnRoute } from '@/router/modules/learn';
import { testPath } from '@/router/modules/test';
import { formatFlatteningRoutes } from '@/router/utils';

const Layout = () => import('@/layout/index.vue');

export const routerList = [...testPath, ...learnRoute];
// 扁平化的路由
const flatRouters = formatFlatteningRoutes(routerList);
export const routes: Array<RouteRecordRaw> = [
  // 根目录重定向的页面
  {
    path: '/',
    component: Layout,
    redirect: '/test',
    children: [...flatRouters],
  },
];

const router: Router = createRouter({ history: createWebHistory(), routes });
export default router;
