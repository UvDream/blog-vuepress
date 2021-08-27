---
date updated: '2021-08-27T10:58:50+08:00'

---

# `class`类

```ts
class Dog{
constructor(){}
}
```

## 继承

```ts
class Animal {
 move(distanceInMeters: number = 0) {
 console.log(`Animal moved ${distanceInMeters}m.`);
 }
}
class Dog extends Animal {
 bark() {
 console.log("Woof! Woof!");
 }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
## 公共,私有与受保护的修饰符
### `public`
> 公共的修饰符,这是`typescript`默认的

```ts
class A {
 public name = "A的名字"
 constructor() { }
}

const a = new A()

console.log(a);//A { name: 'A的名字' }

console.log(a.name);//A的名字
```
### `private`
> 私有成员,外部不可访问
```ts
class B {
 private name: string = "B的名字"
 constructor() {}
}

const b = new B()

console.log(b);

console.log(b.name); //error

```
![error](https://pic.baixiongz.com/uploads/2021/08/27/a7f8818b18606.png)
## `protected`
> `protected`修饰符与 `private`修饰符的行为很相似，但有一点不同， `protected`成员在派生类中仍然可以访问

- 示例1
```ts
class Person {
 protected name: string
 constructor(name: string) {
 	this.name = name
 }
}

class Man extends Person {
 private address: string
 constructor(name: string, address: string) {
	 super(name)
	 this.address = address
 }
 public getMsg() {
 console.log(`我的名字是${this.name},地址是${this.address}`);
 }
}

let man = new Man("张三", "雨花南路") 

console.log(man);//Man { name: '张三', address: '雨花南路' }

console.log(man.getMsg());//我的名字是张三,地址是雨花南路

console.log(man.name);//error
```
![error](https://pic.baixiongz.com/uploads/2021/08/27/3ce7944267cdb.png)
> 说明`protected`可以被子类使用,但是不可以被外部调用
- 示例2
> 如果构造函数被标记成`protected`,这就意味着这个类不能在包含他的类外被实例化,但是能被继承
```ts
class Person {
 protected name: string
 protected constructor(name: string) {
 	this.name = name
 }
}

class Man extends Person {
 private address: string
 constructor(name: string, address: string) {
 super(name)
 this.address = address
 }
}

let man = new Man("张三", "雨花南路")

console.log(man);//Man { name: '张三', address: '雨花南路' }

let person = new Person("李四")//error
```
![error](https://pic.baixiongz.com/uploads/2021/08/27/b407beb5a9cf3.png)

### `readonly`
> 将属性设置为只读的. 只读属性必须在声明时或构造函数里被初始化
```ts
class Web {
 readonly name: string
 constructor(name: string) {
 this.name = name
 }
}

let web = new Web("前端")

web.name = "嘻嘻"
```
![error](https://pic.baixiongz.com/uploads/2021/08/27/2b8707762c67e.png)
### 存取器
> 用另外一个条件来限制你是否能够更改属性

```ts
let passCode = "passcode"

class EditPassword {
 private _fullName: string;
 get fullName(): string {
 	return this._fullName
 }
 set fullName(newName: string) {
	 if (passCode && passCode == 'passcode') {
		this._fullName = newName;
	 } else {
		console.log("错误");
	 }
 }
}

let edit = new EditPassword()

edit.fullName = "张三"

console.log(edit.fullName);
```
![提示](https://pic.baixiongz.com/uploads/2021/08/27/7f4b433f3e755.png)
### `static`
```ts
class Grid {
 constructor(public scle: number) {}
 static origin = { x: 0, y: 0 }
 calcPosition(point: { x: number, y: number }) {
	 let x = point.x - Grid.origin.x
	 let y = point.y - Grid.origin.y
	 return x * y / this.scle
 }
}

let grid1 = new Grid(1)

let grid2 = new Grid(2)

console.log(grid1.calcPosition({ x: 10, y: 10 }));

console.log(grid2.calcPosition({ x: 10, y: 10 }));
```
![static](https://pic.baixiongz.com/uploads/2021/08/27/11a6d0b5cc701.png)
### 抽象类
> 抽象类不允许被实例化
- 错误
```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('猴子');
```
![error](https://pic.baixiongz.com/uploads/2021/08/27/2439c382a74b3.png)
- 错误
```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('小猫');
```

![](https://pic.baixiongz.com/uploads/2021/08/27/0555e2b73933d.png)
- 正确

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(小猫的名字是 ${this.name}`);
  }
}

let cat = new Cat('小猫');
```