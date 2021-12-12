import React, { Component } from 'react'
import Loginlogon from './component/Loginlogon/Loginlogon'
import "./reset.css"
import {Link,BrowserRouter} from "react-router-dom"
import Apponline from './Apponline'

export default class App extends Component {
    // //初始化数据
    // state = {
    //     isOnline:true
    // }
    // changeisOnline = (onlineOK)=>{
    //     //改变状态
    //     this.setState({isOnline:onlineOK})
    // }
    // render(){
    //     // return  <Community changeisOnline={this.changeisOnline}/>
    //     const {isOnline} = this.state
    //     if(isOnline){
    //         return  <Community/>
    //     }else{
    //         return <Loginlogon changeisOnline={this.changeisOnline}/>
    //     }
    // }
    render(){
        return(
            <div className='App'>
                <Apponline/>
            </div>
        )
    }
}
