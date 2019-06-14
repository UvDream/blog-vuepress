# 闭包

## 变量作用域
变量的作用域，就是指变量的有效范围.我们最常谈到的是在函数中声明的变量作用域.

当在函数中声明一个变量的时候，如果该变量前面没有带上关键字 var，这个变量就会成为
全局变量，这当然是一种容易造成命名冲突的做法.

另外一种情况是用 var 关键字在函数中声明变量，这时候的变量即是局部变量，只有在该函
数内部才能访问到这个变量，在函数外面是访问不到的.
```js
var func = function(){ 
 var a = 1; 
 alert ( a ); // 输出: 1 
};
func(); 
alert ( a );  //Uncaught ReferenceError: a is not defined
```
变量的搜索是从内到外而非从外到内的
```js
var a = 1; 
var func1 = function(){ 
 var b = 2; 
 var func2 = function(){ 
 var c = 3; 
 alert ( b ); // 输出：2 
 alert ( a ); // 输出：1 
 } 
 func2(); 
 alert ( c ); // 输出：Uncaught ReferenceError: c is not defined 
}; 
func1();
```
## 变量的生存周期
对于全局变量来说，全局变量的生存周期当然是永久的，除非我们主动销毁这个全局变量。

对于函数内用var关键字声明的局部变量来说,当退出函数时,这些局部变量就会失去价值
```js
var func = function(){ 
 var a = 1; // 退出函数后局部变量 a 将被销毁
 alert ( a ); 
}; 
func();
```
:::warning
注意
:::
```js
var func = function(){ 
 var a = 1; 
 return function(){ 
 a++; 
 alert ( a );
 } 
}; 
var f = func();
f() //2
f() //3
f() //4
```
这里面a并没有销毁,这是因为执行var f=func()的时候,f返回了一个匿名函数的引用,它可以访问到func()被调用的时候产生的环境,也就是a一直存在这个环境里,既然局部变量所在的环境还能被外界
访问，这个局部变量就有了不被销毁的理由。在这里产生了一个闭包结构，局部变量的生命看起
来被延续了.

## 闭包的作用
### 封装变量
闭包可以帮助把一些不需要暴露在全局的变量封装成“私有变量”。假设有一个计算乘积的简单函数：
```js
var func=function(){
    var a = 1; 
    for ( var i = 0, l = arguments.length; i < l; i++ ){ 
            a = a * arguments[i]; 
    } 
    return a;
}
console.log(func(1,2,3))
```
对于那些相同的参数,每次都进行计算是一种浪费,我们可以加入缓存机制提高这个函数的性能
```js {1}
var cache={}
var func=function(){
    debugger;
    var args=Array.prototype.join.call(arguments,',')
    if(cache[args]){
        return cache[args];
    }
    var a = 1; 
    for ( var i = 0, l = arguments.length; i < l; i++ ){ 
            a = a * arguments[i]; 
    } 
    return cache[args]=a  //{1,2,3:6}
}
console.log(func(1,2,3))
```
此时cache是个全局变量,而且仅仅在func函数呗调用的时候才被使用,与其这样不如放进函数
```js {3,4,5,6,7,8,9,10,11,12,13}
  var func = (function () {
        var cache = {}
        return function () {
            var args = Array.prototype.join.call(arguments, ',')
            if (cache[args]) {
                return cache[args];
            }
            var a = 1;
            for (var i = 0, l = arguments.length; i < l; i++) {
                a = a * arguments[i];
            }
            return cache[args] = a //{1,2,3:6}
        }
    })()
    console.log(func(1, 2, 3))
```
如果一个大函数中有一些代码块能够独立出来,我们常常把这些函数封装在一些小函数里面,独立出来的函数有助于代码的复用
```js {3,4,5,6,7,8,9}
 var func = (function () {
        var cache = {};
        var calculate = function () { // 封闭 calculate 函数
            var a = 1;
            for (var i = 0, l = arguments.length; i < l; i++) {
                a = a * arguments[i];
            }
            return a;
        };
        return function () {
            var args = Array.prototype.join.call(arguments, ',');
            if (args in cache) {
                return cache[args];
            }
            return cache[args] = calculate.apply(null, arguments);
        }
    })();
    console.log(func(1, 2, 3))
```
### 延长局部变量的寿命
类似上面注意案例

## 闭包和面向对象设计
```js
var extent = function () {
    var value = 0;
    return {
        call: function () {
            value++;
            console.log(value);
        }
    }
};
var extent = extent();
extent.call(); // 输出：1 
extent.call(); // 输出：2 
extent.call(); // 输出：3
```
如果使用面向对象写法
```js
 var extent = {
    value: 0,
    call: function () {
        this.value++;
        console.log(this.value);
    }
};
extent.call(); // 输出：1 
extent.call(); // 输出：2 
extent.call(); // 输出：3
```
或者
```js
var Extent = function(){ 
    this.value = 0; 
}; 
Extent.prototype.call = function(){ 
    this.value++; 
    console.log( this.value ); 
}; 
var extent = new Extent(); 
extent.call(); 
extent.call(); 
extent.call();
```
