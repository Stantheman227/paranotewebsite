"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const CustomSvg = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.64 32.39">
    <style>
      {`.cls-1 { fill: none; stroke: ${color}; stroke-miterlimit: 10; } .cls-2 { fill:none; stroke-width: 0px; }`}
    </style>
    <rect className="cls-2" x=".5" y=".5" width="24.64" height="31.39" />
    <path
      className="cls-1"
      d="M5,31.89h18.97c0.64,0,1.17-0.51,1.17-1.17,0-0.51-0.35-0.97-0.82-1.13-1.85-0.73-2.23-3.12-0.41-4.95,0.56-0.56,1.23-1.27,1.23-2.74V5.1c0-3.05-1.51-4.6-4.54-4.6H5.04C2.01.5.5,2.04.5,5.1v22.27c0,3.02,1.52,4.53,4.5,4.53ZM2.86,23.42V5.14c0-1.46,0.78-2.29,2.29-2.29h15.34c1.52,0,2.3,0.82,2.3,2.29v16.44c0,0.79-0.45,1.25-1.27,1.25H5.25c-0.95,0-1.74,0.21-2.39,0.6ZM5.13,29.53c-1.48,0-2.27-0.79-2.27-2.18,0-1.32,0.94-2.17,2.4-2.17h15.03c0.19,0,0.37-0.01,0.51-0.04-0.69,1.52-0.57,3.13,0.21,4.39H5.13ZM4.59,24.08h1.92V2.29h-1.92v21.8ZM10.52,18.81c0.45,0,0.78-0.22,0.98-0.81l0.92-2.7h4.53l0.92,2.7c0.19,0.59,0.51,0.81,0.98,0.81,0.56,0,0.92-0.35,0.92-0.88,0-0.19-0.03-0.38-0.13-0.64l-3.54-9.57c-0.25-0.66-0.73-1-1.42-1s-1.16,0.34-1.41,1l-3.56,9.57c-0.09,0.26-0.13,0.45-0.13,0.64,0,0.53,0.37,0.88,0.94,0.88ZM12.92,13.79l1.7-4.89h0.13l1.68,4.89h-3.52Z"
    />
  </svg>
);

const PopUp = ({
  paragraph,
}: {
  paragraph: {
    Header: string;
    Body: any[];
  };
}) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [gesetztesBuchActive, setGesetztesBuchActive] = useState(false);

  const slidingDivClass = `relative text-white tracking-wide flex flex-col justify-start slidingContainer 
  ${isActive ? "translate-x-[-35px]" : "translate-x-0"}
  transform duration-500 ease-in-out bg-gray-500 rounded-lg space-y-2 p-2 overflow-hidden 
  ${isActive ? "active" : ""} 
  w-[450px]
  h-[150px]
  ${isActive ? "h-[310px]" : ""}`;

  const scrollDivClass = `scrollContainer noScrollBarContainer text-[16px] ${
    isActive ? "overflow-y-scroll" : "overflow-y-hidden"
  }`;

  useEffect(() => {
    if (paragraph?.Header && paragraph.Header.includes("§ 57")) {
      setIsActive(true);
    }
  }, [paragraph?.Header]);

  useEffect(() => {
    const container = containerRef.current as HTMLElement | null;

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (gesetztesBuchActive) {
      // Pulsieren des SVGs
      gsap.to(svgRef.current, {
        scale: 2,
        repeat: 5,
        yoyo: true,
        duration: 0.25,
        ease: "power1.inOut",
      });
    }
  }, [gesetztesBuchActive]);

  const renderBody = (body: any[]) => {
    // Prüfung, ob der aktuelle Body-Eintrag ein String oder ein Objekt ist
    return body.map((item, index) => {
      if (typeof item === "string") {
        // Direktes Rendern von String-Einträgen
        return (
          <p key={index} className="ml-5">
            {item}
          </p>
        );
      } else if (typeof item === "object") {
        // Rendern von Objekten mit SubHeader und SubBody
        return (
          <React.Fragment key={index}>
            <p className="font-bold">{item.SubHeader}</p>
            {item.SubBody &&
              item.SubBody.map((subItem: any, subIndex: any) => (
                <p key={subIndex} className="ml-5">
                  {subItem}
                </p>
              ))}
          </React.Fragment>
        );
      }
      return null; // Sicherheitsfallback
    });
  };

  const svgColor = isActive ? "#fff" : "#FFFFFF"; // Rot wenn aktiv, sonst Weiß

  return (
    <div
      ref={containerRef}
      className="parentSliding rounded-lg relative font-SF-Compact"
    >
      <div className="flex flex-col space-y-1 absolute top-0 right-0">
        <div className="w-[30px] h-[30px]">
          <Image src="/AddNote.svg" alt="arrow" width={30} height={30} />
        </div>
        <div className="w-[30px] h-[30px]">
          <Image src="/TextMarker.svg" alt="arrow" width={30} height={30} />
        </div>
        <div className="w-[30px] h-[30px]">
          <Image src="/ShowNote.svg" alt="arrow" width={30} height={30} />
        </div>
        <div className="w-[30px] h-[30px]">
          <Image src="/CloseNote.svg" alt="arrow" width={30} height={30} />
        </div>
      </div>

      <div className={slidingDivClass}>
        <div className="top-0 sticky flex flex-row justify-between">
          <p className="font-bold text-[14px]">{paragraph.Header}</p>
          <div ref={svgRef} className="w-4 h-4">
            <CustomSvg color={gesetztesBuchActive ? "blue" : "white"} />
          </div>
        </div>
        <div className={scrollDivClass}>{renderBody(paragraph.Body)}</div>
      </div>
    </div>
  );
};

export default PopUp;
