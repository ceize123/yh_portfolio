import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
    return (
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div>
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className="d-flex">
                        <li><Link to="/about">Resume</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;