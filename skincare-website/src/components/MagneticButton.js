"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MagneticButton({ children, className = "", id = "", onClick, type = "button" }) {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        // Ensure we respect reduced motion preferences
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = button.getBoundingClientRect();
            const x = (clientX - (left + width / 2)) * 0.3; // Magnet strength
            const y = (clientY - (top + height / 2)) * 0.3;

            gsap.to(button, {
                x: x,
                y: y,
                duration: 1,
                ease: "power3.out",
            });

            gsap.to(text, {
                x: x * 0.5,
                y: y * 0.5,
                duration: 1,
                ease: "power3.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });

            gsap.to(text, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // If it's a link passed as children, just render the wrapper div as magnetic
    if (typeof children === 'object' && children.type === 'a') {
        return (
            <div ref={buttonRef} className={`magnetic-wrapper ${className}`} id={id}>
                <div ref={textRef} style={{ pointerEvents: 'none' }}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <button
            ref={buttonRef}
            className={`magnetic-btn ${className}`}
            onClick={onClick}
            type={type}
            id={id}
        >
            <span ref={textRef} className="magnetic-text">
                {children}
            </span>
        </button>
    );
}
