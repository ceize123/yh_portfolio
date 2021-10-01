import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import workSectionImg from '../../imgs/workSectionImg.svg';
import workSectionImgMobile from '../../imgs/workSectionImgMobile.svg';
import portrait from '../../imgs/portrait.svg';
import portraitMobile from '../../imgs/portraitMobile.svg';
import uiuxData from '../uiuxData';
import graphicData from '../graphicData';
import codingData from '../codingData';
import { Contact, PageLoading } from '../general.js';
import Footer from "../Footer.js";
import resume from '../../imgs/Yung-Shin_resume.png';
import { Modal } from "react-bootstrap";


function WorkSection() {

    const dataAry = [uiuxData, graphicData, codingData];
    const url = ["uiux", "graphic", "coding"];
    // Work section selection event
    let [selection, setSelection] = useState(0);
    const [isActive, setActive] = useState("false");
    
    const slide = (event) => {

        // --- useful ---
        // let preSelection = event.target.getAttribute('data-key'); 

        // --- toggle slide animation ---
        setActive(!isActive);
        setTimeout(function(){ setActive("false"); }, 100);
    }

    const changeToWhite = (props) => {
        let nav = document.querySelectorAll("header a");
        let hamburger = document.querySelectorAll(".hamburger rect");
        if (selection === 1 && props === "Magazine_Design") {
            nav.forEach(item => {
                item.style.color = "#FFF"
            })
            hamburger.forEach(item => {
                item.style.fill = "#FFF"
            })
        }        
    }

    return (
        <>
            <div className="col-12 col-lg-5 col-xl-6 align-self-center text-center workCat">
                <h3>Work</h3>
                {/* mobile button */}
                <div className="d-block d-lg-none">
                    <button
                        className={selection === 0 ? 'selection' : ''}
                        onClick={() => {
                        setSelection(selection = 0);
                        slide();
                    }}>UI/UX Design</button>
                    <button
                        className={selection === 1 ? 'selection' : ''}
                        onClick={() => {
                        setSelection(selection = 1);
                        slide();
                    }}>Graphic Design</button>
                    <button
                        className={selection === 2 ? 'selection' : ''}
                        onClick={() => {
                        setSelection(selection = 2);
                        slide();
                    }}>Code</button>
                </div>
                {/* desktop text */}
                <div className="d-lg-block d-none">
                    <p
                        className={selection === 0 ? 'selection' : 'jumping'}
                        // data-key="0"
                        onClick={() => {
                            setSelection(selection = 0);
                            slide();
                        }}
                    >UI/UX Design</p>
                    <p
                        className={selection === 1 ? 'selection' : 'jumping'}
                        // data-key="1"
                        onClick={() => {
                            setSelection(selection = 1);
                            slide();
                        }}
                    >Graphic Design</p>
                    <p
                        className={selection === 2 ? 'selection' : 'jumping'}
                        // data-key="2"
                        onClick={() => {
                            setSelection(selection = 2);
                            slide();
                        }}
                    >Code</p>
                </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-6 gallery">
                {/* 要用map拉資料，所有資訊存到object裡面(landing page也是)。
                    參考blog.js */}
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {/* <div className="works">
                        <Link to={`/works/uiux/${uiuxData[0].urlName}`}><img src="https://via.placeholder.com/515x309" alt="AK_Jewlery" /></Link>
                        <h4>Andrea Ko Jewelry Design Website</h4>
                        <p>Redesign the website of jewelry design courses</p>
                    </div>
                    <div className="works">
                        <Link to={`/works/uiux/${uiuxData[1].urlName}`}><img src="https://via.placeholder.com/515x309" alt="Rabbit" /></Link>
                        <h4>Taiwan Rabbit Saving Association Website</h4>
                        <p>Redesign adopted process of the website. </p>
                    </div>
                    <div className="works">
                        <Link to={`/works/uiux/${uiuxData[2].urlName}`}><img src="https://via.placeholder.com/515x309" alt="Mentorship" /></Link>
                        <h4>Seneca College Mentorship App</h4>
                        <p>Design a App for Seneca’s Students to find mentors on the platform.</p>
                    </div> */}
                    {dataAry[selection].map((item, key) => (
                        <div className={isActive ? "works slidesIn" : "invisible"} key={key}>
                            {selection !== 2 ?
                                <Link to={`/works/${url[selection]}/${item.urlName}`} >
                                    <img
                                        onClick={() => {changeToWhite(item.urlName);}}
                                        src={item.gallery} alt={item.urlName} />
                                </Link> :
                                // for coding part
                                <a href={item.codingUrl} target="_blank" rel="noreferrer">
                                    <img src={item.gallery} alt={item.urlName} />
                                </a>}
                            
                            <h4>{item.mainTitle}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
   )
}

function LandingPage() { 
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

    return (
        <main>
            {/* <PageLoading title="Yung-Shin Ko" subtitle="Portfolio"/> */}
            <section className="hero">
                <div className="d-flex justify-content-center">
                    <div className="description">
                        <h1>Yung-Shin Ko</h1>
                        <h4>I’d like to help you make life easier!</h4>
                        <p>
                            {`${windowWidth >= 769 ? 
                            `I am a UI/UX designer. My job is to transform a
                            complicated concept into easy understanding. I have been
                            committed to making the design look fabulous and make
                            the user experience intuitive.` :
                            `I am a UI/UX designer. I have been committed to 
                            making the design look fabulous and make the user
                            experience intuitive.`}`}
                        </p>
                    </div>
                    <div>
                        <img src={windowWidth >= 576 ? portrait : portraitMobile} alt="Portrait" />
                    </div>
                </div>
            </section>

            <section className="skillSection">
                <h3 className="text-center">Skill</h3>
                <button
                    onClick={() => {setLgShow(true);}}
                    className="d-md-none d-block">Resume</button>
                <div className="d-flex flex-column flex-md-row justify-content-evenly">
                    <div className="skills">
                        <h4>UI/UX Design</h4>
                        <ul>
                            <li>User Research</li>
                            <li>Information Architecture</li>
                            <li>Wireframe</li>
                            <li>Mockup</li>
                            <li>Prototype</li>
                            <li>Testing</li>
                        </ul>
                    </div>
                    
                    <div className="skills">
                        <h4>Design Concept</h4>
                        <ul>
                            <li>10 Usability Heuristics</li>
                            <li>Reponsive Web Deisgn</li>
                        </ul>
                    </div>

                    <div className="skills">
                        <h4>Code</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>

                    <div className="skills">
                        <h4>Software</h4>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustration</li>
                            <li>Adobe After Effect</li>
                        </ul>
                    </div>
                </div>
                <Link
                    to="#"
                    onClick={() => {setLgShow(true);}}
                    className="d-md-block d-none text-center jumping">------------Resume------------</Link>
            </section>

            <section id="workSection" className="workSection">
                <img className="workSectionBgc" src={windowWidth >= 576 ? workSectionImg : workSectionImgMobile} alt="WorkSectionImg" />
                <div className="row justify-content-center">
                    <WorkSection />
                </div>
            </section>

            <Contact />
            <Footer />
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
        </main>
    );
}

export default LandingPage;