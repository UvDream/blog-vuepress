# model 数据模型

## Dart基本数据类型
- Numbers
- Strings
- Booleans
- List（数组）
- Maps（字典）

## 一层数据结构
> data(数据)
```json
{
    "code": 200,
    "status": "success"
}
```
> model(模型)
```dart
class FirstLevel {
  int code;
  String status;

  FirstLevel({this.code, this.status});

  FirstLevel.fromJson(Map<String, dynamic> json) {
    code = json['code'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['code'] = this.code;
    data['status'] = this.status;
    return data;
  }
}
```

## 两层数据结构
> data(数据)
```json
{
    "code": 200,
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "老大",
            "age": "30",
            "height": "178"
        },
        {
            "id": 2,
            "name": "老二",
            "age": "18",
            "height": "175"
        }
    ]
}
```
> model(模型)

```dart
class FirstLevel {
  int code;
  String status;
  List<TwoLevel> data;

  FirstLevel({this.code, this.status, this.data});

  FirstLevel.fromJson(Map<String, dynamic> json) {
    code = json['code'];
    status = json['status'];
    if (json['data'] != null) {
      data = new List<TwoLevel>();
      json['data'].forEach((v) {
        data.add(new TwoLevel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['code'] = this.code;
    data['status'] = this.status;
    if (this.data != null) {
      data['data'] = this.data.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class TwoLevel {
  int id;
  String name;
  String age;
  String height;

  TwoLevel({this.id, this.name, this.age, this.height});

  TwoLevel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    age = json['age'];
    height = json['height'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['age'] = this.age;
    data['height'] = this.height;
    return data;
  }
}
```
## 自动生成model结构网站
[JSON to Dart](https://javiercbk.github.io/json_to_dart/)


 <Vssue title="flutter-model" />
