import { RouteRecordRaw } from 'vue-router';

export const testPath: RouteRecordRaw[] = [
  {
    path: '/test',
    component: () => import('@/page/test/index.vue'),
    meta: { title: '测试', type: 'single', icon: 'task-management' },
    children: [],
  },
];
