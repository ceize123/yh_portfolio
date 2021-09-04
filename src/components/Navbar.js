import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../imgs/menu.png';

function Navbar() { 
    const handleToggle = () => {
        const hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("open");
    }

    return (
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div>
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className="d-sm-flex category">
                        <li><Link to="/about">Resume</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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