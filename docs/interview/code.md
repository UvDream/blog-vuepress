# 常见代码
## 代码1

```
(function(){
var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

以上代码输出?

```
var a=b=3我们拆解下
b=3
var a=b
此时b为全局变量,
如果在严格模式的话会报错,b未定义
```

## 代码2

```
var myObject = {
    foo: "bar",
        func: function() {
        var self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
        (function() {
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

以上代码输入什么
```
outer func: this.foo = bar
outer func: self.foo = bar
inner func: this.foo = undefined
inner func: self.foo = bar
```
## 代码3
```
function foo1(){
    return {
    bar: "hello"
    };
}

function foo2(){
    return
    {
    bar: "hello"
    };
}
console.log(foo1())
console.log(foo2())
```
以上代码会输入相同结果吗?
```
输入结果是不同的,
foo1()={bar="hello}
foo2()=undefined
原因与JavaScript中分号在技术上是可选的事实有关（尽管忽略它们通常是非常糟糕的形式）。因此，在foo2()中遇到包含return语句的行（没有其他内容）时，会在return语句之后立即自动插入分号。
```

## 代码4
```
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
```
执行以上代码,1-4如何排列
```
1,4,3,2
```
## 代码5
```
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```
执行以上代码会出现什么结果
```
"122"
"32"
"02"
"112"
"NaN2"
NaN

示例1：1 +“2”+“2”输出：“122”说明：第一个操作在1 +“2”中执行。由于其中一个操作数（“2”）是一个字符串，所以JavaScript假定需要执行字符串连接，因此将1的类型转换为“1”，1 +“2”转换为“12”。然后，“12”+“2”产生“122”。

示例2：1 + +“2”+“2”输出：“32”说明：根据操作顺序，要执行的第一个操作是+“2”（第一个“2”之前的额外+被视为一个一元运算符）。因此，JavaScript将“2”的类型转换为数字，然后将一元+符号应用于它（即将其视为正数）。结果，下一个操作现在是1 + 2，当然这会产生3.但是，我们有一个数字和一个字符串之间的操作（即3和“2”），所以JavaScript再次转换数值赋给一个字符串并执行字符串连接，产生“32”。

示例3：1 + - “1”+“2”输出：“02”说明：这里的解释与前面的示例相同，只是一元运算符是 - 而不是+。因此，“1”变为1，然后在应用 - 时将其变为-1，然后将其加1到产生0，然后转换为字符串并与最终的“2”操作数连接，产生“02”。

示例4：+“1”+“1”+“2”输出：“112”说明：尽管第一个“1”操作数是基于其前面的一元+运算符的数值类型转换的，当它与第二个“1”操作数连接在一起时返回一个字符串，然后与最终的“2”操作数连接，产生字符串“112”。

示例5：“A” - “B”+“2”输出：“NaN2”说明：由于 - 运算符不能应用于字符串，并且既不能将“A”也不能将“B”转换为数值， “ - ”B“产生NaN，然后与字符串”2“串联产生”NaN2“。

例6：“A” - “B”+2输出：NaN说明：在前面的例子中，“A” - “B”产生NaN。但是任何运算符应用于NaN和其他数字操作数仍然会产生NaN。
```
## 代码6
```
var b = 1;
function outer(){
    var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
```
以上代码输出什么
3

## 代码7
```
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
```
以上代码输入什么?
undefined
为什么它不显示21的全局值？原因是当函数执行时，它检查是否存在本地x变量但尚未声明它，因此它不会查找全局变量。
## 代码8
```
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```
以上代码输出什么
```
1
undefined
2
```
var语句被挂起（没有它们的值初始化）到它所属的全局或函数作用域的顶部，即使它位于with或catch块内。但是，错误的标识符只在catch块内部可见。它相当于：
```
(function () {
    var x, y; // outer and hoisted
        try {
            throw new Error();
        } catch (x /* inner */) {
            x = 1; // inner x, not the outer one
            y = 2; // there is only one y, which is in the outer scope
            console.log(x /* inner */);
        }
    console.log(x);
    console.log(y);
})();
```