import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import retBtn from '../../../../assets/retBtn.png'
import './style.css'
const Message = () => {
    return (
        <div className='msgContainer'>
            <div className='sysTitle'> <span className='sys'>系统提醒</span>
                <span className='timeMsg'>十二分钟</span></div>
            <p>鼓励值已满，快开始下一次专注吧！٩( 'ω' )و </p>
        </div>
    )
}


export const SystemMsg = () => {
    return (
        <div className='msgBox'>
            <div className='msgTitle'><Link to='/user'><img alt='' src={retBtn} width={30} height={30} /></Link></div>
            <div className='msgList'>
                <Message />
                <Message />
            </div>
        </div >
    )
}
