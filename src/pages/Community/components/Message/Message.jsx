import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        const { id, username, message, time } = this.props
        //console.log(message);
        return (
            <div className="sharelist">
                <div className="userMessage">
                    <div className="messageFace"></div>
                    <div className='userMessage2'>
                        <div className='username'>{username}</div>
                        <i></i>
                        <div className='time'>{time}</div>
                    </div>
                </div>
                <div className="Message">
                    <span>{message}</span>
                </div>
            </div>
        )
    }
}
