import React, {useState, useEffect} from 'react';
import graphicData from '../graphicData';
import { Contact, WorkTogether } from '../general.js';
import door from '../../imgs/work/graphic/door.png';
import titleText from '../../imgs/work/graphic/title_text.svg';
import titleText_sm from '../../imgs/work/graphic/title_text_small.svg';
import cover from '../../imgs/work/graphic/magazine_cover.png';
import introduction from '../../imgs/work/graphic/introduction.png';
import introText from '../../imgs/work/graphic/introText.png';
import introTextMobile from '../../imgs/work/graphic/introTextMobile.png';
import Footer from "../Footer.js";

function Characters(props) {
    const { content } = props;
    return (
        <>
            {content.map((item, key) => (
                <section key={key} className="characters text-center">
                    <img src={item[0]} alt={item} />
                    <img className="characterText" src={item[1]} alt={item} />
                </section>
            ))}
        </>
    )
}

function SectionWithoutCharacters(props) {
    const { content } = props;
    return (
        <>
            {content.map((item, key) => (
                <section key={key} className="features text-center">
                    <img src={item} alt={item}/>
                </section>
            ))}
        </>
    )
}

function IconGuide() { 

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
        <main className="iconGuide">
            {graphicData.filter(content => content.urlName === "Icon_Guide").map((content, key) => (
                <section key={key}>
                    <section className="iconHero text-center">
                        <div className="heroImg">
                            <img className="door enlarge" src={door} alt="door"/>
                            <img className="title enlarge" src={windowWidth > 576 ? titleText : titleText_sm} alt="FRIENDS"/>
                        </div>
                        <img src={content.iconGuideBook} alt="Icon Guide Book"/>
                        <div className="introduction text-center row">
                            <div className="col-lg-4 col-12 text-lg-start text-center">
                                <img src={cover} alt="magazine cover" />
                            </div>
                            <div className="col textSection ps-lg-5">
                                <img src={titleText_sm} alt="FRIENDS"/>
                                <img src={introduction} alt="introduction" />
                                <img src={windowWidth > 576 ? introText : introTextMobile} alt="briefIntroduction" />
                            </div>
                        </div>
                    </section>
                    <SectionWithoutCharacters content={windowWidth > 768 ? content.sectionWithoutChar : content.sectionWithoutCharMobile} />
                    <Characters content={windowWidth > 576 ? content.characters : content.charactersMobile} />
                </section>
            ))}
            <WorkTogether />
            <Contact />
            <Footer />
        </main>
    )
}

export default IconGuide;