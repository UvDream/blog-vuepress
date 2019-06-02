# js
## 前端安全,理解 xss 和 csrf

XSS：跨站脚本（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。
CSRF:跨站请求伪造（Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。
说的直白一点儿
XSS： 通过客户端脚本语言（最常见如：JavaScript）在一个论坛发帖中发布一段恶意的JavaScript代码就是脚本注入，如果这个代码内容有请求外部服务器，那么就叫做XSS！
通常来说CSRF是由XSS实现的，所以CSRF时常也被称为XSRF [用XSS的方式实现伪造请求]（但实现的方式绝不止一种，还可以直接通过命令行模式（命令行敲命令来发起请求）直接伪造请求[只要通过合法验证即可]）。
XSS更偏向于代码实现（即写一段拥有跨站请求功能的JavaScript脚本注入到一条帖子里，然后有用户访问了这个帖子，这就算是中了XSS攻击了），CSRF更偏向于一个攻击结果，只要发起了冒牌请求那么就算是CSRF了。


## 数组快速排序

```js
function quickSort(arr){
            //如果数组<=1,则直接返回
            if(arr.length<=1){return arr;}
            var pivotIndex=Math.floor(arr.length/2);
            //找基准，并把基准从原数组删除
            var pivot=arr.splice(pivotIndex,1)[0];
            //定义左右数组
            var left=[];
            var right=[];

            //比基准小的放在left，比基准大的放在right
            for(var i=0;i<arr.length;i++){
                if(arr[i]<=pivot){
                    left.push(arr[i]);
                }
                else{
                    right.push(arr[i]);
                }
            }
            //递归
            return quickSort(left).concat([pivot],quickSort(right));
        }
```

## cookie,sessionStorage 和 localStorage 的区别

```
cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会
sessionStorage和localStorage的存储空间更大；
sessionStorage和localStorage有更多丰富易用的接口；
sessionStorage和localStorage各自独立的存储空间；
sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据
```

## javascript 中= =和= = =的区别

一言以蔽之：==先转换类型再比较，===先判断类型，如果不是同一类型直接为false。

===表示恒等于，比较的两边要绝对的相同
```js
alert(0 == ""); // true

alert(0 == false); // true

alert("" == false); // true

alert(0 === ""); // false

alert(0 === false); // false

alert("" === false); // false
```

先说 ===，这个比较简单，具体比较规则如下：

1、如果类型不同，就[不相等]

2、如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断）

3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。

4、如果两个值都是true，或者都是false，那么[相等]。

5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。

6、如果两个值都是null，或者都是undefined，那么[相等]。

再说 ==，具体比较规则如下：

1、如果两个值类型相同，进行 === 比较，比较规则同上

2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：

a、如果一个是null、一个是undefined，那么[相等]。

b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。

c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。

d、如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。非js核心的对象，令说（比较麻烦，我也不大懂）

e、任何其他组合（array数组等），都[不相等]。


## 闭包

闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回了之后。然后闭包可以把一个局部变量传递到外部供其他函数或是变量使用,也可以把一个变量长时间的保留在系统的内存中

换句话来说函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。。

简单的说就是提升作用域

闭包的缺点：
1. 更多的内存消耗
2. 性能问题（跨作用域访问）
3. 滥用闭包函数会造成内存泄露，因为闭包中引用到的包裹函数中定义的变量都永远不会被释放，所以我们应该在必要的时候，及时释放这个闭包函数

闭包优点:
1. JavaScript允许你使用在当前函数以外定义的变量
2. 即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量
3. 闭包可以更新外部变量的值
4. 用闭包模拟私有方法


## 哪些操作会导致内存泄漏


1. setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

- 意外的全局变量: 无法被回收
- 定时器: 未被正确关闭，导致所引用的外部变量无法被释放
- 事件监听: 没有正确销毁 (低版本浏览器可能出现)
- 闭包: 会导致父级中的变量无法被释放
- dom 引用: dom 元素被删除时，内存中的引用未被正确清空

可用 chrome 中的 timeline 进行内存标记，可视化查看内存的变化情况，找出异常点。


## 面向对象过程的三大基本特征

```
继承,多态,封装
```

## 如何判断一个变量是对象还是数组

```
prototype.toString.call(),这个方法兼容性最好,千万不要使用typeof,都会返回object
```

## ES5 和 ES6 中继承有啥区别

ES5的继承时通过prototype或构造函数机制来实现。ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。

ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。

具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象



## 值类型和引用类型的区别


（1）值类型：

1.占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量）

2.保存与复制的是值本身

3.保存与复制的是值本身

4.使用typeof检测数据的类型

5.基本类型数据是值类型

（2）引用类型：

1.占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）

2.保存与复制的是指向对象的一个指针

3.使用instanceof检测数据类型

4.使用new()方法构造出的对象是引用型



## javascript 设计模式

```js
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

```

