# `tapable`
## 安装
```shell
yarn add tapable
```
## 常见函数
```ts
import {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } form 'tapable';

```
- `call`:`(...args)=>void`当你钩子触发之前,就是call()之前,就会触发这个函数,你可以访问钩子的参数,多个钩子执行一次
- `tap`:`(tap:Tap)=>void`每个钩子执行之前,就会触发这个函数
- `loop`:`(...args) => void` 这个会为你的每一个循环钩子(LoopHook, 就是类型到Loop的)触发
- `register`:`(tap: Tap) => Tap | undefined` 每添加一个`Tap`都会触发 你interceptor上的register,你下一个拦截器的register 函数得到的参数 取决于你上一个register返回的值,所以你最好返回一个 tap 钩子
###  `Synchook`
- 说明
同步串行,在触发事件之前,会依次执行注册的所有事件的处理函数.其原理是将监听(订阅)的函数存放到一个数组中,发布时遍历数组中的监听函数并且将发布时的argument传递给监听函数
```ts
new SyncHook([arg1,arg2,...])
```

> hooks接受一个数组,参数为执行的回调时间所需要的参数名

```ts
  

import { SyncHook } from "tapable";


const hook = new SyncHook(['name', 'sex'])


hook.tap('printName', (name: string) => {

 console.log('我的名字是' + name);

})


hook.tap("printSex", (name: string, sex: string) => {

 console.log("我的性别是", sex);

})


hook.call("张三", "男")

```
> 结果
```ts
我的名字是张三

我的性别是 男
```
