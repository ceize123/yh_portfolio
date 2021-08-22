import React from 'react';
import { useParams } from 'react-router-dom';
import uiuxDetail from '../uiuxDetails';
import { Contact } from '../general.js';

function SVGStar() {
    let lineIndex = 0;
    window.onscroll = function () {
        const star = document.querySelectorAll(".star");
        const spot = document.querySelectorAll(".star path");
        const svg = document.querySelectorAll(".star svg");
        const primaryLine = document.querySelectorAll(".star .primaryLine");
        let sectionIndex = 0;
        let sectionTop = star[0].getBoundingClientRect().top;
        
        star.forEach((item, idx) => {
            // console.log(star[idx + 1].getBoundingClientRect().top);
            if (sectionTop <= 0) {
                sectionTop = item.getBoundingClientRect().top;
                sectionIndex = idx;
            }
        })

        if (sectionTop <= 330 && sectionTop >= -500) {
            spot[sectionIndex].style.fill = "#AD8255";
            svg[sectionIndex].classList.add("animation");
        } else {
            if (sectionIndex > 0) {
                spot[sectionIndex - 1].style.fill = "#E5E5E5";
                svg[sectionIndex - 1].classList.remove("animation");
            }
        }

        if (star.length > lineIndex + 1) {
            if (star[lineIndex + 1].getBoundingClientRect().top <= 0) {
                lineIndex += 1;
            }
            primaryLine[lineIndex].style.height = `${Math.abs(330 - star[lineIndex].getBoundingClientRect().top)}px`;
        }
        // console.log(lineIndex);
        // console.log(Math.abs(330 - star[lineIndex].getBoundingClientRect().top));
        

    };

    return (
        <>
            <div className="star">
                <span className="greyLine">
                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.000782013C9.08258 0.00422383 6.28559 1.16471 4.22263 3.22767C2.15966 5.29063 0.999181 8.08762 0.995739 11.0051C0.992245 13.3892 1.77102 15.7087 3.21261 17.6077C3.21261 17.6077 3.51272 18.0028 3.56174 18.0598L12 28.0117L20.4423 18.0548C20.4864 18.0018 20.7875 17.6077 20.7875 17.6077L20.7885 17.6047C22.2293 15.7065 23.0078 13.3881 23.0043 11.0051C23.0009 8.08762 21.8404 5.29063 19.7775 3.22767C17.7145 1.16471 14.9175 0.00422383 12 0.000782013ZM15.6015 16.007L12 13.7151L8.39864 16.007L8.99887 11.9314L5.9977 9.17737L10.1993 8.67017L12 5.00274L13.9128 8.67117L18.0024 9.17737L15.0012 11.9314L15.6015 16.007Z" fill="#AD8255" />
                    </svg>
                </span>
                <span className="d-block primaryLine"></span>
            </div>
        </>
    )
}

function Research(props) {
    const { content } = props;
    
    return (
        <>
        {/* forEach: This iterates over a list and applies some operation with side 
        effects to each list member (example: saving every list item to the database) 
        and does not return anything.

        map: This iterates over a list, transforms each member of that list, and returns 
        another list of the same size with the transformed members (example: transforming 
        list of strings to uppercase). It does not mutate the array on which it is called 
        (although if passed a callback function, it may do so). */}
        {content.map((item, key) => ( // can't use forEach, it can't display properly
            <div className={item.inline === true ? 'row researchSection': 'd-block researchSection'} key={key}>
                <div className={item.inline === true ? 'col-lg-5': 'textSection'}>
                    <h4>{item.title}</h4>
                    <p>{item.paragraph}</p>
                </div>
                <div className={item.inline === true ? 'col-lg-7 text-center': ''}>
                    <img src={item.img} alt={item.title}/>
                </div>
            </div>
        ))}
        </>
    )
}

function PPAnalysis(props) {
    const { content } = props;
    const list = content.map((item, key) => (<li key={key}>{item}</li>))

    return (
        <ul>
            {list}
        </ul>
    )
}

function InformationArchitecture(props) {
    const { content } = props;

    return (
        <>
        <div className="textSection">
            <p>{content.paragraph}</p>
        </div>
        <img src={content.img} alt="InformationArchitecture" />
        </>
    )
}

