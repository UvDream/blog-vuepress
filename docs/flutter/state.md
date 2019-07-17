# 状态管理
:::tip
flutter-provide官网状态管理
:::
最简单的示例:
```dart
//这个model需要继承ChangeNotifier
class Counter with ChangeNotifier {
  int _value;

  int get value => _value;

  Counter(this._value);

  void increment() {
    _value++;
    notifyListeners();
  }
}

// 界面
class CounterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final currentCounter = Provide.value<Counter>(context);

    return Column(children: [
      Provide<Counter>(
        builder: (context, child, counter) => Text('${counter.value}'),
      ),

      StreamBuilder<Counter>(
          initialData: currentCounter,
          stream: Provide.stream<Counter>(context)
              .where((counter) => counter.value % 2 == 0),
          builder: (context, snapshot) =>
              Text('Last even value: ${snapshot.data.value}')),

      FlatButton(child: Text('increment'), onPressed: currentCounter.increment),

      Text('Another widget that does not depend on the Counter'),
    ]);
  }
}

 //定义一个全局的Provide
void main() {
    final providers = Providers()
      ..provide(Provider.function((context) => Counter(0)));

    runApp(ProviderNode(
      providers: providers,
      child: CounterApp(),
    ));
}
```
