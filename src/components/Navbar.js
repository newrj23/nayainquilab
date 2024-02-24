import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import animat from "../Images/anim3.gif"
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className='main-nav' >
                {/* 1 logo part */}
                <div className='logo'>
                
                    <h3>Naya Inquilab</h3>
                    {/* <img src='images/Naya inq Logo 2.png' alt='Logo' /> */}
                    <img src={animat} width='250' height='150' alt='Logo' />
                    {/* <video width="200"  height="70"  autoPlay loop muted>
                        <source src={animat} />
                    </video> */}
                </div>

                {/* 2 menu part */}
                <ul className={menuOpen ? 'menu-link-mobile' : 'menu-link-desktop'}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About us</NavLink>
                    </li>
                </ul>

                {/* 3rd social media links */}
                <div className='social-media'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/Nayainquilabtvnews.fb?mibextid=D4KYlr'
                                target='_new'><FaFacebookF className="facebook" /></a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/@nayainquilabtvnews1854'
                                target='_new'><FaInstagram className="insta" /></a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/@nayainquilabtvnews1854'
                                target='_new'><FaYoutube className="youtube " /></a>
                        </li>
                    </ul>
                </div>
                {/* humburger menu start */}
                <button className='mobile-menu' onClick={() => setMenuOpen(!menuOpen)} >
                    {menuOpen ? (<FaTimes className='close-btn' />) :
                        (<RxHamburgerMenu className='open-btn' />)}
                </button>
            </nav>

            {/* hero section */}
            <div className='hero-section'>
                <p> Welcome to </p>
                <h3 className='hero'>NayaInquilab</h3>
            </div>
            {/* data-text="NayaInquilab"  */}
        </>
    );
};

export default Navbar; 
