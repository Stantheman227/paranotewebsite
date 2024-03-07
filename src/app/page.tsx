"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ScalingLaptop from "./components/ScalingLaptop";
import ScrollingScreen from "./components/ScrollingScreen/ScrollingScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  const laptopRef = useRef(null);
  const scrollingScreenRef = useRef(null);

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

  useLayoutEffect(() => {
    console.log(secondSectionRef);

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
      <div className="relative h-full w-full">
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
        <div className={`h-${sectionHeight} bg-gray-200 pointer-events-none`}>
          <div ref={firstSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>

          <div ref={secondSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>

          <div ref={thirdSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>
          <div ref={fourthSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>
          <div ref={fifthSectionRef} className="h-screen w-full text-start ">
            <p></p>
          </div>
          <div ref={sixthSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>
          <div ref={seventhSectionRef} className="h-screen w-full text-start">
            <p></p>
          </div>
          <div className="h-screen w-full text-start">
            <p></p>
          </div>
        </div>
      </div>

      <div id="infoSection" ref={infoSection} className="">
        <InfoSection />
      </div>
      <Footer />
    </main>
  );
}
