import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import TouchableOpacity from './TouchableOpacity'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const size = 'large';
class App  extends Component {
  constructor(props) {
    super(props)
    this.functionRef = null
    this.objectRef = React.createRef()
  }
  state = {}
  componentDidMount() {
    // 组件 挂载在页面上
    // 通过原生 js 操作 dom
    this.refs.strRef.innerHTML = 'String ref'
    this.functionRef.innerHTML = 'Function ref'
    this.objectRef.current.innerHTML = 'Object ref'
    this.functionRef.addEventListener('click', () => {
      console.log('function ref clicked')
    })
  }
  handlePrint1 = () => {
    console.log(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        <TouchableOpacity >
          确定
          <a href="">确定</a>
        </TouchableOpacity >
        <TouchableOpacity >
          取消
        </TouchableOpacity >

        </div>
        <h1 ref="strRef"></h1>
        <h1 ref={(node) => {
          this.functionRef = node;
        }}></h1>
        <h1 ref={this.objectRef}></h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handlePrint1}>btn1</button>
        <input type="text" value="" onChange={this.handleInputChange} />
        <button onClick={this.handlePrint2}>btn2</button>
      </div>
    );
  }
}

export default App;
