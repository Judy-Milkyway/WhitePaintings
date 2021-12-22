import React, { Component } from 'react'
import { sha256_digest } from '../../sha256'
import paper from '../../../../assets/paper.png'
import axios from 'axios'

export default class Logon extends Component {
    //注册的回调
    handleLogon = () => {
        const { username, email, password } = this
        //password.value = sha256_digest(password.value + "whitepainting123")
        axios.post(
            "https://www.errequalsnil.top/passport/register",
            "username=" + username.value + "&email=" + email.value + "&password=" + password.value
        ).then(response => {
            console.log(response)
            alert("注册成功")
        }).catch(() => {
            console.log("ok")
            this.props.updateLogonNow()
        })
    }
    render() {
        return (
            <div className="login">
                <div className='title'>
                    <span>White</span>
                    <span>Painting</span>
                </div>
                <div className='logoninput'>
                    <h2 className='titleusername'>用户名</h2>
                    <input ref={(e) => { this.username = e }} className='inputusername' type="text" />
                    <h2 className='titleemail'>邮箱</h2>
                    <input ref={(e) => { this.email = e }} className='inputemail' type="text" />
                    <h2 className='titlepassword'>密码</h2>
                    <input ref={(e) => { this.password = e }} className='inputpassword' type="password" />
                </div>
                <button className="logonBtn" onClick={this.handleLogon}>注册</button>
                <div className='loginbox'>
                    <span>已有账号？</span>
                    <a href="#" onClick={this.props.updateLogonNow}>马上登录</a>
                </div>
                <img alt='' src={paper} className='paper' />
            </div>
        )
    }
}