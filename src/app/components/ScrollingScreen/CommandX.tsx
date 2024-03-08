import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ShortcutButtons from "../HighlitedText/ShortcutButtons";
import PopUpsToCaroussel from "../PopUpsToCaroussel";

import { Sachverhalt812 } from "../../../components/constants";

const CommandX = ({
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
  ///////////////////////////////// FÜR COMMAND + X ANIMATION ////////////////////////////////
  const pTagRefs = useRef([...Array(6)].map(() => React.createRef()));
  const spanRef = useRef(null);
  const buttonsRef = useRef(null);
  const popUpsToCarousselRef = useRef(null);
  const [isVisibleSetter, setIsVisibleSetter] = useState(false);

  //////////////////////////////// SVG FADING IN ANIMATION /////////////////////////////////////////
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sixthSectionRef.current,
        start: "top 25%",
        end: "top top",
        scrub: true,
      },
    });
    tl.fromTo(
      sectionRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "none",
      }
    );
  }, []);

  //////////////////////////////// PTAGS OPACITY ANIMATION //////////////////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: sixthSectionRef.current,
        start: "top 25%",
        end: "top top",
        once: true,
      },
    });

    pTagRefs.current.forEach((pTagRef, index) => {
      tl5.fromTo(
        pTagRef.current as React.RefObject<HTMLParagraphElement>,
        { autoAlpha: 0 },
        {
          autoAlpha: 0.2 + index * 0.15,
          duration: 0.5,
          ease: "power4.in",
        },
        "-=0.375"
      );
    });

    tl5.fromTo(
      buttonsRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      "+=0"
    );
    tl5.to(spanRef.current, { className: "highlight-right-to-left" }, "<");
    tl5.fromTo(
      popUpsToCarousselRef.current,
      {
        opacity: 0,
        x: "125%",
      },
      {
        opacity: 1,
        x: "0%",
        duration: 1.25,
        ease: "power4.out",
        repeat: 0,
        onComplete: () => {
          setIsVisibleSetter(true);
        },
      },
      "<+1.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  //////////////////////////////// SVG FADING OUT ANIMATION /////////////////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: seventhSectionRef.current,
        start: "top 25%",
        end: "top top",
        scrub: true,
      },
    });
    tl.to(sectionRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute flex items-center justify-center h-full w-full overflow-hidden"
    >
      {" "}
      <div className="w-full h-full flex flex-col text-center justify-center">
        <div className="flex flex-col space-y-1 2xl:ml-8 3xl:ml-10 4xl:ml-16 5xl:ml-28 ">
          {Sachverhalt812.map((text, index) => (
            <div
              className="text-white text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[30px] 4xl:text-[34px] font-semibold text-start font-serif"
              ref={pTagRefs.current[index] as React.RefObject<HTMLDivElement>}
              key={index}
            >
              <p>
                {text}{" "}
                {index === 4 && (
                  <span ref={spanRef} className=" text-white ">
                    § 812 I 1 Fall 1 BGB
                  </span>
                )}
              </p>
            </div>
          ))}
          <div ref={buttonsRef} className="flex flex-row autoAlpha-0">
            <ShortcutButtons />
          </div>
        </div>
      </div>
      <div
        ref={popUpsToCarousselRef}
        className="absolute -right-24 xl:-right-10 2xl:-right-10 3xl:-right-10 4xl:right-0"
      >
        <PopUpsToCaroussel isVisibleSetter={isVisibleSetter} />
      </div>
    </div>
  );
};
export default CommandX;
