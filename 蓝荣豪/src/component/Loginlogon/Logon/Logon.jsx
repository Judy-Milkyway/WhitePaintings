import React, { Component } from 'react'
import {sha256_digest} from '../sha256'

export default class Logon extends Component {
    //注册的回调
    handleLogon = ()=>{
        var username = document.getElementById("logonusername").value
        var password = document.getElementById("logonpassword").value
        password = sha256_digest(password+"whitepainting123")
        var email = document.getElementById("logonemail").value
        //向后端发送注册请求 
        var xhr = new XMLHttpRequest();
        xhr.open("post","https://www.errequalsnil.top/passport/register",true)
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.send("username="+username+"&password="+password+"&email="+email);
        xhr.onreadystatechange = function(){
        console.log("1");
            if(xhr.readyState===4 && xhr.status===200){
                var date = xhr.responseText;
                console.log(xhr.responseText)
            }
        }
        console.log(xhr.responseText)
    }
    render(){
        return(
            <div className="login">
                <div className='title'>
                    <span>White</span>
                    <span>Painting</span>
                </div>
                <div className='logoninput'>
                    <h2 className='titleusername'>用户名</h2>
                    <input id='logonusername' className='inputusername' type="text"/>
                    <h2 className='titleemail'>邮箱</h2>
                    <input id='logonemail' className='inputemail' type="text"/>
                    <h2 className='titlepassword' >密码</h2>
                    <input id='logonpassword' className='inputpassword' type="text"/>
                </div>
                <button className="logonBtn" onClick={this.handleLogon}>注册</button>
                <div className='loginbox'>
                    <span>已有账号？</span>
                    <a href="#" onClick={this.props.updateLogonNow}>马上登录</a>
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

