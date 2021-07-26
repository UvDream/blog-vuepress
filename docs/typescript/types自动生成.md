<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-26 16:49:47
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-26 16:58:38
 * @Description:自动生成type.d.ts
 * @Email: UvDream@163.com
-->

# 自动生成类型申明文件

![示例](https://pic.baixiongz.com/uploads/2021/07/26/4824c2b5f92b1.png)
上面的.d.ts 文件是如何生成的呢,一般都不是自己写的,当然也可以自己写

# 配置`tsconfig.json`

```sh
    "declaration": true,
    "declarationDir": "dist",
    "typeRoots": ["./src"]
```

这样配置完就会自动生辰个生命文件,这样 ts 引用就不会报错了!

# 其它方式

- 手写声明文件
- 采用插件生成
  - 为整个包添加声明文件
  ```sh
  npm install -g dts-gen   // 先全局安装dts-gen
  npm install -g yargs     // 然后在全局安装你需要生产声明文件的库
  dts-gen -m yargs         // 执行命令生成文件
  ```
  在你执行目录下就会生成`yargs.d.ts`
  - 为单个文件生成声明文件
  ```sh
   npm i dtsmake -g   // 先全局安装dtsmake
   dtsmake -s ./path/to/sourcefile.js  // 在对应的文件生产文件
  ```
  > 不推荐,可能生成的文件有点问题,而且会可能缺包
