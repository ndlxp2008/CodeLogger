import {
  createPinia,
  defineStore,
} from 'pinia';

const pinia = createPinia();
export default pinia;

export const useAppStore = defineStore('userStore', {
  state: () => ({
    testCount: 1,
  }),
  actions: {
    add() {
      return this.testCount++;
    },
    minus() {
      return this.testCount--;
    },
  },
});
