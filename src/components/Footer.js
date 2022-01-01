import React, {useEffect, useState} from 'react';
import backToTop from '../imgs/backToTop.png';

function Footer() {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

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
        <footer className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="introduction d-flex justify-content-center">
                <div>
                    <h3>Yung-Shin Ko</h3>
                    <p>currently stay in Toronto Canada</p>
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

export default Footer;