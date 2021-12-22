import React, { Component } from 'react';
import "./style.css"
import board from "../../../../assets/board.png"
import stop from "../../../../assets/stop.png"
import { Footer } from '../../../../components/footer'
import { Link } from 'react-router-dom';
let show = false;
export default class CountDown extends Component {
    constructor(props) {
        super(props)
        let hour = Math.floor(props.duration / 3600)
        let minute = Math.floor((props.duration - hour * 3600) / 60)
        let second = (props.duration - hour * 3600 - minute * 60)
        this.state = {
            hour: hour < 10 ? '0' + hour : hour,
            minute: minute < 10 ? '0' + minute : minute,
            second: second < 10 ? '0' + second : second
        };
    }
    componentDidMount() {
        if (this.props.duration) {
            let date = new Date();
            let endTime = date.setSeconds(date.getSeconds() + Number(this.props.duration));
            this.countFun(endTime);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    countFun = (endTime) => {
        let time = endTime - new Date().getTime();
        this.timer = setInterval(() => {
            if (time > 1000) {
                time -= 1000;
                let hour = Math.floor((time / 1000 / 3600) % 24);
                let minute = Math.floor((time / 1000 / 60) % 60);
                let second = Math.floor((time / 1000) % 60);
                this.setState({
                    hour: hour < 10 ? '0' + hour : hour,
                    minute: minute < 10 ? '0' + minute : minute,
                    second: second < 10 ? '0' + second : second,
                });
                if (hour === 0 && minute === 0 && second === 0) { show = true }
            } else clearInterval(this.timer);
        }, 1000);
    };
    render() {
        return (
            <div id="countDownBox">
                <div id="countDownTitle">
                    <h1>写高数作业</h1>
                    <h2 id="countDownTime">{this.state.hour}:{this.state.minute}:{this.state.second}</h2>
                    <button id="countDownStop"><img alt="" src={stop} width="70px" height="70px" /></button>
                </div>
                <Link to='finish'><button className='finishBtn' visibility={show ? "visible" : "hidden"}>完成啦੭ ᐕ)੭*⁾⁾</button></Link>
                <img id="board" alt="" src={board} width="244px" />
                <Footer />
            </div>
        );
    }
}