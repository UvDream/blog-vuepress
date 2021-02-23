# Javascript

## 前端安全,理解 xss 和 csrf

<details>
<summary>答案</summary>
XSS：跨站脚本攻击

它允许用户将恶意代码植入到提供给其他用户使用的页面中,可以简单的理解为一种 javascript 代码注入.

XSS 的防御措施：

- 1.过滤转义输入输出
- 2.避免使用 eval、new Function 等执行字符串的方法,除非确定字符串和用户输入无关
- 3.使用 cookie 的 httpOnly 属性,加上了这个属性的 cookie 字段,js 是无法进行读写的
- 4.使用 innerHTML、document.write 的时候,如果数据是用户输入的,那么需要对象关键字符进行过滤与转义

CSRF：跨站请求伪造

其实就是网站中的一些提交行为,被黑客利用,在你访问黑客的网站的时候进行操作,会被操作到其他网站上;

CSRF 防御措施：

- 1.检测 http referer 是否是同域名
- 2.避免登录的 session 长时间存储在客户端中
- 3.关键请求使用验证码或者 token 机制

其他的一些攻击方法还有 HTTP 劫持、界面操作劫持

</details>

## 数组快速排序

<details>
<summary>答案</summary>
<pre><code>
function quickSort(arr) {
  //如果数组<=1,则直接返回
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  //找基准,并把基准从原数组删除
  var pivot = arr.splice(pivotIndex, 1)[0];
  //定义左右数组
  var left = [];
  var right = [];

//比基准小的放在 left,比基准大的放在 right
for (var i = 0; i < arr.length; i++) {
if (arr[i] <= pivot) {
left.push(arr[i]);
} else {
right.push(arr[i]);
}
}
//递归
return quickSort(left).concat([pivot], quickSort(right));
}

</pre></code></details>

## cookie,sessionStorage 和 localStorage 的区别

<details>
<summary>答案</summary>
- cookie在浏览器和服务器间来回传递. sessionStorage和localStorage不会
- sessionStorage和localStorage的存储空间更大；
- sessionStorage和localStorage有更多丰富易用的接口；
- sessionStorage和localStorage各自独立的存储空间；
- sessionStorage：仅在当前浏览器窗口关闭前有效,自然也就不可能持久保持；
- localStorage：始终有效,窗口或浏览器关闭也一直保存,因此用作持久数据
</details>

## javascript 中= =和= = =的区别

<details>
<summary>答案</summary>

一言以蔽之：==先转换类型再比较,===先判断类型,如果不是同一类型直接为 false.

===表示恒等于,比较的两边要绝对的相同

<pre>
<code>
alert(0 == ""); // true

alert(0 == false); // true

alert("" == false); // true

alert(0 === ""); // false

alert(0 === false); // false

alert("" === false); // false
</code>
</pre>

先说 ===,这个比较简单,具体比较规则如下：

1、如果类型不同,就[不相等]

2、如果两个都是数值,并且是同一个值,那么[相等]；(！例外)的是,如果其中至少一个是 NaN,那么[不相等].（判断一个值是否是 NaN,只能用 isNaN()来判断）

3、如果两个都是字符串,每个位置的字符都一样,那么[相等]；否则[不相等].

4、如果两个值都是 true,或者都是 false,那么[相等].

5、如果两个值都引用同一个对象或函数,那么[相等]；否则[不相等].

6、如果两个值都是 null,或者都是 undefined,那么[相等].

再说 ==,具体比较规则如下：

1、如果两个值类型相同,进行 === 比较,比较规则同上

2、如果两个值类型不同,他们可能相等.根据下面规则进行类型转换再比较：

a、如果一个是 null、一个是 undefined,那么[相等].

b、如果一个是字符串,一个是数值,把字符串转换成数值再进行比较.

c、如果任一值是 true,把它转换成 1 再比较；如果任一值是 false,把它转换成 0 再比较.

d、如果一个是对象,另一个是数值或字符串,把对象转换成基础类型的值再比较.对象转换成基础类型,利用它的 toString 或者 valueOf 方法.js 核心内置类,会尝试 valueOf 先于 toString；例外的是 Date,Date 利用的是 toString 转换.非 js 核心的对象,令说（比较麻烦,我也不大懂）

e、任何其他组合（array 数组等）,都[不相等].

</details>

## 闭包

<details>
<summary>答案</summary>

