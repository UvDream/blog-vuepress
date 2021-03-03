# Css基础

## 盒模型

盒模型基本成了面试必问的问题,有 `W3C `的盒模型和`IE`浏览器下的盒模型,盒模型从外到里包括：`margin、border、padding、content`.

(1)`W3C` 盒模型的宽度 = `content `的宽度

(2)`IE` 盒模型的宽度 =` border+padding+content` 的宽度


![盒模型](https://gitee.com/Uvdream/images/raw/master/images/20210203094754.png)

## CSS 的选择符种类

- 标签选择器（如：`body,div,p,ul,li`）
- 类选择器（如：`class=”head”,class=”head_logo”`）
- ID 选择器（如：`id=”name”,id=”name_txt”`）
- 全局选择器（如：`*`号）
- 组合选择器（如：`.head .head_logo`,注意两选择器用空格键分开）
- 继承选择器（如：`div p`,注意两选择器用空格键分开）
- 伪类选择器（如：就是链接样式,`a`元素的伪类,4 种不同的状态：`link、visited、active、hover`.）
- 字符串匹配的属性选择符(`^ $ *`三种,分别对应开始、结尾、包含)

## CSS 优先级算法

- 元素选择符： 1
- `class `选择符： 10
- `id` 选择符：100
- 元素标签：1000

`!important`声明的样式优先级最高,如果冲突再进行计算.

如果优先级相同,则选择最后出现的样式.

继承得到的样式的优先级最低.
> 权重

　》内联样式 

　　》ID选择器(#id)

　　》类选择器(.class) = 伪类选择器(:hover等) = 属性选择器[type等] 

　　》元素选择器(p等) = 伪元素选择器(:after/:before/::selection等) 

　　》通用选择器(*) 

　　》继承的样式

## CSS3 新增伪类有那些?

- `p:first-of-type` 选择属于其父元素的首个元素
- `p:last-of-type` 选择属于其父元素的最后元素
- `p:only-of-type` 选择属于其父元素唯一的元素
- `p:only-child` 选择属于其父元素的唯一子元素
- `p:nth-child(2)` 选择属于其父元素的第二个子元素
- `:enabled :disabled` 表单控件的禁用状态.
- `:checked`单选框或复选框被选中.

## CSS3 新特性

- `RGBA`和透明度
- `background-image background-origin(content-box/padding-box/border-box) background-size background-repeat`
- `word-wrap`（对长的不可分割单词换行）`word-wrap：break-word`
- 文字阴影：`text-shadow： 5px 5px 5px #FF0000;`（水平阴影,垂直阴影,模糊距离,阴影颜色）
- `font-face`属性：定义自己的字体
- 圆角（边框半径）：`border-radius` 属性用于创建圆角
- 边框图片：`border-image: url(border.png) 30 30` round 盒阴影：`box-shadow: 10px 10px 5px #888888`
- 媒体查询：定义两套`css`,当浏览器的尺寸变化时会采用不同的属性

- 

## ::before 和 :after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用

- 单冒号(:)用于 `CSS3 `伪类,双冒号(::)用于 `CSS3 `伪元素.

- `::before`就是以一个子元素的存在,定义在元素主体内容之前的一个伪元素.并不存在于` dom` 之中,只存在在页面之中.

`:before` 和 `:after` 这两个伪元素,是在 CSS2.1 里新出现的.起初,伪元素的前缀使用的是单冒号语法,但随着 `Web `的进化,在 `CSS3 `的规范里,伪元素的语法被修改成使用双冒号,成为`::before ::after`

## 怎么让 Chrome 支持小于 12px 的文字？

```css
p {
  font-size: 10px;
  -webkit-transform: scale(0.8);
} //0.8是缩放比例
```

## 让页面里的字体变清晰,变细用 CSS 怎么做？

`-webkit-font-smoothing`在`window`系统下没有起作用,但是在 `IOS` 设备上起作用`-webkit-font-smoothing：antialiased`是最佳的,灰度平滑.

## position:fixed;在 `android` 下无效怎么处理？

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
/>
```

## png、jpg、gif 这些图片格式解释一下,分别什么时候用.有没有了解过 webp？

- `png`是便携式网络图片（`Portable Network Graphics`）是一种无损数据压缩位图文件格式.优点是：压缩比高,色彩好. 大多数地方都可以用.

- `jpg`是一种针对相片使用的一种失真压缩方法,是一种破坏性的压缩,在色调及颜色平滑变化做的不错.在`www`上,被用来储存和传输照片的格式.

- `gif`是一种位图文件格式,以 8 位色重现真色彩的图像.可以实现动画效果.

- `webp`格式是谷歌在 2010 年推出的图片格式,压缩率只有`jpg`的 2/3,大小比`png`小了`45%`.缺点是压缩的时间更久了,兼容性不好,目前谷歌和 opera 支持.

## style 标签写在 `body` 后与 `body` 前有什么区别？

页面加载自上而下 当然是先加载样式.
写在`body`标签后由于浏览器以逐行方式对`HTML`文档进行解析,当解析到写在尾部的样式表（外联或写在`style`标签）会导致浏览器停止之前的渲染,等待加载且解析样式表完成之后重新渲染,在`windows`的`IE`下可能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）

## css 中隐藏元素的方法

- dispaly:none
- visibility:hidden
- z-index:-1
- opactiy:0
- position:absolute

# css深入

## CSS 优化、提高性能的方法有哪些？

- 避免过度约束
- 避免后代选择符
- 避免链式选择符
- 使用紧凑的语法
- 避免不必要的命名空间
- 避免不必要的重复
- 最好使用表示语义的名字.一个好的类名应该是描述他是什么而不是像
- 避免`！important`,可以选择其他选择器
- 尽可能的精简规则,你可以合并不同类里的重复规则

## css 如何实现左侧固定300px，右侧自适应的布局

```
<div class="main">
	<div class="left"></div>
	<div class="content"></div>
</div>

.main {
  display: flex;
}

.left {
  flex-basis: 300px;
}

.content {
  flex-grow: 1;
}
```

## 如何实现左右固定，中间自适应布局

```
<div class="main">
	<div class="left"></div>
	<div class="content"></div>
	<div class="right"></div>
</div>

.main {
  display: flex;
}

.left {
  flex-basis: 300px;
  flex-shrink: 0;
}

.right {
  flex-basis: 300px;
  flex-shrink: 0;
}

.content {
  flex-grow: 1;
}
```



 ## `css` `variable`

css变量减少样式重复定义，比如同一个颜色值要在多个地方重复使用，以前通过less和sass预处理做到，现在css变量也可以做到，方便维护，提高可读性

> 最重要的可以实现暗黑模式切换(主题切换)

## `css`` specificity`

`css specificity` 即 css 中关于选择器的权重，以下三种类型的选择器依次下降

1. `id` 选择器，如 `#app`
2. `class`、`attribute` 与 `pseudo-classes` 选择器，如 `.header`、`[type="radio"]` 与 `:hover`
3. `type` 标签选择器和伪元素选择器，如 `h1`、`p` 和 `::before`

其中通配符选择器 `*`，组合选择器 `+ ~ >`，否定伪类选择器 `:not()` 对优先级无影响

另有内联样式 `<div class="foo" style="color: red;"></div>` 及 `!important`(最高) 具有更高的权重

##  '+' 与 '~' 选择器有什么不同

- `+` 选择器匹配紧邻的兄弟元素
- `~` 选择器匹配随后的所有兄弟元素

## 伪类与伪元素有什么区别

1. 伪类使用单冒号，而伪元素使用双冒号。如 `:hover` 是伪类，`::before` 是伪元素
2. 伪元素会在文档流生成一个新的元素，并且可以使用 `content` 属性设置内容









<Vssue title="interview-css" />