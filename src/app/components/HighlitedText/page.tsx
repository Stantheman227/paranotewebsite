"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const HighlightedText = () => {
  const spanRef = useRef(null);
  useLayoutEffect(() => {
    const animatedText = spanRef.current;
    const animatedPseudo = animatedText.querySelector(".animatedPseudo");

    // Erstellen Sie eine Timeline-Max-Animation für den Text und das Pseudo-Element
    const tl = gsap.timeline();

    // Animation für den Text
    tl.to(animatedText, {
      backgroundColor: "transparent",
      color: "white",
      duration: 0.3,
    });

    // Animation für das Pseudo-Element
    tl.to(animatedPseudo, {
      left: "0",
      zIndex: 10,
      duration: 0.3,
      ease: "none",
    });

    // Initialisierte Animation starten
    tl.play();

    return () => {
      // Timeline-Max-Animation löschen, um Lecks zu vermeiden
      tl.kill();
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-5 h-full text-center mt-[20%]">
      <p className="text-white">
        Hier stellt sich die Frage, <br /> ob U Aufwendungsersatz nach §§ 683 S.
        1, 670 BGB <br /> verlangen kann oder ob er auf die Leistungskondiktion
        nach
      </p>
      <div ref={spanRef} className="animatedText">
        <div className="animatedPseudo" />
        <p className="relative z-20">§ 812 I 1 Fall 1 BGB</p>
      </div>
      <p className="text-white">zu verweisen ist.</p>
      <div className="flex flex-row">
        <div className="w-12 h-12 border-2 border-white rounded-lg flex justify-end items-end p-1 bg-white bg-opacity-0 hover:bg-opacity-50 transform duration-300 ease-in-out">
          <p className="text-white text-xs">cmd</p>
        </div>
        <div>
          <div className="w-12 h-12  rounded-lg flex justify-center items-center">
            <p className="text-white text-lg">+</p>
          </div>
        </div>
        <div className="w-12 h-12 border-2 border-white rounded-lg flex justify-end items-end p-1 bg-white bg-opacity-0 hover:bg-opacity-50 transform duration-300 ease-in-out">
          <p className="text-white text-xs mr-1">x</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightedText;
