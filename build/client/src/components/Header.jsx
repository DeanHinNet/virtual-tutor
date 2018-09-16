import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => (
    <div className='' id='header'>
        <Link className='navbar' to='/'>Home</Link>
        <Link className='navbar' to='/'>How it Works</Link>
        <Link className='navbar' to='/'>Pricing</Link>
        <Link className='navbar' to='/'>Tutor List</Link>
        <Link className='navbar' to='/'>Student Sign In</Link>
        <Link className='navbar' to='/'>Tutor Sign In</Link>
        <Link className='navbar' to='/'>Become a Tutor</Link>
        <Link className='navbar' to='/'>Begin Initial 60 Minutes</Link>
    </div>
)

export default Header