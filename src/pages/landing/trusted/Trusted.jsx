import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Trusted.css';

gsap.registerPlugin(ScrollTrigger);

const firstImageArray = [
    { name: "logoImpsum.png", alt: "logoImpsum" },
    { name: "logoimpsumB.png", alt: "logoimpsumB" },
    { name: "Auto Layout Vertical (3).png", alt: "Auto Layout Vertical (3)" },
    { name: "offmax.png", alt: "offmax" },
    { name: "offmaxb.png", alt: "offmaxb" },
    { name: "offMaxT.png", alt: "offMaxT" },
    { name: "Auto Layout Vertical (6).png", alt: "Auto Layout Vertical (6)" },
];

const secondImageArray = [
    { name: "Auto Layout Vertical (1).png", alt: "Auto Layout Vertical (1)" },
    { name: "Auto Layout Vertical (2).png", alt: "Auto Layout Vertical (2)" },
    { name: "Auto Layout Vertical (4).png", alt: "Auto Layout Vertical (4)" },
    { name: "Auto Layout Vertical (5).png", alt: "Auto Layout Vertical (5)" },
    { name: "Auto Layout Vertical (6).png", alt: "Auto Layout Vertical (6)" },
    { name: "Auto Layout Vertical (7).png", alt: "Auto Layout Vertical (7)" },
    { name: "Auto Layout Vertical.png", alt: "Auto Layout Vertical" },
];

const Trusted = () => {

    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollTop = 0;

        const scrollTrigger = ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                let currentScroll = self.scroll();
                if (currentScroll > lastScrollTop) {
                    setScrollDirection("down");
                } else if (currentScroll < lastScrollTop) {
                    setScrollDirection("up");
                }
                lastScrollTop = currentScroll;
            },
        });

        return () => scrollTrigger.kill(); // Cleanup on unmount
    }, []);

    // console.log(scrollDirection);

    return (
        <div className="trusted-container">
            <div className="trusted-text">
                <div className="trusted-heading">
                    <h4>Trusted by 200+ companies around the world</h4>
                </div>
                <div className="trusted-para">
                    <p>Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.</p>
                </div>
            </div>

            {/* First row of images */}
            <div className="trusted-image">
                <Marquee
                    direction={scrollDirection !== 'up' ? 'right' : 'left'}
                >

                    {firstImageArray.map(({ name, alt }, ind) => (
                        <img key={ind} src={`./assets/${name}`} alt={alt} />
                    ))}
                </Marquee>
            </div>

            {/* Second row of images */}
            <div className="trusted-image">
                <Marquee
                    direction={scrollDirection === 'up' ? 'right' : 'left'}
                >

                    {secondImageArray.map(({ name, alt }, ind) => (
                        <img key={ind} src={`./assets/${name}`} alt={alt} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Trusted;
