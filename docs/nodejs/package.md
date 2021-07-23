# `package`参数解析

[完整参数](https://registry.npmjs.org/npm/latest)

## name

- 说明

项目名字

- 示例

```json
{
 "name": "uvdream",
}
```

## description

- 说明

项目描述

- 示例

```json
{
 "description": "一个简单的项目示例",
}
```

## keywords

- 说明

项目关键字

- 示例

```json
{
"keywords": [
    "vue",
    "components"
  ],
}
```

## homepage

- 说明

项目主页地址

- 示例

```json
{
  "homepage": "http://www.uvdream.cn",
}
```


## bugs

- 说明

项目的问题跟踪器的URL和/或应向其报告问题的电子邮件地址。 这些对于遇到您的包裹问题的人很有帮助。

- 示例

```json
{
"bugs": {
    "url": "https://github.com/xxx/xxxx/issues"
  },
}
```

## license

- 说明

开源协议,让别人知道使用你的库有什么限制条件

- 示例

```json
{
 "license": "MIT"
}
```


## files

- 说明

可选的“`files`”字段是一组文件模式，它描述了当包作为依赖项安装时要包含的条目。如果省略了文件数组，那么除了自动排除的文件之外的所有文件都将包含在发布中。如果你在数组中命名了一个文件夹，那么它也会包含该文件夹中的文件(除非它们会被本节中的另一条规则忽略)。


## main

- 说明

文件主入口

- 场景

平时开发中基本用不到，只有我们在引用或者开发某个依赖包的时候才派上用场。不使用`main`属性的话我们可能需要这样写引用：require("some-module/dist/app.js")，如果我们在main属性中指定了dist/app.js的话，我们就可以直接引用依赖就可以了：require("some-module")


## bin

- 说明

许多包都有一个或多个可执行文件,它们希望将其安装到PATH中.NPM让这变得非常容易(事实上,它使用这个特性来安装“`NPM`”可执行文件).

- 示例

```json
{
  "bin": {
      "myapp": "./cli.js",
        .....
      }
}
```


## man

- 说明

制定一个或通过数组制定一些文件来让linux下的man命令查找文档地址。
如果只有一个文件被指定的话，安装后直接使用man+模块名称，而不管man指定的文件的实际名称

- 示例

```json
{
"man" : [ "./man/foo.1", "./man/bar.1" ]
}
```


## directories

- 说明

`CommonJs`通过`directories`来制定一些方法来描述模块的结构

- 示例

```json
{
"directories": {
"bin": "./bin",
"doc": "./doc",
"lib": "./lib",
"man": "./man"
 },
}
```


### directories.lib

告诉用户模块中`lib`目录在哪，这个配置目前没有任何作用，但是对使用模块的人来说是一个很有用的信息。


### directories.bin

如果你在这里指定了`bin`目录，这个配置下面的文件会被加入到`bin`路径下，如果你已经在`package.json`中配置了`bin`目录，那么这里的配置将不起任何作用。

### directories.man

指定一个目录，目录里边都是`man`文件，这是一种配置`man`文件的语法糖。

### directories.doc

在这个目录里边放一些`markdown`文件，可能最终有一天它们会被友好的展现出来（应该是在`npm`的网站上）

### directories.example

## repository

- 说明

指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助

- 示例

```json
{
 "repository": {
    "type": "git",
    "url": "git@github.com:xx/xxx.git"
  }
}
```


## scripts

- 说明

“`scripts`”属性是一个字典，包含在包生命周期中不同时间运行的脚本命令。关键是生命周期事件，值是此时运行的命令

- 示例

```json
{
"scripts": {
    "bootstrap": "yarn || npm i"
 }
}
```


## config

- 说明

“config”对象可用于设置包脚本中使用的配置参数，这些配置参数跨升级持久存在。例如，如果一个包有以下内容

## dependencies

- 说明

模块中所列举的插件属于生产环境的依赖（程序正常运行需要加载的依赖）

- 场景

例如一些`UI`框架或者一些工具库,开发时候使用,打包也需要使用

- 来源

```js
npm install xxx -save
```


## devDependencies

- 说明

该模块中所列举的插件属于开发环境的依赖

- 场景

例如开发项目时候使用的`webpack`,而在打包环境不需要使用

- 来源

```js
npm install xxx-save-dev
```

## peerDependencies

- 说明

如果你安装我，那么你最好也安装X,Y和Z.

- 场景

> 通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用peerDependencies去声明一下需要依赖的插件和版本，如果出问题npm就会有警告来提醒使用者去解决版本冲突问题

## bundledDependencies

- 说明

发布的时候会被一起打包的模块


## optionalDependencies

- 说明

如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时`npm`继续运行，你可以把这个模块依赖放到`optionalDependencies`配置中。这个配置的写法和`dependencies`的写法一样，不同的是这里边写的模块安装失败不会导致`npm install`失败


## engines

- 说明

你可以指定项目运行的node版本范围

- 示例

```json
{
"engines" : { "node" : ">=0.10.3 <0.12" } 
}
```


## engineStrict

废弃


## os

- 说明

可以指定你的模块只能在哪个操作系统上跑

- 示例

```json
{
"os" : [ "darwin", "linux" ]
}
```


## cpu

- 说明

限制模块只能在某某cpu架构下运行

- 示例

```json
{
"cpu" : [ "x64", "ia32" ]
}
```

也可以黑名单

```json
"cpu" : [ "!arm", "!mips" ]
```

## private

- 说明

如果你在包中设置了"private": true。Json，那么NPM将拒绝发布它。,简言而之就是私有的包


## publishConfig

- 说明

这是一组将在发布时使用的配置值。如果您想要设置标记、注册表或访问权限，它就特别方便，这样您就可以确保给定的包不会被标记为“latest”，不会发布到全局公共注册表中，或者默认情况下一个范围内的模块是私有的。