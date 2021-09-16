import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import Swal from 'sweetalert2'


const ScrollToTop = (props) => {
  const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
};

export function WorkTogether() {
    return (
        <div className="workTogether">
            <h3>Thank you for viewing whole project, so the next step is...</h3>
            <h3>Let’s Work Together!!</h3>
        </div>
    )
}

export function Contact() {
    const copyText = () => {

        /* Copy the text inside the text field */
        navigator.clipboard.writeText("yungshin85530@gmail.com");
        
        /* Alert the copied text */
        Swal.fire(
        `You've copied my email!`,
        "yungshin85530@gmail.com",
        'success'
        )
    }
    return (
        <section id="contactSection" className="contactSection text-center">
            <h3>Contact</h3>
            <div className="d-flex justify-content-center">
                <div className="iconBlock">
                    <i
                        onClick={() => copyText()}
                        className="las la-envelope d-block jumping"></i>
                    <small>Email</small>
                </div>
                <div className="iconBlock">
                    <a href="https://www.linkedin.com/in/yung-shin-ko-48861215b/" target="_blank" rel="noreferrer">
                        <i className="lab la-linkedin-in d-block jumping"></i></a>
                    <small>LinkedIn</small>
                </div>
            </div>
        </section>
    )
}

export default ScrollToTop;