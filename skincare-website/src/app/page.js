"use client";

import React, { useState, useEffect } from 'react';

// Jouw vertalingen blijven precies hetzelfde
const translations = {
    en: {
        nav: { home: "Home", treatments: "Treatments", contact: "Contact" },
        hero: {
            title: "Reveal Your\nNatural Radiance",
            desc: "\"Take care of yourself today for a younger future tomorrow!\"\n\nExperience luxurious anti-aging facials and bespoke skincare treatments in our calming clinic located in the heart of Etterbeek, Brussels.",
            btn: "Book Your Consultation"
        },
        services: {
            title: "Our Service Categories",
            desc: "Explore our comprehensive range of treatments. Click on a category to see specific therapies and pricing.",
            view: "View Treatments →",
            back: "← Back to all categories",
            book: "Book an Appointment"
        },
        contact: {
            title: "Visit Our Clinic",
            desc: "We are conveniently located in the beautiful district of Etterbeek. Get in touch with us to schedule a custom consultation.",
            infoTitle: "Contact Info",
            address: "Address:",
            phone: "Phone:",
            email: "Email:",
            hoursTitle: "Opening Hours",
            hours: [
                { day: "Monday", time: "10:00 - 20:00" },
                { day: "Tuesday", time: "Closed" },
                { day: "Wednesday", time: "15:00 - 20:00" },
                { day: "Thursday", time: "11:00 - 20:30" },
                { day: "Friday", time: "11:00 - 20:00" },
                { day: "Saturday", time: "11:00 - 19:00" },
                { day: "Sunday", time: "11:00 - 15:00*" }
            ],
            hoursNote: "* Open two Sundays a month; flexible hours and open on several public holidays to adapt to client schedules.",
        },
        footer: "All rights reserved.",
        categories: {
            "korean-advanced": {
                title: "Korean Treatments & Advanced Therapies",
                desc: "Cutting-edge facial therapies including Co2, Jet plasma, and Microneedling.",
                treatments: [
                    { name: "Anti-Aging Co2 Therapy", price: "115 €" },
                    { name: "Eye Contour Lifting + Threadlift Treatment", price: "115 €" },
                    { name: "Jet Plasma + Vtox Lifting Treatment (3 Sessions)", price: "120 €" },
                    { name: "Advanced Acne Therapy", price: "95 €" },
                    { name: "Ilumin + V-Tox", price: "95 €" },
                    { name: "Peptide Microneedling + Biocellulose Mask", price: "90 €" },
                    { name: "Cold Peel (Anti-aging, reduces melasma)", price: "90 €" },
                    { name: "INFLACURE (Rosacea, couperose & inflammation)", price: "75 €" }
                ]
            },
            "deep-anti-aging": {
                title: "Deep Anti-Aging Treatments",
                desc: "Intensive treatments recommended 1 to 2 sessions per year for lasting results.",
                treatments: [
                    { name: "Cheek Skin Tightening", price: "450 €" },
                    { name: "Dark Circles Lightening", price: "350 €" },
                    { name: "Frown Lines + Forehead", price: "250 €" },
                    { name: "Brow Lift", price: "250 €" },
                    { name: "Eyelid Lift", price: "250 €" },
                    { name: "Crow's Feet Wrinkles", price: "150 €" }
                ]
            },
            "chemical-peels": {
                title: "Chemical Peels",
                desc: "Targeted peeling solutions for sensitive, acne-prone, or aging skin.",
                treatments: [
                    { name: "Chemical Peel - Sensitive Skin", price: "95 €" },
                    { name: "Chemical Peel - Anti-Acne", price: "90 €" },
                    { name: "Chemical Peel - Anti-Aging", price: "85 €" },
                    { name: "Chemical Peel - Dull Skin", price: "85 €" },
                    { name: "Chemical Peel - Hydrating", price: "85 €" }
                ]
            },
            "classic-facials": {
                title: "Classic Facials",
                desc: "Traditional facial treatments tailored to your specific skin needs.",
                treatments: [
                    { name: "Anti-Aging Facial", price: "85 €" },
                    { name: "Oily Skin Facial", price: "80 €" },
                    { name: "Sensitive Skin Facial", price: "75 €" },
                    { name: "Radiance Boost Facial", price: "65 €" }
                ]
            },
            "waxing-services": {
                title: "Waxing Services (Women)",
                desc: "Professional waxing services for smooth, hair-free skin.",
                treatments: [
                    { name: "Full Bikini + Bottom", price: "45 €" },
                    { name: "Full Legs", price: "35 €" },
                    { name: "Full Face", price: "35 €" },
                    { name: "Full Bikini", price: "35 €" },
                    { name: "High-cut Bikini", price: "30 €" },
                    { name: "Classic Bikini", price: "25 €" },
                    { name: "Half Legs", price: "25 €" },
                    { name: "Full Arms", price: "25 €" },
                    { name: "Thighs", price: "20 €" },
                    { name: "Brows + Upper Lip", price: "20 €" },
                    { name: "Underarms", price: "15 €" },
                    { name: "Intergluteal Cleft", price: "15 €" },
                    { name: "Combo: Half Legs, Underarms & Full Bikini", price: "65 €" }
                ]
            },
            "waxing-packages": {
                title: "Waxing Packages",
                desc: "Cost-effective waxing bundles for comprehensive care.",
                treatments: [
                    { name: "Full Body Package", price: "120 €" },
                    { name: "Basic Full Body Package", price: "95 €" },
                    { name: "Pre-Vacation Package", price: "80 €" },
                    { name: "Summer Body Package", price: "75 €" },
                    { name: "Express Body Package", price: "65 €" },
                    { name: "Half Legs + Classic Bikini Package", price: "55 €" },
                    { name: "Intense Bikini Package", price: "55 €" },
                    { name: "Full Bikini + Bottom Package", price: "55 €" },
                    { name: "Soft Package", price: "45 €" },
                    { name: "Essential Bikini Package", price: "40 €" }
                ]
            },
            "eye-beauty": {
                title: "Eye Beauty (Lashes & Brows)",
                desc: "Enhance your natural beauty with our lash and brow treatments.",
                treatments: [
                    { name: "Eyelash Extensions - Volume", price: "85 €" },
                    { name: "Eyelash Extensions - Natural", price: "85 €" },
                    { name: "Lash Lift & Tint", price: "60 €" },
                    { name: "Eyelash Extensions - Discovery (Partial)", price: "50 €" },
                    { name: "Lash Lift", price: "50 €" },
                    { name: "Eyelash Extension Removal", price: "25 €" },
                    { name: "Brow Tint & Shape", price: "20 €" }
                ]
            },
            "hand-foot-beauty": {
                title: "Hand & Foot Beauty (Nails)",
                desc: "Manicures, pedicures, and nail care for perfectly groomed hands and feet.",
                treatments: [
                    { name: "Gel Removal + New Gel + Manicure (Hands)", price: "70 €" },
                    { name: "Manicure & Gel Polish (Hands)", price: "50 €" },
                    { name: "Gel Removal WITH Manicure (Hands)", price: "40 €" },
                    { name: "Manicure & Classic Polish (Hands)", price: "30 €" },
                    { name: "Gel Polish WITHOUT Manicure (Hands)", price: "30 €" },
                    { name: "Gel/Acrylic Removal (Hands)", price: "30 €" },
                    { name: "Classic Manicure (Hands)", price: "25 €" },
                    { name: "Gel Removal (Hands)", price: "20 €" },
                    { name: "Pedicure & Gel Polish (Feet)", price: "70 €" },
                    { name: "Pedicure & Classic Polish (Feet)", price: "65 €" },
                    { name: "Gel Removal + New Gel (Feet)", price: "60 €" },
                    { name: "Classic Pedicure (Feet)", price: "50 €" },
                    { name: "Gel Polish (Feet)", price: "40 €" },
                    { name: "Gel Removal (Feet)", price: "20 €" }
                ]
            },
            "makeup-bridal": {
                title: "Makeup & Bridal Services",
                desc: "Professional makeup application for special occasions and weddings.",
                treatments: [
                    { name: "Radiance Facial + Choice of Makeup", price: "75 €" },
                    { name: "Evening Makeup with False Lashes", price: "60 €" },
                    { name: "Bridal Makeup", price: "55 €" },
                    { name: "Evening Makeup", price: "50 €" },
                    { name: "Makeup Trial", price: "50 €" },
                    { name: "Day Makeup", price: "45 €" },
                    { name: "Bridal Embellishment Package", price: "From 45 €" },
                    { name: "Bride Preparation Package", price: "From 45 €" }
                ]
            }
        }
    },
    fr: {
        nav: { home: "Accueil", treatments: "Soins", contact: "Contact" },
        hero: {
            title: "Révélez votre\néclat naturel",
            desc: "\"Prenez soin de vous aujourd'hui pour un avenir plus jeune demain !\"\n\nDécouvrez des soins anti-âge luxueux et des traitements sur mesure dans notre clinique apaisante au cœur d'Etterbeek, Bruxelles.",
            btn: "Réservez votre consultation"
        },
        services: {
            title: "Nos catégories de services",
            desc: "Découvrez notre gamme complète de soins. Cliquez sur une catégorie pour voir les thérapies spécifiques et les tarifs.",
            view: "Voir les soins →",
            back: "← Retour à toutes les catégories",
            book: "Réservez un rendez-vous"
        },
        contact: {
            title: "Visitez notre clinique",
            desc: "Nous sommes idéalement situés dans le magnifique quartier d'Etterbeek. Contactez-nous pour planifier une consultation personnalisée.",
            infoTitle: "Coordonnées",
            address: "Adresse :",
            phone: "Téléphone :",
            email: "E-mail :",
            hoursTitle: "Heures d'ouverture",
            hours: [
                { day: "Lundi", time: "10:00 - 20:00" },
                { day: "Mardi", time: "Fermé" },
                { day: "Mercredi", time: "15:00 - 20:00" },
                { day: "Jeudi", time: "11:00 - 20:30" },
                { day: "Vendredi", time: "11:00 - 20:00" },
                { day: "Samedi", time: "11:00 - 19:00" },
                { day: "Dimanche", time: "11:00 - 15:00*" }
            ],
            hoursNote: "* Ouvert deux dimanches par mois ; horaires flexibles et ouvert certains jours fériés pour s'adapter aux emplois du temps de nos clients.",
        },
        footer: "Tous droits réservés.",
        categories: {
            "korean-advanced": {
                title: "Soins coréens et thérapies avancées",
                desc: "Thérapies faciales de pointe comprenant le Co2, le Jet plasma et le Microneedling.",
                treatments: [
                    { name: "Thérapie Co2 Anti-âge", price: "115 €" },
                    { name: "Lifting contour de l'œil + soin liftant Threadlift", price: "115 €" },
                    { name: "Jet plasma + soin liftant Vtox (Cure de 3 séances)", price: "120 €" },
                    { name: "Thérapie avancée anti-acné", price: "95 €" },
                    { name: "Ilumin + V-Tox", price: "95 €" },
                    { name: "Microneedling aux peptides + masque biocellulaire", price: "90 €" },
                    { name: "Cold Peel (Anti-âge, réduit le mélasma)", price: "90 €" },
                    { name: "INFLACURE (Pour rosacée, couperose et inflammation)", price: "75 €" }
                ]
            },
            "deep-anti-aging": {
                title: "Soins anti-âge profonds",
                desc: "Soins intensifs recommandés 1 à 2 séances par an pour des résultats durables.",
                treatments: [
                    { name: "Relâchement cutané des joues", price: "450 €" },
                    { name: "Éclaircissement des cernes", price: "350 €" },
                    { name: "Ride du lion + front", price: "250 €" },
                    { name: "Soulèvement sourcilière", price: "250 €" },
                    { name: "Élévation de la paupière", price: "250 €" },
                    { name: "Rides de la patte d'oie", price: "150 €" }
                ]
            },
            "chemical-peels": {
                title: "Peelings chimiques",
                desc: "Solutions de peeling ciblées pour les peaux sensibles, à tendance acnéique ou matures.",
                treatments: [
                    { name: "Peeling - Peau Réactive", price: "95 €" },
                    { name: "Peeling - Anti-acné", price: "90 €" },
                    { name: "Peeling - Anti-âge", price: "85 €" },
                    { name: "Peeling - Peau terne", price: "85 €" },
                    { name: "Peeling - Hydratant", price: "85 €" }
                ]
            },
            "classic-facials": {
                title: "Soins du visage classiques",
                desc: "Soins du visage traditionnels adaptés aux besoins spécifiques de votre peau.",
                treatments: [
                    { name: "Soin du visage - Anti-âge", price: "85 €" },
                    { name: "Soin du visage - Peau grasse", price: "80 €" },
                    { name: "Soin du visage - Peaux réactives", price: "75 €" },
                    { name: "Soin du visage - Coup d'éclat", price: "65 €" }
                ]
            },
            "waxing-services": {
                title: "Épilation (Femmes)",
                desc: "Services d'épilation professionnels pour une peau douce et sans poils.",
                treatments: [
                    { name: "Bikini intégral + fesses", price: "45 €" },
                    { name: "Jambes complètes", price: "35 €" },
                    { name: "Visage complet", price: "35 €" },
                    { name: "Bikini intégral", price: "35 €" },
                    { name: "Maillot échancré", price: "30 €" },
                    { name: "Bikini simple", price: "25 €" },
                    { name: "Demi-jambes", price: "25 €" },
                    { name: "Bras complets", price: "25 €" },
                    { name: "Cuisses", price: "20 €" },
                    { name: "Sourcils + lèvre supérieure", price: "20 €" },
                    { name: "Aisselles", price: "15 €" },
                    { name: "Sillon interfessier", price: "15 €" },
                    { name: "Combo : Demi-jambes, aisselles et maillot intégral", price: "65 €" }
                ]
            },
            "waxing-packages": {
                title: "Forfaits épilation",
                desc: "Forfaits d'épilation avantageux pour un soin complet.",
                treatments: [
                    { name: "Pack Full Body", price: "120 €" },
                    { name: "Pack Full Body Basic", price: "95 €" },
                    { name: "Pack Pré-Vacances", price: "80 €" },
                    { name: "Pack Summer Body", price: "75 €" },
                    { name: "Pack Body Express", price: "65 €" },
                    { name: "Pack Demi-jambes + Bikini simple", price: "55 €" },
                    { name: "Pack Bikini Intense", price: "55 €" },
                    { name: "Pack Bikini intégral + Fesses", price: "55 €" },
                    { name: "Pack Soft", price: "45 €" },
                    { name: "Pack Bikini Essentiel", price: "40 €" }
                ]
            },
            "eye-beauty": {
                title: "Beauté du regard (Cils et sourcils)",
                desc: "Sublimez votre beauté naturelle avec nos soins pour les cils et les sourcils.",
                treatments: [
                    { name: "Extension de cils - Volume", price: "85 €" },
                    { name: "Extension de cils - Naturelle", price: "85 €" },
                    { name: "Rehaussement et teinture des cils", price: "60 €" },
                    { name: "Extension de cils - Découverte", price: "50 €" },
                    { name: "Rehaussement des cils", price: "50 €" },
                    { name: "Retrait d'extensions de cils", price: "25 €" },
                    { name: "Teinture des sourcils et épilation", price: "20 €" }
                ]
            },
            "hand-foot-beauty": {
                title: "Beauté des mains et des pieds (Ongles)",
                desc: "Manucures, pédicures et soins des ongles pour des mains et des pieds parfaitement soignés.",
                treatments: [
                    { name: "Retrait semi-permanent + Nouveau semi-permanent + Manucure (Mains)", price: "70 €" },
                    { name: "Manucure et pose de vernis semi-permanent (Mains)", price: "50 €" },
                    { name: "Retrait semi-permanent AVEC manucure (Mains)", price: "40 €" },
                    { name: "Manucure et pose de vernis classique (Mains)", price: "30 €" },
                    { name: "Pose de vernis semi-permanent SANS manucure (Mains)", price: "30 €" },
                    { name: "Retrait de vernis gel / acrylique (Mains)", price: "30 €" },
                    { name: "Manucure classique (Mains)", price: "25 €" },
                    { name: "Retrait de vernis semi-permanent (Mains)", price: "20 €" },
                    { name: "Pédicure et pose de vernis semi-permanent (Pieds)", price: "70 €" },
                    { name: "Pédicure et pose de vernis classique (Pieds)", price: "65 €" },
                    { name: "Dépose de semi-permanent + Pose de SP (Pieds)", price: "60 €" },
                    { name: "Pédicure classique (Pieds)", price: "50 €" },
                    { name: "Pose de vernis semi-permanent (Pieds)", price: "40 €" },
                    { name: "Retrait de vernis semi-permanent (Pieds)", price: "20 €" }
                ]
            },
            "makeup-bridal": {
                title: "Maquillage et services mariage",
                desc: "Maquillage professionnel pour les grandes occasions et les mariages.",
                treatments: [
                    { name: "Soin coup d'éclat + maquillage au choix", price: "75 €" },
                    { name: "Maquillage de soirée avec faux cils", price: "60 €" },
                    { name: "Maquillage de mariée", price: "55 €" },
                    { name: "Maquillage de soirée", price: "50 €" },
                    { name: "Essai maquillage", price: "50 €" },
                    { name: "Maquillage de jour", price: "45 €" },
                    { name: "Forfait embellissement de la mariée", price: "À partir de 45 €" },
                    { name: "Préparation de la mariée", price: "À partir de 45 €" }
                ]
            }
        }
    }
};

