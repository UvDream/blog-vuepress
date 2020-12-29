

# 什么是vite

## [Vite](https://github.com/vitejs/vite)

`Vite`是面向现代浏览器,基于原生模块系统 `ESModule` 实现了按需编译的` Web` 开发构建工具,基于[Rollup](https://www.rollupjs.com/)打包.

## 优点

- 快速启动冷服务器
- 即时热模块更换（HMR）
- 真正的按需编译

# vite初始化

> npm

```npm
 npm init vite-app <project-name>
 cd <project-name>
 npm install
 npm run dev
```

> yarn

```npm
yarn create vite-app <project-name>
cd <project-name>
yarn
yarn dev
```

> 尽管`Vite`最初旨在与`Vue 3`配合使用,但它也可以支持其他框架.例如,尝试`npm init vite-app --template react`或`--template preact`

## 在这里我们是用

```npm
npm init vite-app vite-ts-vue
```

## 配置依赖

```js
cd vite-ts-vue
npm install     // 安装项目依赖
npm i -S typescript vue-router@next // 集成 TypeScript vue-router 
npm i -D eslint eslint-plugin-vue   // 集成 eslint 
npm i less --save-dev   // 集成css预编译less
npm run dev 
```

# 项目配置

## 配置 `vite.config.js`

> 这个类似[`vue-cli](https://cli.vuejs.org/zh/)里面的vue.config.js

```js
import path from 'path'
module.exports = {
  // 导入文件夹别名
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@views/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@utils/': path.resolve(__dirname, './src/utils'),
  },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ["lodash"]
  },
}
```

## 配置`main.ts`

1. 修改`main.js`为`main.ts`,因为我们项目需要使用`typescript`开发
2. 修改`index.html`

```js
...
<script type="module" src="/src/main.js"></script>
...
```

> 如果不这样修改的话,会出现`main.js`找不到,其实这就是入口文件

# 配置`router`

1. 在`src`中新建`router`文件夹,并在文件夹里面创建`index.ts`

```js
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: import('/@views/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

```

2. 新建页面`index.vue`

```vue
<template>
    <div>
        Home
        {{title}}
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    setup(){
        const title=reactive<String>("标题")
        return {title}
    }
})
</script>

```

3.修改`index.css`为`index.less`

因为我们项目中使用`less`,如果你希望使用`sass`的话,那么在安装依赖的时候安装sass

```js
...
npm i sass --save-dev   
...
```

4.在`main.ts`中引入`router`

```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import router from './router/index'
createApp(App).use(router).mount('#app')
```

# 优化TS类型推断

在`src`目录下创建`shim.d.ts`、`source.d.ts`

> shim.d.ts

```js
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
```

> source.d.ts`

```js
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
```

具体代码见[github](https://github.com/UvDream/vite-ts-vue)