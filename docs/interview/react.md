# React
## 什么是声明式编程
声明式编程是一种编程范式，它关注的是你要做什么，而不是如何做。它表达逻辑而不显式地定义步骤。这意味着我们需要根据逻辑的计算来声明要显示的组件。它没有描述控制流步骤。声明式编程的例子有HTML、SQL等.

## 声明式编程 vs 命令式编程
声明式编程的编写方式描述了应该做什么，而命令式编程描述了如何做。在声明式编程中，让编译器决定如何做事情。声明性程序很容易推理，因为代码本身描述了它在做什么.

下面是一个例子，数组中的每个元素都乘以 2，我们使用声明式map函数，让编译器来完成其余的工作，而使用命令式，需要编写所有的流程步骤.
```js
const numbers = [1,2,3,4,5];

// 声明式
const doubleWithDec = numbers.map(number => number * 2);

console.log(doubleWithDec)

// 命令式
const doubleWithImp = [];
for(let i=0; i<numbers.length; i++) {
    const numberdouble = numbers[i] * 2;
    doubleWithImp.push(numberdouble)
}

console.log(doubleWithImp)
```

## 什么是函数式编程
函数式编程是声明式编程的一部分。javascript中的函数是第一类公民，这意味着函数是数据，你可以像保存变量一样在应用程序中保存、检索和传递这些函数。

函数式编程有些核心的概念，如下：

- 不可变性(Immutability)
- 纯函数(Pure Functions)
- 数据转换(Data Transformations)
- 高阶函数 (Higher-Order Functions)
- 递归
- 组合

### 不可变性(Immutability)
不可变性意味着不可改变。 在函数式编程中，你无法更改数据，也不能更改。 如果要改变或更改数据，则必须复制数据副本来更改。

例如，这是一个student对象和changeName函数，如果要更改学生的名称，则需要先复制 student 对象，然后返回新对象。

在javascript中，函数参数是对实际数据的引用，你不应该使用 student.firstName =“testing11”，这会改变实际的student 对象，应该使用Object.assign复制对象并返回新对象。

```js
let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}

function changeName(student) {
    // student.firstName = "testing11" //should not do it
    let copiedStudent = Object.assign({}, student);
    copiedStudent.firstName = "testing11";
    return copiedStudent;
}

console.log(changeName(student));

console.log(student);
```

### 纯函数
纯函数是始终接受一个或多个参数并计算参数并返回数据或函数的函数。 它没有副作用，例如设置全局状态，更改应用程序状态，它总是将参数视为不可变数据。

我想使用 appendAddress 的函数向student对象添加一个地址。 如果使用非纯函数，它没有参数，直接更改 student 对象来更改全局状态。

使用纯函数，它接受参数，基于参数计算，返回一个新对象而不修改参数。
```js
let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}

// 非纯函数
function appendAddress() {
    student.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
}

console.log(appendAddress());

// 纯函数
function appendAddress(student) {
    let copystudent = Object.assign({}, student);
    copystudent.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
    return copystudent;
}

console.log(appendAddress(student));

console.log(student);
```

### 数据转换
我们讲了很多关于不可变性的内容，如果数据是不可变的，我们如何改变数据。如上所述，我们总是生成原始数据的转换副本，而不是直接更改原始数据.

再介绍一些 javascript内置函数，当然还有很多其他的函数，这里有一些例子。所有这些函数都不改变现有的数据，而是返回新的数组或对象.
```js
let cities = ["irving", "lowell", "houston"];

// we can get the comma separated list
console.log(cities.join(','))
// irving,lowell,houston

// if we want to get cities start with i
const citiesI = cities.filter(city => city[0] === "i");
console.log(citiesI)
// [ 'irving' ]

// if we want to capitalize all the cities
const citiesC = cities.map(city => city.toUpperCase());
console.log(citiesC)
// [ 'IRVING', 'LOWELL', 'HOUSTON' ]
```

### 高阶函数
高阶函数是将函数作为参数或返回函数的函数，或者有时它们都有。 这些高阶函数可以操纵其他函数。

Array.map，Array.filter和Array.reduce是高阶函数，因为它们将函数作为参数。
```js
const numbers = [10,20,40,50,60,70,80]

const out1 = numbers.map(num => num * 100);
console.log(out1);
// [ 1000, 2000, 4000, 5000, 6000, 7000, 8000 ]

const out2 = numbers.filter(num => num > 50);
console.log(out2);
// [ 60, 70, 80 ]

const out3 = numbers.reduce((out,num) => out + num);
console.log(out3);
// 330
```
下面是另一个名为isPersonOld的高阶函数示例，该函数接受另外两个函数，分别是 message和isYoung.
```js
const isYoung = age => age < 25;

const message = msg => "He is "+ msg;

function isPersonOld(age, isYoung, message) {
    const returnMessage = isYoung(age)?message("young"):message("old");
    return returnMessage;
}

// passing functions as an arguments
console.log(isPersonOld(13,isYoung,message))
// He is young
```

