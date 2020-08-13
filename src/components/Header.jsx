import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
