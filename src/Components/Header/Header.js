import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import {isCurrentUserAdmin, isLoggedIn} from "../../connection";

function Header() {
    function logout(){
        localStorage.removeItem("pirates-token");
    }

    return (
        <section className="top-nav">
            <Link class="navbar-brand" to="/"><img className = "logo" src={logo} href = "home" alt="Pirates-logo"/></Link>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                {isCurrentUserAdmin() ?<li><Link to="/slots">My Slots</Link></li> : <></>}
                {!isLoggedIn() ?<li><Link to="/login">Login</Link></li> : <></>}
                {!isLoggedIn() ?<li><Link to="/register">Register</Link></li> : <li><Link onClick={logout} to="/login">Log Out</Link></li>}
            </ul>
        </section>
    );
}

export default Header;