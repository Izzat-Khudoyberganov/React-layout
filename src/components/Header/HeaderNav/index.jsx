import React from "react";
import "./style.css";

import logo from "../../../assets/image/main-logo.png";
import search from "../../../assets/image/search.png";
import cart from "../../../assets/image/cart.png";
import user from "../../../assets/image/user-icon.png";
import burgerMenu from "../../../assets/image/burger.png";

const HeaderNav = () => {
    return (
        <div className='header-nav'>
            <div className='container'>
                <div className='content p-20'>
                    <a href='/' className='logo'>
                        <img src={logo} alt='logo' />
                    </a>
                    <nav className='header-nav__nav'>
                        <div className='header-nav__nav-link'>
                            <img src={search} alt='search' />
                        </div>
                        <div className='header-nav__nav-link'>
                            <img src={cart} alt='search' />
                        </div>
                        <div className='header-nav__nav-link'>
                            <img src={user} alt='search' />
                        </div>
                    </nav>
                    <button className='burger-menu'>
                        <img src={burgerMenu} alt='burger-menu-icon' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;
