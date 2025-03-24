import React, { useEffect } from 'react';
import './Hero.css';
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        gsap.fromTo(
            ".hero-text",
            { y: 400, scaleX: 1, opacity: 0, rotate: -30 },
            {
                y: 0, opacity: 1, rotate: 0, duration: 1, ease: "power3.out", delay: 0.3,
                onComplete: () => {
                    gsap.to(".hero-text", { scaleX: 1.3, duration: 0.5, ease: "power3.out" });
                }
            }
        );
    }, [])
    return (
        <div className='hero-container' id='toTop'>
            <div className="hero-left">
                <img src="/assets/hero-left.png" alt="Hero Left" />
            </div>

            <div className="hero-text" >
                Attract <br />
                <span className='gradient-text'>NewLeads</span>
                like never <br />
                before

                <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta <br />porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
                <div className='hero-btn-container'>
                    <input type="email" placeholder='Email'/>
                    <button type='button' className='attract-button' >ATTRACT</button>
                </div>
            </div>

            <div className="hero-right">
                <img src="/assets/hero-right.png" alt="Hero Right" />
            </div>
        </div>
    );
};

export default Hero;