闭包是指在 JavaScript 中,内部函数总是可以访问其所在的外部函数中声明的参数和变量,即使在其外部函数被返回了之后.然后闭包可以把一个局部变量传递到外部供其他函数或是变量使用,也可以把一个变量长时间的保留在系统的内存中

换句话来说函数 A 内部有一个函数 B,函数 B 可以访问到函数 A 中的变量,那么函数 B 就是闭包..

简单的说就是提升作用域

闭包的缺点：

1. 更多的内存消耗
2. 性能问题（跨作用域访问）
3. 滥用闭包函数会造成内存泄露,因为闭包中引用到的包裹函数中定义的变量都永远不会被释放,所以我们应该在必要的时候,及时释放这个闭包函数

闭包优点:

1. JavaScript 允许你使用在当前函数以外定义的变量
2. 即使外部函数已经返回,当前函数仍然可以引用在外部函数所定义的变量
3. 闭包可以更新外部变量的值
4. 用闭包模拟私有方法
   </details>

## 哪些操作会导致内存泄漏

<details>
<summary>答案</summary>

1. setTimeout 的第一个参数使用字符串而非函数的话,会引发内存泄漏.
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时,就会产生一个循环）

- 意外的全局变量: 无法被回收
- 定时器: 未被正确关闭,导致所引用的外部变量无法被释放
- 事件监听: 没有正确销毁 (低版本浏览器可能出现)
- 闭包: 会导致父级中的变量无法被释放
- dom 引用: dom 元素被删除时,内存中的引用未被正确清空

可用 chrome 中的 timeline 进行内存标记,可视化查看内存的变化情况,找出异常点.

</details>

## 面向对象过程的三大基本特征

<details>
<summary>答案</summary>
继承,多态,封装
</details>

## 如何判断一个变量是对象还是数组

<details>
<summary>答案</summary>
<pre><code>
prototype.toString.call(),
  这个方法兼容性最好,
  千万不要使用typeof,
  都会返回object;
</code></pre>
</details>

## ES5 和 ES6 中继承有啥区别

<details>
<summary>答案</summary>
ES5 的继承时通过 prototype 或构造函数机制来实现.ES5 的继承实质上是先创建子类的实例对象,然后再将父类的方法添加到 this 上（Parent.apply(this)）.

ES6 的继承机制完全不同,实质上是先创建父类的实例对象 this（所以必须先调用父类的 super()方法）,然后再用子类的构造函数修改 this.

具体的：ES6 通过 class 关键字定义类,里面有构造方法,类之间通过 extends 关键字实现继承.子类必须在 constructor 方法中调用 super 方法,否则新建实例报错.因为子类没有自己的 this 对象,而是继承了父类的 this 对象,然后对其进行加工.如果不调用 super 方法,子类得不到 this 对象

</details>

## 值类型和引用类型的区别

<details>
<summary>答案</summary>

（1）值类型：

1.占用空间固定,保存在栈中（当一个方法执行时,每个方法都会建立自己的内存栈,在这个方法内定义的变量将会逐个放入这块栈内存里,随着方法的执行结束,这个方法的内存栈也将自然销毁了.因此,所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量,基础变量的值是存储在栈中,而引用变量存储在栈中的是指向堆中的数组或者对象的地址,这就是为何修改引用类型总会影响到其他指向这个地址的引用变量）

2.保存与复制的是值本身

3.保存与复制的是值本身

4.使用 typeof 检测数据的类型

5.基本类型数据是值类型

（2）引用类型：

1.占用空间不固定,保存在堆中（当我们在程序中创建一个对象时,这个对象将被保存到运行时数据区中,以便反复利用（因为对象的创建成本通常较大）,这个运行时数据区就是堆内存.堆内存中的对象不会随方法的结束而销毁,即使方法结束后,这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见）,则这个对象依然不会被销毁,只有当一个对象没有任何引用变量引用它时,系统的垃圾回收机制才会在核实的时候回收它.）

2.保存与复制的是指向对象的一个指针

3.使用 instanceof 检测数据类型

4.使用 new()方法构造出的对象是引用型

</details>

## 前端如何对页面性能进行优化

<details>
<summary>答案</summary>

1.减少 http 请求

2.减少 http 请求大小

3.将 CSS 或 JavaScript 放到外部文件中,避免使用 `<style>`或者`<script>`标签直接引入（根据实际文件大小和业务场景来选择)

4.避免页面空的 href 和 src

