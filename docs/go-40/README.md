# 标识符与关键字

## 标识符与关键字

- 标识符
  在编程语言中标识符就是程序员定义的具有特殊意义的词，比如变量名、常量名、函数名等等。 Go 语言中标识符由字母数字和`_`(下划线）组成，并且只能以字母和`_`开头。 举几个例子：`abc, _, _123, a123`。
- 关键字

```go
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var
```

- 保留字

```go
Constants:    true  false  iota  nil

Types:  int  int8  int16  int32  int64
        uint  uint8  uint16  uint32  uint64  uintptr
        float32  float64  complex128  complex64
        bool  byte  rune  string  error

Functions:  make  len  cap  new  append  copy  close  delete
            complex  real  imag
            panic  recover
```

# 变量

## 变量的来历

程序运行过程中的数据都是保存在内存中，我们想要在代码中操作某个数据时就需要去内存上找到这个变量，但是如果我们直接在代码中通过内存地址去操作变量的话，代码的可读性会非常差而且还容易出错，所以我们就利用变量将这个数据的内存地址保存起来，以后直接通过这个变量就能找到内存上对应的数据了。

## 变量声明

Go 语言中的变量需要声明后才能使用，同一作用域内不支持重复声明。 并且 Go 语言的变量声明后必须使用。

### 标准声明

```go
var 变量名 变量类型
```

### 批量声明

```go
var (
    name string  //*
    age int      //0
    isOk bool     //false
)
```

### 变量的初始化

```go
var 变量名 类型 = 表达式
```

### 类型推导

```go
var name = "Q1mi"
var age = 18
```

### 短变量声明

在函数内部，可以使用更简略的 := 方式声明并初始化变量。

```go
func main(){
    n:=11
    fmt.Println(n)
}
```

### 匿名变量

在使用多重赋值时，如果想要忽略某个值，可以使用匿名变量（anonymous variable）。 匿名变量用一个下划线\_表示，

```go
func foo() (int, string) {
	return 10, "Q1mi"
}
func main() {
	x, _ := foo()
	_, y := foo()
	fmt.Println("x=", x)
	fmt.Println("y=", y)
}
```

匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明。 (在 Lua 等编程语言里，匿名变量也被叫做哑元变量。)

- 注意事项

1. 函数外的每个语句都必须以关键字开始（var、const、func 等）
2. :=不能使用在函数外。
3. \_多用于占位，表示忽略值

# 常量

相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。 常量的声明和变量声明非常类似，只是把`var`换成了`const`，常量在定义的时候必须赋值。

## 声明

```go
const pi = 3.1415
const e = 2.7182
```

声明了`pi`和`e`这两个常量之后，在整个程序运行期间它们的值都不能再发生变化了。

## 批量申明

const 同时声明多个常量时，如果省略了值则表示和上面一行的值相同

```go
const (
    n1 = 100
    n2
    n3
)
```

```go
100,100,100
```

## iota

`iota`是 go 语言的常量计数器，只能在常量的表达式中使用。

`iota`在 const 关键字出现时将被重置为 0。const 中每新增一行常量声明将使`iota`计数一次(iota 可理解为 const 语句块中的行索引)。 使用 iota 能简化定义，在定义枚举时很有用。

```go
const (
		n1 = iota //0
		n2        //1
		n3        //2
		n4        //3
	)
```

### 使用`_`跳过某个值

```go
const (
		n1 = iota //0
		n2        //1
		_
		n4        //3
	)
```

### `iota`声明中间插队

```go
const (
		n1 = iota //0
		n2 = 100  //100
		n3 = iota //2
		n4        //3
	)
	const n5 = iota //0
```

### 定义数量级

（这里的`<<`表示左移操作，`1<<10`表示将 1 的二进制表示向左移 10 位，也就是由`1`变成了`10000000000`，也就是十进制的 1024。同理`2<<2`表示将 2 的二进制表示向左移 2 位，也就是由`10`变成了`1000`，也就是十进制的 8。）

```go
const (
		_  = iota
		KB = 1 << (10 * iota)
		MB = 1 << (10 * iota)
		GB = 1 << (10 * iota)
		TB = 1 << (10 * iota)
		PB = 1 << (10 * iota)
	)
```

### 多个`iota`定义在一行

```go
const (
		a, b = iota + 1, iota + 2 //1,2
		c, d                      //2,3
		e, f                      //3,4
	)
```

# 基本数据类型

## 整型

整型分为以下两个大类： 按长度分为：int8、int16、int32、int64 对应的无符号整型：uint8、uint16、uint32、uint64

其中，`uint8`就是我们熟知的`byte`型，`int16`对应 C 语言中的`short`型，`int64`对应 C 语言中的`long`型

|  类型  | 描述                                                           |
| :----: | -------------------------------------------------------------- |
| uint8  | 无符号 8 位整型 (0 到 255)                                     |
| uint16 | 无符号 16 位整型 (0 到 65535)                                  |
| uint32 | 无符号 32 位整型 (0 到 4294967295)                             |
| uint64 | 无符号 64 位整型 (0 到 18446744073709551615)                   |
|  int8  | 有符号 8 位整型 (-128 到 127)                                  |
| int16  | 有符号 16 位整型 (-32768 到 32767)                             |
| int32  | 有符号 32 位整型 (-2147483648 到 2147483647)                   |
| int64  | 有符号 64 位整型 (-9223372036854775808 到 9223372036854775807) |

## 特殊整型

|  类型   | 描述                                                     |
| :-----: | :------------------------------------------------------- |
|  uint   | 32 位操作系统上就是`uint32`，64 位操作系统上就是`uint64` |
|   int   | 32 位操作系统上就是`int32`，64 位操作系统上就是`int64`   |
| uintptr | 无符号整型，用于存放一个指针                             |

**注意：** 在使用`int`和 `uint`类型时，不能假定它是 32 位或 64 位的整型，而是考虑`int`和`uint`可能在不同平台上的差异。

**注意事项** 获取对象的长度的内建`len()`函数返回的长度可以根据不同平台的字节长度进行变化。实际使用中，切片或 map 的元素数量等都可以用`int`来表示。在涉及到二进制传输、读写文件的结构描述时，为了保持文件的结构不会受到不同编译目标平台字节长度的影响，不要使用`int`和 `uint`。

## 八进制和十六进制

```go
package main

import "fmt"

func main(){
	// 十进制
	var a int = 10
	fmt.Printf("%d \n", a)  // 10
	fmt.Printf("%b \n", a)  // 1010  占位符%b表示二进制

	// 八进制  以0开头
	var b int = 077
	fmt.Printf("%o \n", b)  // 77

	// 十六进制  以0x开头
	var c int = 0xff
	fmt.Printf("%x \n", c)  // ff
	fmt.Printf("%X \n", c)  // FF
}
```

## 浮点数

Go 语言支持两种浮点型数：`float32`和`float64`。这两种浮点型数据格式遵循`IEEE 754`标准： `float32` 的浮点数的最大范围约为 `3.4e38`，可以使用常量定义：`math.MaxFloat32`。 `float64` 的浮点数的最大范围约为 `1.8e308`，可以使用一个常量定义：`math.MaxFloat64`

打印浮点数时，可以使用`fmt`包配合动词`%f`

```go
package main
import (
        "fmt"
        "math"
)
func main() {
        fmt.Printf("%f\n", math.Pi)
        fmt.Printf("%.2f\n", math.Pi)
}
```

## 复数

complex64 和 complex128

```go
var c1 complex64
c1 = 1 + 2i
var c2 complex128
c2 = 2 + 3i
fmt.Println(c1)
fmt.Println(c2)
```

## 布尔值

Go 语言中以`bool`类型进行声明布尔型数据，布尔型数据只有`true（真）`和`false（假）`两个值。

**注意：**

1. 布尔类型变量的默认值为`false`。
2. Go 语言中不允许将整型强制转换为布尔型.
3. 布尔型无法参与数值运算，也无法与其他类型进行转换。

## 字符串

Go 语言中的字符串以原生数据类型出现，使用字符串就像使用其他原生数据类型（int、bool、float32、float64 等）一样。 Go 语言里的字符串的内部实现使用`UTF-8`编码。 字符串的值为`双引号(")`中的内容，可以在 Go 语言的源码中直接添加非 ASCII 码字符

### 字符串转义符

Go 语言的字符串常见转义符包含回车、换行、单双引号、制表符等，如下表所示。

| 转义符 | 含义                               |
| :----: | :--------------------------------- |
|  `\r`  | 回车符（返回行首）                 |
|  `\n`  | 换行符（直接跳到下一行的同列位置） |
|  `\t`  | 制表符                             |
|  `\'`  | 单引号                             |
|  `\"`  | 双引号                             |
|  `\\`  | 反斜杠                             |

## 多行字符串

```go
s1 := `第一行
第二行
第三行
`
fmt.Println(s1)
```

## 字符串的常用操作

| 方法                                | 介绍           |
| :---------------------------------- | :------------- |
| len(str)                            | 求长度         |
| +或 fmt.Sprintf                     | 拼接字符串     |
| strings.Split                       | 分割           |
| strings.contains                    | 判断是否包含   |
| strings.HasPrefix,strings.HasSuffix | 前缀/后缀判断  |
| strings.Index(),strings.LastIndex() | 子串出现的位置 |
| strings.Join(a[]string, sep string) | join 操作      |

## byte 和 rune 类型

当需要处理中文、日文或者其他复合字符时，则需要用到`rune`类型。`rune`类型实际是一个`int32`。

```go
// 遍历字符串
func traversalString() {
	s := "hello沙河"
	for i := 0; i < len(s); i++ { //byte
		fmt.Printf("%v(%c) ", s[i], s[i])
	}
	fmt.Println()
	for _, r := range s { //rune
		fmt.Printf("%v(%c) ", r, r)
	}
	fmt.Println()
}
```

输出

```bash
104(h) 101(e) 108(l) 108(l) 111(o) 230(æ) 178(²) 153() 230(æ) 178(²) 179(³)
104(h) 101(e) 108(l) 108(l) 111(o) 27801(沙) 27827(河)
```

## 修改字符串

要修改字符串，需要先将其转换成`[]rune`或`[]byte`，完成后再转换为`string`。无论哪种转换，都会重新分配内存，并复制字节数组。

```go
func changeString() {
	s1 := "big"
	// 强制类型转换
	byteS1 := []byte(s1)
	byteS1[0] = 'p'
	fmt.Println(string(byteS1))

	s2 := "白萝卜"
	runeS2 := []rune(s2)
	runeS2[0] = '红'
	fmt.Println(string(runeS2))
}
```

## 类型转换

Go 语言中只有强制类型转换，没有隐式类型转换。该语法只能在两个类型之间支持相互转换的时候使用。

### 基本语法

```bash
T(表达式)
```

# 运算符

Go 语言内置的运算符有：

1. 算术运算符
2. 关系运算符
3. 逻辑运算符
4. 位运算符
5. 赋值运算符

## 算数运算符

| 运算符 | 描述 |
| :----: | :--: |
|   +    | 相加 |
|   -    | 相减 |
|   \*   | 相乘 |
|   /    | 相除 |
|   %    | 求余 |

**注意：** `++`（自增）和`--`（自减）在 Go 语言中是单独的语句，并不是运算符。

## 关系运算符

| 运算符 |                              描述                              |
| :----: | :------------------------------------------------------------: |
|   ==   |     检查两个值是否相等，如果相等返回 True 否则返回 False。     |
|   !=   |   检查两个值是否不相等，如果不相等返回 True 否则返回 False。   |
|   >    |   检查左边值是否大于右边值，如果是返回 True 否则返回 False。   |
|   >=   | 检查左边值是否大于等于右边值，如果是返回 True 否则返回 False。 |
|   <    |   检查左边值是否小于右边值，如果是返回 True 否则返回 False。   |
|   <=   | 检查左边值是否小于等于右边值，如果是返回 True 否则返回 False。 |

## 逻辑运算符

| 运算符 |                                  描述                                   |
| :----: | :---------------------------------------------------------------------: |
|   &&   | 逻辑 AND 运算符。 如果两边的操作数都是 True，则为 True，否则为 False。  |
|  \|\|  | 逻辑 OR 运算符。 如果两边的操作数有一个 True，则为 True，否则为 False。 |
|   !    |      逻辑 NOT 运算符。 如果条件为 True，则为 False，否则为 True。       |

## 位运算符

位运算符对整数在内存中的二进制位进行操作。

| 运算符 |                                            描述                                             |
| :----: | :-----------------------------------------------------------------------------------------: |
|   &    |                  参与运算的两数各对应的二进位相与。 （两位均为 1 才为 1）                   |
|   \|   |                参与运算的两数各对应的二进位相或。 （两位有一个为 1 就为 1）                 |
|   ^    | 参与运算的两数各对应的二进位相异或，当两对应的二进位相异时，结果为 1。 （两位不一样则为 1） |
|   <<   | 左移 n 位就是乘以 2 的 n 次方。 “a<<b”是把 a 的各二进位全部左移 b 位，高位丢弃，低位补 0。  |
|   >>   |           右移 n 位就是除以 2 的 n 次方。 “a>>b”是把 a 的各二进位全部右移 b 位。            |

## 赋值运算符

| 运算符 |                      描述                      |
| :----: | :--------------------------------------------: |
|   =    | 简单的赋值运算符，将一个表达式的值赋给一个左值 |
|   +=   |                  相加后再赋值                  |
|   -=   |                  相减后再赋值                  |
|  \*=   |                  相乘后再赋值                  |
|   /=   |                  相除后再赋值                  |
|   %=   |                  求余后再赋值                  |
|  <<=   |                   左移后赋值                   |
|  >>=   |                   右移后赋值                   |
|   &=   |                  按位与后赋值                  |
|  \|=   |                  按位或后赋值                  |
|   ^=   |                 按位异或后赋值                 |

# 流程控制

## if else(分支结构)

### if 条件判断基本写法

```go
if 表达式1 {
    分支1
} else if 表达式2 {
    分支2
} else{
    分支3
}
```

### if 条件判断特殊写法(局部变量)

```go
if score := 65; score >= 90 {
		fmt.Println("A")
	} else if score > 75 {
		fmt.Println("B")
	} else {
		fmt.Println("C")
	}
```

## for 循环

```bash
for 初始语句;条件表达式;结束语句{
    循环体语句
}
```

- for 循环的初始语句可以被忽略，但是初始语句后的分号必须要写

```go
func forDemo2() {
	i := 0
	for ; i < 10; i++ {
		fmt.Println(i)
	}
}
```

- for 循环的初始语句和结束语句都可以省略

```go
func forDemo3() {
	i := 0
	for i < 10 {
		fmt.Println(i)
		i++
	}
}
```

## 无限循环

```go
for {
    循环体语句
}
```

for 循环可以通过`break`、`goto`、`return`、`panic`语句强制退出循环

## for range(键值循环)

Go 语言中可以使用`for range`遍历数组、切片、字符串、map 及通道（channel）。 通过`for range`遍历的返回值有以下规律：

1. 数组、切片、字符串返回索引和值。
2. map 返回键和值。
3. 通道（channel）只返回通道内的值。

```go
s:="hello南京"
for i,v:=range s{
	fmt.Printf("%d %c\n",i,v)
}
```

## switch case

```go
func switchDemo1() {
	finger := 3
	switch finger {
	case 1:
		fmt.Println("大拇指")
	case 2:
		fmt.Println("食指")
	case 3:
		fmt.Println("中指")
	case 4:
		fmt.Println("无名指")
	case 5:
		fmt.Println("小拇指")
	default:
		fmt.Println("无效的输入！")
	}
}
```

## break(跳出循环)

```go
	for i:=0;i<10;i++{
		if i==5{
			break
		}
		fmt.Println(i)
	}
	fmt.Println("结束")
```

## continue(继续下次循环)

```go
for i:=0;i<10;i++{
		if i==5{
			continue
		}
		fmt.Println(i)
	}
	fmt.Println("结束")
```

## goto

`goto`语句通过标签进行代码间的无条件跳转。`goto`语句可以在快速跳出循环、避免重复退出上有一定的帮助。Go 语言中使用`goto`语句能简化一些代码的实现过程。 例如双层嵌套的 for 循环要退出时：

```go
	var flag=false
	for i:=0;i<10;i++{
		for j:='A';j<'Z';j++{
			if j=='C'{
				flag=true
				break //跳出内层循环
			}
			fmt.Printf("%v-%c\n",i,j)
		}
		if flag{
			break
		}
	}
```

使用 goto

```go
for i:=0;i<10;i++{
		for j:='A';j<'Z';j++{
			if j=='C'{
				goto xx
			}
			fmt.Printf("%v-%c\n",i,j)
		}

	}
xx:
	fmt.Println("结束")
```

# 数组

## 数组定义

```bash
var 数组变量名 [元素数量]T
```

## 数组的初始化

### 方式 1

```go
a1=[3]bool{true,true,true}
fmt.Println(a1)
```

### 方式 2

```go
a100:=[10]int{0,1,2,3,4,5,6,7,8,9}
fmt.Println(a100)
```

### 方式 3(根据索引初始化)

```go
a3:=[5]int{0:1,2:6}
fmt.Println(a3)
```

## 数组遍历

### 1.根据索引

```go
cityS := [...]string{"北京", "上海", "深圳"}
for i:=0;i<len(cityS);i++{
		fmt.Println(cityS[i])
	}
```

### 2.for range

```go
for i,v:=range cityS{
		fmt.Println(i,v)
	}
```

## 多维数组

```go
a := [3][2]string{
		{"北京", "上海"},
		{"广州", "深圳"},
		{"成都", "重庆"},
	}
	fmt.Println(a) //[[北京 上海] [广州 深圳] [成都 重庆]]
	fmt.Println(a[2][1]) //支持索引取值:重庆
```

### 多维数组遍历

```go
	a := [3][2]string{
		{"北京", "上海"},
		{"广州", "深圳"},
		{"成都", "重庆"},
	}
	for _, v1 := range a {
		for _, v2 := range v1 {
			fmt.Printf("%s\t", v2)
		}
		fmt.Println()
	}
```

**注意：** 多维数组**只有第一层**可以使用`...`来让编译器推导数组长度。例如：

```go
//支持的写法
a := [...][2]string{
	{"北京", "上海"},
	{"广州", "深圳"},
	{"成都", "重庆"},
}
//不支持多维数组的内层使用...
b := [3][...]string{
	{"北京", "上海"},
	{"广州", "深圳"},
	{"成都", "重庆"},
}
```
