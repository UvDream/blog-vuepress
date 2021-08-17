<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-23 10:04:03
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-23 14:24:17
 * @Description:vite前序
 * @Email: UvDream@163.com
-->

# [vite](https://cn.vitejs.dev/) [源码](https://github.com/UvDream/vite)解析

## vite 优点

- 极速的服务启动,使用原生 ESM 文件，无需打包!
- 轻量快速的热重载,无论应用程序大小如何，都始终极快的模块热重载（HMR）
- 丰富的功能,对 TypeScript、JSX、CSS 等支持开箱即用
- 优化的构建,可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
- 通用的插件,在开发和构建之间共享 Rollup-superset 插件接口
- 完全类型化的 API,灵活的 API 和完整 TypeScript 类型

## 环境搭建

### clone

```sh
git clone https://github.com/vitejs/vite
cd vite
```

### 软连接

```sh
yarn
cd packages/vite
yarn dev
yarn link
```

### init 一个项目

- 官方搭建方式
  [搭建一个 vite 项目](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)
- 搭建一个简单的

```sh
mkdir vite-base
cd vite-base
npm init或者yarn init
npm install vite或者yarn add vite
```

编辑`package.json`

```sh
...

  "scripts": {
    "start": "vite",
  },
...
```

### debug

对于这样的源码项目我们该如何去调试呢,干巴巴的看源码没调试来得快,理解的快

下面提供两种方式

#### 官方调试方式

```sh
 "scripts": {
    "debug": "vite --debug --profile --force"
  },
```

再运行`yarn debug`,就会出现如下的情况,这样我们就可以愉快的学习`vite`了
![vite](https://pic.baixiongz.com/uploads/2021/07/23/1777bea8bb32e.png)

### vscode 版本

利用`vscode`调试功能,打断点进行代码流程查看

- 第一步先去 `vite` 源码打个断点

![断点](https://pic.baixiongz.com/uploads/2021/07/23/6ef0c77f0aac2.png)

- 第二步启动`vscode`调试功能

![调试](https://pic.baixiongz.com/uploads/2021/07/23/9c2beb3f375bb.png)

- ok!开始调试

![开始](https://pic.baixiongz.com/uploads/2021/07/23/9ce83c10c4d8b.png)

#### 谷歌浏览器

- 打开谷歌浏览器 `nodejs` 调试工具 1.打开谷歌浏览器,输入`chrome://inspect/#devices` 2.下载`NIM`扩展工具
- 修改`package.json`

```sh
"debug": "node --inspect-brk ./node_modules/vite/bin/vite.js",
```

- 运行

![运行](https://pic.baixiongz.com/uploads/2021/07/23/b35d96b7f386f.png)

- 浏览器

![浏览器](https://pic.baixiongz.com/uploads/2021/07/23/e70ffe0a27362.png)

- 如果安装`NIM`插件会自动打开调试工具

> 比较推荐 vscode 调试
