# 常见的`css`片段收集

## 修改`input` `placeholder`样式

```css

input {
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

input::-webkit-input-placeholder {
    color: #babbc1;
    font-size: 12px;
}

```

## 改变输入框光标颜色

```css
input {
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

## 三角形

![三角形](https://pic.baixiongz.com/uploads/2021/10/08/784ba99f44faf.png)

```html

<style>

  .triangle {
    display: inline-block;
    margin-right: 10px;
    /* 基础样式 */
    border: solid 10px transparent;
  }

  /*下*/
  .triangle.bottom {
    border-top-color: #0097a7;
  }

  /*上*/
  .triangle.top {
    border-bottom-color: #b2ebf2;
  }

  /*左*/
  .triangle.left {
    border-right-color: #00bcd4;
  }

  /*右*/
  .triangle.right {
    border-left-color: #009688;
  }

</style>

<body>
<div id='app'>
  <div class='box'>
    <div class='box-inner'>
      <div class='triangle bottom'></div>
      <div class='triangle right'></div>
      <div class='triangle top'></div>
      <div class='triangle left'></div>
    </div>
  </div>
</div>
</body>
```

## 画箭头

![箭头](https://pic.baixiongz.com/uploads/2021/10/08/79c514bed6461.png)

```html

<style>

  .arrow {
    display: inline-block;
    margin-right: 10px;
    /* 基础样式 */
    width: 0;
    height: 0;
    /* 基础样式 */
    border: 16px solid;
    border-color: transparent #CDDC39 transparent transparent;
    position: relative;
  }

  .arrow::after {
    content: "";
    position: absolute;
    /* 通过位移覆盖背景 */
    right: -20px;
    top: -16px;
    border: 16px solid;
    border-color: transparent #fff transparent transparent;
  }

  /*下*/
  .arrow.bottom {
    transform: rotate(270deg);
  }

  /*上*/
  .arrow.top {
    transform: rotate(90deg);
  }

  /*左*/
  .arrow.left {
    transform: rotate(180deg);
  }

  /*右*/
  .arrow.right {
    transform: rotate(0deg);
  }


</style>

<body>
<div id='app'>
  <div class='box'>
    <div class='box-inner'>
      <div class='arrow bottom'></div>
      <div class='arrow right'></div>
      <div class='arrow top'></div>
      <div class='arrow left'></div>
    </div>
  </div>
</div>
</body>
```

## 全站致哀

```css
body {
    filter: grayscale(1);
}
```
