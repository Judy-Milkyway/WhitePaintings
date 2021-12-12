import React, { Component } from 'react'
import Message from '../Message/Message'

export default class InstantMessage extends Component {
    render() {
        const {messages} = this.props
        return(
            <div className='sharebox'>
                {
                    messages.map((message)=>{
                        return <Message key={message.id} {...message}/>
                    })
                }
            </div>
        )
    }
}