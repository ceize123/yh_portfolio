import React from 'react';
import graphicData from '../graphicData';
import { Contact, WorkTogether } from '../general.js';
import HorizontalScroll from 'react-scroll-horizontal'

function Pages(props) {
    const { content } = props;
    
    return (
        <>
            {content.map((item, key) => (
                <section key={key} className="page d-flex align-items-center justify-content-center">
                    <div className="jolin">
                        <img src={item} alt={item}/>
                    </div>
                </section>
            ))}
        </>
    )
}

function Magazine() {
    return (
        <main>
            {graphicData.filter(content => content.urlName === "Magazine_Design").map((content, key) => (
                <section key={key} className="magazine">
                    <section className="page d-flex align-items-center justify-content-center">
                        <div className="introduction d-flex">
                            <div className="triangle"></div>
                            <p className="align-self-end">
                                It is a six pages magazine design project. I chose a famous Taiwanese singer
                                Jolin Tsai as my subject. To match the style of the pictures, I used dark
                                blue and gold as two primary colours. It expresses the style of elegance
                                and magnificence.
                            </p>
                        </div>
                    </section>
                    <Pages content={content.pages}/>
                </section>
            ))}
            <WorkTogether />
            <Contact />
        </main>
    )
}

export default Magazine;