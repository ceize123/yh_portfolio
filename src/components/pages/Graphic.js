import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import graphicData from '../graphicData';
import { Contact } from '../general.js';
import door from '../../imgs/work/graphic/door.png';
import titleText from '../../imgs/work/graphic/title_text.svg';
import titleText_sm from '../../imgs/work/graphic/title_text_small.png';
import cover from '../../imgs/work/graphic/magazine_cover.png';
import introduction from '../../imgs/work/graphic/introduction.png';

function Graphic() { 
    const { title } = useParams();

    useEffect(() => {
        const timer = setTimeout(() => {
            const friends = document.querySelector(".title");
            friends.classList.add("d-inline");
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            {graphicData.filter(content => content.urlName === title).map((content, key) => (
                <div key={key} className="graphic">
                    <div className="graphicHero text-center">
                        <div className="friendsLogo">
                            <img className="door" src={door} alt="door"/>
                            <img className="title" src={titleText} alt="FRIENDS"/>
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
                    </div>
                </div>
            ))}
            <Contact />
        </main>
    )
}

export default Graphic;