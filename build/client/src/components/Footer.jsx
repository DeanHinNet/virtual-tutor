import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <div id='footer'>
            <Link className='navbar-item' to='/'>About Us</Link>
            <Link className='navbar-item' to='/'>Become a tutor</Link>
            <Link className='navbar-item' to='/'>Terms of Service</Link>
            <Link className='navbar-item' to='/'>Terms of Use</Link>
            <Link className='navbar-item' to='/'>Privacy</Link>
            <Link className='navbar-item' to='/'>FAQ</Link>
        </div>
    )
}

export default Footer