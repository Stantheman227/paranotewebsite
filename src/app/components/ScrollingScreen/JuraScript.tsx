import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import PopUps from "../PopUps";

const JuraScript = ({
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
  //////////////////////////// SVG REFS ////////////////////////////
  const svgRef1 = useRef<HTMLImageElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);

  //////////////////////////// TIMELINE FOR SCALING SVG ////////////////////////////

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // Define breakpoints and corresponding scale factors
    const breakpoints = {
      "(min-width: 1920px)": {
        scale: 2.5,
        wrapScaleHeight: "450px",
        wrapScaleWidth: "1200px",
      }, // For 1920px and above
      "(min-width: 1440px) and (max-width: 1919px)": { scale: 2.2 }, // For screens between 1440px and 1919px
      "(min-width: 1024px) and (max-width: 1439px)": { scale: 2.0 }, // For screens between 1024px and 1439px
      "(min-width: 768px) and (max-width: 1023px)": { scale: 1.8 }, // For screens between 768px and 1023px
      "(max-width: 767px)": { scale: 1.6 }, // For screens below 768px
    };

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: thirdSectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        once: true,
      },
    });

    // SVG SCALES TO 2.5X and ViewBox changes
    tl3.fromTo(
      svgRef1.current,
      { scale: 1 },
      { scale: 2.5, duration: 1, ease: "none" }
    );
    tl3.to(
      svgWrapRef.current,
      {
        height: "450px",
        width: "1200px",
        duration: 1,
        ease: "none",
      },
      "<"
    );
  }, []);

  ///////////////////////  SCALING SVG SMALL AGAIN ////////////////////////////////

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log(thirdSectionRef);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: fourthSectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    tl3.to(
      svgRef1.current,

      { scale: 1, duration: 2, ease: "none" },
      "<"
    );

    tl3.to(
      svgWrapRef.current,
      {
        height: "100%",
        width: "600px",
        duration: 2,
        ease: "none",
        transform: "linear",
      },
      "<"
    );
  }, []);

  //////////////////////////////// POPUPS COMING IN TIMELINE ////////////////////////////////////////
  const popUpsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: secondSectionRef.current,
        endTrigger: fourthSectionRef.current,
        start: "bottom center",
        end: "center center",
        scrub: true,
      },
    });

    // CUSTOM POPUPS SLIDE IN
    tl3.fromTo(
      popUpsRef.current,
      {
        x: "125%",
      },

      {
        x: "0%",
        duration: 2,
        ease: "none",
      },
      2.5
    );

    console.log("test");
  }, []);

  //////////////////////////////// SVG FADING OUT ANIMATION /////////////////////////////////////////
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: fifthSectionRef.current,
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
      className="absolute inset-0 flex items-center justify-start w-full overflow-hidden "
    >
      <div
        ref={svgWrapRef}
        className="flex items-center justify-center overflow-hidden svgWrapRefContainer rounded-sm border-transform-svg"
      >
        <div className="overflow-visible">
          <Image
            ref={svgRef1 as React.RefObject<HTMLImageElement>}
            src={"/JuraScriptMarkiert_svg.svg"}
            height={600}
            width={600}
            alt="Jura Script Mockup Bereicherungsrecht"
            style={{ zIndex: 60, objectFit: "contain" }}
            className="bg-white pointer-events-none"
          />
        </div>
      </div>

      <div ref={popUpsRef} className="absolute -right-16 xl:right-0">
        <PopUps />
      </div>
    </div>
  );
};

export default JuraScript;
