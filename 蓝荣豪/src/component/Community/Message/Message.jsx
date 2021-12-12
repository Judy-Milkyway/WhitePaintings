import React, { Component } from 'react'

export default class Message extends Component {
    render(){
        const {id,username,message,time} = this.props
        //console.log(message);
        return(
            <div className="sharelist">
                <div className="userMessage">
                    <div className="messageFace"></div>
                    <div className='userMessage2'>
                        <span className='username'>{username}</span>
                        <span className='time'>{time}</span>
                    </div>
                </div>
                <div className="Message">
                    <span>{message}</span>
                </div>
            </div>
        )
    }
}
