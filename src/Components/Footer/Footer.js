import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
import logo from "../../assets/logo.png";
import axios from 'axios';

function Header() {

    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Pirates</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Events</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">kofar</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">7afla</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">nar</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">oba</a></li>
                                <li><a href="http://scanfcode.com/category/android/">mashy</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">slm</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2009 All Rights Reserved by 
                        <a href="#"> Pirates</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/groups/817025162844373"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Header;