## 前端如何对页面性能进行优化

```
1.减少http请求
2.减少http请求大小
3.将CSS或JavaScript放到外部文件中，避免使用<style>或者<script>标签直接引入（根据实际文件大小和业务场景来选择)
4.避免页面空的href和src
5.为HTML指定Cache-Control或Expires
6.合理设置Etag和Last-Modified
7.减少页面重定向
8.使用静态资源分域存放来增加下载并行数
9.使用静态资源CDN来存储文件
10.使用CDN Combo下载传输内容
11.使用可缓存的AJAX
12.使用GET来完成AJAX请求
13.减少Cookie的大小并进行Cookie隔离
14.缩小favicon.ico并缓存
15.推荐使用异步JavaScript资源
16.消除阻塞渲染的CSS及JavaScript
17.避免使用CSSimport引用加载CSS
```

## 使用 typeof bar ===“object”来确定 bar,是否是一个对象时有什么潜在的缺陷？这个陷阱如何避免？

```js
如果bar的值为null的话,这样的话判断依旧成立,故错误
1.bar是个函数
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
2.bar是个数组
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

ES5
console.log(Array.isArray(bar));
```

## 什么是NaN
```js
Number.isNaN()
```
## 原型/构造函数/实例

- 原型(prototype): 一个简单的对象，用于实现对象的 属性继承。可以简单的理解成对象的爹。在 Firefox 和 Chrome 中，每个JavaScript对象中都包含一个__proto__ (非标准)的属性指向它爹(该对象的原型)，可obj.__proto__进行访问。
- 构造函数: 可以通过new来 新建一个对象 的函数。
- 实例: 通过构造函数和new创建出来的对象，便是实例。 实例通过__proto__指向原型，通过constructor指向构造函数。
```js
//实例
const dog = new Object()
```
则此时， dog, 构造函数为Object，我们知道，构造函数拥有一个prototype的属性指向原型，因此原型为:
```js
//原型
const prototype = Object.prototype
```
这里我们可以看出关系
```js
实例.__proto__ === 原型

原型.constructor === 构造函数

构造函数.prototype === 原型

实例.constructorr === 构造函数
```
![image](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9b940c4c6f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 原型链

原型链是由原型对象组成，每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型，__proto__ 将对象连接起来组成了原型链。是一个用来实现继承和共享属性的有限的对象链。


- 属性查找机制: 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象Object.prototype，如还是没找到，则输出undefined；
- 属性修改机制: 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: b.prototype.x = 2；但是这样会造成所有继承于该对象的实例的属性发生改变。

## 数组
- map: 遍历数组，返回回调返回值组成的新数组
- forEach: 无法break，可以用try/catch中throw new Error来停止
- filter: 过滤
- some: 有一项返回true，则整体为true
- every: 有一项返回false，则整体为false
- join: 通过指定连接符生成字符串
- push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项
- unshift / shift: 头部推入和弹出，改变原数组，返回操作项
- sort(fn) / reverse: 排序与反转，改变原数组
- concat: 连接数组，不影响原数组， 浅拷贝
- slice(start, end): 返回截断后的新数组，不改变原数组
- splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
- indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
- reduce / reduceRight(fn(prev, cur)， defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)
- 数组乱序：
```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    return Math.random() - 0.5;
});
```
- 数组拆解: flat: [1,[2,3]] --> [1, 2, 3]
```js
arr.prototype.flat = function() {
    this.toString().split(',').map(item => +item )
}
```
## 从输入url到展示

- DNS 解析
- TCP 三次握手
- 发送请求，分析 url，设置请求报文(头，主体)
- 服务器返回请求的文件 (html)
- 浏览器渲染

    - HTML parser --> DOM Tree
        - 标记化算法，进行元素状态的标记
        - dom 树构建
    - CSS parser --> Style Tree
        - 解析 css 代码，生成样式树
    - attachment --> Render Tree
        - 结合 dom树 与 style树，生成渲染树
    - layout: 布局
    - GPU painting: 像素绘制页面
    
## promise

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大.
Promise对象有以下两个特点。
- （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

- （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
- 简单例子
```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```

## 函数柯里化
柯里化是函数式编程的一个重要技巧，将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
函数式编程另一个重要的函数 compose，能够将函数进行组合，而组合的函数只接受一个参数，所以如果有接受多个函数的需求并且需要用到 compose 进行函数组合，就需要使用柯里化对准备组合的函数进行部分求值，让它始终只接受一个参数
```js
function curry(fn){
    if(fn.length <=1) return fn
    const generator=(...args)=>{
        if(fn.length === args.length){
            return fn(...args)
        }else{
            return (...args)=>{
                return generator(...args,...args2)
            }
        }
    }
    return generator
}

let add=(a,b,c,d)=>a+b+c+d
const curriedAdd=curry(add)
add(5,6,7,8) //26
```

 <Vssue title="interview-js" />
