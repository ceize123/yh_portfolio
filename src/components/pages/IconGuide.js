import React from 'react';
import graphicData from '../graphicData';
import { Contact, WorkTogether } from '../general.js';
import door from '../../imgs/work/graphic/door.png';
import titleText from '../../imgs/work/graphic/title_text.svg';
import titleText_sm from '../../imgs/work/graphic/title_text_small.png';
import cover from '../../imgs/work/graphic/magazine_cover.png';
import introduction from '../../imgs/work/graphic/introduction.png';
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
    function changeColor() {
        let nav = document.querySelectorAll("header a");
        nav.forEach(item => {
            item.style.color = "#FFF"
        })
    }
    changeColor()

    return (
        <main className="iconGuide">
            {graphicData.filter(content => content.urlName === "Icon_Guide").map((content, key) => (
                <section key={key}>
                    <section className="iconHero text-center">
                        <div className="heroImg">
                            <img className="door enlarge" src={door} alt="door"/>
                            <img className="title enlarge" src={titleText} alt="FRIENDS"/>
                        </div>
                        <h2 className="mt-5">Icon Guide Book</h2>
                        <div className="introduction text-center row">
                            <div className="col-4 text-start">
                                <img src={cover} alt="magazine cover" />
                            </div>
                            <div className="col textSection ps-5">
                                <img src={titleText_sm} alt="FRIENDS"/>
                                <img src={introduction} alt="introduction" />
                                <p className="text-start">
                                    Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, 
                                    Chandler Bing, and Phoebe Buffay are six 20 
                                    something-year-olds living in New York City. It’s a story 
                                    about their family, love, drama, friendship, and comedy. 
                                    They all have clear personalities and characters in the show, 
                                    making them a good subject of the icon.
                                </p>
                            </div>
                        </div>
                    </section>
                    <SectionWithoutCharacters content={content.sectionWithoutChar} />
                    <Characters content={content.characters} />
                </section>
            ))}
            <WorkTogether />
            <Contact />
            <Footer />
        </main>
    )
}

export default IconGuide;