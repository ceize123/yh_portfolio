import React, {useState, useEffect} from 'react';
import graphicData from '../graphicData';
import { Contact, WorkTogether, PageLoading } from '../general.js';
import backToTop from '../../imgs/backToTop.png';

//global
let scroll = 0;
let page = 0;

function Pages(props) {
    const { content } = props;
    
    return (
        <>
            {content.map((item, key) => (
                <section key={key} className="page d-flex justify-content-center">
                    <img className={`d-block d-lg-none jolin${key}`} src={item} alt="magazine pages"/>
                    <div className={`d-none d-lg-block jolin jolin${key} align-self-center`}>
                    </div>
                </section>
            ))}
        </>
    )
}

function changeToWhite(pageNow = 0) {
    let nav = document.querySelectorAll("header a");
    let hamburger = document.querySelectorAll(".hamburger rect");
    if (pageNow === 4) {
        nav.forEach(item => {
            item.style.color = "#94401E"
        })
    } else {
        nav.forEach(item => {
            item.style.color = "#FFF"
        })
    }

    hamburger.forEach(item => {
        item.style.fill = "#FFF"
    })
}


function FooterForMagazine() {
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

    const scrollTop = () => {
        if (windowWidth > 992) {
            let horizontalLength = document.querySelector(".element-wrapper");
            horizontalLength.style.transform = 'translateX(0%)'
            scroll = 0
            page = 0
            changeToWhite(page)
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    return (
        <footer className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="introduction d-flex justify-content-center">
                <div>
                    <h3>Yung-Shin Ko</h3>
                    <p>{`${windowWidth > 992 ?
                        `Taiwanese designer, currently stay in Toronto Canada` :
                        `Taiwanese designer,`}`}
                    </p>
                    <p className="d-block d-lg-none">currently stay in Toronto Canada</p>
                </div>
            </div>
            <div>
                <p>{`${windowWidth > 992 ?
                    `Don’t hesitate! Feel free to contact me!` :
                    `Don’t hesitate!`}`}
                </p>
                <p className="d-block d-lg-none">Feel free to contact me!</p>
                <p>Any cooperation is welcome.</p>
                <ul>
                    <li>Freelance: Available</li>
                    <li>Employed: Available</li>
                    <li>Remote: Available</li>
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

    // scroll effect
    const horizontalScroll = (event) => {
        if (windowWidth > 992) {
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
            changeToWhite(page)
            
            horizontalLength.style.transform = 'translateX(-' + (page * 100) + '%)'
        }
    }

    useEffect(() => {
        window.addEventListener("wheel", horizontalScroll);
        changeToWhite();
        return () => {
            window.removeEventListener("wheel", horizontalScroll);
        };
    });

    return (
        <main className="sticky-wrapper" onWheel={horizontalScroll}>
            {graphicData.filter(content => content.urlName === "Magazine_Design").map((content, key) => (
                <section className="d-lg-flex element-wrapper" key={key}>
                    <PageLoading title="Graphic Design" subtitle={content.mainTitle} />
                    <section className="magazine d-lg-flex">
                        <section className="page firstPage d-flex align-items-center justify-content-center">
                            <div className="introduction d-flex justify-content-center">
                                <div className="triangle"></div>
                                <p className="align-self-lg-end">
                                    <span>I</span>t is a six pages magazine design project. I chose a famous Taiwanese singer
                                    Jolin Tsai as my subject. To match the style of the pictures, I used dark
                                    blue and gold as two primary colours. It expresses the style of elegance
                                    and magnificence.
                                </p>
                            </div>
                        </section>
                        <Pages content={windowWidth > 992 ? content.pages : content.pagesMobile}/>
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