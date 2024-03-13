"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ScalingLaptop from "./components/ScalingLaptop";
import ScrollingScreen from "./components/ScrollingScreen/ScrollingScreen";
import HandySection from "./components/HandySection/HandySections";

export default function Home() {
  const scrollRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);
  const seventhSectionRef = useRef(null);
  const infoSection = useRef(null);
  const [sectionHeight, setSectionHeight] = React.useState(0);

  const scrollToTop = () => {
    // Scrolls to the top of the window
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  function useWindowWidth() {
    // Initialize state with undefined so it is server-side rendering safe
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
      // Set window width on client-side
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set the initial value once on the client
      handleResize();

      // Subscribe to window resize events
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures this effect runs only once on mount

    return windowWidth;
  }

  const windowWidth = useWindowWidth();

  useLayoutEffect(() => {
    let locomotiveScroll: any;
    const screenHeight = window.innerHeight;
    const sectionHeightOnRender = screenHeight * 8;
    setSectionHeight(sectionHeightOnRender);

    import("locomotive-scroll").then((LocomotiveScroll) => {
      locomotiveScroll = new LocomotiveScroll.default({
        el: scrollRef.current ?? undefined,
        smooth: true,
      });
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef} className="h-full w-full bg-gray-200">
      <div className="w-full h-full bg-gray-200">
        {/* Conditional rendering based on window width */}
        {windowWidth !== undefined && windowWidth <= 768 ? (
          <HandySection />
        ) : (
          <div className="relative h-full w-full ">
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
              src={"/logo_dm.svg"}
              height={100}
              width={200}
              alt="Paranote_logo"
            />
            <h1
              style={{ zIndex: 90 }}
              className="absolute top-[45vh] left-8 font-semibold text-black 4xl:text-[30px] 3xl:text-[28px] 2xl:text-[22px] xl:text-[16px] text-[14px] tracking-thighter"
            >
              <span className="gradient-text-purple">Paranote</span>. Eine App{" "}
              <br /> für dein{" "}
              <span className="gradient-text-purple">Jurastudium</span> <br />
              und darüber hinaus.
            </h1>
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
      <Footer />
    </main>
  );
}
