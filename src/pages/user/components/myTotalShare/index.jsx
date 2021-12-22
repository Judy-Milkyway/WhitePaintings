import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import retBtn from '../../../../assets/retBtn.png'
import head from '../../../../assets/head.png'
import sharePicture from '../../../../assets/sharePicture.png'
const DetailShare = () => {
    return (
        <div className='detailShareBox'>
            <div className='detailShareTitle'>
                <img className="userHead" alt='' src={head} />
                <div className='IdPlusTime'>
                    <span className='id'>还没想好用户名</span>
                    <span className='time'>十二分钟前</span>
                </div>
            </div>
            <span className='detailShareContent'>完成了 写高数作业<br />不定积分真的太难了，这辈子都不想再写高数作业了。<br /><img alt='' src={sharePicture} /></span>
        </div>
    )
}
export const myTotalShare = () => {
    return (
        <div className='myTotalShareBox'>
            <div className='myTotalShareTitle'>
                <Link to='/user'><img alt='' src={retBtn} width={30} height={30} /></Link>
            </div>
            <div className='myTotalShareContent'>
                <div className='userContent'>
                    <img className="userHead" alt='' src={head} />
                    <h4>还没想好用户名</h4>
                </div>
            </div>
            <div className='detailShareList'>
                <DetailShare />
                <DetailShare />
            </div>
        </div>
    )
}
