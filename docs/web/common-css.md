# 常见的`css`片段收集
## 修改`input` `placeholder`样式
```css

input{
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
  display: block;
  margin: 15px;
  border: solid 1px #dee0e9;
  padding: 0 15px;
  border-radius: 15px;
}

input::-webkit-input-placeholder{
  color: #babbc1;
  font-size: 12px;
}

```

## 改变输入框光标颜色
```css
input{ 
	caret-color: #ffd476;
}

```

## 移除`type="number"`尾部的箭头
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button { 
	-webkit-appearance: none; 
}
```

## 自定文本选中样式
```css
.text::selection { 
	color: #ffffff; 
	background-color: #ff4c9f; 
}
```

## 文本溢出省略
### 单行
```css
.one-line-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 非必须，只是为了制造一行放不下的效果 */
  max-width: 375px; 
}
```
### 多行
```css
.more-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 设置n行，也包括1 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## 

## 全站致哀
```css
body{
  filter: grayscale(1);
}
```