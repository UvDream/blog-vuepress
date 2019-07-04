# Canvas

## 基础形状
![img](../public/img/canvas1.png)
:::tip
// 1
* 绘制一个填充的矩形
* fillRect( x ,y ,width, height)
* x:起点x轴坐标
* y:起点y轴坐标
* width:矩形长
* height:矩形宽
:::
```js
var canvas1 = document.getElementById('canvas1')
var ctx1 = canvas1.getContext('2d');

ctx1.fillRect(10, 10, 100, 30)
```
:::tip
// 2
* 绘制一个矩形的边框
* strokeRect( x ,y ,width, height)
* x:起点x轴坐标
* y:起点y轴坐标
* width:矩形长
* height:矩形宽
:::
```js
var canvas2 = document.getElementById('canvas2')
var ctx2 = canvas2.getContext('2d');
drawGrid('#ccc', 10, 10, ctx2)
ctx2.strokeRect(20, 20, 90, 100)
```
:::tip
// 3
* 清除指定矩形区域，让清除部分完全透明
* clearRect( x ,y ,width, height)
* 前提需要fillReact和背景色
:::
```js
var canvas3 = document.getElementById('canvas3')
var ctx3 = canvas3.getContext('2d');

ctx3.fillStyle = "red";
ctx3.fillRect(0, 0, 300, 150);
ctx3.clearRect(10, 10, 100, 50)
```
:::tip
// 4.绘制图形步骤
* (1)需要创建路径起始点。
* (2)使用画图命令去画出路径。
* (3)把路径封闭。
* (4)一旦路径生成，就能通过描边或填充路径区域来渲染图形
>
* beginPath():新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
* closePath():闭合路径之后图形绘制命令又重新指向到上下文中
* stroke():通过线条来绘制图形轮廓
* fill():通过填充路径的内容区域生成实心的图形
:::
```js
var ctx4 = document.getElementById('canvas4').getContext('2d');
drawGrid('orange', 10, 10, ctx4);
ctx4.beginPath();
ctx4.moveTo(10, 10);
ctx4.lineTo(10, 50);
ctx4.lineTo(70, 100);
ctx4.stroke();
ctx4.closePath();

var ctx5 = document.getElementById('canvas5').getContext('2d');
drawGrid('orange', 10, 10, ctx5);
ctx5.beginPath();
ctx5.moveTo(10, 10);
ctx5.lineTo(10, 90);
ctx5.lineTo(70, 90);
ctx5.fill();
ctx5.closePath();
```
:::tip
// 5.绘制弧形
 * arc(x, y, radius, startAngle, endAngle, anticlockwise)
 * x,y:圆心坐标
 * radius:半径
 * startAngle,endAngle:开始结束弧度
 * anticlockwise:Boolean值,true逆时针方向,false顺时针方向
 * 角度与弧度的js表达式:radians=(Math.PI/180)*degrees
:::
```js
var ctx6 = document.getElementById('canvas6').getContext('2d');
drawGrid('orange', 10, 10, ctx6);
ctx6.beginPath();
ctx6.arc(100, 100, 50, 0, Math.PI * 2, true);
ctx6.fill()
ctx6.stroke();
```
:::tip
// 6.贝塞尔（bezier）以及二次贝塞尔
 * quadraticCurveTo(cp1x, cp1y, x, y):绘制二次贝塞尔曲线，x,y为结束点，cp1x,cp1y为控制点
 * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y):绘制三次贝塞尔曲线，x,y为结束点，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二
 :::
