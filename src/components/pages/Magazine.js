import React, {useEffect} from 'react';
import graphicData from '../graphicData';
import { Contact, WorkTogether } from '../general.js';
import backToTop from '../../imgs/backToTop.png';

function Pages(props) {
    const { content } = props;
    
    return (
        <>
            {content.map((item, key) => (
                <section key={key} className="page d-flex justify-content-center">
                    <div className={`jolin jolin${key}`}>
                        {/* <img src={item} alt={item}/> */}
                    </div>
                </section>
            ))}
        </>
    )
}

let scroll = 0;
let page = 0;
function changeColor(pageNow = 0) {
    let nav = document.querySelectorAll("header a");

    if (pageNow === 4) {
        nav.forEach(item => {
            item.style.color = "#94401E"
        })
    } else {
        nav.forEach(item => {
            item.style.color = "#FFF"
        })
    }
}


function FooterForMagazine() {
    const scrollTop = () => {
        let horizontalLength = document.querySelector(".element-wrapper");
        horizontalLength.style.transform = 'translateX(0%)'
        scroll = 0
        page = 0
        changeColor(page)
    };

    return (
        <footer className="d-flex justify-content-evenly align-items-center">
            <div>
                <h3>Yung-Shin Ko</h3>
                <p>Taiwanese designer, currently stay in Toronto Canada</p>
            </div>
            <div>
                <p>Don’t hesitate!  Feel free to contact me!</p>
                <p>Any cooperation is welcome.</p>
                <ul>
                    <li>Freelance: Avaliable</li>
                    <li>Employed: Avaliable</li>
                    <li>Remote: Avaliable</li>
                    <li>Language: English, Mandarin</li>
                    <li>Let’s be Friends: Sure! Why Not!</li>
                </ul>
            </div>
            <div className="backToTop" onClick={scrollTop}>
                <img src={backToTop} alt="Back to top"/>
            </div>
        </footer>
    );
}

function Magazine() {
    
    const horizontalScroll = (event) => {
        let horizontalLength = document.querySelector(".element-wrapper");
        scroll += event.deltaY

        if (scroll >= 1200) {
            if (page <= 3) {
                page++
            }
            scroll = 0

        } else if (scroll <= -1200) {
            if (page >= 1) {
                page--
            }
            scroll = 0
        }
        changeColor(page)
        
        horizontalLength.style.transform = 'translateX(-' + (page * 100) + '%)'

    }

    useEffect(() => {
        window.addEventListener("wheel", horizontalScroll);
        changeColor();
        return () => {
            window.removeEventListener("wheel", horizontalScroll);
        };
    });

    return (
        <main className="sticky-wrapper" onWheel={horizontalScroll}>
            {graphicData.filter(content => content.urlName === "Magazine_Design").map((content, key) => (
                <section className="d-flex element-wrapper" key={key}>
                    <section className="magazine d-flex">
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
                    <section className="infoSection d-flex justify-content-center">
                        <div>
                            <WorkTogether />
                            <Contact />
                            <FooterForMagazine />
                        </div>
                    </section>
                </section>
            ))}
        </main>
    )
}

export default Magazine;