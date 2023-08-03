# CodeLogger
## Eslint 代码质量约束

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


# 构建tailwindcss+vite

```
# tailvindcss版本：v3.3.3
# 官网地址：https://tailwindcss.com/docs/installation
# 1.安装包 tailwindcss postcss autoprefixer
# vite本身自带postcss，so 只要在vite.config.xx里配置css中的postcss属性即可

yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2.配置vite中css的postcss加载postcssImport, autoprefixer, tailwindcs插件

#  postcss: {
#       plugins: [postcssImport, autoprefixer, tailwindcss],
#     }
# 

# 3.配置style.css
# /*  tailwindcss */
# @tailwind base;
# @tailwind components;
# @tailwind utilities;


# 如果出现 tailwind不能解析，那么首先看有没有配置好postcss,其次@tailwind在style文件中有没有声明，最后则看tailwindcss.config.x中是否配置合适的文件后缀

# tailwindcss提示插件安装



```

