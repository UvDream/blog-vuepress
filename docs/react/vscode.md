# React Vscode 插件

:::tip
插件名:Simple React Snippets
:::
|缩写|作用|
|:----:|:----:|
|imr|Import React|
|imrc|Import React / Component|
|impt|Import PropTypes|
|impc |Import React / PureComponent|
|cc |Class Component|
|ccc |Class Component With Constructor|
|sfc |Stateless Function Component|
|cdm |componentDidMount|
|cwm |componentWillMount|
|cwrp |componentWillReceiveProps|
|gds |getDerivedStateFromProps|
|scu |shouldComponentUpdate|
|cwu |componentWillUpdate|
|cdu |componentDidUpdate|
|cwu |componentWillUpdate|
|cdc |componentDidCatch|
|gsbu |getSnapshotBeforeUpdate|
|ss |setState|
|ssf |Functional setState|
|ren |render|
|rprop |Render Prop|
|hoc |Higher Order Component|

```
imr - Import React
import React from 'react';
imrc - Import React, Component
import React, { Component } from 'react';
impt - Import PropTypes
import PropTypes from 'prop-types';
impc - Import PureComponent
import React, { PureComponent } from 'react';
cc - Class Component
class | extends Component {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;
ccc - Class Component With Constructor
class | extends Component {
  constructor(props) {
    super(props);
    this.state = { | };
  }
  render() {
    return ( | );
  }
}

export default |;
sfc - Stateless Function Component
const | = props => {
  return ( | );
};

export default |;
cdm - componentDidMount
componentDidMount() {
  |
}
cwm - componentWillMount
//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  |
}
cwrp - componentWillReceiveProps
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  |
}
gds - getDerivedStateFromProps
static getDerivedStateFromProps(nextProps, prevStat) {
  |
}
scu - shouldComponentUpdate
shouldComponentUpdate(nextProps, nextState) {
  |
}
cwu - componentWillUpdate
//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
componentWillUpdate(nextProps, nextState) {
  |
}
cdu - componentDidUpdate
componentDidUpdate(prevProps, prevState) {
  |
}
cwun - componentWillUnmount
componentWillUnmount() {
  |
}
cdc - componentDidCatch
componentDidCatch(error, info) {
  |
}
gsbu - getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}
ss - setState
this.setState({ | : | });
ssf - Functional setState
this.setState(prevState => {
  return { | : prevState.| }
});
ren - render
render() {
  return (
    |
  );
}
rprop - Render Prop
class | extends Component {
  state = { | },
  render() {
    return this.props.render({
      |: this.state.|
    });
  }
}

export default |;
hoc - Higher Order Component
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
```

好的工具是利器!
