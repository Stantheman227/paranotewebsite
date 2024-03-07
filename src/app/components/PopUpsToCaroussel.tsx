"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import PopUp from "./PopUp";
import { ParagraphenForCaroussel } from "../../components/constants";

const PopUpsToCaroussel = ({
  isVisibleSetter,
}: {
  isVisibleSetter: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisibleSetter === true) setIsVisible(true);
  }, [isVisibleSetter]);

  useEffect(() => {
    if (isVisible) {
      // Animation nur für die spezifizierten PopUps anwenden
      const children = containerRef.current?.children;
      if (children) {
        [0, 1, 3, 4].forEach((index) => {
          gsap.fromTo(
            children[index],
            {
              autoAlpha: 0,
              y:
                index === 0
                  ? 310
                  : index === 1
                  ? 155
                  : index === 3
                  ? -155
                  : -310,
            },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "circ.inOut" }
          );
        });
      }
    }
  }, [isVisible]);

  // Funktion zur Bestimmung des z-Index basierend auf dem Index des Paragraphen
  const getZIndexForParagraph = (index: number) => {
    switch (index) {
      case 2: // 812
        return 3;
      case 1: // 811
      case 3: // 813
        return 2;
      default: // 810 und 814
        return 1;
    }
  };

  return (
    <div className="h-[822px] flex items-center">
      <div
        ref={containerRef}
        className="relative flex flex-col items-center space-y-1"
      >
        {ParagraphenForCaroussel.map((paragraph, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index !== 2 && !isVisible ? "hidden" : ""
            }`}
            style={{ zIndex: getZIndexForParagraph(index) }}
          >
            <PopUp paragraph={paragraph} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpsToCaroussel;