export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [lang, setLang] = useState('en');
    
    // Nieuwe state voor mobiel menu & parallax
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [offsetY, setOffsetY] = useState(0);
    
    const t = translations[lang];
    const bookingUrl = "https://salonkee.be/salon/institut-skincare-project";

    // Scroll listener voor header, parallax en scroll-reveals
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setOffsetY(window.scrollY); // Voor Parallax effect
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Observer voor het "fade-in" scroll effect
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 }); // Activeert als 10% zichtbaar is

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [selectedCategory, lang]); // Opnieuw observeren bij categorie wissel

    // Scroll soepel naar de top van de services sectie bij openen categorie
    useEffect(() => {
        if (selectedCategory !== null) {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedCategory]);

    const categories = [
        { id: 'korean-advanced', icon: "🆕", img: "/images/korean.webp" },
        { id: 'deep-anti-aging', icon: "✨", img: "/images/deepantiage.webp" },
        { id: 'chemical-peels', icon: "🧪", img: "/images/chemicalpeals.webp" },
        { id: 'classic-facials', icon: "💆‍♀️", img: "/images/classic.webp" },
        { id: 'waxing-services', icon: "🍯", img: "/images/waxing.webp" },
        { id: 'waxing-packages', icon: "📦", img: "/images/waxing2.webp" },
        { id: 'eye-beauty', icon: "👁️", img: "/images/eye.webp" },
        { id: 'hand-foot-beauty', icon: "💅", img: "/images/nails.webp" },
        { id: 'makeup-bridal', icon: "💄", img: "/images/makeup.webp" }
    ];

    const activeCategoryData = selectedCategory ? categories.find(c => c.id === selectedCategory) : null;
    const activeTranslationData = selectedCategory ? t.categories[selectedCategory] : null;

    // Sluit het mobiele menu na een klik
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <React.Fragment>
            <header className={scrolled ? 'scrolled' : ''}>
                <a href="#" className="logo">Institut SkinCare Project</a>
                
                {/* Hamburger Icoon voor Mobiel */}
                <div 
                    className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={closeMobileMenu}>{t.nav.treatments}</a>
                    <a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a>
                    
                    <div className="social-icons" style={{ margin: '0 0 0 1.5rem', gap: '0.8rem' }}>
                        <a href="https://www.facebook.com/InstitutSkinCareProject" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/iskcare" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>

                    <div className="lang-toggle">
                        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); closeMobileMenu(); }}>EN</button>
                        <span className="lang-divider">|</span>
                        <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => { setLang('fr'); closeMobileMenu(); }}>FR</button>
                    </div>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1 style={{ whiteSpace: 'pre-line' }}>{t.hero.title}</h1>
                        <p style={{ whiteSpace: 'pre-line' }}>{t.hero.desc}</p>
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-shine">{t.hero.btn}</a>
                    </div>
                    {/* Parallax effect toegepast via inline style */}
                    <div className="hero-image-wrapper" style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
                        <img src="/images/hero.webp" alt="Luxurious Skincare Products" className="floating-img" />
                    </div>
                </section>

                <section className="services" id="services">
                    {selectedCategory === null ? (
                        <div className="transition-wrapper" key="grid">
                            <div className="reveal">
                                <h2>{t.services.title}</h2>
                                <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>{t.services.desc}</p>
                            </div>
                            
                            <div className="services-grid">
                                {categories.map((cat, idx) => (
                                    /* Scroll Reveal toegevoegd met vertraging per kaart */
                                    <article 
                                        className="service-card reveal" 
                                        key={cat.id} 
                                        onClick={() => setSelectedCategory(cat.id)}
                                        style={{ transitionDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="service-image">
                                            <img src={cat.img} alt={t.categories[cat.id].title} />
                                        </div>
                                        <div className="service-content">
                                            <h3>{t.categories[cat.id].title}</h3>
                                            <p>{t.categories[cat.id].desc}</p>
                                            <div style={{ marginTop: 'auto' }}>
                                                <span style={{ color: 'var(--brand-accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                                    {t.services.view}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="transition-wrapper slide-up" key="detail">
                            <h2>{activeCategoryData.icon} {activeTranslationData.title}</h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{activeTranslationData.desc}</p>
                            
                            <div className="category-detail">
                                <button className="back-btn" onClick={() => setSelectedCategory(null)}>
                                    {t.services.back}
                                </button>
                                
                                <div className="treatment-list">
                                    {activeTranslationData.treatments.map((treatment, idx) => (
                                        <div className="treatment-item reveal" key={idx} style={{ transitionDelay: `${idx * 0.05}s` }}>
                                            <div className="treatment-info">
                                                <h4>{treatment.name}</h4>
                                            </div>
                                            <div className="treatment-price">
                                                {treatment.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-shine">
                                        {t.services.book}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section className="contact reveal" id="contact">
                    <h2>{t.contact.title}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>{t.contact.desc}</p>
                    
                    <div className="contact-container">
                        <div className="contact-info reveal">
                            <h3>{t.contact.infoTitle}</h3>
                            <p><span className="contact-icon">📍</span><span><strong>{t.contact.address}</strong><br />Rue de Ramskapelle 2<br />1040 Etterbeek, Belgium</span></p>
                            <p><span className="contact-icon">📞</span><span><strong>{t.contact.phone}</strong><br />+32 486 21 82 88 / 06 44 50 27 41</span></p>
                            <p><span className="contact-icon">📧</span><span><strong>{t.contact.email}</strong><br />hello@skincareproject.be</span></p>
                        </div>
                        <div className="contact-hours reveal" style={{ transitionDelay: '0.2s' }}>
                            <h4 className="opening-hours-title">🕒 {t.contact.hoursTitle}</h4>
                            <div className="hours-grid">
                                {t.contact.hours.map((h, idx) => (
                                    <div className="hour-row" key={idx}>
                                        <span>{h.day}</span><span>{h.time}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="hours-note">{t.contact.hoursNote}</p>
                        </div>
                        <div className="contact-map reveal" style={{ transitionDelay: '0.4s' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5342931448834!2d4.3879201!3d50.8398188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c5300e70e4cd%3A0x2541e753c3464530!2sInstitut%20Skin%20Care%20Project%20(%20Ladies%20only)!5e0!3m2!1snl!2sbe!4v1712200000000!5m2!1snl!2sbe"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{ backgroundColor: 'var(--primary-bg)', textAlign: 'center', padding: '4rem 5%', borderTop: '1px solid var(--borders)' }}>
                <p style={{ fontWeight: '500', color: 'var(--heading-color)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Institut SkinCare Project</p>
                <p style={{ color: '#888174', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    {lang === 'fr' ? '"Prenez soin de vous aujourd\'hui pour un avenir plus jeune demain !"' : '"Take care of yourself today for a younger future tomorrow!"'}
                </p>
                <div className="social-icons" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <a href="https://www.facebook.com/InstitutSkinCareProject" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/iskcare" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>
                <div className="review-badge-container">
                  <a href="https://www.google.com/search?q=Institut+Skin+Care+Project+Etterbeek#lrd=0x47c3c5300e70e4cd:0x2541e753c3464530,1" target="_blank" rel="noopener noreferrer" className="review-badge">
                    <div className="badge-stars">⭐⭐⭐⭐⭐</div>
                    <div className="badge-text">
                      <strong>5.0 / 5</strong> op Google Reviews
                      <span>(90+ reviews)</span>
                    </div>
                  </a>
                </div>
                <p>© 2026 {t.footer}</p>
                <p>Rue de Ramskapelle 2, 1040 Etterbeek, Belgium</p>
            </footer>
        </React.Fragment>
    );
}