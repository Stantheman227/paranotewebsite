"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function ParanoteTypewriter() {
  const logoRef = useRef(null); // Ref für das Logo
  const smartRef = useRef(null); // Ref für den Text
  const betaRef = useRef(null); // Ref für den Text
  const textRef = useRef(null); // Ref für den Text


  return (
    <div className="relative w-[600px] h-full flex flex-row justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col">
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
              className="text-[100px] font-thiner text-white"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
