# 面试之手写代码
![img](../public/img/js1.png)
## 数组去重

### 双层循环
```
var array = [1, 1, '1', '1'];

function unique(array) {
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(unique(array)); // [1, "1"]

```
### 利用indexOf
```
var array = [1, 1, '1'];

function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}

console.log(unique(array));

```
### 排序后去重
```
var array = [1, 1, '1'];

function unique(array) {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res;
}

console.log(unique(array));

```
### filter
filter可以用来简化外层循环
#### 使用indexOf
```
var array = [1, 2, 1, 1, '1'];

function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

console.log(unique(array));
```
#### 排序去重
```
var array = [1, 2, 1, 1, '1'];

function unique(array) {
    return array.concat().sort().filter(function(item, index, array){
        return !index || item !== array[index - 1]
    })
}

console.log(unique(array));
```
### ES6方法
#### Set
```
var array = [1, 2, 1, 1, '1'];

function unique(array) {
   return Array.from(new Set(array));
}

console.log(unique(array)); // [1, 2, "1"]
```
简化

```
function unique(array) {
    return [...new Set(array)];
}

//或者
var unique = (a) => [...new Set(a)]
```
#### Map
```
function unique (arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
```

## 类型判断
类型判断需要注意以下几点


- typeof对六个基本数据类型Undefined、Null、Boolean、Number、String、Object（大写）返回的结果是
undefined、object、boolean、number、string、object（小写），可以看到Null和Object 类型都返回了 object 字符串；typeof却能检测出函数类型；综上，typeof能检测出六种类型，但是不能检测出null类型和Object下细分的类型，如Array，Function，Date，RegExp,Error等。


- Object.prototype.toString的作用非常强大，它能检测出基本数据类型以及Object下的细分类型，甚至像
Math,JSON,arguments它都能检测出它们的具体类型，它返回结果形式例如[object Number](注意最后的数据类型是大写).所以，Object.prototype.toString基本上能检测出所有的类型了，只不过有时需要考虑到兼容性低版本浏览器的问题。
### 通用API
```
    
// 该类型判断函数可以判断六种基本数据类型以及Boolean Number String Function Array Date RegExp Object Error，
// 其他类型因为遇到类型判断的情况较少所以都会返回object,不在进行详细的判断
//  比如ES6新增的Symbol，Map，Set等类型
var classtype = {};


"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item) {
    classtype["[object " + item + "]"] = item.toLowerCase();
})


function type(obj) {
    // 解决IE6中null和undefined会被Object.prototype.toString识别成[object Object]
    if (obj == null) {
        return obj + "";
    }

    //如果是typeof后类型为object下的细分类型(Array,Function,Date,RegExp,Error)或者是Object类型，则要利用Object.prototype.toString
    //由于ES6新增的Symbol，Map，Set等类型不在classtype列表中，所以使用type函数，返回的结果会是object
    return typeof obj === "object" || typeof obj === "function" ?
        classtype[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

```
### 判断空对象
判断是否有属性，for循环一旦执行，就说明有属性，此时返回false
```
function isEmptyObject( obj ) {
        var name;
        for ( name in obj ) {
            return false;
        }
        return true;
}

console.log(isEmptyObject({})); // true
console.log(isEmptyObject([])); // true
console.log(isEmptyObject(null)); // true
console.log(isEmptyObject(undefined)); // true
console.log(isEmptyObject(1)); // true
console.log(isEmptyObject('')); // true
console.log(isEmptyObject(true)); // true
```
我们可以看出isEmptyObject实际上判断的并不仅仅是空对象。但是既然jQuery是这样写，可能是因为考虑到实际开发中 isEmptyObject用来判断 {} 和 {a: 1} 是足够的吧。如果真的是只判断 {}，完全可以结合上篇写的 type函数筛选掉不适合的情况。

### 判断Window对象
Window对象有一个window属性指向自身，可以利用这个特性来判断是否是Window对象
```
function isWindow( obj ) {
    return obj != null && obj === obj.window;
}
```
### 判断数组
isArray是数组类型内置的数据类型判断函数，但是会有兼容性问题，一个polyfill如下
```
isArray = Array.isArray || function(array){
  return Object.prototype.toString.call(array) === '[object Array]';
}
```
### 判断类数组
jquery实现的isArrayLike,数组和类数组都会返回true。所如果isArrayLike返回true，至少要满足三个条件之一：


- 是数组


- 长度为 0
比如下面情况,如果我们去掉length === 0 这个判断，就会打印 false，然而我们都知道 arguments 是一个类数组对象，这里是应该返回 true 的
```
function a(){
    console.log(isArrayLike(arguments))
}
a();
```
- lengths 属性是大于 0 的数字类型，并且obj[length - 1]必须存在(考虑到arr = [,,3]的情况)
```
function isArrayLike(obj) {

    // obj 必须有 length属性
    var length = !!obj && "length" in obj && obj.length;
    var typeRes = type(obj);

    // 排除掉函数和 Window 对象
    if (typeRes === "function" || isWindow(obj)) {
        return false;
    }

    return typeRes === "array" || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in obj;
}
```
### 判断NAN
判断一个数是不是NaN不能单纯地使用 === 这样来判断, 因为NaN不与任何数相等, 包括自身,注意在ES6的isNaN中只有值为数字类型使用NaN才会返回true
```
isNaN: function(value){
  return isNumber(value) && isNaN(value);
}
```
### 判断DOM元素
利用DOM对象特有的nodeType属性
```
isElement: function(obj){
  return !!(obj && obj.nodeType === 1);
    // 两次感叹号将值转化为布尔值
}

```
### 判断arguments对象
低版本的浏览器中argument对象通过Object.prototype.toString判断后返回的是[object Object],所以需要兼容
```
isArguments: function(obj){
  return Object.prototype.toString.call(obj) === '[object Arguments]' || (obj != null && Object.hasOwnProperty.call(obj, 'callee'));
}
```
## 深浅拷贝
### 深拷贝
```
var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

```
### 浅拷贝
```
var shallowCopy = function(obj) {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
```
## 扁平化
### 递归
循环数组元素，如果还是一个数组，就递归调用该方法
```
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}


console.log(flatten(arr))
```
### toString()
如果数组的元素都是数字，可以使用该方法
```
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item // +会使字符串发生类型转换
    })
}

console.log(flatten(arr))
```
### reduce()
```
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

console.log(flatten(arr))
```
### ...
```
// 扁平化一维数组
var arr = [1, [2, [3, 4]]];
console.log([].concat(...arr)); // [1, 2, [3, 4]]

// 可以扁平化多维数组
var arr = [1, [2, [3, 4]]];

function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten(arr))
```
## 柯里化
### 通用版
```
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);
```
### ES6
```
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])

let curryTest=curry((a,b,c,d)=>a+b+c+d)
curryTest(1,2,3)(4) //返回10
curryTest(1,2)(4)(3) //返回10
curryTest(1,2)(3,4) //返回10
```
## 防抖和节流
### 防抖
```
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null) 
        {
                clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```
