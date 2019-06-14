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