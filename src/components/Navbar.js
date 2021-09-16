import React, {useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import close from '../imgs/close.png';
import resume from '../imgs/Yung-Shin_resume.png';

function Navbar() { 
    
    let nav = document.querySelectorAll("header a");
    // detect size
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.addEventListener('resize', handleResize);
        }
    }, [])

    const handleToggle = () => {
        let menuBar = document.querySelector('.nav');
        const menu = document.querySelector(".menu");
        const cross = document.querySelector(".close");
        const body = document.querySelector("body")
        menuBar.style.opacity = '1'
        menu.classList.toggle("open");
        cross.classList.toggle("open");
        body.classList.toggle("fixed");
        nav.forEach((item, idx) => {
            if (idx > 0) {
                item.style.color = "#FFF"
            }
        })
    }

    const changeToRed = () => {
        
        let hamburger = document.querySelectorAll(".hamburger rect");
        nav.forEach(item => {
            item.style.color = "#94401E"
        })
        hamburger.forEach(item => {
            item.style.fill = "#94401E"
        })
    }
    
    useEffect(() => {
        let count = 0
        let lastScroll = 0
        let menuBar = document.querySelector('.nav')
        window.onscroll = function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop === 0) {
                menuBar.style.top = '0px'
                menuBar.style.backgroundColor = 'transparent'
                menuBar.style.opacity = '1'
                menuBar.style.position = 'absolute'
            } else if (scrollTop > lastScroll) {
                lastScroll = scrollTop
                count = 0
                menuBar.style.top = '-100px'
            } else if (count > 15) {
                lastScroll = scrollTop
                menuBar.style.top = '0px'
                menuBar.style.position = 'fixed'
                menuBar.style.backgroundColor = '#FFF'
                menuBar.style.opacity = '0.95'
            } else {
                count++
            }
        }
    }, []);

    return (
    <>
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div className="home">
                        <li className="homeBtn">
                            <Link to="/"
                                onClick={changeToRed}>Home</Link>
                        </li>
                    </div>
                    <div className="menu">
                        <div className="d-sm-flex">
                            <li>
                                <Link
                                    onClick={windowWidth < 576 ? handleToggle : ""}    
                                    data-bs-toggle="modal" data-bs-target="#resumeModal"
                                >Resume</Link></li>
                            <li>
                                <Link
                                    onClick={windowWidth < 576 ? handleToggle : ""}
                                    to="/#workSection">Work</Link></li>
                            <li>
                                <Link
                                    onClick={windowWidth < 576 ? handleToggle : ""}
                                    to="/#contactSection">Contact</Link></li>
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
        <div class="modal fade" id="resumeModal" aria-labelledby="resumeModal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-md-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img className="resume" src={resume} alt="resume" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;