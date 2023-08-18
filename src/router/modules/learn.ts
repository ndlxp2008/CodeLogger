import { RouteRecordRaw } from 'vue-router';

export const learnRoute: RouteRecordRaw[] = [
  {
    path: '/learn',
    component: () => import('@/page/learn/index.vue'),
    meta: { title: '学习页', type: 'single' },
    children: [],
  },
];
