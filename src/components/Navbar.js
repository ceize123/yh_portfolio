import React from 'react';
import { Link } from 'react-router-dom';
import close from '../imgs/close.png';

function Navbar() { 
    const handleToggle = () => {
        const menu = document.querySelector(".menu");
        const cross = document.querySelector(".close");
        const body = document.querySelector("body")
        menu.classList.toggle("open");
        cross.classList.toggle("open");
        body.classList.toggle("fixed");
    }

    const changeToRed = () => {
        let nav = document.querySelectorAll("header a");
        let hamburger = document.querySelectorAll(".hamburger rect");
        nav.forEach(item => {
            item.style.color = "#94401E"
        })
        hamburger.forEach(item => {
            item.style.fill = "#94401E"
        })
    }

    return (
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div className="home">
                        <li className="home">
                            <Link to="/"
                            onClick={changeToRed}>Home</Link>
                        </li>
                    </div>
                    <div className="menu">
                        <div className="d-sm-flex">
                            <li><Link to="/about">Resume</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </div>
                        <img className="close"
                            onClick={handleToggle}
                            src={close} alt="close" />
                    </div>
                    <div className="d-block d-sm-none">
                        <svg
                            className="hamburger"
                            onClick={handleToggle}
                            width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="4.125" rx="2" fill="#94401E"/>
                            <rect y="6.875" width="18.9677" height="4.125" rx="2" fill="#94401E"/>
                        </svg>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;