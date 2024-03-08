"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Trinity = ({
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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  //////////////////////////////// TRINITY IN ANIMATION /////////////////////////////////////////
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const circleColors = [
    { hex: "#CF76F9", name: "Purple" },
    { hex: "#6BDBD7", name: "Turquoise" },
    { hex: "#F2A349", name: "Orange" },
    { hex: "#3FB950", name: "Green" },
    { hex: "#FD3131", name: "Red" },
    { hex: "#FDF531", name: "Yellow" },
    { hex: "#F8519E", name: "Pink" },
  ];

  // Define a type for the text object
  type TextContent = {
    text1: string;
    text2: string;
    text3: string;
    text4?: string; // Optional properties if they don't always exist
    text5?: string; // Add more as needed
  };

  const sections = [
    {
      name: "Paranote",
      text: {
        text1: "Dein Digitaler Begleiter im Jurastudium und darüber hinaus",
        text2:
          "Mit Farbmarkierungen, Hashtags und einer Volltextsuche findest du Alles schnell wieder und bleibst immer auf dem neusten Stand.",
        text3:
          "Egal, wie viele Notizen du erstellt hast - du behälst immer den Überblick.",
      },
      layout: "textRight",
    },
    {
      name: "ParaScout",
      text: {
        text1: "Suche nach Gesetzen, ",
        text15: "nicht nach Seiten.",
        text2: "Gesetzeskarussell",
        text3: "Notiz Erstellen",
        text4: "Highlighter",
        text5: "Notizenansicht",
      },
      layout: "textLeft",
    },
    {
      name: "Notizen",
      text: {
        text1: "Finde deine Notizen in Sekunden",
        text2:
          "Mit Farbmarkierungen, Hashtags und einer Volltextsuche findest du Alles schnell wieder und bleibst immer auf dem neusten Stand.",
        text3:
          "Egal, wie viele Notizen du erstellt hast - du behälst immer den Überblick.",
      },
      layout: "textRight",
    },
  ];

  const toggleItem = (index: number) => {
    setActiveIndex(index);
  };

  // Renderfunktionen für jedes Bild
  const renderImageForIndex = (index: number) => {
    switch (index) {
      case 0:
        return renderFirstImage();
      case 1:
        return renderSecondImage();
      case 2:
        return renderThirdImage();
      default:
        return null; // Für den Fall, dass kein Index übereinstimmt
    }
  };

  const renderFirstImage = () => (
    <div
      className={
        "h-[380px] w-[250px] xl:h-[450px] xl:w-[300px] 2xl:h-[450px] 2xl:w-[300px] 3xl:h-[450px] 3xl:w-[300px] 4xl:h-[600px] 4xl:w-[400px]"
      }
    >
      <Image
        src={"/Paranote_Homescreen.png"}
        alt="Bild für Notizen"
        height={1492}
        width={982}
        priority={true}
      />
    </div>
  );

  const renderSecondImage = () => (
    <div
      className={
        "h-[250px] w-[320px] xl:h-[250px] xl:w-[350px] 2xl:h-[320px] 2xl:w-[400px] 3xl:h-[350px] 3xl:w-[450px] 4xl:h-[420px] 4xl:w-[550px]"
      }
    >
      <Image
        src={"/ParaScout_Box.png"}
        alt="Bild für ParaScout"
        height={700}
        width={938}
        priority={true}
      />
    </div>
  );

  const renderThirdImage = () => (
    <div
      className={
        "h-[250px] w-[270px] xl:h-[250px] xl:w-[350px] 2xl:h-[320px] 2xl:w-[400px] 3xl:h-[350px] 3xl:w-[450px] 4xl:h-[400px] 4xl:w-[500px] space-y-2 flex flex-col items-center justify-center"
      }
    >
      <Image
        src={"/Notiz1_Paranote.png"}
        alt="Bild für Paranote"
        height={249}
        width={839}
        priority={true}
      />
      <Image
        src={"/Notiz2_Paranote.png"}
        alt="Bild für Notizen"
        height={249}
        width={839}
        priority={true}
      />
    </div>
  );

  const renderTextContentForSection0 = (text: any) => {
    return (
      <div className="flex flex-col text-white space-y-2">
        <h1 className=" text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[28px] 4xl:text-[30px] mb-1">
          {text.text1}
        </h1>
        <h2 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
          {text.text2}
        </h2>
        <h2 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
          {text.text3}
        </h2>
        <h2 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
          {text.text4}
        </h2>
        <h2 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
          {text.text5}
        </h2>
      </div>
    );
  };

  const renderTextContentForSection1 = (text: any) => {
    return (
      <div className="font-semibold text-[12px] space-y-3 ">
        <div className="text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[28px] 4xl:text-[30px]">
          <h1>{text.text1}</h1>
          <h1 className="">{text.text15}</h1>
        </div>

        <div className="space-y-1">
          <div className="flex flex-row space-x-2">
            <div className=" flex-[10%] w-full">
              {" "}
              <Image
                src={"/Karussel_Paranote.svg"}
                height={30}
                width={30}
                alt="Highlighter Icon"
              />
            </div>

            <div className="flex-[90%] flex-col space-y-1">
              <h2 className=" text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]">
                {text.text2}
              </h2>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[20px] font-thin">
                ein Klick und du bist direkt in deinem Gesetzbuch
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-2 items-start ">
            <div className="flex-[10%] w-full">
              {" "}
              <Image
                src={"/AddNote_Paranote.svg"}
                height={40}
                width={40}
                alt="Highlighter Icon"
              />{" "}
            </div>
            <div className="flex-[90%] flex-col space-y-1">
              <h2 className=" text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]">
                {text.text3}
              </h2>
              <p className=" text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[20px] font-thin">
                füge jedem Paragraphen eigene Notizen hinzu
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row w-full space-x-2 items-start ">
            <div className="flex-[10%] w-full">
              {" "}
              <Image
                src={"/Highlighter_Paranote.svg"}
                height={40}
                width={40}
                alt="Highlighter Icon"
              />{" "}
            </div>
            <div className="flex-[90%] flex-col space-y-1">
              <h2 className=" text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]">
                {text.text4}
              </h2>
              <p className=" text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[20px] font-thin">
                Markiere im Gesetzbuch oder in deinen Notizen Schlüsselwörter,
                Sätze oder Absätze
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row w-full space-x-2 items-start">
            <div className="flex-[10%] w-full">
              {" "}
              <Image
                src={"/ShowNote_Paranote.svg"}
                height={40}
                width={40}
                alt="Highlighter Icon"
              />{" "}
            </div>
            <div className="flex-[90%] flex-col space-y-1">
              <h2 className=" text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]">
                {text.text5}
              </h2>
              <p className=" text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[20px] font-thin">
                Erweiterte Notizenansicht deiner bereits erstellten Notizen
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTextContentForSection2 = (text: string | TextContent) => {
    if (typeof text === "string") {
      return <p>{text}</p>;
    } else {
      return (
        <>
          <div className="flex">
            <div className="flex flex-col items-end space-y-1">
              <h1 className="font-semibold text-[17px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[28px] 4xl:text-[30px]">
                {text.text1}
              </h1>
              <div className="flex flex-row space-x-3">
                {circleColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 rounded-full"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className=" text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
            {text.text2}
          </h2>
          <h3 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] font-thin">
            {text.text3}
          </h3>
        </>
      );
    }
  };

  const renderSectionContent = (index: number, text: any) => {
    switch (index) {
      case 0:
        return renderTextContentForSection0(text);
      case 1:
        return renderTextContentForSection1(text);
      case 2:
        return renderTextContentForSection2(text);
      default:
        return <p>Kein Inhalt verfügbar</p>;
    }
  };

  return (
    <div
      ref={sectionRef}
      className="absolute w-full h-full flex flex-col items-center justify-center"
    >
      {/* NAVIGATION SECTION */}
      <div className="absolute flex flex-row justify-around space-x-5 text-white w-full pointer-events-auto top-36 xl:top-24 2xl:top-20 3xl:top-10 4xl:top-4">
        {sections.map((item, index) => (
          <button
            key={index}
            className={`text-[30px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[45px] 4xl:text-[50px] font-bold ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => toggleItem(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* CONTENT SECTION */}
      {activeIndex !== null && (
        <div
          className={`w-full h-full flex flex-row${
            sections[activeIndex].layout === "textLeft"
              ? "flex-row-reverse"
              : ""
          }`}
        >
          <div className="flex flex-1 items-center justify-center">
            <div className="p-5 space-y-1 text-white ">
              {renderSectionContent(activeIndex, sections[activeIndex].text)}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center text-white">
            {renderImageForIndex(activeIndex)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trinity;
