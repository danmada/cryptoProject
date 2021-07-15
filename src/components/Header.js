import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    return (
    <div className="header">
        <h1>CryptoKeeper</h1>
        <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/newsfeed">News Feed</NavLink>
        </nav>
    </div>
    )
}

export default Header