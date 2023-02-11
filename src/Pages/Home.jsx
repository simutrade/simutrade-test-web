import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        //react定义数据
        this.state = {
            
            username:''
        }
    }
    inputChange=(event)=>{
        let  val=this.refs.username.value;
        this.setState({
            username:val
        })
    }
    getInput=()=>{
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <input ref="username" onChange={this.inputChange}></input><button  onClick={this.getInput} >点击按钮获取input框的值</button>
            </div>
        )
    }
}
export default Home;