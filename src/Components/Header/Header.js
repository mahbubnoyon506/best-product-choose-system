import React from 'react';
import logo from '../../logo.jpeg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-wrap px-5'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="\home" className=''>Home</a>
                <a href="\about">About</a>
                <a href="\shop">Shop</a>
                <a href="sign-up">Sign Up</a>
            </nav>
        </div>
    );
};

export default Header;