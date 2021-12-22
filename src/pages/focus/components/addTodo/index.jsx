import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import retBtn from '../../../../assets/retBtn.png'
import "./style.css"
export const AddTodo = (props) => {
    // const [value, setValue] = useState("")
    return (
        <div className='addBox'>
            <div className='addPage'>
                <div className="addTitle">
                    <Link to='/club'><img alt="" src={retBtn} width="30px" height="30px" /></Link>
                    <h6>添加事项</h6>
                    <button onClick={props.hanldeClick}>完成</button>
                </div>
                <div className="addValue">
                    <h5>任务名称</h5>
                    <input onChange={props.handleChange} value={props.inputValue} />
                    <h5>专注时间</h5>
                    <select disabled={true}>
                        <option>25分钟</option>
                        <option>50分钟</option>
                        <option>75分钟</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