### 节流
#### 利用时间戳
```
   var throttle = function(func, delay) {
            var prev = Date.now();
            return function() {
                var context = this;
                var args = arguments;
                var now = Date.now();
                if (now - prev >= delay) {
                    func.apply(context, args);
                    prev = Date.now();
                }
            }
        }
        function handle() {
            console.log(Math.random());
        }
        window.addEventListener('scroll', throttle(handle, 1000));
```
#### 利用定时器
```
   var throttle = function(func, delay) {
            var timer = null;
            return function() {
                var context = this;
                var args = arguments;
                if (!timer) {
                    timer = setTimeout(function() {
                        func.apply(context, args);
                        timer = null;
                    }, delay);
                }
            }
        }
        function handle() {
            console.log(Math.random());
        }
        window.addEventListener('scroll', throttle(handle, 1000));
```
## 模拟new
- new产生的实例可以访问Constructor里的属性，也可以访问到Constructor.prototype中的属性，前者可以通过apply来实现，后者可以通过将实例的proto属性指向构造函数的prototype来实现
- 我们还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么
```
function New(){
    var obj=new Object();
    //取出第一个参数，就是我们要传入的构造函数；此外因为shift会修改原数组，所以arguments会被去除第一个参数
    Constructor=[].shift.call(arguments);
    //将obj的原型指向构造函数，这样obj就可以访问到构造函数原型中的属性
    obj._proto_=Constructor.prototype;
    //使用apply改变构造函数this的指向到新建的对象，这样obj就可以访问到构造函数中的属性
    var ret=Constructor.apply(obj,arguments);
    //要返回obj
    return typeof ret === 'object' ? ret:obj;
}
```

```
function Otaku(name,age){
	this.name=name;
	this.age=age;
	this.habit='Games'
}

Otaku.prototype.sayYourName=function(){
    console.log("I am" + this.name);
}

var person=objectFactory(Otaku,'Kevin','18')

console.log(person.name)//Kevin
console.log(person.habit)//Games
console.log(person.strength)//60
```
## 模拟call
- call()方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法
- 模拟的步骤是：将函数设为对象的属性—>执行该函数—>删除该函数
- this参数可以传null，当为null的时候，视为指向window
- 函数是可以有返回值的
```
Function.prototype.call2 = function(context) {
    var context=context||window
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
//表示bar函数的执行环境是foo，即bar函数里面的this代表foo,this.value相当于foo.value,然后给bar函数传递两个参数
bar.call2(foo, 'black', '18') // black 18 1
```
## 模拟apply
apply()的实现和call()类似，只是参数形式不同
```
Function.prototype.apply2 = function(context = window) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
```
## 模拟bind
```
Function.prototype.bind2=function(context){
    var self=thisl
    var args=Array.prototype.slice.call(arguments,1);
    
    var fNOP=function(){};
    var fBound=function(){
        var bindArgs=Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindAt))
    }
}
```
## 模拟instanceof
```
function instanceOf(left,right) {

    let proto = left.__proto__;
    let prototype = right.prototype
    while(true) {
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto.__proto__;
    }
}
```
## 模拟JSON.stringify
> JSON.stringify(value[, replacer [, space]])

- Boolean | Number| String 类型会自动转换成对应的原始值。
- undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
- 不可枚举的属性会被忽略
- 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
```
function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}
jsonStringify({x : 5}) // "{"x":5}"
jsonStringify([1, "false", false]) // "[1,"false",false]"
jsonStringify({b: undefined}) // "{"b":"undefined"}"
```
## 模拟JSON.parse
> JSON.parse(text[, reviver])

用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。
### 利用eval
```
function jsonParse(opt) {
    return eval('(' + opt + ')');
}
jsonParse(jsonStringify({x : 5}))
// Object { x: 5}
jsonParse(jsonStringify([1, "false", false]))
// [1, "false", falsr]
jsonParse(jsonStringify({b: undefined}))
// Object { b: "undefined"}
```
避免在不必要的情况下使用 eval，eval() 是一个危险的函数， 他执行的代码拥有着执行者的权利。如果你用 eval()运行的字符串代码被恶意方（不怀好意的人）操控修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码
### 利用new Function()
Function与eval有相同的字符串参数特性,eval 与 Function 都有着动态编译js代码的作用，但是在实际的编程中并不推荐使用。
```
var func = new Function(arg1, arg2, ..., functionBody)

var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();
```
 <Vssue title="js1" />


 
