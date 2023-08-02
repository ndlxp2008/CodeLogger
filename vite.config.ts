import * as path from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 在全局中使用 index.scss中预定义的变量
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
  resolve: {
    //设置别名
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    extensions: [".ts", ".js"],
  },
});
