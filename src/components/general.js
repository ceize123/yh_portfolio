import React, { useRef } from 'react';


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