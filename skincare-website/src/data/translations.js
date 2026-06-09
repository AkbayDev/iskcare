export const translations = {
    en: {
        nav: { philosophy: "Philosophy", treatments: "Treatments", book: "Book Now" },
        hero: {
            kicker: "Institut SkinCare Project",
            title: "Reveal Your\nNatural Radiance",
            subtitle: "Luxurious anti-aging facials and bespoke skincare in the heart of Brussels."
        },
        philosophy: {
            title: "The Philosophy",
            text1: "With a deep passion for advanced dermatology and holistic beauty, I founded Institut SkinCare Project to offer treatments that actually work.",
            text2: "I specialize in Korean skincare, advanced anti-aging protocols, and personalized care. Every skin is unique, and together we will find the perfect tailored solution to reveal your natural glow.",
            text3: "Welcome to your new beauty haven."
        },
        services: {
            title: "Signature Treatments",
            categories: [
                { 
                    id: 'korean', 
                    title: "Korean Advanced", 
                    desc: "Cutting-edge therapies like Co2 & Jet Plasma.", 
                    img: "/images/korean.webp",
                    treatments: [
                        { name: "Co2 Anti-Aging Therapy", price: "115 €" },
                        { name: "Eye Contour Lift + Threadlift", price: "115 €" },
                        { name: "Jet plasma + Vtox lifting (3 sessions)", price: "120 €" },
                        { name: "Advanced Anti-Acne Therapy", price: "95 €" },
                        { name: "Ilumin + V-Tox", price: "95 €" },
                        { name: "Peptide Microneedling + biocellulose mask", price: "90 €" },
                        { name: "Cold Peel (Anti-aging, reduces melasma)", price: "90 €" },
                        { name: "INFLACURE (For rosacea, couperose & inflammation)", price: "75 €" }
                    ]
                },
                { 
                    id: 'antiaging', 
                    title: "Deep Anti-Aging", 
                    desc: "Intensive treatments for lasting results.", 
                    img: "/images/deepantiage.webp",
                    treatments: [
                        { name: "Cheek Skin Tightening", price: "450 €" },
                        { name: "Dark Circles Lightening", price: "350 €" },
                        { name: "Frown Line + Forehead", price: "250 €" },
                        { name: "Eyebrow Lift", price: "250 €" },
                        { name: "Eyelid Elevation", price: "250 €" },
                        { name: "Crow's Feet Wrinkles", price: "150 €" }
                    ]
                },
                { 
                    id: 'peels', 
                    title: "Chemical Peels", 
                    desc: "Targeted peeling solutions.", 
                    img: "/images/chemicalpeals.webp",
                    treatments: [
                        { name: "Peeling - Reactive Skin", price: "95 €" },
                        { name: "Peeling - Anti-acne", price: "90 €" },
                        { name: "Peeling - Anti-aging", price: "85 €" },
                        { name: "Peeling - Dull skin", price: "85 €" },
                        { name: "Peeling - Hydrating", price: "85 €" }
                    ]
                },
                { 
                    id: 'classic', 
                    title: "Classic Facials", 
                    desc: "Traditional, tailored treatments.", 
                    img: "/images/classic.webp",
                    treatments: [
                        { name: "Facial - Anti-aging", price: "85 €" },
                        { name: "Facial - Oily skin", price: "80 €" },
                        { name: "Facial - Reactive skin", price: "75 €" },
                        { name: "Facial - Radiance boost", price: "65 €" }
                    ]
                },
                { 
                    id: 'waxing', 
                    title: "Waxing", 
                    desc: "Professional hair removal.", 
                    img: "/images/waxing.webp",
                    treatments: [
                        { name: "Full Body Package", price: "120 €" },
                        { name: "Basic Full Body Package", price: "95 €" },
                        { name: "Pre-Vacation Package", price: "80 €" },
                        { name: "Summer Body Package", price: "75 €" },
                        { name: "Express Body Package", price: "65 €" },
                        { name: "Half Legs, Armpits & Full Bikini Combo", price: "65 €" },
                        { name: "Full Bikini + Bottom Package", price: "55 €" },
                        { name: "Full Bikini + Bottom", price: "45 €" },
                        { name: "Essential Bikini Package", price: "40 €" },
                        { name: "Full Legs", price: "35 €" },
                        { name: "Full Face", price: "35 €" },
                        { name: "High Bikini", price: "30 €" },
                        { name: "Simple Bikini", price: "25 €" },
                        { name: "Half Legs", price: "25 €" },
                        { name: "Full Arms", price: "25 €" },
                        { name: "Eyebrows + Upper Lip", price: "20 €" },
                        { name: "Armpits", price: "15 €" }
                    ]
                },
                { 
                    id: 'eyes', 
                    title: "Eye Beauty", 
                    desc: "Lash and brow enhancements.", 
                    img: "/images/eye.webp",
                    treatments: [
                        { name: "Eyelash Extensions - Volume", price: "85 €" },
                        { name: "Eyelash Extensions - Natural", price: "85 €" },
                        { name: "Lash Lift & Tint", price: "60 €" },
                        { name: "Eyelash Extensions - Discovery (Partial)", price: "50 €" },
                        { name: "Lash Lift", price: "50 €" },
                        { name: "Eyelash Extension Removal", price: "25 €" },
                        { name: "Brow Tint & Shape", price: "20 €" }
                    ]
                }
            ]
        },
        footer: {
            title: "Ready to glow?",
            address: "Rue de Ramskapelle 2\n1040 Etterbeek, Belgium",
            contact: "+32 486 21 82 88\niskcareproject@gmail.be",
            book: "Book Your Experience"
        }
    },
    fr: {
        nav: { philosophy: "Philosophie", treatments: "Soins", book: "Réserver" },
        hero: {
            kicker: "Institut SkinCare Project",
            title: "Révélez votre\néclat naturel",
            subtitle: "Des soins anti-âge luxueux et sur mesure au cœur de Bruxelles."
        },
        philosophy: {
            title: "La Philosophie",
            text1: "Passionnée par la dermatologie avancée et la beauté holistique, j'ai fondé l'Institut SkinCare Project pour offrir des soins qui fonctionnent vraiment.",
            text2: "Je suis spécialisée dans les soins coréens, les protocoles anti-âge avancés et les soins personnalisés. Chaque peau est unique.",
            text3: "Bienvenue dans votre nouveau havre de beauté."
        },
        services: {
            title: "Soins Signatures",
            categories: [
                { 
                    id: 'korean', 
                    title: "Soins Coréens", 
                    desc: "Thérapies de pointe : Co2, Jet Plasma.", 
                    img: "/images/korean.webp",
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
                { 
                    id: 'antiaging', 
                    title: "Anti-âge Profond", 
                    desc: "Soins intensifs durables.", 
                    img: "/images/deepantiage.webp",
                    treatments: [
                        { name: "Relâchement cutané des joues", price: "450 €" },
                        { name: "Éclaircissement des cernes", price: "350 €" },
                        { name: "Ride du lion + front", price: "250 €" },
                        { name: "Soulèvement sourcilière", price: "250 €" },
                        { name: "Élévation de la paupière", price: "250 €" },
                        { name: "Rides de la patte d'oie", price: "150 €" }
                    ]
                },
                { 
                    id: 'peels', 
                    title: "Peelings Chimiques", 
                    desc: "Solutions ciblées.", 
                    img: "/images/chemicalpeals.webp",
                    treatments: [
                        { name: "Peeling - Peau Réactive", price: "95 €" },
                        { name: "Peeling - Anti-acné", price: "90 €" },
                        { name: "Peeling - Anti-âge", price: "85 €" },
                        { name: "Peeling - Peau terne", price: "85 €" },
                        { name: "Peeling - Hydratant", price: "85 €" }
                    ]
                },
                { 
                    id: 'classic', 
                    title: "Soins Classiques", 
                    desc: "Soins sur mesure.", 
                    img: "/images/classic.webp",
                    treatments: [
                        { name: "Soin du visage - Anti-âge", price: "85 €" },
                        { name: "Soin du visage - Peau grasse", price: "80 €" },
                        { name: "Soin du visage - Peaux réactives", price: "75 €" },
                        { name: "Soin du visage - Coup d'éclat", price: "65 €" }
                    ]
                },
                { 
                    id: 'waxing', 
                    title: "Épilation", 
                    desc: "Épilation professionnelle.", 
                    img: "/images/waxing.webp",
                    treatments: [
                        { name: "Pack Full Body", price: "120 €" },
                        { name: "Pack Full Body Basic", price: "95 €" },
                        { name: "Pack Pré-Vacances", price: "80 €" },
                        { name: "Pack Summer Body", price: "75 €" },
                        { name: "Pack Body Express", price: "65 €" },
                        { name: "Combo : Demi-jambes, aisselles et maillot intégral", price: "65 €" },
                        { name: "Pack Bikini intégral + Fesses", price: "55 €" },
                        { name: "Bikini intégral + fesses", price: "45 €" },
                        { name: "Pack Bikini Essentiel", price: "40 €" },
                        { name: "Jambes complètes", price: "35 €" },
                        { name: "Visage complet", price: "35 €" },
                        { name: "Maillot échancré", price: "30 €" },
                        { name: "Bikini simple", price: "25 €" },
                        { name: "Demi-jambes", price: "25 €" },
                        { name: "Bras complets", price: "25 €" },
                        { name: "Sourcils + lèvre supérieure", price: "20 €" },
                        { name: "Aisselles", price: "15 €" }
                    ]
                },
                { 
                    id: 'eyes', 
                    title: "Beauté du Regard", 
                    desc: "Cils et sourcils.", 
                    img: "/images/eye.webp",
                    treatments: [
                        { name: "Extension de cils - Volume", price: "85 €" },
                        { name: "Extension de cils - Naturelle", price: "85 €" },
                        { name: "Rehaussement et teinture des cils", price: "60 €" },
                        { name: "Extension de cils - Découverte", price: "50 €" },
                        { name: "Rehaussement des cils", price: "50 €" },
                        { name: "Retrait d'extensions de cils", price: "25 €" },
                        { name: "Teinture des sourcils et épilation", price: "20 €" }
                    ]
                }
            ]
        },
        footer: {
            title: "Prête à rayonner ?",
            address: "Rue de Ramskapelle 2\n1040 Etterbeek, Belgique",
            contact: "+32 486 21 82 88\niskcareproject@gmail.be",
            book: "Réservez votre expérience"
        }
    }
};
