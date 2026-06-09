"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Quick setter for performance
        const xSetDot = gsap.quickSetter(dot, "x", "px");
        const ySetDot = gsap.quickSetter(dot, "y", "px");
        const xSetRing = gsap.quickSetter(ring, "x", "px");
        const ySetRing = gsap.quickSetter(ring, "y", "px");

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = window.innerWidth / 2;
        let ringY = window.innerHeight / 2;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (!isVisible) {
                setIsVisible(true);
                gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
            }

            // Dot follows instantly
            xSetDot(mouseX);
            ySetDot(mouseY);
        };

        // Smooth follow for the ring
        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
            ringX += (mouseX - ringX) * dt;
            ringY += (mouseY - ringY) * dt;
            xSetRing(ringX);
            ySetRing(ringY);
        });

        const handleMouseLeave = () => {
            setIsVisible(false);
            gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", () => setIsVisible(true));

        // Hover states
        const applyHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, .hoverable');
            const dragAreas = document.querySelectorAll('.gallery-track-wrapper');

            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    dot.classList.add('hovered');
                    ring.classList.add('hovered');
                });
                el.addEventListener('mouseleave', () => {
                    dot.classList.remove('hovered');
                    ring.classList.remove('hovered');
                });
            });

            dragAreas.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    dot.classList.add('hovered');
                    ring.classList.add('drag-hover');
                });
                el.addEventListener('mouseleave', () => {
                    dot.classList.remove('hovered');
                    ring.classList.remove('drag-hover');
                });
                el.addEventListener('mousedown', () => {
                    ring.classList.add('drag-active');
                });
                el.addEventListener('mouseup', () => {
                    ring.classList.remove('drag-active');
                });
            });
        };

        // Small delay to ensure DOM is ready
        setTimeout(applyHoverListeners, 500);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            gsap.ticker.remove();
        };
    }, [isVisible]);

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot" style={{ opacity: 0 }}></div>
            <div ref={ringRef} className="custom-cursor-ring" style={{ opacity: 0 }}></div>
        </>
    );
}
