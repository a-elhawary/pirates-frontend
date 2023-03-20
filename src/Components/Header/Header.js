import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import logo from "../../assets/logo.png";
import axios from 'axios';

function Header() {

    return (
        <section className="top-nav">
            <img className = "logo" src={logo} alt="Pirates-logo"/>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href = "about">About</a></li>
                <li><a href = "events">Events</a></li>
                <li><a href = "login">Login</a></li>
                <li><a href = "register">Register</a></li>
            </ul>
        </section>
    )
}

export default Header;