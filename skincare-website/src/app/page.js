"use client";

import React, { useState, useEffect } from 'react';

const translations = {
    en: {
        nav: { home: "Home", treatments: "Treatments", contact: "Contact", expert: "Expert" },
        hero: {
            title: "Reveal Your\nNatural Radiance",
            desc: "\"Take care of yourself today for a younger future tomorrow!\"\n\nExperience luxurious anti-aging facials and bespoke skincare treatments in our calming clinic located in the heart of Etterbeek, Brussels.",
            btn: "Book Your Consultation"
        },
        stats: {
            reviews: "5★ Reviews",
            treatments: "Treatments",
            experience: "Years Experience"
        },
        testimonials: {
            title: "What Our Clients Say",
            subtitle: "Testimonials",
            reviews: [
                { text: "My skin has never looked so glowing and healthy. The anti-aging treatment took years off my face!", author: "Sophie V." },
                { text: "Professional, calming, and truly bespoke. The Korean skincare therapies are an absolute game changer.", author: "Marie L." },
                { text: "I struggled with acne for years until I found this clinic. The results after just 3 sessions are incredible.", author: "Emma D." }
            ]
        },

        expert: {
            title: "Meet Your Skincare Expert",
            subtitle: "Your skin's health is my ultimate priority.",
            desc: "With a deep passion for advanced dermatology and holistic beauty, I founded Institut SkinCare Project to offer treatments that actually work. I specialize in Korean skincare, advanced anti-aging protocols, and personalized care. Every skin is unique, and together we will find the perfect tailored solution to reveal your natural glow.\n\nWelcome to your new beauty haven.",
        },
        services: {
            title: "Our Service Categories",
            subtitle: "Treatments",
            desc: "Explore our comprehensive range of treatments. Click on a category to see specific therapies and pricing.",
            view: "View Treatments",
            back: "← Back to all categories",
            book: "Book an Appointment"
        },
        contact: {
            title: "Visit Our Clinic",
            subtitle: "Get in Touch",
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
        mobileSticky: "Book Appointment",
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
        nav: { home: "Accueil", treatments: "Soins", contact: "Contact", expert: "L'experte" },
        hero: {
            title: "Révélez votre\néclat naturel",
            desc: "\"Prenez soin de vous aujourd'hui pour un avenir plus jeune demain !\"\n\nDécouvrez des soins anti-âge luxueux et des traitements sur mesure dans notre clinique apaisante au cœur d'Etterbeek, Bruxelles.",
            btn: "Réservez votre consultation"
        },
        stats: {
            reviews: "Avis 5★",
            treatments: "Soins",
            experience: "Ans d'expérience"
        },
        testimonials: {
            title: "L'avis de nos clientes",
            subtitle: "Témoignages",
            reviews: [
                { text: "Ma peau n'a jamais été aussi éclatante et en bonne santé. Le traitement anti-âge m'a fait rajeunir de plusieurs années !", author: "Sophie V." },
                { text: "Professionnel, apaisant et vraiment sur mesure. Les soins coréens sont une véritable révélation.", author: "Marie L." },
                { text: "Je luttais contre l'acné depuis des années avant de trouver cet institut. Les résultats après seulement 3 séances sont incroyables.", author: "Emma D." }
            ]
        },

        expert: {
            title: "Rencontrez votre experte beauté",
            subtitle: "La santé de votre peau est ma priorité absolue.",
            desc: "Passionnée par la dermatologie avancée et la beauté holistique, j'ai fondé l'Institut SkinCare Project pour offrir des soins qui fonctionnent vraiment. Je suis spécialisée dans les soins coréens, les protocoles anti-âge avancés et les soins personnalisés. Chaque peau est unique, et ensemble, nous trouverons la solution parfaitement adaptée pour révéler votre éclat naturel.\n\nBienvenue dans votre nouveau havre de beauté.",
        },
        services: {
            title: "Nos catégories de services",
            subtitle: "Soins",
            desc: "Découvrez notre gamme complète de soins. Cliquez sur une catégorie pour voir les thérapies spécifiques et les tarifs.",
            view: "Voir les soins",
            back: "← Retour à toutes les catégories",
            book: "Réservez un rendez-vous"
        },
        contact: {
            title: "Visitez notre clinique",
            subtitle: "Nous contacter",
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
        mobileSticky: "Prendre RDV",
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

/* ============================================
   SECTION DIVIDER COMPONENT
   ============================================ */
function SectionDivider() {
    return (
        <div className="section-divider" aria-hidden="true">
            <span className="section-divider-dot" />
        </div>
    );
}

/* ============================================
   MAIN APP COMPONENT
   ============================================ */
export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [lang, setLang] = useState('en');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const t = translations[lang];
    const bookingUrl = "https://salonkee.be/salon/institut-skincare-project";
    const whatsappUrl = "https://wa.me/32486218288";

    /* ---- Scroll handler ---- */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ---- Scroll-Reveal IntersectionObserver ---- */
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        if (revealElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selectedCategory]); // Re-run when category view changes

    /* ---- Testimonials auto-rotate ---- */
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % t.testimonials.reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [t.testimonials.reviews.length]);

    /* ---- Scroll to services on category select ---- */
    useEffect(() => {
        if (selectedCategory !== null) {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedCategory]);

    const categories = [
        { id: 'korean-advanced', img: "/images/korean.webp" },
        { id: 'deep-anti-aging', img: "/images/deepantiage.webp" },
        { id: 'chemical-peels', img: "/images/chemicalpeals.webp" },
        { id: 'classic-facials', img: "/images/classic.webp" },
        { id: 'waxing-services', img: "/images/waxing.webp" },
        { id: 'waxing-packages', img: "/images/waxing2.webp" },
        { id: 'eye-beauty', img: "/images/eye.webp" },
        { id: 'hand-foot-beauty', img: "/images/nails.webp" },
        { id: 'makeup-bridal', img: "/images/makeup.webp" }
    ];

    const activeCategoryData = selectedCategory ? categories.find(c => c.id === selectedCategory) : null;
    const activeTranslationData = selectedCategory ? t.categories[selectedCategory] : null;

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <React.Fragment>
            {/* ============================================
                HEADER
                ============================================ */}
            <header className={scrolled ? 'scrolled' : ''} role="banner">
                <a href="#" className="logo" onClick={() => setSelectedCategory(null)} aria-label="Institut SkinCare Project — Home">
                    Institut SkinCare Project
                </a>

                <button
                    className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span /><span /><span />
                </button>

                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
                    <a href="#services" onClick={closeMobileMenu}>{t.nav.treatments}</a>
                    <a href="#expert" onClick={closeMobileMenu}>{t.nav.expert}</a>
                    <a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a>

                    <div className="social-icons" style={{ margin: '0 0 0 1.5rem', gap: '0.8rem' }}>
                        <a href="https://www.facebook.com/InstitutSkinCareProject" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/iskcare" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>

                    <div className="lang-toggle" role="group" aria-label="Language selection">
                        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); closeMobileMenu(); }} aria-label="Switch to English">EN</button>
                        <span className="lang-divider" aria-hidden="true">|</span>
                        <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => { setLang('fr'); closeMobileMenu(); }} aria-label="Passer en français">FR</button>
                    </div>
                </nav>
            </header>

            <main>
                {/* ============================================
                    HERO SECTION
                    ============================================ */}
                <section className="hero" aria-label="Welcome to Institut SkinCare Project">
                    <div className="hero-content">
                        <h1 style={{ whiteSpace: 'pre-line' }}>{t.hero.title}</h1>
                        <p style={{ whiteSpace: 'pre-line' }}>{t.hero.desc}</p>
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-shine" id="hero-cta">
                            {t.hero.btn}
                        </a>
                    </div>

                    <div className="hero-image-wrapper floating-wrapper">
                        <img
                            src="/images/hero.webp"
                            alt="Luxurious anti-aging skincare treatment at Institut SkinCare Project, Brussels"
                            fetchpriority="high"
                        />
                    </div>
                </section>

                {/* ============================================
                    STATS / TRUST BAR
                    ============================================ */}
                <section className="stats-section reveal" aria-label="Our achievements">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">90+</span>
                            <span className="stat-label">{t.stats.reviews}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">{t.stats.treatments}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">{t.stats.experience}</span>
                        </div>
                    </div>
                </section>

                {/* ============================================
                    TESTIMONIALS
                    ============================================ */}
                <section className="testimonials-section reveal" aria-label="Client testimonials">
                    <span className="section-subtitle">{t.testimonials.subtitle}</span>
                    <h2>{t.testimonials.title}</h2>

                    <div className="testimonials-carousel" aria-live="polite">
                        {t.testimonials.reviews.map((review, idx) => (
                            <div
                                className={`testimonial-card ${idx === activeTestimonial ? 'active' : ''}`}
                                key={idx}
                                aria-hidden={idx !== activeTestimonial}
                            >
                                <blockquote className="testimonial-quote">
                                    {review.text}
                                </blockquote>
                                <p className="testimonial-author">— {review.author}</p>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots" role="tablist" aria-label="Select testimonial">
                        {t.testimonials.reviews.map((_, idx) => (
                            <button
                                key={idx}
                                className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
                                onClick={() => setActiveTestimonial(idx)}
                                aria-label={`Testimonial ${idx + 1}`}
                                aria-selected={idx === activeTestimonial}
                                role="tab"
                            />
                        ))}
                    </div>
                </section>

                <SectionDivider />

                {/* ============================================
                    SERVICES
                    ============================================ */}
                <section className="services" id="services" aria-label="Our treatments and services">
                    {selectedCategory === null ? (
                        <div className="transition-wrapper" key="grid">
                            <div className="reveal">
                                <span className="section-subtitle">{t.services.subtitle}</span>
                                <h2>{t.services.title}</h2>
                                <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>{t.services.desc}</p>
                            </div>

                            <div className="services-grid">
                                {categories.map((cat) => (
                                    <article
                                        className="service-card reveal-scale"
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedCategory(cat.id); }}
                                        aria-label={`View ${t.categories[cat.id].title} treatments`}
                                    >
                                        <div className="service-image">
                                            <img
                                                src={cat.img}
                                                alt={`${t.categories[cat.id].title} — professional treatment at Institut SkinCare Project Brussels`}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="service-content">
                                            <h3>{t.categories[cat.id].title}</h3>
                                            <p>{t.categories[cat.id].desc}</p>
                                            <div style={{ marginTop: 'auto' }}>
                                                <span className="view-treatments-link">
                                                    {t.services.view} →
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="transition-wrapper" key="detail">
                            <h2>{activeTranslationData.title}</h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{activeTranslationData.desc}</p>

                            <div className="category-detail">
                                <button className="back-btn" onClick={() => setSelectedCategory(null)} aria-label="Go back to all treatment categories">
                                    {t.services.back}
                                </button>

                                <div className="treatment-list" role="list">
                                    {activeTranslationData.treatments.map((treatment, idx) => (
                                        <div className="treatment-item" key={idx} role="listitem">
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
                                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-shine" id="services-cta">
                                        {t.services.book}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <SectionDivider />

                {/* ============================================
                    MEET THE EXPERT
                    ============================================ */}
                <section className="expert reveal" id="expert" aria-label="Meet your skincare expert">
                    <div className="expert-content reveal-left">
                        <h2>{t.expert.title}</h2>
                        <h3>{t.expert.subtitle}</h3>
                        <p style={{ whiteSpace: 'pre-line' }}>{t.expert.desc}</p>
                    </div>
                    <div className="expert-image reveal-right">
                        <img
                            src="/images/hero.webp"
                            alt="Your skincare expert at Institut SkinCare Project — specializing in Korean skincare and anti-aging treatments"
                            loading="lazy"
                        />
                    </div>
                </section>

                <SectionDivider />

                {/* ============================================
                    CONTACT
                    ============================================ */}
                <section className="contact reveal" id="contact" aria-label="Contact information and location">
                    <span className="section-subtitle">{t.contact.subtitle}</span>
                    <h2>{t.contact.title}</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>{t.contact.desc}</p>

                    <div className="contact-container">
                        <div className="contact-info reveal-left">
                            <h3>{t.contact.infoTitle}</h3>
                            <p>
                                <span className="contact-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                                <span>
                                    <strong>{t.contact.address}</strong><br />
                                    Rue de Ramskapelle 2<br />
                                    1040 Etterbeek, Belgium
                                </span>
                            </p>
                            <p>
                                <span className="contact-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
                                <span>
                                    <strong>{t.contact.phone}</strong><br />
                                    <a href="tel:+32486218288" style={{ color: 'var(--brand-accent)' }}>+32 486 21 82 88</a>
                                </span>
                            </p>
                            <p>
                                <span className="contact-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                                <span>
                                    <strong>{t.contact.email}</strong><br />
                                    <a href="mailto:iskcareproject@gmail.be" style={{ color: 'var(--brand-accent)' }}>iskcareproject@gmail.be</a>
                                </span>
                            </p>
                        </div>
                        <div className="contact-hours reveal-scale">
                            <h4 className="opening-hours-title">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem', marginTop: '-2px' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                {t.contact.hoursTitle}
                            </h4>
                            <div className="hours-grid">
                                {t.contact.hours.map((h, idx) => (
                                    <div className="hour-row" key={idx}>
                                        <span>{h.day}</span><span>{h.time}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="hours-note">{t.contact.hoursNote}</p>
                        </div>
                        <div className="contact-map reveal-right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5342931448834!2d4.3879201!3d50.8398188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c5300e70e4cd%3A0x2541e753c3464530!2sInstitut%20Skin%20Care%20Project%20(%20Ladies%20only)!5e0!3m2!1snl!2sbe!4v1712200000000!5m2!1snl!2sbe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Institut SkinCare Project location on Google Maps"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* ============================================
                FOOTER
                ============================================ */}
            <footer className="site-footer" role="contentinfo">
                <p className="footer-brand">Institut SkinCare Project</p>
                <p className="footer-tagline">
                    {lang === 'fr' ? '"Prenez soin de vous aujourd\'hui pour un avenir plus jeune demain !"' : '"Take care of yourself today for a younger future tomorrow!"'}
                </p>

                <div className="social-icons" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <a href="https://www.facebook.com/InstitutSkinCareProject" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/iskcare" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>

                {/* Google Review Badge — Desktop */}
                <div className="review-badge-container">
                    <a
                        href="https://www.google.com/search?q=Institut+Skin+Care+Project+Etterbeek#lrd=0x47c3c5300e70e4cd:0x2541e753c3464530,1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="review-badge"
                        aria-label="See our 5-star Google Reviews"
                    >
                        <div className="badge-stars" aria-label="5 stars">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--brand-accent)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            ))}
                        </div>
                        <div className="badge-text">
                            <strong>5.0 / 5</strong>
                            {lang === 'fr' ? 'sur Google Reviews' : 'on Google Reviews'}
                            <span>(90+ reviews)</span>
                        </div>
                        <div className="badge-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                            </svg>
                        </div>
                    </a>
                </div>

                {/* WhatsApp Floating Button */}
                <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                    <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
                        <path d="M16.002 0c-8.835 0-16 7.165-16 16 0 2.82.735 5.56 2.135 8.012l-2.115 7.733 7.915-2.077c2.395 1.282 5.096 1.96 7.868 1.96h.005c8.832 0 16-7.165 16-16s-7.17-16-16.008-16zm8.13 22.955c-.342.964-1.956 1.83-2.734 1.93-.733.093-1.637.245-4.832-1.077-3.86-1.597-6.326-5.545-6.52-5.8-.19-.258-1.558-2.075-1.558-3.957 0-1.882.983-2.81 1.332-3.187.35-.378.765-.472 1.023-.472.257 0 .515.004.737.014.23.01.543-.09.848.65.31.753 1.054 2.57 1.144 2.76.092.188.152.41.026.66-.122.253-.186.41-.373.63-.187.218-.396.47-.565.65-.187.195-.386.41-.17.783.216.37 1.034 1.705 2.247 2.785 1.567 1.396 2.89 1.83 3.264 2.016.374.19.59.158.81-.093.22-.25 1.032-1.203 1.31-1.616.276-.413.553-.346.892-.22.34.125 2.146 1.01 2.515 1.196.37.19.615.285.706.442.09.158.09 1.02-.25 1.984z"></path>
                    </svg>
                </a>

                <p className="footer-address">Rue de Ramskapelle 2, 1040 Etterbeek, Belgium</p>
                <p className="footer-copyright">© 2026 Institut SkinCare Project. {t.footer}</p>
            </footer>

            {/* Mobile Sticky Booking Bar */}
            <div className="mobile-sticky-bar">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-shine" id="mobile-sticky-cta">
                    {t.mobileSticky}
                </a>
            </div>
        </React.Fragment>
    );
}