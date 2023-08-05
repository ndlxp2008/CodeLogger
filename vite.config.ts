import autoprefixer from 'autoprefixer';
import * as path from 'path';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      // 引入的样式的类型，可以是css、sass、less等，
      useSource: true,
    }),
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 全局引入插件
      imports: ['vue', 'vue-router'],
      resolvers: [
        // 自动导入Element-Plus的Api
        ElementPlusResolver(),
      ],
      // eslint报错解决方案
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 在全局中使用 index.scss中预定义的变量
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
    postcss: {
      plugins: [postcssImport, autoprefixer, tailwindcss],
    },
  },
  resolve: {
    //设置别名
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.ts', '.js'],
  },
});
