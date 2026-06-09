"use client";

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/MagneticButton';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const [lang, setLang] = useState('en');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const containerRef = useRef(null);
    const galleryTrackRef = useRef(null);
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    const t = translations[lang];
    const bookingUrl = "https://salonkee.be/salon/institut-skincare-project";

    useGSAP(() => {
        // Hero Animations
        gsap.to(".hero-background-abstract", {
            rotate: 360,
            scale: 1.2,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.from(".hero-title-line", {
            y: 150,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.2
        });

        gsap.from(".hero-fade", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.8,
            stagger: 0.2
        });

        // Philosophy Text Reveal
        gsap.from(".phil-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".philosophy-right",
                start: "top 60%",
            }
        });

        // Note: Horizontal Gallery ScrollTrigger has been removed in favor of manual drag/arrow navigation

        // Footer Scale
        gsap.from(".footer-title", {
            scale: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer-immersive",
                start: "top 70%",
            }
        });

        // Infinite Marquee
        gsap.to(".marquee-content", {
            xPercent: -50,
            ease: "none",
            duration: 15,
            repeat: -1
        });

        // Modal Animation
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(modalRef.current, 
                { opacity: 0, backdropFilter: "blur(0px)" }, 
                { opacity: 1, backdropFilter: "blur(20px)", duration: 0.4, ease: "power2.out" }
            );
            gsap.fromTo(modalContentRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
            );
        } else {
            document.body.style.overflow = '';
        }

    }, { dependencies: [lang, selectedCategory], scope: containerRef });

    const closeModal = () => {
        gsap.to(modalRef.current, { opacity: 0, backdropFilter: "blur(0px)", duration: 0.3 });
        gsap.to(modalContentRef.current, { y: 50, opacity: 0, duration: 0.3, onComplete: () => setSelectedCategory(null) });
    };

    return (
        <div ref={containerRef}>
            {/* FLOATING NAVIGATION */}
            <nav className="nav-island glass-panel" aria-label="Main Navigation">
                <a href="#philosophy" className="nav-link">{t.nav.philosophy}</a>
                <a href="#treatments" className="nav-link">{t.nav.treatments}</a>
                
                <MagneticButton>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn">
                        {t.nav.book}
                    </a>
                </MagneticButton>

                <div className="lang-toggle-minimal">
                    <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                    <span>/</span>
                    <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
                </div>
            </nav>

            <main>
                {/* DREAM HERO */}
                <section className="hero-dream" id="home">
                    <div className="hero-background-abstract"></div>
                    <div className="hero-content">
                        <span className="text-caption hero-fade">{t.hero.kicker}</span>
                        <h1 className="text-huge">
                            {t.hero.title.split('\n').map((line, i) => (
                                <span key={i} className="split-line">
                                    <span className="hero-title-line" style={{ display: 'block' }}>{line}</span>
                                </span>
                            ))}
                        </h1>
                        <p className="hero-fade" style={{ maxWidth: '400px', fontSize: '1.2rem', color: 'var(--c-text-light)' }}>
                            {t.hero.subtitle}
                        </p>
                    </div>
                </section>

                {/* PHILOSOPHY SPLIT-SCREEN */}
                <section className="philosophy-wrapper" id="philosophy">
                    <div className="philosophy-left">
                        <img 
                            src="/images/hero.webp" 
                            alt="Skincare Expert" 
                            className="philosophy-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="philosophy-right">
                        <div className="philosophy-text-block">
                            <span className="text-caption phil-text">{t.philosophy.title}</span>
                            <h2 className="text-lg phil-text" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                                {t.philosophy.text1}
                            </h2>
                            <p className="phil-text" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{t.philosophy.text2}</p>
                            <p className="phil-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t.philosophy.text3}</p>
                        </div>
                    </div>
                </section>

                {/* INFINITE MARQUEE */}
                <section className="marquee-section">
                    <div className="marquee-content">
                        {/* Duplicate content for seamless loop */}
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div className="marquee-text" key={i}>
                                ADVANCED DERMATOLOGY <span className="marquee-separator"></span> KOREAN SKINCARE <span className="marquee-separator"></span> DEEP ANTI-AGING <span className="marquee-separator"></span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* HORIZONTAL GALLERY */}
                <section className="gallery-container" id="treatments">
                    <div className="gallery-header">
                        <h2 className="text-lg" style={{ color: 'var(--c-bg-light)' }}>
                            {t.services.title}
                        </h2>
                        <div className="gallery-controls">
                            <MagneticButton 
                                className="gallery-arrow" 
                                onClick={() => {
                                    if(galleryTrackRef.current) galleryTrackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                                }} 
                                aria-label="Scroll Left"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </MagneticButton>
                            <MagneticButton 
                                className="gallery-arrow" 
                                onClick={() => {
                                    if(galleryTrackRef.current) galleryTrackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                                }} 
                                aria-label="Scroll Right"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </MagneticButton>
                        </div>
                    </div>
                    
                    <div 
                        className="gallery-track-wrapper" 
                        ref={galleryTrackRef}
                        onMouseDown={(e) => {
                            const track = galleryTrackRef.current;
                            track.isDown = true;
                            track.startX = e.pageX; // store absolute pageX
                            track.startScrollLeft = track.scrollLeft;
                        }}
                        onMouseLeave={() => { if(galleryTrackRef.current) galleryTrackRef.current.isDown = false; }}
                        onMouseUp={() => { if(galleryTrackRef.current) galleryTrackRef.current.isDown = false; }}
                        onMouseMove={(e) => {
                            const track = galleryTrackRef.current;
                            if (!track || !track.isDown) return;
                            e.preventDefault();
                            const x = e.pageX;
                            const walk = (x - track.startX) * 1.5; 
                            track.scrollLeft = track.startScrollLeft - walk;
                        }}
                    >
                        <div className="gallery-track">
                            {t.services.categories.map((cat, idx) => (
                                <button 
                                    className="gallery-card hoverable" 
                                    key={idx}
                                    style={{ border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }}
                                    onClickCapture={(e) => {
                                        const track = galleryTrackRef.current;
                                        if (track && track.startX && Math.abs(e.pageX - track.startX) > 10) {
                                            e.preventDefault(); // Prevent opening if dragged
                                        } else {
                                            setSelectedCategory(cat);
                                        }
                                    }}
                                >
                                    <img src={cat.img} alt={cat.title} loading="lazy" draggable="false" />
                                    <div className="gallery-card-content">
                                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                        <p style={{ opacity: 0.8 }}>{cat.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IMMERSIVE FOOTER */}
                <footer className="footer-immersive">
                    <h2 className="text-huge footer-title">{t.footer.title}</h2>
                    
                    <MagneticButton>
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn" style={{ fontSize: '1.5rem', padding: '1rem 3rem', marginTop: '2rem' }}>
                            {t.footer.book}
                        </a>
                    </MagneticButton>

                    <div className="footer-details">
                        <a 
                            href="https://www.google.com/maps/place/Institut+Skincare+Project/@50.8398188,4.3879201,15z" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hoverable"
                            style={{ whiteSpace: 'pre-line', textDecoration: 'underline', textUnderlineOffset: '4px' }}
                        >
                            {t.footer.address}
                        </a>
                        <p style={{ whiteSpace: 'pre-line', marginTop: '1rem' }}>
                            <a href="tel:+32486218288" className="hoverable">+32 486 21 82 88</a><br />
                            <a href="mailto:iskcareproject@gmail.be" className="hoverable">iskcareproject@gmail.be</a>
                        </p>
                    </div>
                </footer>
                {/* MODAL FOR SERVICES */}
                {selectedCategory && (
                    <div className="service-modal-overlay" ref={modalRef} onClick={closeModal}>
                        <div className="service-modal-content" ref={modalContentRef} onClick={e => e.stopPropagation()}>
                            <button className="modal-close-btn hoverable" onClick={closeModal} aria-label="Close Modal">✕</button>
                            <h2 className="text-xl" style={{ marginBottom: '1rem' }}>{selectedCategory.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--c-text-light)', marginBottom: '2rem' }}>{selectedCategory.desc}</p>
                            
                            <div className="treatments-list">
                                {selectedCategory.treatments?.map((treatment, i) => (
                                    <div className="treatment-item" key={i}>
                                        <span className="treatment-name">{treatment.name}</span>
                                        <span className="treatment-price">{treatment.price}</span>
                                    </div>
                                ))}
                            </div>

                            <MagneticButton>
                                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', marginTop: '2rem', display: 'inline-block' }}>
                                    {t.nav.book}
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}