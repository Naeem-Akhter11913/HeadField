import React from 'react'
import './HeroService.css'

const HeroService = () => {
    return (
        <div className='about-hero-container'>
            <div className="hero-left">
                <img src="/assets/hero-left.png" alt="Hero Left" />
            </div>

            <div className='about-hero-center'>
                <div className='about-hero-sub-center'>

                    <h2>Branding</h2>
                    <h3>Find your niche</h3>
                    <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros</p>
                    <button type='buttom'>Build my brand</button>
                </div>
            </div>

            <div className="hero-right">
                <img src="/assets/hero-right.png" alt="Hero Right" />
            </div>
        </div>
    )
}

export default HeroService