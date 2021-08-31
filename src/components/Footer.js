import React from 'react';

function Footer() {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
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
            <div className="backToTop" onClick={scrollTop}></div>
        </footer>
    );
}

export default Footer;