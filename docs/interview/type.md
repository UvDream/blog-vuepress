# 基本数据类型:
按值访问，可操作保存在变量中的实际的值。基本类型值指的是简单的数据段。
```js
undefined、null、string、number、boolean、symbol（es6）
```

引用类型：
当复制保存着对象的某个变量时，操作的是对象的引用，但在为对象添加属性时，操作的是实际的对象。引用类型值指那些可能为多个值构成的对象。
```js
Object、Array、RegExp、Date、Function、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。
```


对于基本数据类型和引用数据类型的区别
引用类型值可添加属性和方法，而基本类型值则不可以。
```js
//为引用类型值添加属性
var p = new Object();
p.age=11;
alert(p.age);//11

//为基本类型值添加属性
var name = 'a';
name.age = 11;
alert(name.age); //undefined
```
在复制变量值时，基本类型会在变量对象上创建一个新值，再复制给新变量。此后，两个变量的任何操作都不会影响到对方。而引用类型在创建一个对象类型时，计算机会在内存中开辟一个空间来存放值，我们要找到这个空间，需要知道这个空间的地址，变量存放的就是这个地址，复制变量时其实就是将地址复制了一份给新变量，两个变量的值都指向存储在堆中的一个对象，也就是说，其实他们引用了同一个对象，改变其中一个变量就会影响到另一个变量。
```js
//基本类型值
var a = 'a';
var b = a;
a = 'b';
alert(b); //a


引用类型值，以数组为例：
//引用类型值,以数组为例

//1.对其中一个变量直接赋值不会影响到另一个变量（并未操作引用的对象）
var a = [1,2,3];
var b = a;
a = [1,2,3,4];
alert(a);//1,2,3,4
alert(b); //1,2,3

//2.使用push(操作了引用的对象)
var a = [1,2,3];
var b = a;
a.push(4);
alert(a);//1,2,3,4
alert(b); //1,2,3,4
```
传递参数：按值传递，将函数外部的值复制给函数内部的参数（一个局部变量），当对局部变量进行操作时，局部变量的变化会反应在函数外部，但是这并不会影响函数外部的值。
```js
function add(a){
    a += 10;
    return a;
}

var num = 10;
var result = add(num);
alert(num); //10
alert(result); //20
```
对象时可能会不好理解：
```js
function setName(obj){
    obj.name = 'a';
}
var p = new Object();
setName(p);
alert(p.name); //a
```
明明参数是按值传递的，为什么创建的p实例也能获取到在setName（）中添加的name属性呢？
因为obj和p引用的是同一个对象，即便按值传递，obj也会按引用来访问同一个对象。看一下下面的例子就能清楚了。
```js
function setName(obj){
    obj.name = 'a';
    obj = new Object();
    obj.name = 'b';
    return obj;
}
var p = new Object();
var p2 = setName(p);
alert(p.name); // a
alert(p2.name); // b
```

在函数内部重写obj对象，此时obj对象引用的是一个局部对象，外部的p还是原始的引用，因此不会改变。
检测类型：
typeof:确定变量是字符串、数值、布尔值还是undefined的最佳工具。
```js
var num = 1;
var a = 'a';
var b;
var flag = true;
var o = null;
var fn = function(){};
var rg = /hello/;
alert(typeof num); //number
alert(typeof a); //string
alert(typeof b); //undefined
alert(typeof flag); //boolean
alert(typeof o); //object
alert(typeof fn); //function
alert(typeof rg); //object(sarari5、chrome7前返回function)

instanceof ：判断是否是某个对象类型。
var a = [1,2,3];
alert(a instanceof Object); //true
alert(a instanceof Array); //true
alert(a instanceof RegExp); //false

```
 <Vssue title="interview-type" />
