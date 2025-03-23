import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
    return (
        <div className="subscribe-container">
            <div className="subscribe-box">
                <h2 className="subscribe-title">Let’s discuss the idea</h2>
                <p className="subscribe-text">
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                </p>
                <div className="subscribe-form">
                    <input type="email" placeholder="Your email" className="subscribe-input" />
                    <button className="subscribe-button">SEND</button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: "center",
                flexDirection: 'row',
                width: '100%'
            }}>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }} style={{ textDecoration: 'none' }} className="go-top-button">GO TO TOP</a>

            </div>
        </div>
    );
};

export default SubscribeSection;
