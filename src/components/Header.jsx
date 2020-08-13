import React from 'react'
import { NavLink } from "react-router-dom";

import Logo from '../assets/logo.png';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <ul className="header__list">
                    <li className="header__logo">
                        <img src={Logo} alt="logo page"/>
                    </li>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
