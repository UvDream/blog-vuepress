
Vue

    |—  build  打包相关的配置文件，其中最重要的是config.js。主要是根据不同的入口，打包为不同的文件。

    |—  dist 打包之后文件所在位置

    |—  examples 部分示例

    |—  flow 因为Vue使用了[Flow](https://flow.org/)来进行静态类型检查，这里定义了声明了一些静态类型

    |—  packages vue还可以分别生成其它的npm包

    |—  src 主要源码所在位置

        |— compiler  //编译相关,包含所有编译相关的代码,包括把模板解析成ast语法树,ast语法树优化,代码生成等功能,编译的工作可以再构建时做(借助webpack,vue-loader等辅助插件),也可以在运行时做,使用包含构建功能的Vue.js

            |—codegen 根据ast生成render函数

            |—directives 通用生成render函数之前需要处理的指令

            |—parser 模板解析

        |—  core //核心代码,包括内置组件,全局API封装,Vue实例化,观察者,虚拟DOM,工具函数等等

            |— components 全局的组件，这里只有keep-alive

            |— global-api 全局方法，也就是添加在Vue对象上的方法，比如Vue.use,Vue.extend,,Vue.mixin等

            |— instance 实例相关内容，包括实例方法，生命周期，事件等

            |— observer 双向数据绑定相关文件

            |— util 工具方法

            |— vdom 虚拟dom相关

        |— entries 入口文件，也就是build文件夹下config.js中配置的入口文件。看源码可以从这里看起

        |— platforms //不同平台支持

            |— web web端独有文件

                |— compiler 编译阶段需要处理的指令和模块

                |— runtime 运行阶段需要处理的组件、指令和模块

                |— server 服务端渲染相关

                |— util 工具库

            |— weex weex端独有文件

        |— server //服务端渲染,这部分代码跑在Nodejs

        |— sfc  //.vue文件解析,解析成JavaScript的对象

            |— parser.js 包含了单文件 Vue 组件 (*.vue) 的解析逻辑。在 vue-template-compiler 包中被使用。

        |—  shared //共享代码,定义的工具方法,这里定义的工具方法都是被浏览器端Vuejs和服务端Vue.js所共享

    |—  test 测试用例