### 递归
递归是一种函数在满足一定条件之前调用自身的技术。只要可能，最好使用递归而不是循环。你必须注意这一点，浏览器不能处理太多递归和抛出错误。

下面是一个演示递归的例子，在这个递归中，打印一个类似于楼梯的名称。我们也可以使用for循环，但只要可能，我们更喜欢递归。
```js
function printMyName(name, count) {
    if(count <= name.length) {
        console.log(name.substring(0,count));
        printMyName(name, ++count);
    }
}

console.log(printMyName("Bhargav", 1));

/*
B
Bh
Bha
Bhar
Bharg
Bharga
Bhargav
*/

// withotu recursion
var name = "Bhargav"
var output = "";
for(let i=0; i<name.length; i++) {
    output = output + name[i];
    console.log(output);
}
```

### 组合
在React中，我们将功能划分为小型可重用的纯函数，我们必须将所有这些可重用的函数放在一起，最终使其成为产品。 将所有较小的函数组合成更大的函数，最终，得到一个应用程序，这称为组合。

实现组合有许多不同方法。 我们从Javascript中了解到的一种常见方法是链接。 链接是一种使用点表示法调用前一个函数的返回值的函数的方法。

这是一个例子。 我们有一个name，如果firstName和lastName大于5个单词的大写字母，刚返回，并且打印名称的名称和长度。
```js
const name = "Bhargav Bachina";

const output = name.split(" ")
    .filter(name => name.length > 5)
    .map(val => {
    val = val.toUpperCase();
    console.log("Name:::::"+val);
    console.log("Count::::"+val.length);
    return val;
});

console.log(output)
/*
Name:::::BHARGAV
Count::::7
Name:::::BACHINA
Count::::7
[ 'BHARGAV', 'BACHINA' ]
*/
```
在React中，我们使用了不同于链接的方法，因为如果有30个这样的函数，就很难进行链接。这里的目的是将所有更简单的函数组合起来生成一个更高阶的函数。
```js
const name = compose(
    splitmyName,
    countEachName,
    comvertUpperCase,
    returnName
)

console.log(name);
```

## 什么是 React
React是一个简单的javascript UI库，用于构建高效、快速的用户界面。它是一个轻量级库，因此很受欢迎。它遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。它使用虚拟DOM来有效地操作DOM。它遵循从高阶组件到低阶组件的单向数据流。

## React 与 Angular 有何不同？
Angular是一个成熟的MVC框架，带有很多特定的特性，比如服务、指令、模板、模块、解析器等等。React是一个非常轻量级的库，它只关注MVC的视图部分。

Angular遵循两个方向的数据流，而React遵循从上到下的单向数据流。React在开发特性时给了开发人员很大的自由，例如，调用API的方式、路由等等。我们不需要包括路由器库，除非我们需要它在我们的项目。

## 什么是Virtual DOM及其工作原理
React 使用 Virtual DOM 来更新真正的 DOM，从而提高效率和速度。 我们来详细讨论这些。

### 什么是Virtual DOM
浏览器遵循HTML指令来构造文档对象模型(DOM)。当浏览器加载HTML并呈现用户界面时，HTML文档中的所有元素都变成DOM元素。

DOM是从根元素开始的元素层次结构。例如，看看下面的HTML。
```js
<div>
    <div>
        <h1>This is heading</h1>
        <p>this is paragraph</p>
        <div>
            <p>This is just a paragraon</p>
        </div>
    </div>
    <div>
        <h1>This is heading</h1>
        <p>this is paragraph</p>
        <div>
            <p>This is just a paragraon</p>
        </div>
    </div>
    <div>
        <h1>This is heading</h1>
        <p>this is paragraph</p>
        <div>
            <p>This is just a paragraon</p>
        </div>
    </div>
</div>
```
当涉及到SPA应用程序时，首次加载index.html，并在index.html本身中加载更新后的数据或另一个html.当用户浏览站点时，我们使用新内容更新相同的index.html.每当DOM发生更改时，浏览器都需要重新计算CSS、进行布局并重新绘制web页面.

React 使用 Virtual DOM 有效地重建 DOM.对于我们来说，这使得DOM操作的一项非常复杂和耗时的任务变得更加容易.React从开发人员那里抽象出所有这些，以便在Virtual DOM的帮助下构建高效的UI.

### 虚拟DOM是如何工作的
虚拟DOM只不过是真实 DOM 的 javascript对象表示. 与更新真实 DOM 相比，更新 javascript 对象更容易，更快捷. 考虑到这一点，让我们看看它是如何工作的.

React将整个DOM副本保存为虚拟DOM


