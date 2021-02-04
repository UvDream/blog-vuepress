# webpack 打包优化

# 目的:

- 减小打包后的文件大小
- 优化 webpack 打包时间
- 加快首屏加载

# 优化方式

## 按需加载

### 路由按需加载

```js
const OtherRouter = [
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "@/views/Test.vue"),
  },
  {
    path: "/config",
    name: "config",
    component: () => import("@/views/other/config.vue"),
  },
];
```

### 第三方组件和插件,按需引入第三方组件

```js
import Vue from "vue";
import { Button, Select } from "element-ui";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
```

### 对于一些插件,如果只是个别组件中使用到就不要在`main.js`或者`main.ts`中引入了

```js
- import Vditor from 'vditor'
- Vue.use(Vditor)
//组件内
+ import Vditor from 'vditor'
```

## 优化 loader 配置

- 优化正则匹配
- 通过 cacheDirectory 选项开启缓存
- 通过 include、exclude 来减少被处理的文件

## 优化文件路径

- extension 配置之后可以不用在 require 或是 import 的时候加文件扩展名,会依次尝试添加扩展名进行匹配。
- mainFiles 配置后不用加入文件名，会依次尝试添加的文件名进行匹配
- alias 通过配置别名可以加快 webpack 查找模块的速度

> vue

```json
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```

> angular

`tsconfig.json`

```json
 "paths": {
      "@service/*": ["app/service/*"],
      "@pipes/*": ["app/pipes/*"]
    },
```

## 生产环境关闭 `sourceMap`

- sourceMap 本质上是一种映射关系，打包出来的 js 文件中的代码可以映射到代码文件的具体位置,这种映射关系会帮助我们直接找到在源代码中的错误
- 打包速度减慢，生产文件变大，所以开发环境使用 sourceMap，生产环境则关闭

## 代码压缩

- UglifyJS: vue-cli 默认使用的压缩代码方式，它使用的是单线程压缩代码，打包时间较慢
- ParallelUglifyPlugin: 开启多个子进程，把对多个文件压缩的工作分别给多个子进程去完成

```
npm i -D webpack-parallel-uglify-plugin
```

`webpack.prod.js`文件配置如下

```js
const path = require("path");
const webpackConfig = require("./webpack.config.js");
const WebpackMerge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

module.exports = WebpackMerge(webpackConfig, {
  mode: "production",
  devtool: "cheap-module-source-map",
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../public"),
        to: path.resolve(__dirname, "../dist"),
      },
    ]),
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({//压缩js
      //   cache:true,
      //   parallel:true,
      //   sourceMap:true
      // }),
      new ParallelUglifyPlugin({
        cacheDir: ".cache/",
        uglifyJS: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial", // 只打包初始时依赖的第三方
        },
      },
    },
  },
});
```

> ### 引入 webpack-bundle-analyzer 分析打包后的文件

`webpack-bundle-analyzer`将打包后的内容束展示为方便交互的直观树状图，让我们知道我们所构建包中真正引入的内容

```json
npm i -D webpack-bundle-analyzer
```

在`webpack.prod.js`中加入代码

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

 plugins:[
  ...,
  new BundleAnalyzerPlugin({
      analyzerHost:'127.0.0.1',
      analyzerPort: 8889
    })
  ],
```

在 package.json 中加入配置

```json
"analyz": "NODE_ENV=production npm_config_report=true npm run build"
```

windows 请安装

```json
npm i -D cross-env
"analyz": "cross-env NODE_ENV=production npm_config_report=true npm run build"
```

## CDN 加速

随着应用越做越大,第三方包越来越多,构建的文件肯定随之越来越大,加上又是单页应用,就会导致网速过慢或者贷款有限的情况会由于较长时间的白屏

`vue`,`vue-router`,`vuex`,`axios`....

> 目前常用的 cdn 加速网站 [UNPKG](https://unpkg.com/)

## 使用`HappyPack`多进程解析

- 由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以 Webpack 需要处理的事情需要一件一件的做，不能多件事一起做。
- HappyPack 就能让 Webpack 把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程
- HappyPack 对 file-loader、url-loader 支持的不友好，所以不建议对该 loader 使用。

> 使用方法

1、HappyPack 插件安装： npm i -D happypack
2、webpack.base.conf.js 文件对 module.rules 进行配置

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: ["happypack/loader?id=babel"],
      include: [resolve("src"), resolve("test")],
      exclude: path.resolve(__dirname, "node_modules"),
    },
    {
      test: /\.vue$/,
      use: ["happypack/loader?id=vue"],
    },
  ];
}
```

3、在生产环境 webpack.prod.conf.js 文件进行配置

```js
const HappyPack = require("happypack");
// 构造出共享进程池，在进程池中包含5个子进程
const HappyPackThreadPool = HappyPack.ThreadPool({ size: 5 });
plugins: [
  new HappyPack({
    // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
    id: "babel",
    // 如何处理.js文件，用法和Loader配置中一样
    loaders: ["babel-loader?cacheDirectory"],
    threadPool: HappyPackThreadPool,
  }),
  new HappyPack({
    id: "vue", // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
    loaders: [
      {
        loader: "vue-loader",
        options: vueLoaderConfig,
      },
    ],
    threadPool: HappyPackThreadPool,
  }),
];
```

## `TreeShaking`

这里单独提一下`tree-shaking`,是因为这里有个坑。`tree-shaking`的主要作用是用来清除代码中无用的部分。目前在`webpack4`我们设置`mode`为`production`的时候已经自动开启了`tree-shaking`。但是要想使其生效，生成的代码必须是 ES6 模块。不能使用其它类型的模块如`CommonJS`之流。如果使用`Babel`的话，这里有一个小问题，因为`Babel`的预案（preset）默认会将任何模块类型都转译成`CommonJS`类型。修正这个问题也很简单，在`.babelrc`文件或在`webpack.config.js`文件中设置`modules： false`就好了
