import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: {}
        }
    }
    render() {
        return (
            <div className={this.props.navCss} id='header'>
                <div className='wrapper-head'>
                    <Link className='navbar-item' to='/'>Home</Link>
                    <Link className='navbar-item' to='/how'>How it Works</Link>
                    <Link className='navbar-item' to='/'>Pricing</Link>
                    <Link className='navbar-item' to='/'>Tutor List</Link>
                    <Link className='navbar-item' to='/'>Student Sign In</Link>
                    <Link className='navbar-item' to='/'>Tutor Sign In</Link>
                    <Link className='navbar-item' to='/'>Become a Tutor</Link>
                    <Link className='navbar-item' to='/'>Begin Initial 60 Minutes</Link>
                </div>
            </div>
        )
    }
}

export default Header