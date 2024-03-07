"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SiApple } from "react-icons/si";

export default function ParanoteTypewriter({
  infoSection,
  firstSectionRef,
  thirdSectionRef,
  isBackgroundBlack,
}: {
  infoSection: React.RefObject<HTMLElement>;
  firstSectionRef: React.RefObject<HTMLElement>;
  thirdSectionRef: React.RefObject<HTMLElement>;
  isBackgroundBlack: boolean;
}) {
  const logoRef = useRef(null); // Ref für das Logo
  const [checkIsBackgroundBlack, setCheckIsBackgroundBlack] = useState(false);

  useEffect(() => {
    if (isBackgroundBlack) {
      setCheckIsBackgroundBlack(true);
    } else {
      setCheckIsBackgroundBlack(false);
    }
  }, [isBackgroundBlack]);

  const scrollToInfoSection = () => {
    if (infoSection && infoSection.current) {
      infoSection.current.scrollIntoView({ behavior: "instant" });
    }
  };

  const scrollTofirstSection = () => {
    if (thirdSectionRef && thirdSectionRef.current) {
      thirdSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-[600px] h-full flex flex-row justify-center items-center ">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col ">
          <div
            ref={logoRef}
            className="flex flex-row items-center w-full jutsify-center space-x-5 overflow-show"
          >
            <Image
              src="/PPLogo@3x.png"
              alt="logo"
              width={70}
              height={70}
              className=""
            />
            <TypeAnimation
              sequence={[
                2000,
                "p", // Types 'One'
                100, // Waits 1s
                "pa", // Deletes 'One' and types 'Two'
                200, // Waits 2s
                "par", // Types 'Three' without deleting 'Two'
                100, // Waits 1s
                "para", // Types 'One'
                100, // Waits 1s
                "paran", // Deletes 'One' and types 'Two'
                200, // Waits 2s
                "parano", // Types 'Three' without deleting 'Two'
                100, // Waits 1s
                "paranot", // Types 'One'
                100, // Waits 1s
                "paranote", // Deletes 'One' and types 'Two'
                200, // Waits 2s
              ]}
              cursor={true}
              className="text-[100px] font-thin text-white"
            />{" "}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 pointer-events-auto flex flex-row space-x-4 items-center justify-center">
        <button
          className={`flex items-center justify-center w-8 h-6 hover:border rounded-lg border-white ${
            checkIsBackgroundBlack ? "text-white" : "text-black"
          }
           hover:scale-105 active:scale-95 transform ease-in-out duration-200`}
          onClick={scrollTofirstSection}
        >
          <ChevronDownIcon className="w-3 h-3 " />
        </button>
        <button
          className="w-20 h-7 rounded-lg bg-[#6e6af6] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
          onClick={scrollToInfoSection}
        >
          <SiApple className="text-white w-3 h-3" />
          <p className="  text-white text-[8px] uppercase"> Download </p>
        </button>
      </div>
    </div>
  );
}
