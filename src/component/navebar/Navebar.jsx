import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css';
import OverlayMenu from './OverlayMenu';
import { Link, useNavigate } from 'react-router-dom';

const Navebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinksRef = useRef(null);
    const isFirstRender = useRef(true); // Prevent animation on mount
    const navigate = useNavigate();

    const handleChange = e => {
        const value = e.target.value

        if(value === 'about')
            navigate('/about')
        else
            navigate('/')
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            gsap.to(navLinksRef.current, { y: -64 });
            return;
        }


        if (menuOpen) {
            gsap.fromTo(
                navLinksRef.current,
                { y: 0 },
                {
                    y: 160,
                    opacity: 1,
                    display: 'flex',
                    duration: 0.5,
                    ease: 'power2.out',
                    onStart: () => {
                        gsap.to(navLinksRef.current, {
                            y: 140,
                            duration: 0.5,
                            ease: 'power2.out',
                            onComplete: () => {
                                gsap.to(navLinksRef.current, {
                                    y: 115,
                                    duration: 0.5,
                                    ease: 'power2.out',
                                });
                            }
                        });
                    }
                }
            );
        } else {
            gsap.to(navLinksRef.current, {
                y: 160,
                duration: 0.9,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.to(navLinksRef.current, {
                        y: -150,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(navLinksRef.current, {
                                y: -64,
                                duration: 0.1,
                                ease: 'power2.out',
                            });
                        }
                    });
                },
            });
        }
    }, [menuOpen]);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo" onClick={() => {
                        navigate('/')
                    }}>
                        <img src="/assets/logo.png" alt="Shadient.co" />
                        <span>Shadient.co</span>
                    </div>

                    <div className="nav-right">
                        <ul className="nav-links" >
                            <select className="dropdown" onChange={handleChange}>
                                <option value="">Company</option>
                                <option value="about">About</option>
                            </select>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to='#'>Resources</Link></li>
                        </ul>

                        <button className="contact-btn">CONTACT</button>
                    </div>


                </div>

            </nav>
            <OverlayMenu reference={navLinksRef} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </>
    );
};

export default Navebar;