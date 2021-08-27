---
date updated: '2021-08-27T10:34:41+08:00'

---

# `extends` `implements` 区别

## 定义

- extends

> 继承,一个新的接口或者[类](./class.md),从父[类](./class.md)或者接口继承所有属性和方法,不可以重写属性,但是可以重写方法

- implements

> 实现,一个新的[类](./class.md),从父[类](./class.md)或者接口实现所有的属性和方法,同时可以重写属性和方法,包含一些新的功能

## 示例

```ts
export interface Person {

 name: string;

}

// implements 是对某个接口实现.必须满足接口的[类](./class.md)型规范

class Man implements Person {

 public name = "222";

 public age = 18;

}

//extends是对某个[类](./class.md)的继承，可获取父[类](./class.md)的所有的静态属性

class OldMan extends Man {

 constructor() {

 super();

 console.log(this.name);

 console.log(this.age);

 }

}

const oldMan = new OldMan();

console.log(oldMan);
```

## 注意

- 接口不能实现接口或者[类](./class.md)

- 即[类](./class.md)可以实现接口或者[类](./class.md)

- 接口可以继承接口或者[类](./class.md)

- [类](./class.md)不可以继承接口,只能继承[类](./class.md)
