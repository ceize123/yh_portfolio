import React, {useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import close from '../imgs/close.png';
import resume from '../imgs/Yung-Shin_resume.png';
import { Modal } from "react-bootstrap";

const PageLoadingForHome = () => (
  <div className="pageLoading text-center">
        <div className="textSec">
            <h1>Yung-Shin Ko</h1>
            <h2>Portfolio</h2>
        </div>
    </div>
)

function Navbar() { 

    // page loading event
    const [pageLoadingEffect, setPageLoadingEffect] = useState(false);
    const pageLoadingEvent = () => {
        setPageLoadingEffect(true)
        setTimeout(function () {
            setPageLoadingEffect(false);
        }, 2500);
    };

    const [lgShow, setLgShow] = useState(false);
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
        let nav = document.querySelectorAll("header a");
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
        let nav = document.querySelectorAll("header a");
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
        { pageLoadingEffect ? <PageLoadingForHome /> : null }    
        <header>
            <div className="nav d-block">
                <ul className="d-flex justify-content-between mb-0">
                    <div className="home">
                        <li className="homeBtn">
                            <Link to="/"
                                    onClick={() => {
                                        changeToRed();
                                        pageLoadingEvent();
                                    }}>Home</Link>
                        </li>
                    </div>
                    <div className="menu">
                        <div className="d-sm-flex">
                            <li>
                                <Link
                                    to="#"
                                    onClick={windowWidth < 576 ?
                                        () => {
                                            handleToggle();
                                            setLgShow(true);
                                        } :
                                        () => { setLgShow(true); }}
                                >Resume</Link></li>
                            <li>
                                <Link
                                    onClick={windowWidth < 576 ? () => { handleToggle(); } : ""}
                                    to="/#workSection">Work</Link></li>
                            <li>
                                <Link
                                        onClick={windowWidth < 576 ? () => { handleToggle(); } : ""}
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
        <Modal size="xl"        
            show={lgShow}
            fullscreen="md-down"
            onHide={() => setLgShow(false)}
            aria-labelledby="modal-sizes-lg"
        >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modal-body">
            <img className="resume" src={resume} alt="resume" />
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Navbar;