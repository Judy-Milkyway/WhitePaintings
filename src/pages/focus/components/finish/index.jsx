import React from 'react';
import retBtn from '../../../../assets/retBtn.png'
import './style.css'
import pic from '../../../../assets/pic.png'
import { Link } from 'react-router-dom';

export const Finish = () => {
    return (
        <div className='finishBg'>
            <div className='finishBox'>
                <Link to='/'><img alt="" src={retBtn} width="30px" height="30px" className='btn' /></Link>
                <div className='finishValue'>
                    <h4>已完成！</h4>
                    <p>写高数练习作业</p>
                </div>
                <div className='engBox'>
                    <img alt='' src={pic} width={244} height={290} />
                    <p className='eng'>吾志所向，一往无前，愈挫愈勇，再接再厉。</p>
                </div>
                <Link to='/club'><button>立即分享</button></Link>


            </div>
        </div>
    )
}
