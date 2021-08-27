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

