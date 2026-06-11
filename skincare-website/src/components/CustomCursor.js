"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        // Quick setter for maximum performance, no lag
        const xSetDot = gsap.quickSetter(dot, "x", "px");
        const ySetDot = gsap.quickSetter(dot, "y", "px");

        const handleMouseMove = (e) => {
            if (!isVisible) {
                setIsVisible(true);
                gsap.to(dot, { opacity: 1, duration: 0.3 });
            }
            // Dot follows instantly, perfectly locked to native mouse
            xSetDot(e.clientX);
            ySetDot(e.clientY);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
            gsap.to(dot, { opacity: 0, duration: 0.3 });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", () => setIsVisible(true));

        // Hover states
        const applyHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, .hoverable, .gallery-track-wrapper');

            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => dot.classList.add('hovered'));
                el.addEventListener('mouseleave', () => dot.classList.remove('hovered'));
            });
        };

        // Small delay to ensure DOM is ready
        setTimeout(applyHoverListeners, 500);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <div ref={dotRef} className="custom-cursor-dot" style={{ opacity: 0 }}></div>
    );
}
