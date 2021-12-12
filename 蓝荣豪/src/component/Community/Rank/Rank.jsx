import React, { Component } from 'react'

export default class Rank extends Component {
    render() {
        const {id,username,Totaltime} = this.props
        return (
            <div className='rank'>
                <span className='id'>{id}</span>
                <div className='messageFace'></div>
                <span className='username'>{username}</span>
                <span className='time'>{Totaltime}</span>
            </div>
        )
    }
}
