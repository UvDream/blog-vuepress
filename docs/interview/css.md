# Css
## 盒模型
盒模型基本成了面试必问的问题，有W3C的盒模型和IE浏览器下的盒模型，盒模型从外到里包括：margin、border、padding、content。
:::tip
(1)W3C盒模型的宽度 = content的宽度

(2)IE盒模型的宽度 = border+padding+content的宽度
:::

## CSS 的选择符种类
- 标签选择器（如：body,div,p,ul,li）
- 类选择器（如：class=”head”,class=”head_logo”）
- ID选择器（如：id=”name”,id=”name_txt”）
- 全局选择器（如：*号）
- 组合选择器（如：.head .head_logo,注意两选择器用空格键分开）
- 继承选择器（如：div p,注意两选择器用空格键分开）
- 伪类选择器（如：就是链接样式,a元素的伪类，4种不同的状态：link、visited、active、hover。）
- 字符串匹配的属性选择符(^ $ *三种，分别对应开始、结尾、包含)
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
