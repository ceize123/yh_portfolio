import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
    return (
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-end mb-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Resume</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;