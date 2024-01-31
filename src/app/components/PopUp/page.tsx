"use client";

import React, { useEffect, useState, useRef } from "react";
import { Paragraphen } from "../constants/page";
import Image from "next/image";

const PopUp = ({ paragraphIndex }) => {
  const paragraph = Paragraphen[paragraphIndex];
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
    if (paragraph.Header.includes("§ 57")) {
      setIsActive(true);
    }
  }, [paragraph.Header]); 

  const slidingDivClass = `relative text-white tracking-wide flex flex-col justify-start slidingContainer min-w-[450px] max-w-[450px] ${
    isActive ? "h-[310px] translate-x-[-35px]" : "h-[150px] translate-x-0"
  } transform duration-500 ease-in-out bg-gray-500 rounded-lg space-y-2 p-2 overflow-hidden`;

  const scrollDivClass = `scrollContainer noScrollBarContainer ${
    isActive ? "overflow-y-scroll" : "overflow-y-hidden"
  }`;

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const renderBody = (body) => {
    if (Array.isArray(body)) {
      return body.map((item, index) => {
        if (typeof item === "object" && item.SubHeader) {
          return (
            <div
              className="space-y-3 tracking-wide font-medium text-[14px]"
              key={index}
            >
              <p className="">{item.SubHeader}</p>
              {item.SubBody &&
                item.SubBody.map((subItem, subIndex) => (
                  <p className="ml-5" key={subIndex}>
                    {subItem}
                  </p>
                ))}
            </div>
          );
        } else {
          return <p key={index}>{item}</p>;
        }
      });
    }
    return null;
  };

  return (
    <div
      ref={containerRef}
      data-scroll-section
      className="parentSliding rounded-lg relative font-SF-Compact"
    >
      <div className="flex flex-col space-y-1 absolute top-0 right-0">
        <Image src="/AddNote.svg" alt="arrow" width={30} height={30} />
        <Image src="/TextMarker.svg" alt="arrow" width={30} height={30} />

        <Image src="/ShowNote.svg" alt="arrow" width={30} height={30} />
        <Image src="/CloseNote.svg" alt="arrow" width={30} height={30} />
      </div>

      <div className={slidingDivClass}>
        <div className="top-0 sticky flex flex-row justify-between">
          <p className="font-bold text-[14px]">{paragraph.Header}</p>
          <div>
            <Image src="/BookClosed.svg" alt="arrow" width={12} height={12} />
          </div>
        </div>
        <div data-scroll-container  	 className={scrollDivClass}>{renderBody(paragraph.Body)}</div>
      </div>
    </div>
  );
};

export default PopUp;
