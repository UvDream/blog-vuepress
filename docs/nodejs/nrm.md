# nrm

## 介绍

`nrm`(`npm registry manager `)是`npm`的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 `npm `源间切换

## 安装

```js
npm install -g nrm
```

###  安装报错

```js
internal/validators.js:124
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
    ^

[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
  at validateString (internal/validators.js:124:11)
  at Object.join (path.js:375:7)
  at Object.<anonymous> (D:\nvm\v14.15.4\node_modules\nrm\cli.js:17:20)
  at Module._compile (internal/modules/cjs/loader.js:1063:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  at Module.load (internal/modules/cjs/loader.js:928:32)
  at Function.Module._load (internal/modules/cjs/loader.js:769:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  at internal/main/run_main_module.js:17:47
] {
  code: 'ERR_INVALID_ARG_TYPE'
}
```

> 1. 找到`D:\nvm\v14.15.4\node_modules\nrm\cli.js`这个文件
> 2. 删除`17`行` const NRMRC = path.join(process.env.HOME, '.nrmrc');`
> 3. 替换`17`行`const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');`

## 常用命令

### 镜像源列表

```js
nrm ls
* npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry
```

### 使用指定镜像源

```js
nrm use cnpm
```

### 添加镜像源地址

```js
nrm add <registry> <url>
```

>  `registry`为源名,`url`为镜像源地址

```js
nrm add registry http://registry.npm.frp.trmap.cn/
```

### 删除镜像

```js
nrm del <registry>
```

### 测试速度

```js
nrm test
* npm ---- 631ms
  yarn --- 805ms
  cnpm --- 1170ms
  taobao - 130ms
  nj ----- Fetch Error
  npmMirror  1487ms
  edunpm - Fetch Error
```

