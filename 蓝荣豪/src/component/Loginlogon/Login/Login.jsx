import React, { Component } from 'react'
import {sha256_digest} from '../sha256'
// import axios from 'axios'

export default class Login extends Component {
    //登录的回调
    handleLogin = ()=>{
        var username = document.getElementById("loginusername").value
        var password = document.getElementById("loginpassword").value
        password = sha256_digest(password+"whitepainting123")
        console.log(password);
        //向后端发送登录请求 
        var xhr = new XMLHttpRequest();
        xhr.open("post","https://www.errequalsnil.top/passport/login",true)
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.send("username="+username+"&password="+password);
        xhr.onreadystatechange = function(){
            console.log("1");
            if(xhr.readyState===4 && xhr.status===200){
                console.log(xhr.responseText)
            }
        }
        console.log(xhr.responseText)
    }
    
    // handleLogin = ()=>{
    //     const password = sha256_digest(this.refs.password.value+"whitepainting123")
    //     //向后端发送请求
    //     axios({
    //         method:"POST",
    //         url:"https://www.errequalsnil.top/passport/login",
    //         date:{
    //             username:this.refs.username.value,
    //             password:password
    //         }
    //     }).then(response=>{
    //         console.log(response)
    //     })
    // }
    render(){
        const {changeisOnline} = this.props
        return(
            <div className="login">
                <img src="./001.png" alt=""/>
                <div className='title'>
                    <span>White</span>
                    <span>Painting</span>
                </div>
                <div className='input'>
                    <h2 className='titleusername'>用户名</h2>
                    <input id='loginusername' className='inputusername' type="text"/>
                    <h2 className='titlepassword'>密码</h2>
                    <input id='loginpassword' className='inputpassword' type="text"/>
                </div>
                <button className="loginBtn" onClick={this.handleLogin}>登录</button>
                <div className='logonbox'>
                    <span>没有账号？</span>
                    <a href="#" onClick={this.props.updateLogonNow}>马上注册</a>
                </div>
                <div className='bottomword'>
                    {/* <span>test</span> */}
                    {/* <img src="./001.png" alt="" /> */}
                </div>
                <div className='bottom'>
                    <div className='bottombox1'></div>
                    <div className='bottombox2'></div>
                    <div className='bottombox3'></div>
                </div>
            </div>
        )
    }
}


