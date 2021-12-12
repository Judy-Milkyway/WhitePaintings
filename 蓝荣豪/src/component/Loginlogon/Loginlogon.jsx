import React, { Component } from 'react'
import Login from './Login/Login'
import Logon from './Logon/Logon'
import "./loginlogon.css"

export default class Loginlogon extends Component {
    //初始化状态
    state = {logonNow:false}
    //更新状态
    updateLogonNow = ()=>{
        //获取原状态
        const logonNow = this.state.logonNow
        //修改状态
        this.setState({logonNow:!logonNow})
    }
    //单一页面切换登录、注册    
    render(){
        const {changeisOnline} = this.props
        console.log(this.props.changeisOnline)
        if (this.state.logonNow){
            return(
                <div className='loginlogon'>
                    <Logon updateLogonNow={this.updateLogonNow}/>
                </div>
            )
        }else{
            return(
                <div className='loginlogon'>
                    <Login updateLogonNow={this.updateLogonNow} changeisOnline={changeisOnline} changeisOnline={this.changeisOnline}/>
                </div> 
            )
        }
        // return <Login updateLogonNow={this.updateLogonNow} changeisOnline={changeisOnline}/>
    }
}
