import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ParanoteTypewriter from "./ParanoteTypewriter";

const ScalingLaptop = ({
  firstSectionRef,
  secondSectionRef,
  thirdSectionRef,
  infoSection,
}: {
  firstSectionRef: React.RefObject<HTMLDivElement>;
  secondSectionRef: React.RefObject<HTMLDivElement>;
  thirdSectionRef: React.RefObject<HTMLDivElement>;
  infoSection: React.RefObject<HTMLDivElement>;
}) => {
  const sectionRef = useRef(null);
  const laptopWrapRef = useRef(null);
  const typewriterRef = useRef(null);
  const isBackgroundBlack = false;

  useEffect(() => {
    // USE EFFECT FOR LAPTOP SCALING
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // Define breakpoints and corresponding scale factors
    const breakpoints = {
      "(min-width: 1920px)": { scale: 2.4 }, // For 1920px and above
      "(min-width: 1440px) and (max-width: 1919px)": { scale: 2.2 }, // For screens between 1440px and 1919px
      "(min-width: 1024px) and (max-width: 1439px)": { scale: 2.0 }, // For screens between 1024px and 1439px
      "(min-width: 768px) and (max-width: 1023px)": { scale: 1.8 }, // For screens between 768px and 1023px
      "(max-width: 767px)": { scale: 1.6 }, // For screens below 768px
    };

    // Loop through each breakpoint and create animations
    Object.entries(breakpoints).forEach(([mediaQuery, { scale }]) => {
      mm.add(mediaQuery, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: typewriterRef.current,
            endTrigger: secondSectionRef.current,
            start: "center center",
            end: "top top",
            scrub: true,
          },
        });

        tl.fromTo(
          laptopWrapRef.current,
          { scale: scale },
          { scale: 1, duration: 2, ease: "none" }
        )
          .to(
            laptopWrapRef.current,
            { scale: scale, duration: 2, ease: "none" },
            "+=2.5"
          )
          .fromTo(
            typewriterRef.current,
            { autoAlpha: 1 },
            { autoAlpha: 0, duration: 1, ease: "none" },
            "-=1.5"
          )
          .fromTo(
            sectionRef.current,
            { autoAlpha: 1 },
            { autoAlpha: 0, duration: 1, ease: "none" }
          );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 flex justify-center items-center w-full h-screen z-10 overflow-hidden pointer-events-none"
    >
      <div
        ref={laptopWrapRef}
        className="relative h-[75%] w-[50%] flex items-center justify-center"
      >
        <div className="absolute h-[756px] w-[1260px] items-center justify-center flex pointer-events-none">
          <Image src="/laptop_trans.png" alt="laptop" fill={true} />
        </div>
        <div ref={typewriterRef} className="">
          {" "}
          <ParanoteTypewriter
            infoSection={infoSection}
            firstSectionRef={firstSectionRef}
            thirdSectionRef={thirdSectionRef}
            isBackgroundBlack={isBackgroundBlack}
          />
        </div>
      </div>
    </section>
  );
};
export default ScalingLaptop;
