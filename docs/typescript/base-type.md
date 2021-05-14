# 基本类型

## 布尔(boolean)

```typescript
let bool: boolean = true;
```

## 数字(number)

```typescript
let num: number = 123;
```

## 字符串(string)

```typescript
let name:string="Tom"
```

## 数组(array)

```typescript
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3, 4];
// 联合类型
let arr3: Array<number | string> = [1, 2, 3, 4, "abc"];
```

## 元组(tuple)

> 固定长度的数组

```typescript
let ancestor: [number, string] = [0, "1"];
ancestor.push(2);
// 元祖可以插入元素,但是不可以访问
console.log(ancestor);
// ancestor[2]
```

## 枚举(enum)

### 数字枚举

```typescript
enum Role {
  //   Reporter ,
  Reporter = 1, //自定义枚举起始值
  Development,
  Main,
  Footer,
  Owner,
  Guest
}
console.log(Role.Reporter); //0 //1
```

### 字符串枚举

```typescript
enum Message {
  Success = "成功了!",
  Filed = "失败了!"
}
console.log(Message.Success);
```

### 异构枚举

```typescript
enum Answer {
  N,
  Y = "yes"
}
```



## 对象(object)

```typescript
// let obj: object = { x: 1, y: 2 };
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;
```

## any

```typescript
let x;
x = 1;
x = [];
x = () => {};

let notSure: any = 666;
notSure = "Semlinker";
notSure = false;
```

## void

```typescript
let noReturn = () => {};

// 声明函数返回值为void
function msg(): void {
  console.log("This is my warning message");
}
```

## null/undefined

```typescript
let un: undefined = undefined;
let nu: null = null;
console.log(un == nu);
console.log(un === nu);
// num=nu;这是不允许的,只有let num: number | undefined | null  = 123;
```

## never

```typescript
let error = () => {
  throw new Error("error");
};
let endless = () => {
  while (true) {}
};
```

