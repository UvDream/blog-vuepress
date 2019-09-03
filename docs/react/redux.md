# Redux 使用

首先安装

```js
npm install --save redux
```

创建 store
`index.js`

```js
import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
```

初始化仓库
`reducer.js`

```js
import { INCREMENT } from "./actionTypes";
const defaultState = {
  val: 0
};
export default (state = defaultState, action) => {
  if (action.type === INCREMENT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.val = newState.val + 1;
    return newState;
  }
  return state;
};
```

组件中获取数据

```js
import store from "../store/index";
...
   constructor(props) {
        super(props);
        this.state = store.getState();
    }
....
```

数据更新要通知界面

```js
...
 constructor(props) {
        super(props);
        this.storeChange=this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
...
 storeChange() {
        this.setState(store.getState());
    }
```

注意:state 只接受对象,以前的写法可以 state=0 初始化仓库,新版本不支持
