/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
// vite-env.d.ts 文件中的类型声明会自动被 TypeScript 编译器包含在整个 Vite 项目中，无需手动导入或引入。这是因为 Vite 默认会识别 vite-env.d.ts 文件，并将其中的类型声明应用到整个项目。
// 可以在 vite-env.d.ts 文件中添加自定义的类型声明，也可以引入第三方库的类型声明以增强 TypeScript 对项目的类型推断能力。

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明一个模块，该模块可以是任何以 .js or .ts 结尾的 JavaScript 文件,防止 TypeScript 编译器报错
declare module '*.js';
declare module '*.ts';
