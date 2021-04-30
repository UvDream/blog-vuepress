# `package`参数解析
{: id="20210430150546-9ydfrgl" updated="20210430153310"}

[完整参数](https://registry.npmjs.org/npm/latest)
{: id="20210430153403-ejy5xnr" updated="20210430173121"}

## name
{: id="20210430153401-rxxa8hy" updated="20210430165955"}

- {: id="20210430171834-zg3eh8o"}说明
  {: id="20210430171834-mqw1xi7" updated="20210430171835"}
{: id="20210430153427-t6gi4bh" updated="20210430171834"}

项目名字
{: id="20210430171836-6pxsbx9" updated="20210430171845"}

- {: id="20210430171924-a7wcozo"}示例
  {: id="20210430171924-3ho04ki" updated="20210430171927"}
{: id="20210430171923-i6cm13p" updated="20210430171924"}

```json
{
 "name": "uvdream",
}
```
{: id="20210430171930-wrc95mg" updated="20210430171932"}

## description
{: id="20210430153432-dhbf3ui" updated="20210430165945"}

- {: id="20210430171848-uxsg2qi"}说明
  {: id="20210430171848-2awmjx8" updated="20210430171850"}
{: id="20210430153515-tc8xwdx" updated="20210430171848"}

项目描述
{: id="20210430171851-a4jop64" updated="20210430171854"}

- {: id="20210430171855-kg74zt7"}示例
  {: id="20210430171855-h4wbarx" updated="20210430171856"}
{: id="20210430171855-bguzkmh" updated="20210430171855"}

```json
{
 "description": "一个简单的项目示例",
}
```
{: id="20210430171858-jxknwlr" updated="20210430171859"}

## keywords
{: id="20210430153510-nvu93nj" updated="20210430165942"}

- {: id="20210430171821-tktxpa7"}说明
  {: id="20210430171821-f6adx04" updated="20210430171824"}
{: id="20210430171819-dfpvozw" updated="20210430171821"}

项目关键字
{: id="20210430171824-kwot3t7" updated="20210430171829"}

- {: id="20210430171804-mm6leq3"}示例
  {: id="20210430171804-b7e9408" updated="20210430171805"}
{: id="20210430153524-jal1ed4" updated="20210430171804"}

```json
{
"keywords": [
    "vue",
    "components"
  ],
}
```
{: id="20210430171806-8ueb8u6" updated="20210430171807"}

## homepage
{: id="20210430153523-6aor8n1" updated="20210430165938"}

- {: id="20210430171711-5d2pfgb"}说明
  {: id="20210430171711-nu8v2je" updated="20210430171714"}
{: id="20210430153539-5ur6min" updated="20210430171711"}

项目主页地址
{: id="20210430171715-daleqjo" updated="20210430171720"}

- {: id="20210430171721-zmbanfd"}示例
  {: id="20210430171721-r6owwb0" updated="20210430171722"}
{: id="20210430171720-yvetrlx" updated="20210430171721"}

```json
{
  "homepage": "http://www.uvdream.cn",
}
```
{: id="20210430171724-9cxahxr" updated="20210430171724"}

{: id="20210430153540-8me5wf6"}

## bugs
{: id="20210430153538-nj9jb4w" updated="20210430165935"}

- {: id="20210430171604-yceakif"}说明
  {: id="20210430171604-fwd8rp2" updated="20210430171611"}
{: id="20210430153549-neruvk9" updated="20210430171604"}

项目的问题跟踪器的URL和/或应向其报告问题的电子邮件地址。 这些对于遇到您的包裹问题的人很有帮助。
{: id="20210430171613-wheww2k"}

- {: id="20210430171617-y85eayl"}示例
  {: id="20210430171617-9946x55" updated="20210430171618"}
{: id="20210430171616-m4n4u42" updated="20210430171617"}

```json
{
"bugs": {
    "url": "https://github.com/xxx/xxxx/issues"
  },
}
```
{: id="20210430171619-i0cxvmi" updated="20210430171632"}

## license
{: id="20210430153549-kb5zmft" updated="20210430165932"}

- {: id="20210430171359-0q03io4"}说明
  {: id="20210430171359-ym0fybl" updated="20210430171401"}
{: id="20210430153608-514tj1l" updated="20210430171359"}

开源协议,让别人知道使用你的库有什么限制条件
{: id="20210430171402-da0u84v" updated="20210430171419"}

- {: id="20210430171422-d44aqk2"}示例
  {: id="20210430171422-y7kwb94" updated="20210430171430"}
{: id="20210430171420-3x5n6nq" updated="20210430171422"}

```json
{
 "license": "MIT"
}
```
{: id="20210430171432-xc3lcd8" updated="20210430171432"}

{: id="20210430153509-f1w0zjq"}

## files
{: id="20210430165540-nnqhttt" updated="20210430165912"}

- {: id="20210430172147-qbw6v9b"}说明
  {: id="20210430172147-fi07ugd" updated="20210430172148"}
{: id="20210430165542-bddxvvm" updated="20210430172147"}

可选的“`files`”字段是一组文件模式，它描述了当包作为依赖项安装时要包含的条目。如果省略了文件数组，那么除了自动排除的文件之外的所有文件都将包含在发布中。如果你在数组中命名了一个文件夹，那么它也会包含该文件夹中的文件(除非它们会被本节中的另一条规则忽略)。
{: id="20210430172150-rotoc7p" updated="20210430172158"}

{: id="20210430165541-qcs47vg"}

## main
{: id="20210430165547-pjfpu6n"}

- {: id="20210430172257-vgxhsho"}说明
  {: id="20210430172257-td7ufw4" updated="20210430172259"}
{: id="20210430165548-dxzyufb" updated="20210430172257"}

文件主入口
{: id="20210430172259-3us2n5c" updated="20210430172303"}

- {: id="20210430172326-434ql28"}场景
  {: id="20210430172326-6qvwyuk" updated="20210430172332"}
{: id="20210430172325-026k3mn" updated="20210430172326"}

平时开发中基本用不到，只有我们在引用或者开发某个依赖包的时候才派上用场。不使用`main`属性的话我们可能需要这样写引用：require("some-module/dist/app.js")，如果我们在main属性中指定了dist/app.js的话，我们就可以直接引用依赖就可以了：require("some-module")
{: id="20210430172332-d01gmhc" updated="20210430172342"}

{: id="20210430165548-s5mpgm3"}

## bin
{: id="20210430165552-9v6x1sh"}

- {: id="20210430171135-jk7szk8"}说明
  {: id="20210430171135-s8csaux" updated="20210430171138"}
{: id="20210430165554-2003vf1" updated="20210430171135"}

许多包都有一个或多个可执行文件,它们希望将其安装到PATH中.NPM让这变得非常容易(事实上,它使用这个特性来安装“`NPM`”可执行文件).
{: id="20210430171139-bwvaf0d" updated="20210430171156"}

- {: id="20210430171204-a6ccckl"}示例
  {: id="20210430171204-sv6ckr5" updated="20210430171206"}
{: id="20210430171200-104q2s3" updated="20210430171204"}

```json
{
  "bin": {
      "myapp": "./cli.js",
        .....
      }
}
```
{: id="20210430171207-u0v07e0" updated="20210430171208"}

{: id="20210430165553-mc5m6wx"}

## man
{: id="20210430165557-zlhcy51"}

- {: id="20210430173546-yje4mif"}说明
  {: id="20210430173546-kn1fooh" updated="20210430173555"}
{: id="20210430165558-gelmutu" updated="20210430173546"}

制定一个或通过数组制定一些文件来让linux下的man命令查找文档地址。
如果只有一个文件被指定的话，安装后直接使用man+模块名称，而不管man指定的文件的实际名称
{: id="20210430173603-2h5ke99"}

- {: id="20210430173619-678fji7"}示例
  {: id="20210430173619-j160qo5" updated="20210430173620"}
{: id="20210430173556-kw2nc2m" updated="20210430173619"}

```json
{
"man" : [ "./man/foo.1", "./man/bar.1" ]
}
```
{: id="20210430173620-fbpdfwa" updated="20210430173621"}

{: id="20210430165558-mtuh658"}

## directories
{: id="20210430165602-jlcscnp"}

- {: id="20210430173229-fz7z63h"}说明
  {: id="20210430173229-gt3cei0" updated="20210430173231"}
{: id="20210430165603-wnqk1rh" updated="20210430173229"}

`CommonJs`通过`directories`来制定一些方法来描述模块的结构
{: id="20210430173233-170twfj" updated="20210430173239"}

- {: id="20210430173337-o6o8gml"}示例
  {: id="20210430173337-x4emdk8" updated="20210430173340"}
{: id="20210430173336-s38ht37" updated="20210430173337"}

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
{: id="20210430173342-vls1f6y" updated="20210430173342"}

{: id="20210430165603-kqyfo3f" updated="20210430173400"}

### directories.lib
{: id="20210430173428-kmawvc7" updated="20210430173434"}

告诉用户模块中`lib`目录在哪，这个配置目前没有任何作用，但是对使用模块的人来说是一个很有用的信息。
{: id="20210430173436-805x4bg" updated="20210430173528"}

{: id="20210430173443-rfjgngc"}

### directories.bin
{: id="20210430173448-siu5smy" updated="20210430173451"}

如果你在这里指定了`bin`目录，这个配置下面的文件会被加入到`bin`路径下，如果你已经在`package.json`中配置了`bin`目录，那么这里的配置将不起任何作用。
{: id="20210430173448-w768h0w" updated="20210430173524"}

### directories.man
{: id="20210430173448-5zfy63m" updated="20210430173453"}

指定一个目录，目录里边都是`man`文件，这是一种配置`man`文件的语法糖。
{: id="20210430173448-cx2alxi" updated="20210430173515"}

### directories.doc
{: id="20210430173448-wzbo9jh" updated="20210430173455"}

在这个目录里边放一些`markdown`文件，可能最终有一天它们会被友好的展现出来（应该是在`npm`的网站上）
{: id="20210430173448-rttm3es" updated="20210430173509"}

### directories.example
{: id="20210430173448-msio47f" updated="20210430173458"}

## repository
{: id="20210430165611-h5b1dsc"}

- {: id="20210430172925-hkhvgce"}说明
  {: id="20210430172925-epjaofl" updated="20210430172927"}
{: id="20210430165612-qlvfdys" updated="20210430172925"}

指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助
{: id="20210430172927-phzvqkw"}

- {: id="20210430172930-yv7gq2t"}示例
  {: id="20210430172930-ad46bav" updated="20210430172931"}
{: id="20210430172929-g9zvb20" updated="20210430172930"}

```json
{
 "repository": {
    "type": "git",
    "url": "git@github.com:xx/xxx.git"
  }
}
```
{: id="20210430172932-zaqonih" updated="20210430172938"}

{: id="20210430165612-1y73nvv"}

## scripts
{: id="20210430165616-6oikg1x"}

- {: id="20210430172510-6ohnom4"}说明
  {: id="20210430172510-p14b31b" updated="20210430172512"}
{: id="20210430165616-u6rrowu" updated="20210430172510"}

“`scripts`”属性是一个字典，包含在包生命周期中不同时间运行的脚本命令。关键是生命周期事件，值是此时运行的命令
{: id="20210430172514-0chjor1" updated="20210430172517"}

- {: id="20210430172522-uacrpne"}示例
  {: id="20210430172522-t990nx4"}
{: id="20210430172519-fpt63c0" updated="20210430172522"}

```json
{
"scripts": {
    "bootstrap": "yarn || npm i"
 }
}
```
{: id="20210430172521-mnpjiwd" updated="20210430172537"}

{: id="20210430165616-qryizz2"}

## config
{: id="20210430165619-38n6ur4"}

- {: id="20210430172633-220um6j"}说明
  {: id="20210430172633-rltrg7p" updated="20210430172637"}
{: id="20210430170951-94th4g9" updated="20210430172633"}

“config”对象可用于设置包脚本中使用的配置参数，这些配置参数跨升级持久存在。例如，如果一个包有以下内容
{: id="20210430172638-om4y5cd"}

## dependencies
{: id="20210430165624-qrd9hre"}

- {: id="20210430170821-wnl68et"}说明
  {: id="20210430170821-5mk5ux0" updated="20210430170951"}
{: id="20210430165620-iwdvqvy" updated="20210430170821"}

模块中所列举的插件属于生产环境的依赖（程序正常运行需要加载的依赖）
{: id="20210430170825-bzyvou9"}

- {: id="20210430170832-6um1btt"}场景
  {: id="20210430170832-ujj8nwy" updated="20210430170835"}
{: id="20210430170831-6s4ufck" updated="20210430170832"}

例如一些`UI`框架或者一些工具库,开发时候使用,打包也需要使用
{: id="20210430170836-oinhl0i" updated="20210430170926"}

- {: id="20210430170931-0fozr3u"}来源
  {: id="20210430170931-x018jui" updated="20210430170933"}
{: id="20210430170929-dcekuzj" updated="20210430170931"}

```js
npm install xxx -save
```
{: id="20210430170935-czmzf2r" updated="20210430170940"}

{: id="20210430165625-0nfu5jj"}

## devDependencies
{: id="20210430165637-w8uno6w"}

- {: id="20210430170628-mljq2ku"}说明
  {: id="20210430170628-c9o17o5" updated="20210430170630"}
{: id="20210430165638-xbwgqv1" updated="20210430170628"}

该模块中所列举的插件属于开发环境的依赖
{: id="20210430170631-qomk6du"}

- {: id="20210430170638-6p6szp1"}场景
  {: id="20210430170638-cd55crb" updated="20210430170644"}
{: id="20210430170638-d4p3sag" updated="20210430170638"}

例如开发项目时候使用的`webpack`,而在打包环境不需要使用
{: id="20210430170645-4dk2xds" updated="20210430170734"}

- {: id="20210430170743-u21bnoy"}来源
  {: id="20210430170743-vag6usr" updated="20210430170752"}
{: id="20210430170742-tpvbevo" updated="20210430170743"}

```js
npm install xxx-save-dev
```
{: id="20210430170753-ob1p67m" updated="20210430170754"}

## peerDependencies
{: id="20210430165642-pe079ge"}

- {: id="20210430170530-ph5d9tn"}说明
  {: id="20210430170530-ywe43do" updated="20210430170539"}
{: id="20210430170528-ee8irf6" updated="20210430170530"}

如果你安装我，那么你最好也安装X,Y和Z.
{: id="20210430165644-rk24lqn" updated="20210430170528"}

- {: id="20210430170523-4h5yt0h"}场景
  {: id="20210430170523-mi0xeok" updated="20210430170525"}
{: id="20210430170522-hv7qym0" updated="20210430170523"}

> 通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用peerDependencies去声明一下需要依赖的插件和版本，如果出问题npm就会有警告来提醒使用者去解决版本冲突问题
> {: id="20210430170407-ragxaom" updated="20210430170425"}
{: id="20210430165643-i87uxf5" updated="20210430170405"}

## bundledDependencies
{: id="20210430165647-zwg8gv1"}

- {: id="20210430173704-9ipxaww"}说明
  {: id="20210430173704-45yym61" updated="20210430173707"}
{: id="20210430165648-vnlbgd5" updated="20210430173704"}

发布的时候会被一起打包的模块
{: id="20210430173708-mg022tr" updated="20210430173711"}

{: id="20210430165647-w8xdeoa"}

## optionalDependencies
{: id="20210430165651-gyar10r"}

- {: id="20210430173734-w068l9p"}说明
  {: id="20210430173734-k7hmz9a" updated="20210430173736"}
{: id="20210430165656-i0hx41q" updated="20210430173734"}

如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时`npm`继续运行，你可以把这个模块依赖放到`optionalDependencies`配置中。这个配置的写法和`dependencies`的写法一样，不同的是这里边写的模块安装失败不会导致`npm install`失败
{: id="20210430173737-jb1blax" updated="20210430173748"}

{: id="20210430165655-pjrfgdo"}

## engines
{: id="20210430165657-2o3kojv"}

- {: id="20210430173801-thvh6eu"}说明
  {: id="20210430173801-k2bunj6" updated="20210430173802"}
{: id="20210430165658-oezyeht" updated="20210430173801"}

你可以指定项目运行的node版本范围
{: id="20210430173804-ipd9pbd"}

- {: id="20210430173806-8vw26f7"}示例
  {: id="20210430173806-oufyplu" updated="20210430173807"}
{: id="20210430173805-15tozu7" updated="20210430173806"}

```json
{
"engines" : { "node" : ">=0.10.3 <0.12" } 
}
```
{: id="20210430173808-1gzgqol" updated="20210430173809"}

{: id="20210430165658-aj38k1u"}

## engineStrict
{: id="20210430165701-nrjz3it"}

废弃
{: id="20210430173825-ek1v0fx" updated="20210430173836"}

{: id="20210430165701-lrkfh4a"}

## os
{: id="20210430165706-h4byywu"}

- {: id="20210430173842-05vkx9f"}说明
  {: id="20210430173842-am40uby" updated="20210430173843"}
{: id="20210430165706-ervz65o" updated="20210430173842"}

可以指定你的模块只能在哪个操作系统上跑
{: id="20210430173844-gwfw6r8"}

- {: id="20210430173850-9rpcqi2"}示例
  {: id="20210430173850-x1i8d4z" updated="20210430173851"}
{: id="20210430173849-02118y5" updated="20210430173850"}

```json
{
"os" : [ "darwin", "linux" ]
}
```
{: id="20210430173852-kqiuhv6" updated="20210430173857"}

{: id="20210430165706-gyay30e"}

## cpu
{: id="20210430165710-pkn3lz5"}

- {: id="20210430173912-lnspfid"}说明
  {: id="20210430173912-xx93cjd" updated="20210430173913"}
{: id="20210430165710-cjbpf2q" updated="20210430173912"}

限制模块只能在某某cpu架构下运行
{: id="20210430173914-m8e1jek"}

- {: id="20210430173916-1tfq0p5"}示例
  {: id="20210430173916-htjtunb" updated="20210430173917"}
{: id="20210430173915-2em3gfp" updated="20210430173916"}

```json
{
"cpu" : [ "x64", "ia32" ]
}
```
{: id="20210430173919-jukxwxr" updated="20210430173919"}

也可以黑名单
{: id="20210430165710-os8c0w9" updated="20210430173944"}

```json
"cpu" : [ "!arm", "!mips" ]
```
{: id="20210430173944-wj4dt45" updated="20210430173948"}

## private
{: id="20210430165845-qcuboyr"}

- {: id="20210430172654-crduz6z"}说明
  {: id="20210430172654-2yo1oiy" updated="20210430172657"}
{: id="20210430165846-vfmpldj" updated="20210430172654"}

如果你在包中设置了"private": true。Json，那么NPM将拒绝发布它。,简言而之就是私有的包
{: id="20210430172658-8e7dcml" updated="20210430172738"}

{: id="20210430165846-8j2l1b8"}

## publishConfig
{: id="20210430165850-8wvy71j"}

- {: id="20210430172844-fyo1kki"}说明
  {: id="20210430172844-dgx23ae" updated="20210430172845"}
{: id="20210430165851-brnt7su" updated="20210430172844"}

这是一组将在发布时使用的配置值。如果您想要设置标记、注册表或访问权限，它就特别方便，这样您就可以确保给定的包不会被标记为“latest”，不会发布到全局公共注册表中，或者默认情况下一个范围内的模块是私有的。
{: id="20210430172846-yffukz3"}

{: id="20210430165851-o5551z3"}


{: id="20210430150546-7s13pyw" type="doc"}