function Mockup(props) {
    const { content } = props;

    return (
        <>
           {content.map((item, key) => ( // can't use forEach, it can't display properly
                <div className={item.inline === true ? 'd-flex mockupSection': 'd-block mockupSection'} key={key}>
                    <div className="textSection">
                        <h4>{item.title}</h4>
                        {/* display paragraph only if it exists */}
                        {item.paragraph !== undefined ? item.paragraph.map((paragraphs, idx, ary) => (
                            <>
                                <p>{paragraphs}</p>
                                { (ary.length > 1) && (idx + 1 !== ary.length) ? <br></br> : ""}
                            </>
                        )) : ""}
                    </div>
                    <div className={item.video !== undefined ? 'd-block videoSection' : 'd-none'}>
                        <img className={item.frame !== undefined ? 'd-inline' : 'd-none'} src={item.frame} alt="frame" />

                        <video className={item.frame !== undefined ? 'mobileVideo' : 'desktopVideo'} controls>
                            <source src={item.video} type="video/mp4" />
                        </video>
                        {item.background !== false ? <div className="mockupBgc akBgc"></div> : ""} 
                    </div>
                    
                    <div className={item.img !== undefined ? 'd-flex justify-content-center imgSection' : 'd-none'}>
                        {item.img !== undefined ? item.img.map(imgs => (<img src={imgs} alt={item.title}/>)): ""}
                        {item.background !== false ? <div className="mockupBgc akBgc"></div> : ""} 
                    </div>
                </div>
            ))}
        </>
    )
}


function Uiux() {
    const { title } = useParams();
    let stepCount = 1;

    return (
        <main>
            {/* use the result of filter function */}
            {uiuxDetail.filter(content => content.urlName === title).map((content, key) => (
                <div key={key}>
                    <section className="uiuxTitle">
                        <h2>{content.mainTitle}</h2>
                        <p>{content.description}</p>
                    </section>
                    
                    <section className="stepSection">
                        <div className={content.research !== undefined ? "d-flex" : "d-none"}>
                            <SVGStar />
                            <article>
                                <h3>Step {stepCount++}: Research</h3>
                                <Research content={content.research} />
                            </article>
                        </div>
                        <div className={content.ppAnalysis !== undefined ? "d-flex" : "d-none"}>
                            <SVGStar />
                            <article>
                                <h3>Step {stepCount++}: Pain Point Analysis</h3>
                                <PPAnalysis content={content.ppAnalysis} />
                            </article>
                        </div>
                        <div className={content.informationArchitecture !== undefined ? "d-flex" : "d-none"}>
                            <SVGStar />
                            <article>
                                <h3>Step {stepCount++}:  Information Architecture</h3>
                                <InformationArchitecture content={content.informationArchitecture} />
                            </article>
                        </div>
                        <div className={content.wireframe !== undefined ? "d-flex" : "d-none"}>
                            <SVGStar />
                            <article>
                                <h3>Step {stepCount++}: Wireframe</h3>
                                <img src={content.wireframe} alt="wireframe"/>
                            </article>
                        </div>
                        <div className={content.mockup !== undefined ? "d-flex" : "d-none"}>
                            <SVGStar />
                            <article>
                                <h3>Step {stepCount++}: Mockup</h3>
                                <Mockup content={content.mockup} />
                            </article>
                        </div>

                        <div className="d-flex">
                            <div className="star">
                                <span>
                                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.000782013C9.08258 0.00422383 6.28559 1.16471 4.22263 3.22767C2.15966 5.29063 0.999181 8.08762 0.995739 11.0051C0.992245 13.3892 1.77102 15.7087 3.21261 17.6077C3.21261 17.6077 3.51272 18.0028 3.56174 18.0598L12 28.0117L20.4423 18.0548C20.4864 18.0018 20.7875 17.6077 20.7875 17.6077L20.7885 17.6047C22.2293 15.7065 23.0078 13.3881 23.0043 11.0051C23.0009 8.08762 21.8404 5.29063 19.7775 3.22767C17.7145 1.16471 14.9175 0.00422383 12 0.000782013ZM15.6015 16.007L12 13.7151L8.39864 16.007L8.99887 11.9314L5.9977 9.17737L10.1993 8.67017L12 5.00274L13.9128 8.67117L18.0024 9.17737L15.0012 11.9314L15.6015 16.007Z" fill="#AD8255" />
                                    </svg>
                                </span>
                            </div>
                            <article className="workTogether">
                                <h3>Thank you for viewing whole project, so the next step is...</h3>
                                <h3>Let’s Work Together!!</h3>
                            </article>
                        </div>
                    </section>
                </div>
            ))}
            <Contact />
        </main>
    );
}

export default Uiux;