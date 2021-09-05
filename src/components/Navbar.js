import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../imgs/menu.png';
import close from '../imgs/close.png';

function Navbar() { 
    const handleToggle = () => {
        const category = document.querySelector(".category");
        const cross = document.querySelector(".close");
        const body = document.querySelector("body")
        category.classList.toggle("open");
        cross.classList.toggle("open");
        body.classList.toggle("fixed");
    }

    return (
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div className="home">
                        <li className="home"><Link to="/">Home</Link></li>
                    </div>
                    <div className="category">
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
                        <img
                            className="hamburger"
                            onClick={handleToggle}
                            src={menu} alt="hamburger" />
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;