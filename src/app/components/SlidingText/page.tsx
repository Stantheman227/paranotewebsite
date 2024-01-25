"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrases = [
  "Schneller Zugriff auf aktuelle Gesetzestexte",
  "Persönliche Notizfunktion mit Kategorisierung",
  "Synchronisation von Notizen über mehrere Geräte",
  "Integrierte Suchfunktion für Rechtsprechung und Kommentare",
  "Automatische Aktualisierung mit den neuesten Rechtsänderungen",
  "Möglichkeit, eigene Fälle und Lösungen zu speichern und zu teilen",
];

export default function SlidingText() {
  return (
    <div
      className={
        "relative text-white text-[5px] uppercase space-y-2 w-[75%] pt-10"
      }
    >
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: "-200px" }, // Anfangszustand
      {
        // Endzustand
        scrollTrigger: {
          trigger: textRef.current,
          scrub: true,
          start: "top+=100 bottom",
          end: "bottom+=300px bottom",
        },
        opacity: 0.5,
        x: "100px",
        ease: "power3.Out",
      }
    );

    // Hover-Effekt mit GSAP
    textRef.current.addEventListener("mouseenter", () => {
      gsap.to(textRef.current, { opacity: 1, duration: 0.1 });
    });
    textRef.current.addEventListener("mouseleave", () => {
      gsap.to(textRef.current, { opacity: 0.5 });
    });
  }, []);

  return (
    <p className="relative cursor-pointer" ref={textRef}>
      {children}
    </p>
  );
}
