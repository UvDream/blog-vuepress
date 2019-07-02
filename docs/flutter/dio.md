# Dio
:::tip
dio是一个强大的Dart Http请求库，支持Restful API、FormData、拦截器、请求取消、Cookie管理、文件上传/下载、超时、自定义适配器等...
:::

## 添加依赖
```dart
dependencies:
  dio: ^2.1.x
```
## 一个极简的示例
```dart
import 'package:dio/dio.dart';
void getHttp() async {
  try {
    Response response = await Dio().get("http://www.baidu.com");
    print(response);
  } catch (e) {
    print(e);
  }
}
```

 <Vssue title="dio" />