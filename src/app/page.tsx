"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ScalingLaptop from "./components/ScalingLaptop";
import ScrollingScreen from "./components/ScrollingScreen/ScrollingScreen";
import HandySection from "./components/HandySection/HandySections";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const infoSection = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const fourthSectionRef = useRef<HTMLDivElement | null>(null);
  const fifthSectionRef = useRef<HTMLDivElement | null>(null);
  const sixthSectionRef = useRef<HTMLDivElement | null>(null);
  const seventhSectionRef = useRef<HTMLDivElement | null>(null);
  const blackSectionRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [sectionHeight, setSectionHeight] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Home", action: () => scrollToTop() },
    { name: "Features", action: () => scrollToSection(blackSectionRef) },
    { name: "Download", action: () => scrollToSection(infoSection) },
    { name: "About", action: () => scrollToSection(footerRef) },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToInfoSection = () => {
    if (infoSection && infoSection.current) {
      infoSection.current.scrollIntoView({ behavior: "instant" });
    }
  };

  function useWindowWidth() {
    // Initialize state with undefined so it is server-side rendering safe
    const [windowWidth, setWindowWidth] = useState<number | undefined>(
      undefined
    );

    useEffect(() => {
      // Set window width on client-side
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set the initial value once on the client
      handleResize();

      // Subscribe to window resize events
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
  }

  const windowWidth = useWindowWidth();

  useLayoutEffect(() => {
    let locomotiveScroll: any = null;
    if (windowWidth ?? 0 > 768) {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        locomotiveScroll = new LocomotiveScroll.default({
          el: scrollRef.current ?? undefined,
          smooth: true,
        });
      });
    }

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [windowWidth]);

  return (
    <main ref={scrollRef} className="h-full w-full bg-gray-100 ">
      <div className="w-full h-full bg-gray-200">
        {/* Conditional rendering based on window width */}
        {windowWidth !== undefined && windowWidth <= 768 ? (
          <>
            <div
              style={{ zIndex: 90 }}
              className="fixed flex items-center justify-between top-0 left-0 right-0 bg-gray-100 bg-opacity-35 w-full h-[75px] backdrop-blur-sm"
            >
              <Image
                style={{
                  zIndex: 60,
                  objectFit: "contain",
                  cursor: "pointer",
                  marginLeft: 20,
                }}
                onClick={scrollToTop}
                src={"/logo_lm.svg"}
                height={70}
                width={140}
                alt="Paranote_logo"
              />
              <button
                style={{ marginRight: 20 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`hamburger hamburger--collapse hover:opacity-40 ${
                  isMenuOpen ? "is-active" : ""
                }`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </button>
              {isMenuOpen && (
                <div className="absolute right-5 top-full mt-2 w-48 py-2 flex flex-col items-center justify-center bg-white rounded-lg shadow-xl bg-opacity-75 backdrop-blur-md">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="block px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        item.action();
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ zIndex: 10 }}>
              <HandySection
                infoSection={infoSection}
                blackSectionRef={blackSectionRef}
              />
            </div>
          </>
        ) : (
          <div className="h-full w-full ">
            <Image
              style={{
                zIndex: 60,
                objectFit: "contain",
                position: "fixed",
                cursor: "pointer",
                top: 8,
                left: 8,
              }}
              onClick={scrollToTop}
              src={"/logo_lm.svg"}
              height={100}
              width={200}
              alt="Paranote_logo"
            />
            <div className="absolute top-[45vh] left-8 flex flex-col items-center justify-center space-y-5">
              <h1
                style={{ zIndex: 90 }}
                className="font-semibold text-black 4xl:text-[30px] 3xl:text-[28px] 2xl:text-[22px] xl:text-[16px] text-[14px] tracking-thighter"
              >
                <span className="gradient-text-purple">Paranote</span>. Eine App{" "}
                <br /> für dein{" "}
                <span className="gradient-text-purple">Jurastudium</span> <br />
                und darüber hinaus.
              </h1>
              <button
                className="w-40 h-14 bg-[#6e6af6] rounded-lg hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
                onClick={() => scrollToInfoSection()}
              >
                <p className="  text-white text-[16px] uppercase font-light">
                  {" "}
                  Download{" "}
                </p>
                <ChevronDownIcon className="text-white w-6 h-6" />
              </button>
            </div>
            <ScalingLaptop
              firstSectionRef={firstSectionRef}
              secondSectionRef={secondSectionRef}
              thirdSectionRef={thirdSectionRef}
              infoSection={infoSection}
            />
            <ScrollingScreen
              firstSectionRef={firstSectionRef}
              secondSectionRef={secondSectionRef}
              thirdSectionRef={thirdSectionRef}
              fourthSectionRef={fourthSectionRef}
              fifthSectionRef={fifthSectionRef}
              sixthSectionRef={sixthSectionRef}
              seventhSectionRef={seventhSectionRef}
              infoSection={infoSection}
            />
            <div
              className={`h-${sectionHeight} bg-gray-200 pointer-events-none`}
            >
              <div ref={firstSectionRef} className="h-screen w-full text-start">
                <p></p>
              </div>

              <div
                ref={secondSectionRef}
                className="h-screen w-full text-start"
              >
                <p></p>
              </div>

              <div ref={thirdSectionRef} className="h-screen w-full text-start">
                <p></p>
              </div>
              <div
                ref={fourthSectionRef}
                className="h-screen w-full text-start"
              >
                <p></p>
              </div>
              <div
                ref={fifthSectionRef}
                className="h-screen w-full text-start "
              >
                <p></p>
              </div>
              <div ref={sixthSectionRef} className="h-screen w-full text-start">
                <p></p>
              </div>
              <div
                ref={seventhSectionRef}
                className="h-screen w-full text-start"
              >
                <p></p>
              </div>
              <div className="h-screen w-full text-start">
                <p></p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="infoSection" ref={infoSection} className="">
        <InfoSection />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}
