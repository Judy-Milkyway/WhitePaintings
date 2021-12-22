import React from 'react';
import file from "../../assets/file.png"
import club from "../../assets/club.png"
import my from "../../assets/my.png"
import "./style.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer">
            {/* <Link to='/'> <i className='footer-focus'></i></Link>
            <Link to='/club'><i className='footer-home'></i></Link>
            <Link to='/user'> <i className='footer-user'></i></Link> */}

            <Link to='/focus'> <img alt='' src={file} /></Link>
            <Link to='/club'><img alt='' src={club} /></Link>
            <Link to='/user'> <img alt='' src={my} /></Link>
        </div>
    )
}
<i></i>