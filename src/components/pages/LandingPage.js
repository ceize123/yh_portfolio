import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkSectionImg from '../../imgs/WorkSectionImg.svg';
import Portrait from '../../imgs/Portrait.svg';
import uiuxDetail from '../uiuxDetails';

function LandingPage() { 
    return (
        <main>
            <section className="hero">
                <div className="d-flex justify-content-center">
                    <div>
                        <img src={Portrait} alt="Portrait" />
                    </div>
                    <div className="description">
                        <h1>Yung-Shin Ko</h1>
                        <h4>I’d like to help you make life easier!</h4>
                        <p>
                                I am a UI/UX designer. My job is to transform a
                                complicated concept into easy understanding. I have been
                                committed to making the design look fabulous and make
                                the user experience intuitive.
                        </p>
                    </div>
                </div>
            </section>

            <section className="skillSection">
                <h3 className="text-center">Skill</h3>
                <div className="d-flex justify-content-evenly">
                    <div className="skills">
                        <h4>UI/UX Design</h4>
                        <ul>
                            <li>Information Architecture</li>
                            <li>Persona</li>
                            <li>Journey Map</li>
                            <li>Wireframe</li>
                            <li>Mockup</li>
                            <li>Prototype</li>
                            <li>A/B Testing</li>
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
                <Link className="d-block text-center">------------Know more about me------------</Link>
            </section>

            <section className="workSection">
                <img className="workSectionBgc" src={WorkSectionImg} alt="WorkSectionImg" />
                <div className="row justify-content-center">
                    <div className="col align-self-center text-center workCat">
                        <h3>Work</h3>
                        <p>UI/UX Design</p>
                        <p>Graphic Design</p>
                        <p>Code</p>
                    </div>
                    <div className="col gallery">
                        {/* 要用map拉資料，所有資訊存到object裡面(landing page也是)。
                            參考blog.js */}
                        <div>
                            <Link to={`/works/uiux/${uiuxDetail[0].urlName}`}><img src="https://via.placeholder.com/515x309" alt="AK_Jewlery" /></Link>
                            <h4>Andrea Ko Jewelry Design Website</h4>
                            <p>Redesign the website of jewelry design courses</p>
                        </div>
                        <div>
                            <Link to={`/works/uiux/${uiuxDetail[1].urlName}`}><img src="https://via.placeholder.com/515x309" alt="Rabbit" /></Link>
                            <h4>Taiwan Rabbit Saving Association Website</h4>
                            <p>Redesign adopted process of the website. </p>
                        </div>
                        <div>
                            <Link to={`/works/uiux/${uiuxDetail[0].urlName}`}><img src="https://via.placeholder.com/515x309" alt="Mentorship" /></Link>
                            <h4>Seneca College Mentorship App</h4>
                            <p>Design a App for Seneca’s Students to find mentors on the platform.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contactSection text-center">
                <h3>Contact</h3>
                <div className="d-flex justify-content-center">
                    <div className="iconBlock">
                        <i className="las la-envelope d-block"></i>
                        <small>Email</small>
                    </div>
                    <div className="iconBlock">
                        <i className="lab la-linkedin-in d-block"></i>
                        <small>LinkedIn</small>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;