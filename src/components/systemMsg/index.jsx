import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import retBtn from '../../images/retBtn.png'
import './style.css'
export const Message = (params) => {
    return (
        <div className='msgContainer'>
            <div className='sysTitle'> <span className='sys'>系统提醒</span>
                <span className='timeMsg'>十二分钟</span></div>
            <p>鼓励值已满，快开始下一次专注吧！٩( 'ω' )و </p>
        </div>
    )
}


export const SystemMsg = (params) => {
    return (
        <div className='msgBox'>
            <Link to='/user'> <div className='msgTitle'><img alt='' src={retBtn} width={30} height={30} /></div></Link>
            <div className='msgList'>
                <Message />
                <Message />

            </div>
        </div>
    )
}
