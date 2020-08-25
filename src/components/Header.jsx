import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import Logo from '../assets/logo.png';
function Header() {
    const [active, setActive] = useState('');
    useEffect(() => {
        const onScroll = e => {
          if (e.target.documentElement.scrollTop > 0) setActive(' active');
          else setActive(' ');
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    return (
        <div className={"header" +  active}>
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
                    {/* <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header
