"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ParanoteTypewriter from "../ParanoteTypewriter/page";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Card from "../LawPopUp/page";
import { cards, phrases, cardPositions } from "../constants/page"; // Ausgelagerte Konstanten

const Laptop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopWrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>(
    Array(phrases.length).fill(null)
  );
  const [animationEnded, setAnimationEnded] = useState(false);

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
        end: "bottom top-=1800px",
        scrub: true,
        onLeave: () => setAnimationEnded(true),
        onEnterBack: () => setAnimationEnded(false),
      },
    });

    // LAPTOP SCALING FROM BIG TO SMALL
    tl1.fromTo(
      laptopWrapRef.current,
      { scale: 2.2 },
      { scale: 1, duration: 3, ease: "" }
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
    tl1.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 1.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power4.out",
      },
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
            positionProps = { top: "20%", right: "5%", left: "", bottom: "" };
            break;
          case 2:
            positionProps = { top: "36.5%", right: "5%", left: "", bottom: "" };
            break;
          case 3:
            positionProps = { top: "53%", right: "5%", left: "", bottom: "" };
            break;
          case 4:
            positionProps = { top: "69.5%", right: "5%", left: "", bottom: "" };
            break;
          default:
            break; // Optional: Standardverhalten für ungültige Positionen
        }

        tl2.to(
          cardElement,
          {
            ...positionProps,
            duration: 1,
            ease: "power4.out",
            transformOrigin: "top right",
          },
          "<"
        );
      }
    });

    // KARTEN POP IN ANIMATION (Opacity)
    tl2.to(
      cardRefs.current,
      {
        opacity: 1,
        scale: 0.4,
        duration: 1,
        ease: "none",
      },
      "<"
    );

    // LAPTOP SZOOMING IN AGAIN ANIMATION
    tl2.to(laptopWrapRef.current, { scale: 2.2, duration: 3, ease: "" }, "=+1");

    // SVG-Animation (Dauer: 3 Sekunden)
    tl3.to(svgRef.current, { x: "100%", duration: 3, ease: "" });
    
    // KARTEN SLIDE OUT ANIMATION
    cards.forEach((card, index) => {
      const cardElement = cardRefs.current[index];

      tl3.to(cardElement, { x: "100%", duration: 3, ease: "" }, "<");

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

    // TEXT APPEARING ANIMATION (Verzögerung: 3 Sekunden nach Abschluss der SVG-Animation)
    tl3.fromTo(
      textRefs.current,
      { opacity: 0, x: "-200px" },
      {
        opacity: 0.5,
        x: "0px",
        ease: "none",
        duration: 5,
        stagger: 1,
      },
      "+=3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (animationEnded) {
      gsap.to(textRefs.current[index], { opacity: 1, duration: 0.3 });
    }
  };

  const handleMouseLeave = (index) => {
    if (animationEnded) {
      gsap.to(textRefs.current[index], { opacity: 0.5, duration: 0.3 });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="sticky flex justify-center items-center top-0 w-full h-screen z-10 overflow-hidden"
    >
      <div
        ref={laptopWrapRef}
        style={{ zIndex: 40 }}
        className="relative h-[75%] w-[100vh] flex items-center justify-center bg-yellow-200"
      >
        <div className="absolute h-[756px] w-[1260px] items-center justify-center flex overflow-visible">
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
              <Image
                src="/PDF_SVG.svg"
                height={200}
                width={200}
                layout="responsive"
                alt="svg"
                className="rounded-sm bg-white"
              />
            </div>
          </div>
        </div>

        <div ref={typewriterRef} className="">
          {" "}
          <ParanoteTypewriter />
        </div>

        <div
          style={{ zIndex: 90 }}
          className="absolute left-[5%] text-white text-[12px] uppercase space-y-4 w-[25%]"
        >
          {phrases.map((phrase, index) => {
            return (
              <p
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className="cursor-pointer slidingtext"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {phrase}
              </p>
            );
          })}
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
                transformOrigin: transformOrigin, // Direkte Anwendung der Transformation
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Laptop;
