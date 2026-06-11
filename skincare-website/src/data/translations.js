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
        testimonials: {
            subtitle: "REVIEWS",
            title: "What our clients say",
            reviews: [
                { text: "L’endroit est d’une propreté incroyable et décoré avec goût, on s’y sent direct apaisée. Prestation de très haute qualité.", author: "Elona T." },
                { text: "Une expérience vraiment agréable ! Aziza est super gentille, attentionnée et très professionnelle. Je recommande à 100%.", author: "Safia T." },
                { text: "Institut irréprochable au niveau de l’hygiène avec un accueil super chaleureux. Des soins exceptionnels !", author: "Soumeya S." },
                { text: "Une première pour moi à l'institut skincare project, les locaux sont d'une beauté et d'une propreté inégalables. Je reviendrai !", author: "G. V." }
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
            text1: "Passionnée par la dermatologie avancée et la beauté holistique, j'ai fondé l'Institut SkinCare Project pour offrir des soins aux résultats prouvés.",
            text2: "Mon expertise se concentre sur la cosmétologie coréenne, les protocoles anti-âge de pointe et les traitements sur mesure. Parce que chaque peau est unique, nous concevons ensemble le soin idéal pour sublimer votre visage.",
            text3: "Bienvenue dans votre nouvel écrin de beauté."
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
                        { name: "Lifting contour des yeux + Fils tenseurs Threadlift", price: "115 €" },
                        { name: "Jet plasma + Soin liftant Vtox (Cure de 3 séances)", price: "120 €" },
                        { name: "Soin expert anti-acné", price: "95 €" },
                        { name: "Soin Ilumin + V-Tox", price: "95 €" },
                        { name: "Microneedling peptidique + Masque biocellulose", price: "90 €" },
                        { name: "Cold Peel (Anti-âge, cible les taches pigmentaires)", price: "90 €" },
                        { name: "INFLACURE (Spécial rosacée, couperose et inflammations)", price: "75 €" }
                    ]
                },
                { 
                    id: 'antiaging', 
                    title: "Anti-âge Profond", 
                    desc: "Traitements intensifs aux résultats durables.", 
                    img: "/images/deepantiage.webp",
                    treatments: [
                        { name: "Lifting raffermissant des joues", price: "450 €" },
                        { name: "Traitement anti-cernes et éclat", price: "350 €" },
                        { name: "Lissage de la ride du lion et du front", price: "250 €" },
                        { name: "Rehaussement des sourcils (Brow Lift)", price: "250 €" },
                        { name: "Lifting tenseur des paupières", price: "250 €" },
                        { name: "Lissage des rides de la patte d'oie", price: "150 €" }
                    ]
                },
                { 
                    id: 'peels', 
                    title: "Peelings Professionnels", 
                    desc: "Des solutions ciblées pour faire peau neuve.", 
                    img: "/images/chemicalpeals.webp",
                    treatments: [
                        { name: "Peeling Doux - Peaux sensibles", price: "95 €" },
                        { name: "Peeling Purifiant - Anti-acné", price: "90 €" },
                        { name: "Peeling Régénérant - Anti-âge", price: "85 €" },
                        { name: "Peeling Éclat - Peaux ternes", price: "85 €" },
                        { name: "Peeling Hydratant - Peaux sèches", price: "85 €" }
                    ]
                },
                { 
                    id: 'classic', 
                    title: "Soins Essentiels", 
                    desc: "L'excellence des soins traditionnels.", 
                    img: "/images/classic.webp",
                    treatments: [
                        { name: "Soin Essentiel Anti-âge", price: "85 €" },
                        { name: "Soin Purifiant - Peaux grasses", price: "80 €" },
                        { name: "Soin Apaisant - Peaux réactives", price: "75 €" },
                        { name: "Soin Vitalité & Coup d'éclat", price: "65 €" }
                    ]
                },
                { 
                    id: 'waxing', 
                    title: "Épilation", 
                    desc: "Une épilation douce et professionnelle.", 
                    img: "/images/waxing.webp",
                    treatments: [
                        { name: "Forfait Corps Complet", price: "120 €" },
                        { name: "Forfait Corps Essentiel", price: "95 €" },
                        { name: "Forfait Départ en Vacances", price: "80 €" },
                        { name: "Forfait Summer Body", price: "75 €" },
                        { name: "Forfait Corps Express", price: "65 €" },
                        { name: "Combo : Demi-jambes, aisselles et maillot intégral", price: "65 €" },
                        { name: "Forfait Maillot intégral + Inter-fessier", price: "55 €" },
                        { name: "Maillot intégral + Inter-fessier", price: "45 €" },
                        { name: "Forfait Maillot Essentiel", price: "40 €" },
                        { name: "Jambes complètes", price: "35 €" },
                        { name: "Visage complet", price: "35 €" },
                        { name: "Maillot échancré", price: "30 €" },
                        { name: "Maillot classique", price: "25 €" },
                        { name: "Demi-jambes", price: "25 €" },
                        { name: "Bras complets", price: "25 €" },
                        { name: "Création sourcils + lèvre supérieure", price: "20 €" },
                        { name: "Aisselles", price: "15 €" }
                    ]
                },
                { 
                    id: 'eyes', 
                    title: "Beauté du Regard", 
                    desc: "Sublimez vos cils et sourcils.", 
                    img: "/images/eye.webp",
                    treatments: [
                        { name: "Extensions de cils - Volume Russe", price: "85 €" },
                        { name: "Extensions de cils - Effet Naturel", price: "85 €" },
                        { name: "Lash Lift (Rehaussement) & Teinture", price: "60 €" },
                        { name: "Extensions de cils - Pose Découverte", price: "50 €" },
                        { name: "Lash Lift (Rehaussement)", price: "50 €" },
                        { name: "Dépose d'extensions de cils", price: "25 €" },
                        { name: "Restructuration & Teinture des sourcils", price: "20 €" }
                    ]
                }
            ]
        },
        testimonials: {
            subtitle: "AVIS CLIENTS",
            title: "Ce qu'elles en pensent",
            reviews: [
                { text: "L’endroit est d’une propreté incroyable et décoré avec goût, on s’y sent direct apaisée. Prestation de très haute qualité.", author: "Elona T." },
                { text: "Une expérience vraiment agréable ! Aziza est super gentille, attentionnée et très professionnelle. Je recommande à 100%.", author: "Safia T." },
                { text: "Institut irréprochable au niveau de l’hygiène avec un accueil super chaleureux. Des soins exceptionnels !", author: "Soumeya S." },
                { text: "Une première pour moi à l'Institut SkinCare Project, les locaux sont d'une beauté et d'une propreté inégalables. Je reviendrai !", author: "G. V." }
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
