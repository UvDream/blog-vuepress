# lerna.json

> - version , 当前库的版本
> - npmClient , 允许指定命令使用的 client， 默认是 npm， 可以设置成 yarn
> - command.publish.ignoreChanges ， 可以指定那些目录或者文件的变更不会被 publish
> - command.bootstrap.ignore ， 指定不受 bootstrap 命令影响的包
> - command.bootstrap.npmClientArgs ， 指定默认传给 lerna bootstrap 命令的参数
> - command.bootstrap.scope ， 指定那些包会受 lerna bootstrap 命令影响
> - packages ， 指定包所在的目录

# 命令行

## lerna add <pkg> [globs...]

> 添加一个包的版本为各个包的依赖

```
$ lerna add <package>[@version] [--dev] [--exact]
```

## lerna bootstrap

> - 为每个包安装依赖
> - 链接相互依赖的库到具体的目录
> - 执行 npm run prepublish
> - 执行 npm run prepare

### 参数

#### --hoist

> 这个选项，会把共同依赖的库安装到根目录的 node_modules 下， 统一版本

#### --ignore

> 忽略部分目录， 不进行安装依赖

```
lerna bootstrap --ignore component-*
```

也可以在 lerna.json 中控制

```json
{
  "version": "0.0.0",
  "command": {
    "bootstrap": {
      "ignore": "component-*"
    }
  }
}
```

#### --ignore-scripts

> 不执行声明周期脚本命令， 比如 prepare

#### --registry <url>

> 指定 registry

#### --npm-client

> 指定安装用的 npm client

```
lerna bootstrap --npm-client=yarn
```

也可以在 lerna.json 中配置

```json
{
  ...
  "npmClient": "yarn"
}
```

#### --use-workspace

> 使用 yarn workspace

#### --no-ci

> 默认调用 npm ci 替换 npm install , 使用选项修改设置

## lerna changed

> 显示自上次 relase tag 以来有修改的包， 选项通 list

## lerna clean

> 删除各个包下的 node_modules

## lerna create

> 新建包

## lerna diff [pkgName]

> 显示自上次 relase tag 以来有修改的包的差异， 执行 git diff

## lerna exec [cmd][args...]

> 在每个包目录下执行任意命令

## lerna info

## lerna init

> 创建一个新的 lerna 库或者是更新 lerna 版本

### 参数

#### --independent

> 独立模式

#### --exeact

> 统一模式,所有包保持版本号一致

## lerna link

> 链接互相引用的库

## lerna impot

> 导入指定 git 仓库的包作为 lerna 管理的包

```
lerna import <path-to-external-repository>
```

## lerna list

> 列举当前 lerna 库包含的包

## lerna publish [bump]

> 发布新的库版本

### 参数

##### canary

> 可以用来独立发布每个 commit，不打 tag

```js
lerna publish --canary
```

#### --npm-client

> 默认 npm

#### --npm-tag

> 为发布的版本添加 dist-tag

#### --no-verify-access

不进行用户发布的权限校验

#### --registry <url>

> 指定 registry

#### --yes

用于 ci 自动输入 yes

## lerna run <script>

> 执行每个包 package.json 中的脚本命令

## lerna version

> 版本
