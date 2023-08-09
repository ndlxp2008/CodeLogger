# CodeLogger
## Eslint 代码质量约束

:fire: vite+vue3+typescript+eslint构建骨架
:fire: pinia存储
:fire: tailwind通用样式
:fire: element-plus通用组件

yarn create vite

yarn add vite


```sh
# 初始化eslint配置文件，并安装相关依赖
npx eslint --init
```
## Scss 以及 Stylelint 样式规范约束

```sh
yarn add sass -D
```

# prettier统一格式化
```
yarn add  eslint-config-prettier -D
```


# 构建tailwindcss+vite

```
# tailvindcss版本：v3.3.3
# 官网地址：https://tailwindcss.com/docs/installation
# 1.安装包 tailwindcss postcss autoprefixer
# vite本身自带postcss，so 只要在vite.config.xx里配置css中的postcss属性即可

yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2.配置vite中css的postcss加载postcssImport, autoprefixer, tailwindcs插件

  postcss: {
       plugins: [postcssImport, autoprefixer, tailwindcss],
     }


# 3.配置style.css
/*  tailwindcss */
@tailwind base;
@tailwind components;
@tailwind utilities;


# 如果出现 tailwind不能解析，那么首先看有没有配置好postcss,其次@tailwind在style文件中有没有声明，最后则看tailwindcss.config.x中是否配置合适的文件后缀

# 4.tailwindcss提示插件安装

# 如果插件不提示，设置文件的关联语言即可，.vscode中的files.associations

# 最简便的方法就是，files.associaions值为空，安装 Volar，自动匹配

```

# 构建element-plus+vite

```
yarn add element-plus
yarn add -D unplugin-vue-components unplugin-auto-import unplugin-element-plus


#配置vite.config.x
# import { defineConfig } from 'vite'
# import vue from '@vitejs/plugin-vue'
<!-- elementplus插件配置  -->
# import ElementPlus from 'unplugin-element-plus/vite'
<!-- 自动导入插件，需要配置 -->
# import AutoImport from 'unplugin-auto-import/vite'
<!-- 按需导入组件，需要配置 -->
# import Components from 'unplugin-vue-components/vite'
<!-- elementplus解析器，需要配置 -->
# import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
#
# export default defineConfig({
#     plugins: [
#         vue(),
#         ElementPlus({
#         // 引入的样式的类型，可以是css、sass、less等，
#           importStyle: 'css',
#           useSource: true
#         }),Ï
#         AutoImport({
#               resolvers: [ElementPlusResolver()],
#         })
#         Components({
#               resolvers: [ElementPlusResolver()],
#         }),
#     ]
# })

```
# 安装插件，配置插件

yarn add -D vite-plugin-svg-icons

yarn add -D @vitejs/plugin-vue

yarn add -D @vitejs/plugin-vue-jsx

yarn add -D unplugin-icons

yarn add -D vite-plugin-inspect

# mock数据

```
yarn add mockjs -D
```

# 安装EditorConfig for VS Code插件
```
该插件试图用 .editorconfig 文件中的设置覆盖用户/工作区设置。不需要额外的或特定于 vscode 的文件。与其他 EditorConfig 插件一样，如果未指定 root=true，EditorConfig 将继续在项目外查找 .editorconfig 文件。
```
