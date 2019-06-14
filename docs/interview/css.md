# Css
## px，em，rem、vw、vh
1.px (pixel，像素)：  

   是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，在扫描打印时一般都有DPI可选.Windows系统默认是96dpi，Apple系统默认是72dpi.

2.em(相对长度单位，相对于当前对象内文本的字体尺寸)：       
    是一个相对长度单位，最初是指字母M的宽度，故名em.现指的是字符宽度的倍数，用法类似百分比，如：0.8em, 1.2em,2em等.通常1em=16px.

3.rem(root em，根em):   
    
    rem是一个相对单位，1rem等于html元素上字体设置的大小.我们只要设置html上font-size的大小，就可以改变rem所代表的大小.这样我们就有了一个可控的统一参考系.我们现在有两个目标：rem单位所代表的尺寸大小和屏幕宽度成正比，也就是设置html元素的font-size和屏幕宽度成正比rem单位和px单位很容易进行换算，方便我们按照标注稿写cssrem与em的区别：rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小em最多取到小数点的后三位

4.vw、vh：css3中引入了一个新的单位vw/vh，与视图窗口有关，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位.各个单位具体的含义如下：

| 单位 | 含义 | 
| ------ | ------ | 
|vw|相对于视窗的宽度，视窗宽度是100vw|
|vh|相对于视窗的高度，视窗高度是100vh|
|vmin|vw和vh中的较小值|
|vmax|vw和vh中的较大值|

## CSS优先级算法
- 元素选择符： 1
- class选择符： 10
- id选择符：100
- 元素标签：1000

!important声明的样式优先级最高，如果冲突再进行计算.

如果优先级相同，则选择最后出现的样式.

继承得到的样式的优先级最低.

## CSS3新增伪类有那些?
- p:first-of-type 选择属于其父元素的首个元素
- p:last-of-type 选择属于其父元素的最后元素
- p:only-of-type 选择属于其父元素唯一的元素
- p:only-child 选择属于其父元素的唯一子元素
- p:nth-child(2) 选择属于其父元素的第二个子元素
- :enabled :disabled 表单控件的禁用状态.
- :checked 单选框或复选框被选中.

## CSS3新特性
- RGBA和透明度
- background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
- word-wrap（对长的不可分割单词换行）word-wrap：break-word
- 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
- font-face属性：定义自己的字体
- 圆角（边框半径）：border-radius 属性用于创建圆角
- 边框图片：border-image: url(border.png) 30 30 round盒阴影：box-shadow: 10px 10px 5px #888888
- 媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性

## CSS优化、提高性能的方法有哪些？
- 避免过度约束
- 避免后代选择符
- 避免链式选择符
- 使用紧凑的语法
- 避免不必要的命名空间
- 避免不必要的重复
- 最好使用表示语义的名字.一个好的类名应该是描述他是什么而不是像
- 避免！important，可以选择其他选择器
- 尽可能的精简规则，你可以合并不同类里的重复规则

## CSS优化、提高性能的方法有哪些？
- 避免过度约束

- 避免后代选择符

- 避免链式选择符

- 使用紧凑的语法

- 避免不必要的命名空间

- 避免不必要的重复

- 最好使用表示语义的名字.一个好的类名应该是描述他是什么而不是像什么

- 避免！important，可以选择其他选择器

- 尽可能的精简规则，你可以合并不同类里的重复规则
### ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
- 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素.

- ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素.并不存在于dom之中，只存在在页面之中.

:before 和 :after 这两个伪元素，是在CSS2.1里新出现的.起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after
### 怎么让Chrome支持小于12px 的文字？
```angular2
p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
```
### 让页面里的字体变清晰，变细用CSS怎么做？
-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑.

### position:fixed;在android下无效怎么处理？
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```

### png、jpg、gif 这些图片格式解释一下，分别什么时候用.有没有了解过webp？
- png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好. 大多数地方都可以用.

- jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错.在www上，被用来储存和传输照片的格式.

- gif是一种位图文件格式，以8位色重现真色彩的图像.可以实现动画效果.

- webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%.缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持.

### style标签写在body后与body前有什么区别？
页面加载自上而下 当然是先加载样式.
写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）

 <Vssue title="interview-css" />
