import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const WebsitePlugin = ({
  firstSectionRef,
  secondSectionRef,
  thirdSectionRef,
  fourthSectionRef,
  fifthSectionRef,
  sixthSectionRef,
  seventhSectionRef,
}: {
  firstSectionRef: React.RefObject<HTMLDivElement>;
  secondSectionRef: React.RefObject<HTMLDivElement>;
  thirdSectionRef: React.RefObject<HTMLDivElement>;
  fourthSectionRef: React.RefObject<HTMLDivElement>;
  fifthSectionRef: React.RefObject<HTMLDivElement>;
  sixthSectionRef: React.RefObject<HTMLDivElement>;
  seventhSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  const svgRef1 = useRef<HTMLImageElement>(null);

  //////////////////////////////// SVG FADING IN ANIMATION /////////////////////////////////////////
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: fifthSectionRef.current,
        start: "top 25%",
        end: "top top",
        scrub: true,
      },
    });
    tl1.fromTo(
      sectionRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "none",
      }
    );
  }, []);

  //////////////////////////////// SVG FADING OUT ANIMATION /////////////////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sixthSectionRef.current,
        start: "top 25%",
        end: "top top",
        scrub: true,
      },
    });
    tl2.to(sectionRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute flex items-center justify-center h-full w-full "
    >
      <Image
        ref={svgRef1 as React.RefObject<HTMLImageElement>}
        src={"/SafariPluginWebsite.png"}
        height={1075}
        width={1606}
        alt="svg"
        style={{ zIndex: 60, objectFit: "contain" }}
        className="pointer-events-none"
      />
    </div>
  );
};
export default WebsitePlugin;
