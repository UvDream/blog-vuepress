# TypeScript
## 简介
什么是`TypeScript`?[官网](https://www.tslang.cn/)这样介绍的,`TypeScript`是`JavaScript`的超集.
- `TypeScript`是`JavaScript`类型的超集,它可以编译成纯`JavaScript`.
- `TypeScript`可以在任何浏览器,任何计算机和任何操作系统上运行,并且他是开源的.
## 安装`TypeScript`
```js
 npm install -g typescript
```
使用`TypeScript`其实很简单
```js
tsc hello.ts
```
## Hello TypeScript
### `hello.ts`
```typescript
function Hello(name:string){
    return "hello"+name
}
let name="world!"
console.log(Hello(name))
```
### tsc hello.ts
```typescript
hello world!
```

