# props
::: tip
 props是React中很重要的一个概念,使用props向React组件传递数据,React组件从props中取出数据,然后返回视图
:::
## 组合使用props和state
使用Counter组件更新state的value,然后将更新的state.value通过props传递给Content组件
![img](../public/img/props&state.png)

```
import React, {
    Component
} from 'react'
import PropTypes from 'prop-types';

function Content(props){
    return <p>Content组件的props:value:{props.value}</p>
}
Content.propTypes = {
    value: PropTypes.number.isRequired
};

export default class Counter extends Component{
    constructor(){
        super()
        this.state={value:0}
    }
    render(){
        return(
            <div>
                < button onClick = {
                    () => this.setState({
                        value: this.state.value + 1
                    })
                } >
                    点击
                </button>
                Counter组件的内部状态:
                <pre>{JSON.stringify(this.state,null,2)}</pre>
                <Content value={this.state.value}/>
            </div>
        )
    }
}
```
## props传递数据
MessageList=>Message=>Button
![img](../public/img/props.png)

```
import React from 'react'
import PropTypes from 'prop-types';
// 按钮
function Button(props){
    return(
        <button style={{background:props.color}}>
            {props.children}
        </button>
    )
}
Button.propType={
    color:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}

// 消息
function Message(props){
    return(
        <li>
            {props.text}<Button color={props.color}>删除</Button>
        </li>
    )
}
Message.propType={
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}
// 列表
function MessageList(){
    const color="red"
    const messages=[
        {text:"Hello"},
        {text:"React"}
    ]
    const children=messages.map((message,key)=>
        <Message key={key} text={message.text} color={color}/>
    );
    return(
        <div>
            <p>
                通过props将color逐层传递给里面的Button组件
            </p>
            <ul>
                {children}
            </ul>
        </div>
    )
}
export default MessageList;
```