5.为 HTML 指定 Cache-Control 或 Expires

6.合理设置 Etag 和 Last-Modified

7.减少页面重定向

8.使用静态资源分域存放来增加下载并行数

9.使用静态资源 CDN 来存储文件

10.使用 CDN Combo 下载传输内容

11.使用可缓存的 AJAX

12.使用 GET 来完成 AJAX 请求

13.减少 Cookie 的大小并进行 Cookie 隔离

14.缩小 favicon.ico 并缓存

15.推荐使用异步 JavaScript 资源

16.消除阻塞渲染的 CSS 及 JavaScript

17.避免使用 CSSimport 引用加载 CSS

</details>

## 使用 typeof bar ===“object”来确定 bar,是否是一个对象时有什么潜在的缺陷？这个陷阱如何避免？

<details>
<summary>答案</summary>
<pre><code>
如果bar的值为null的话,这样的话判断依旧成立,故错误
1.bar是个函数
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
2.bar是个数组
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

ES5
console.log(Array.isArray(bar));
</code></pre>

</details>

## 什么是 NaN

<details>
<summary>答案</summary>
<pre><code>
Number.isNaN();
</code></pre>
</details>

## 原型/构造函数/实例

<details>
<summary>答案</summary>

- 原型(prototype): 一个简单的对象,用于实现对象的 属性继承.可以简单的理解成对象的爹.在 Firefox 和 Chrome 中,每个 JavaScript 对象中都包含一个`__proto__` (非标准)的属性指向它爹(该对象的原型),可 obj.`__proto__`进行访问.
- 构造函数: 可以通过 new 来 新建一个对象 的函数.
- 实例: 通过构造函数和 new 创建出来的对象,便是实例. 实例通过`__proto__`指向原型,通过 constructor 指向构造函数.

<pre><code>

//实例
const dog = new Object();
</code></pre>

则此时, dog, 构造函数为 Object,我们知道,构造函数拥有一个 prototype 的属性指向原型,因此原型为:

<pre><code>
//原型
const prototype = Object.prototype;
</code></pre>

这里我们可以看出关系

<pre><code>

实例.__proto__ === 原型;

原型.constructor === 构造函数;

构造函数.prototype === 原型;

实例.constructorr === 构造函数;
</code></pre>

![image](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9b940c4c6f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

</details>

## 原型链

<details>
<summary>答案</summary>

原型链是由原型对象组成,每个对象都有 `__proto__` 属性,指向了创建该对象的构造函数的原型, `__proto__` 将对象连接起来组成了原型链.是一个用来实现继承和共享属性的有限的对象链.

- 属性查找机制: 当查找对象的属性时,如果实例对象自身不存在该属性,则沿着原型链往上一级查找,找到时则输出,不存在时,则继续沿着原型链往上一级查找,直至最顶级的原型对象 Object.prototype,如还是没找到,则输出 undefined；
- 属性修改机制: 只会修改实例对象本身的属性,如果不存在,则进行添加该属性,如果需要修改原型的属性时,则可以用: b.prototype.x = 2；但是这样会造成所有继承于该对象的实例的属性发生改变.
  </details>

## 数组

<details>
<summary>答案</summary>
- map: 遍历数组,返回回调返回值组成的新数组
- forEach: 无法 break,可以用 try/catch 中 throw new Error 来停止
- filter: 过滤
- some: 有一项返回 true,则整体为 true
- every: 有一项返回 false,则整体为 false
- join: 通过指定连接符生成字符串
- push / pop: 末尾推入和弹出,改变原数组, 返回推入/弹出项
- unshift / shift: 头部推入和弹出,改变原数组,返回操作项
- sort(fn) / reverse: 排序与反转,改变原数组
- concat: 连接数组,不影响原数组, 浅拷贝
- slice(start, end): 返回截断后的新数组,不改变原数组
- splice(start, number, value...): 返回删除元素组成的数组,value 为插入项,改变原数组
- indexOf / lastIndexOf(value, fromIndex): 查找数组项,返回对应的下标
- reduce / reduceRight(fn(prev, cur), defaultPrev): 两两执行,prev 为上次化简函数的 return 值,cur 为当前值(从第二项开始)
- 数组乱序：

<pre><code>

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function() {
  return Math.random() - 0.5;
});
</code></pre>

- 数组拆解: flat: [1,[2,3]] --> [1, 2, 3]

<pre><code>

