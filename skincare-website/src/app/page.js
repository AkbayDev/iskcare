"use client";

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/MagneticButton';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const [lang, setLang] = useState('fr');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const containerRef = useRef(null);
    const galleryTrackRef = useRef(null);
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    const t = translations[lang];
    const bookingUrl = "https://salonkee.be/salon/institut-skincare-project";
    const whatsappUrl = "https://wa.me/32486218288";

    useGSAP(() => {
        // Parallax Background Swirls
        gsap.to(".blob-1", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".blob-2", {
            yPercent: 30,
            xPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".blob-3", {
            yPercent: -50,
            xPercent: -20,
            rotate: 45,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Hero title animations
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

        // We don't need the drawer animation anymore since we use CSS transitions and inline rendering
    }, { dependencies: [lang], scope: containerRef });

    const handleCategoryClick = (cat) => {
        if (selectedCategory?.id === cat.id) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(cat);
            // Scroll to the beginning of the track so the item aligns left
            if (galleryTrackRef.current) {
                gsap.to(galleryTrackRef.current, { scrollLeft: 0, duration: 0.6, ease: 'power3.out' });
            }
        }
    };

    return (
        <div ref={containerRef}>
            {/* FLUID DYNAMIC BACKGROUND */}
            <div className="global-background-container">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            {/* FLOATING NAVIGATION */}
            <nav className="nav-island glass-panel" aria-label="Main Navigation">
                <a href="#philosophy" className="nav-link">{t.nav.philosophy}</a>
                <a href="#treatments" className="nav-link">{t.nav.treatments}</a>
                
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn hoverable">
                    {t.nav.book}
                </a>

                <div className="lang-toggle-minimal">
                    <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                    <span>/</span>
                    <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
                </div>
            </nav>

            <main>
                {/* DREAM HERO */}
                <section className="hero-dream" id="home">
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

                {/* TESTIMONIALS */}
                <section className="testimonials-section reveal" aria-label="Client testimonials" style={{ padding: 'var(--space-lg) var(--space-sm)', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <span className="text-caption" style={{ display: 'block', marginBottom: '0.75rem' }}>{t.testimonials.subtitle}</span>
                    <h2 style={{ marginBottom: '3rem', fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}>{t.testimonials.title}</h2>

                    {/* Google Stars */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '3rem' }}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--c-accent-dark)" stroke="none">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        ))}
                    </div>

                    <div className="testimonials-carousel" style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', minHeight: '180px' }}>
                        {t.testimonials.reviews.map((review, idx) => (
                            <div
                                key={idx}
                                style={{
                                    position: idx === activeTestimonial ? 'relative' : 'absolute',
                                    top: 0, left: 0, width: '100%',
                                    opacity: idx === activeTestimonial ? 1 : 0,
                                    transform: idx === activeTestimonial ? 'translateY(0)' : 'translateY(15px)',
                                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                    pointerEvents: idx === activeTestimonial ? 'auto' : 'none'
                                }}
                            >
                                <blockquote style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--c-text)', fontFamily: 'var(--font-heading)' }}>
                                    &ldquo;{review.text}&rdquo;
                                </blockquote>
                                <p style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--c-accent-dark)' }}>— {review.author}</p>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2.5rem' }}>
                        {t.testimonials.reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTestimonial(idx)}
                                aria-label={`Testimonial ${idx + 1}`}
                                style={{
                                    width: idx === activeTestimonial ? '28px' : '10px',
                                    height: '10px',
                                    borderRadius: 'var(--radius-pill)', 
                                    border: 'none',
                                    backgroundColor: idx === activeTestimonial ? 'var(--c-accent-dark)' : 'var(--c-accent-soft)',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                            />
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
                            {t.services.categories.map((cat, idx) => {
                                const isSelected = selectedCategory?.id === cat.id;
                                const isAnySelected = selectedCategory !== null;

                                return (
                                    <React.Fragment key={idx}>
                                        <div className={`gallery-item-wrapper ${isAnySelected && !isSelected ? 'hidden' : ''}`}>
                                            <button 
                                                className="gallery-card hoverable" 
                                                style={{ border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }}
                                                onClickCapture={(e) => {
                                                    const track = galleryTrackRef.current;
                                                    if (track && track.startX && Math.abs(e.pageX - track.startX) > 10) {
                                                        e.preventDefault(); // Prevent opening if dragged
                                                    } else {
                                                        handleCategoryClick(cat);
                                                    }
                                                }}
                                            >
                                                <img src={cat.img} alt={cat.title} loading="lazy" draggable="false" />
                                                <div className="gallery-card-content">
                                                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                                    <p style={{ opacity: 0.8 }}>{cat.desc}</p>
                                                </div>
                                            </button>
                                        </div>
                                        
                                        {isSelected && (
                                            <div className="gallery-inline-details" style={{ opacity: 0, animation: 'fadeIn 0.6s forwards 0.3s' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                                    <div>
                                                        <h2 className="text-xl" style={{ marginBottom: '0.5rem' }}>{cat.title}</h2>
                                                        <p style={{ fontSize: '1.2rem', color: 'var(--c-text-light)' }}>{cat.desc}</p>
                                                    </div>
                                                    <button className="hoverable" onClick={() => setSelectedCategory(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.5 }}>✕</button>
                                                </div>
                                                
                                                <div className="treatments-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                                                    {cat.treatments?.map((treatment, i) => (
                                                        <div className="treatment-item-box" key={i} style={{ borderBottom: '1px solid var(--c-border)', paddingBottom: '0.75rem', paddingTop: '0.75rem', opacity: 0, animation: `fadeIn 0.5s forwards ${0.3 + i * 0.05}s` }}>
                                                            <div className="treatment-name" style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem', color: 'var(--c-text)' }}>{treatment.name}</div>
                                                            <div className="treatment-price" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--c-accent-dark)', fontWeight: 500 }}>{treatment.price}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div style={{ marginTop: '3rem' }}>
                                                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn hoverable" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', display: 'inline-block' }}>
                                                        {t.nav.book}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* IMMERSIVE FOOTER */}
                <footer className="footer-immersive">
                    <h2 className="text-huge footer-title">{t.footer.title}</h2>
                    
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="nav-btn hoverable" style={{ fontSize: '1.5rem', padding: '1rem 3rem', marginTop: '2rem' }}>
                        {t.footer.book}
                    </a>

                    <div className="footer-details">
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Institut+Skin+Care+Project+(Ladies+only)+Rue+de+Ramskapelle+Straat+2,+1040+Etterbeek" 
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

                    <div className="footer-map" style={{ marginTop: '3rem', width: '100%', maxWidth: '800px', height: '250px', borderRadius: 'var(--radius-card)', overflow: 'hidden', backgroundColor: '#fde8ec' }}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.508535496464!2d4.3828974!3d50.832788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c5300e70e4cd%3A0x2541e753c3464530!2sInstitut%20Skin%20Care%20Project!5e0!3m2!1sen!2sbe!4v1700000000000!5m2!1sen!2sbe" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(100%) opacity(0.5)', mixBlendMode: 'multiply' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </footer>
            </main>

            {/* WhatsApp Floating Button (Mobile Only) */}
            <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
                    <path d="M16.002 0c-8.835 0-16 7.165-16 16 0 2.82.735 5.56 2.135 8.012l-2.115 7.733 7.915-2.077c2.395 1.282 5.096 1.96 7.868 1.96h.005c8.832 0 16-7.165 16-16s-7.17-16-16.008-16zm8.13 22.955c-.342.964-1.956 1.83-2.734 1.93-.733.093-1.637.245-4.832-1.077-3.86-1.597-6.326-5.545-6.52-5.8-.19-.258-1.558-2.075-1.558-3.957 0-1.882.983-2.81 1.332-3.187.35-.378.765-.472 1.023-.472.257 0 .515.004.737.014.23.01.543-.09.848.65.31.753 1.054 2.57 1.144 2.76.092.188.152.41.026.66-.122.253-.186.41-.373.63-.187.218-.396.47-.565.65-.187.195-.386.41-.17.783.216.37 1.034 1.705 2.247 2.785 1.567 1.396 2.89 1.83 3.264 2.016.374.19.59.158.81-.093.22-.25 1.032-1.203 1.31-1.616.276-.413.553-.346.892-.22.34.125 2.146 1.01 2.515 1.196.37.19.615.285.706.442.09.158.09 1.02-.25 1.984z"></path>
                </svg>
            </a>
        </div>
    );
}