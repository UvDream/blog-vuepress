# 生命周期
:::warning
旧的
:::
![img](../public/img/life1.jpeg)
:::tip
新的
:::
![img](../public/img/life.jpeg)
## 利用生命周期优化性能
父组件修改子组件数据,手动添加这种,父组件数据更新,还没主动更新到子组件,这时子组件的render函数依旧和父组件数据一起更新
如何解决此类问题
```jsx
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
      return true;
    }else{
      return false;
    }
  }
```
在shouldComponentUpdate生命周期里面对比数据,如果数据相同则返回false,不相同则返回true更新数据,这样就解决了此类问题

## 模拟接口平台
[easy-mock](https://www.easy-mock.com/ "easy-mock")