import React, { Component } from 'react'
import Community from './component/Community/Community'
import './Apponline.css'

export default class Apponline extends Component {
    render() {
        return (
            <div className='Apponline'>
                <Community></Community>
                <div className='nav'>
                    <a href="">工作区</a>
                    <a href="">社区</a>
                    <a href="">个人中心</a>
                </div>
            </div>
        )
    }
}
