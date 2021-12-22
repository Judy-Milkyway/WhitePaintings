import React, { Component } from 'react'
import { sha256_digest } from '../../sha256'
import axios from 'axios'
import paper from '../../../../assets/paper.png'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    handleLogin = () => {
        //向后端发送请求
        const { username, password } = this
        //password.value = sha256_digest(password.value + "whitepainting123")
        //使用axios向后端发送登录请求
        axios.post(
            "https://www.errequalsnil.top/passport/login",
            "username=" + username.value + "&password=" + password.value
        ).then(response => {
            console.log(response);
            this.props.history.push('/focus')
        }).catch(() => {
            console.log("ok");
            this.props.history.push('/focus')
        })
    }
    render() {
        return (
            <div className="login">
                <div className='title'>
                    <span>White</span>
                    <span>Painting</span>
                </div>
                <div className='loginInput'>
                    <h2 className='titleusername'>用户名</h2>
                    <input ref={(e) => { this.username = e }} className='inputusername' type="text" />
                    <h2 className='titlepassword'>密码</h2>
                    <input ref={(e) => { this.password = e }} className='inputpassword' type="password" />
                </div>
                <button className="loginBtn" onClick={this.handleLogin}>登录</button>
                <div className='logonbox'>
                    <span>没有账号？</span>
                    <a href="#" onClick={this.props.updateLogonNow}>马上注册</a>
                </div>
                <img alt='' src={paper} className='paper' />
            </div>
        )
    }
}
export default withRouter(Login)


