import React, {useEffect} from 'react';
import { useLocation } from "react-router";


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export function Contact() {
    return (
        <section className="contactSection text-center">
            <h3>Contact</h3>
            <div className="d-flex justify-content-center">
                <div className="iconBlock">
                    <i className="las la-envelope d-block"></i>
                    <small>Email</small>
                </div>
                <div className="iconBlock">
                    <i className="lab la-linkedin-in d-block"></i>
                    <small>LinkedIn</small>
                </div>
            </div>
        </section>
    )
}

export default ScrollToTop;