arr.prototype.flat = function() {
  this.toString()
    .split(",")
    .map((item) => +item);
};
</code></pre>
</details>

## 从输入 url 到展示

<details>
<summary>答案</summary>
- DNS 解析
- TCP 三次握手
- 发送请求,分析 url,设置请求报文(头,主体)
- 服务器返回请求的文件 (html)
- 浏览器渲染

- HTML parser --> DOM Tree
  - 标记化算法,进行元素状态的标记
  - dom 树构建
- CSS parser --> Style Tree
  - 解析 css 代码,生成样式树
- attachment --> Render Tree
  - 结合 dom 树 与 style 树,生成渲染树
- layout: 布局
- GPU painting: 像素绘制页面
  </details>

## promise

<details>
<summary>答案</summary>
Promise 是异步编程的一种解决方案,比传统的解决方案——回调函数和事件——更合理和更强大.
Promise 对象有以下两个特点.

- （1）对象的状态不受外界影响.Promise 对象代表一个异步操作,有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）.只有异步操作的结果,可以决定当前是哪一种状态,任何其他操作都无法改变这个状态.这也是 Promise 这个名字的由来,它的英语意思就是“承诺”,表示其他手段无法改变.

- （2）一旦状态改变,就不会再变,任何时候都可以得到这个结果.Promise 对象的状态改变,只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected.只要这两种情况发生,状态就凝固了,不会再变了,会一直保持这个结果,这时就称为 resolved（已定型）.如果改变已经发生了,你再对 Promise 对象添加回调函数,也会立即得到这个结果.这与事件（Event）完全不同,事件的特点是,如果你错过了它,再去监听,是得不到结果的.
- 简单例子

<pre><code>
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

timeout(100).then((value) => {
  console.log(value);
});
</code></pre>
</details>

## For of 和 for (let i = 0; i < ...) 哪种写法性能更高？为什么？

<details>
<summary>答案</summary>
for > for-of > for-in
`for-in`循环除了遍历数组元素以外,还会遍历自定义属性。
`for-of`循环不会循环对象的`key`，只会循环出数组的`value`，因此`for-of`不能循环遍历普通对象。
`for-of`和`for-in`的`key`是`String`类型，有转换过程，开销比较大，但是`for`循环的i是`Number`类型，开销较小。
不过`for-of`语法在内存占用上也有一定的优势。
</details>

## 函数柯里化

<details>
<summary>答案</summary>
柯里化是函数式编程的一个重要技巧,将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
函数式编程另一个重要的函数 compose,能够将函数进行组合,而组合的函数只接受一个参数,所以如果有接受多个函数的需求并且需要用到 compose 进行函数组合,就需要使用柯里化对准备组合的函数进行部分求值,让它始终只接受一个参数

<pre><code>
function curry(fn) {
  if (fn.length <= 1) return fn;
  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args) => {
        return generator(...args, ...args2);
      };
    }
  };
  return generator;
}

let add = (a, b, c, d) => a + b + c + d;
const curriedAdd = curry(add);
add(5, 6, 7, 8); //26
</code></pre>
</details>

## jsonp 原理

<details>
<summary>答案</summary>
（1）首先是利用 script 标签的 src 属性来实现跨域

（2）通过将前端方法作为参数传递到服务器端,然后由服务器端注入参数之后再返回,实现服务器端向客户端通信

（3）由于使用 script 标签的 src 属性,因此只支持 get 方法

</details>

## javascript 设计模式

<details>
<summary>答案</summary>
创建型:

1.抽象工厂模式（Abstract Factory）

2.构建者模式（Builder）

3.工厂方法模式（Factory Method）

4.原型模式（Prototype）

5.单例模式（Singleton）

结构型：

1.适配器模式（Adapter）

2.桥接模式（Bridge）

3.组合模式（Compositor）

4.装饰者模式（Decorator）

5.外观模式（Facade）

6.享元模式（Flyweight）

7.代理模式（Proxy）

行为：

1.职责链模式（Chain of Responsibility）

2.命令模式（Command）

3.解释器模式（Interpreter）

4.迭代器模式（Iterator）

5.中介者模式（Mediator）

6.备忘录模式（Memento）

7.观察者模式（Observer）

8.状态模式（State）

9.策略模式（Strategy）

10.模板方法模式（Template Method）

11.访问者模式（Visitor）

</details>

 <Vssue title="interview-js" />
