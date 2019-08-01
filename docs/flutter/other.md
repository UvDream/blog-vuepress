# 杂乱问题收集

## 图片圆边角

图片圆角不能像 web 端一样,元素外面包裹,设置外面元素的圆角实现!

![img](../public/img/img-border.png)

```dart
child: ClipRRect(
    borderRadius: BorderRadius.circular(20),
    child: FadeInImage.assetNetwork(
      placeholder: 'images/plac.png',
      image: '${SwiperList[index]['imageUrl']}',
      fit: BoxFit.fill,
    ),
  )
```

## 登录页键盘弹出页面溢出警告

```dart
Scaffold(
     resizeToAvoidBottomInset: false,
     backgroundColor: Colors.white,
     body: _buildVerticalLayout()
);
```

## 好用的占位图

- 默认效果http://temp.im/ + 尺寸

```
http://temp.im/640x260
```

- 背景色 http://temp.im/ + 尺寸 + 背景色

```
http://temp.im/640x260/ccc
```

- 字体颜色 http://temp.im/ + 尺寸 + 背景色 +字体颜色

```
http://temp.im/640x260/ff5a5f/fff
```

<Vssue title="flutter-other" />
