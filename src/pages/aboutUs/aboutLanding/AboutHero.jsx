import React from 'react'
import './AboutHero.css'

const AboutHero = () => {
    return (
        <div className='about-hero-container'>
            <div className="hero-left">
                <img src="/assets/hero-left.png" alt="Hero Left" />
            </div>

            <div className='about-hero-center'>
                <div className='about-hero-sub-center'>

                    <h2>About us</h2>
                    <h3>Shadient.co</h3>
                    <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
                    <button type='buttom'>Contact</button>
                </div>
            </div>

            <div className="hero-right">
                <img src="/assets/hero-right.png" alt="Hero Right" />
            </div>
        </div>
    )
}

export default AboutHero