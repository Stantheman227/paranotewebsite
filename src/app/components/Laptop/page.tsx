"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ParanoteTypewriter from "../ParanoteTypewriter/page";
import HighlightedText from "../HighlitedText/page";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import PopUps from "../PopUps/page";
import Card from "../LawPopUp/page";
import { cards, phrases, cardPositions } from "../constants/page"; // Ausgelagerte Konstanten

const Laptop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopWrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const svgRef1 = useRef<HTMLDivElement>(null);
  const svgCircleRef = useRef<SVGRectElement>(null);
  const svgRef2 = useRef<HTMLDivElement>(null);
  const popUpRef = useRef<HTMLDivElement>(null);
  const HighlightedTextRef = useRef<HTMLDivElement>(null);

  const textRefs = useRef<(HTMLParagraphElement | null)[]>(
    Array(phrases.length).fill(null)
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: laptopWrapRef.current,
        start: "center center",
        end: "center top",
        scrub: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: laptopWrapRef.current,
        start: "bottom bottom-=300px",
        end: "bottom top-=500px",
        scrub: true,
      },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: laptopWrapRef.current,
        start: "bottom top-=600x",
        end: "bottom top-=1500px",
        scrub: true,
      },
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: laptopWrapRef.current,
        start: "bottom top-=1500px",
        end: "bottom top-=6000px",
        scrub: true,
      },
    });

    // LAPTOP SCALING FROM BIG TO SMALL
    tl1.fromTo(
      laptopWrapRef.current,
      { scale: 2.2 },
      { scale: 0.8, duration: 3, ease: "" }
    );

    // TYPEWRITER DISSAPEAR
    tl1.to(
      typewriterRef.current,
      { opacity: 0, duration: 2, ease: "power4.out" },
      "=-2"
    );

    // SVG APPEAR
    tl1.to(
      svgRef.current,
      { opacity: 1, duration: 2, ease: "power4.out" },
      "=-1"
    );

    // KARTEN POP OUT ANIMATION
    tl1
      .fromTo(
        cardRefs.current,
        { opacity: 0, scale: 1.5 },
        {
          opacity: 1,
          scale: 1.2,
          duration: 2,
          ease: "",
        },
        "=-2"
      ) // ADD TYPEWRITER HIDDEN AT THE END OF TIMELINE 1
      .to(
        typewriterRef.current,
        { visibility: "hidden" }, 
        "=-2"
      );

    // KARTEN POP IN ANIMATION (Position)
    cards.forEach((card, index) => {
      const cardElement = cardRefs.current[index];
      if (cardElement) {
        let positionProps = {};

        // Zuweisung der Animationsziele basierend auf der Position im Card-Objekt
        switch (card.position) {
          case 1:
            positionProps = { top: "22%", right: "5%", left: "", bottom: "" };
            break;
          case 2:
            positionProps = { top: "32%", right: "5%", left: "", bottom: "" };
            break;
          case 3:
            positionProps = { top: "42%", right: "5%", left: "", bottom: "" };
            break;
          case 4:
            positionProps = { top: "52%", right: "5%", left: "", bottom: "" };
            break;
          default:
            break; // Optional: Standardverhalten für ungültige Positionen
        }

        tl2.to(
          cardElement,
          {
            ...positionProps,
            duration: 2,
            scale: 0.45,
            ease: "",
            transformOrigin: "top right",
          },
          "<"
        );
      }
    });

    // KARTEN POP IN ANIMATION (Opacity)
    tl2.to(cardRefs.current, {
      opacity: 1,
      duration: 1,
      ease: "none",
    });

    // LAPTOP ZOOMING IN AGAIN ANIMATION
    tl2.to(laptopWrapRef.current, { scale: 2.2, duration: 3, ease: "" }, "=+1");

    // SVG-SLIDE TO THE RIGHT Animation (Dauer: 3 Sekunden)
    tl3.to(svgRef.current, { x: "95%", duration: 2, ease: "" }, "<+=1");

    // KARTEN SLIDE OUT ANIMATION
    cards.forEach((card, index) => {
      const cardElement = cardRefs.current[index];

      tl3.to(cardElement, { x: "100%", duration: 2, ease: "" }, "<");

      // Hintergrundfarbe ändern (Dauer: 3 Sekunden)
      tl3.to(
        sectionRef.current,
        {
          backgroundColor: "black",
          duration: 3,
          ease: "",
        },
        "<"
      );
    });

    // TEXT ANIMATION INDIVIDUELL FÜR JEDES ELEMENT
    textRefs.current.forEach((textRef, index) => {
      const delay = index * 2.5; // 0.75 Sekunden Pause zwischen den Animationen

      tl4.fromTo(
        textRef,
        { opacity: 0, x: "-200px" },
        {
          opacity: 1,
          x: "0px",
          ease: "none",
          duration: 1.5,
          onComplete: () => {
            // Setze die Opacity der vorherigen Textelemente auf 0.5
            for (let i = 0; i < index; i++) {
              const prevTextRef = textRefs.current[i];
              if (prevTextRef) {
                gsap.to(prevTextRef, { opacity: 0.5, duration: 0.5 });
              }
            }
          },
        },
        delay // Startzeitpunkt der Animation basierend auf dem Index
      );
    });

    // ROTE KREISE ANIMATION
    tl4.fromTo(
      svgCircleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
      1
    );

    // SVG SLIDES BACK IN ANIMATION
    tl4.to(
      svgRef.current,
      {
        x: "20%",
        duration: 2,
        ease: "",
      },
      2.5
    );
    // CUSTOM POPUPS SLIDE IN
    tl4.fromTo(
      popUpRef.current,
      {
        opacity: 0,
        x: "150%",
      },

      {
        opacity: 1,
        x: "210%",
        duration: 2,
        ease: "",
      },
      2.5
    );

    // SVG1 FADES OUT
    tl4.to(
      svgRef1.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "",
      },
      5
    );
    // RED CIRCLE FADES OUT
    tl4.to(
      svgCircleRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "",
      },
      5
    );

    // SVG2 FADES IN
    tl4.to(
      svgRef2.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "",
      },
      5.5
    );

    // SVG2 FADES OUT

    tl4.to(
      svgRef2.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "",
      },
      7
    );

    // HIGHLIGHTED TEXT FADES IN

    tl4.to(
      HighlightedTextRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "",
      },
      7.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky flex justify-center items-center top-0 w-full h-screen z-10 overflow-hidden"
    >
      <div
        ref={laptopWrapRef}
        style={{ zIndex: 40 }}
        className="relative h-[75%] w-[100vh] flex items-center justify-center"
      >
        <div className="absolute h-[756px] w-[1260px] items-center justify-center flex overflow-visible pointer-events-none">
          <Image
            src="/laptop_trans.png"
            alt="laptop"
            fill={true}
            style={{ zIndex: 50 }}
          />
          <div className="h-[1000px] w-[75%] overflow-hidden flex items-center justify-center">
            <div
              ref={svgRef}
              style={{ zIndex: 70 }}
              className="w-[22%] h-[50%] absolute opacity-0"
            >
              <svg
                className="absolute top-[0%] left-[0%] z-90"
                ref={svgCircleRef}
                style={{ opacity: 0, zIndex: 70 }}
              >
                <rect
                  width="7%"
                  height="4.5%"
                  x="4.5%"
                  y="17.5%"
                  rx="2"
                  stroke="red"
                  fill="none"
                  strokeWidth="1"
                />
                <rect
                  width="7.5%"
                  height="5%"
                  x="78.5%"
                  y="19.5%"
                  rx="2"
                  stroke="red"
                  fill="none"
                  strokeWidth="1"
                />
                <rect
                  width="7%"
                  height="5%"
                  x="79.5%"
                  y="46%"
                  rx="2"
                  stroke="red"
                  fill="none"
                  strokeWidth="1"
                />
                <rect
                  width="7%"
                  height="5%"
                  x="5.5%"
                  y="58%"
                  rx="2"
                  stroke="red"
                  fill="none"
                  strokeWidth="1"
                />
                <rect
                  width="5%"
                  height="4%"
                  x="5.5%"
                  y="76.5%"
                  rx="2"
                  stroke="red"
                  fill="none"
                  strokeWidth="1"
                />
              </svg>{" "}
              <Image
                ref={svgRef1}
                src={"PDF_SVG.svg"}
                fill={true}
                alt="svg"
                style={{ zIndex: 60 }}
                className="rounded-sm bg-white absolute"
              />
              <Image
                ref={svgRef2}
                src={"PDF_READER.svg"}
                fill={true}
                alt="svg"
                style={{ zIndex: 50 }}
                className="rounded-sm absolute opacity-0"
              />
              <div
                ref={HighlightedTextRef}
                style={{ zIndex: 90 }}
                className="absolute opacity-0 scale-50"
              >
                <div className="h-full flex items-center justify-center">
                  <HighlightedText />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={typewriterRef} className="">
          {" "}
          <ParanoteTypewriter />
        </div>

        <div
          style={{ zIndex: 90 }}
          className="absolute left-[5%] text-white text-[10px] uppercase space-y-4 w-[35%]"
        >
          {phrases.map((phrase, index) => {
            return (
              <p
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className="cursor-pointer slidingtext"
              >
                {phrase}
              </p>
            );
          })}
        </div>

        <div
          ref={popUpRef}
          style={{ zIndex: 90 }}
          className="absolute top-[22%] w-[15%] h-[35%]"
        >
          <div className="transform scale-[40%] translate-x-[25%] translate-y-[-30%]">
            <PopUps />
          </div>
        </div>

        {cards.map((card, index) => {
          let transformOrigin;

          if (card.position === 1) {
            transformOrigin = "top left";
          } else if (card.position === 2) {
            transformOrigin = "top right";
          } else if (card.position === 3) {
            transformOrigin = "bottom left";
          } else if (card.position === 4) {
            transformOrigin = "bottom right";
          }

          return (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                ...cardPositions[index],
                position: "absolute",
                opacity: 0,
                zIndex: 90,
                transformOrigin: transformOrigin,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Laptop;
