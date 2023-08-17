import {
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';

import router from '@/router';

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    keepAlive?: boolean;
    refreshRedirect: string;
    dynamicLevel?: string;
    title: string;
  };
}

router.beforeEach(
  async (to: toRouteType, from: toRouteType, next: NavigationGuardNext) => {
    next();
  },
);

// router.afterEach((route) => {
//   let a = sessionStorage.length;
// });
