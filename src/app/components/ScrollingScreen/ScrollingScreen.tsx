import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import JuraScript from "./JuraScript";
import WebsitePlugin from "./WebsitePlugin";
import CommandX from "./CommandX";
import Trinity from "./Trinity";

// ICONS AND CONSTANTS
import {
  phrases,
  cardPositions,
  Sachverhalt812,
} from "../../../components/constants";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const ScrollScreen = ({
  firstSectionRef,
  secondSectionRef,
  thirdSectionRef,
  fourthSectionRef,
  fifthSectionRef,
  sixthSectionRef,
  seventhSectionRef,
  infoSection,
}: {
  firstSectionRef: React.RefObject<HTMLDivElement>;
  secondSectionRef: React.RefObject<HTMLDivElement>;
  thirdSectionRef: React.RefObject<HTMLDivElement>;
  fourthSectionRef: React.RefObject<HTMLDivElement>;
  fifthSectionRef: React.RefObject<HTMLDivElement>;
  sixthSectionRef: React.RefObject<HTMLDivElement>;
  seventhSectionRef: React.RefObject<HTMLDivElement>;
  infoSection: React.RefObject<HTMLDivElement>;
}) => {
  //////////////////////////// SECTION REFS /////////////////////////
  const sectionRefs = [
    thirdSectionRef,
    fourthSectionRef,
    fifthSectionRef,
    sixthSectionRef,
    seventhSectionRef,
  ];

  //////////////////////////// SCROLLING SCREEN REF /////////////////
  const scrollingScreenRef = useRef(null);
  const backgroundColorScreenRef = useRef(null);
  //////////////////////////// TEXT REFS ////////////////////////////

  const textRefsWrap = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>(
    Array(phrases.length).fill(null)
  );
  const textRefsDiv = useRef<(HTMLDivElement | null)[]>(Array(phrases.length));

  //////////////////////////// TIMELINE FOR SCROLLING SCREEN APPEARING ////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top 50%",
        end: "top top",
        scrub: true,
      },
    });
    tl.fromTo(
      scrollingScreenRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "none" }
    );
  }, []);

  //////////////////////////// TIMELINE FOR TEXTREFS AT FIRST SCROLL ////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textRefs.current.forEach((textRef, index) => {
      const ref = sectionRefs[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          once: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        textRef,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: "none",
          duration: 0.5,
        }
      );
    });
  }, []);

  //////////////////////////// TIMELINE FOR TEXT REFS OPACITY ////////////////////////////
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log(secondSectionRef);

    textRefsDiv.current.forEach((textDivRef, index) => {
      const ref = sectionRefs[index];
      const textDiv = textRefsDiv;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 25%",
          end: "top top",
          scrub: true,
          refreshPriority: -1,
        },
      });
      if (index !== 0) {
        tl.fromTo(
          textDivRef,
          { opacity: 0.25 },
          {
            opacity: 1,
            ease: "none",
            duration: 0.1,
          }
        );
      }
      tl.to(
        textDiv.current[index - 1],
        {
          opacity: 0.25,
          ease: "none",
          duration: 0.1,
        },
        ""
      );
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //////////////////////////// TIMELINE TEXT REFS POSITION ////////////////////////////

    textRefs.current.map((textRef, index) => {
      const sectionRef = sectionRefs[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          once: true,
        },

        onComplete: () => {
          console.log(`Animation für textRef${index + 1} beendet`);
        },
      });

      tl.fromTo(
        textRef,
        { x: "-100%" },
        {
          x: "0%",
          ease: "none",
          duration: 10,
        }
      );

      if (textRef && sectionRef.current) {
        textRef.addEventListener("click", () => {
          // Scroll to the corresponding sectionRef when clicked
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  }, []);

  //////////////////////////// SCROLL SECTION ////////////////////////////
  const [activeSection, setActiveSection] = useState(0);
  const [isCurrentSectionFullyScrolled, setIsCurrentSectionFullyScrolled] =
    useState(false);

  // FUNCTIONS TO SCROLL TO SECTION
  const scrollTothirdSection = () => {
    if (thirdSectionRef && thirdSectionRef.current) {
      thirdSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionIndex: number) => {
    const sectionRef = sectionRefs[sectionIndex];
    if (sectionRef && sectionRef.current) {
      console.log("scrolling to section: " + sectionIndex);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionIndex);
    }
  };

  const handleNextClick = () => {
    // Directly access the ScrollTrigger instance for the current section
    const currentTrigger = ScrollTrigger.getById(`section-${activeSection}`);
    console.log("Next clicked with current section being: " + activeSection);

    if (currentTrigger) {
      // Check the current progress of the ScrollTrigger instance
      if (currentTrigger.progress < 0.99) {
        // If not fully scrolled, scroll to the end of the current section
        console.log("Current trigger progress is less than 0.99");
        scrollToSection(activeSection); // Assuming this scrolls to the end if already at the start
      } else {
        // Check if activeSection is less than 4
        if (activeSection < 4) {
          // Increment only if activeSection is less than 4
          const nextSection = activeSection + 1;
          scrollToSection(nextSection);
        } else {
          // If activeSection is 4, just scroll to the current section again (effectively doing nothing)
          console.log("Current section is 4");
          scrollToSection(activeSection);
        }
      }
    }
  };

  const handlePrevClick = () => {
    console.log("Prev clicked with current section being: " + activeSection);
    if (activeSection > 0) {
      const prevSection = activeSection - 1;
      setActiveSection(prevSection); // Aktualisiert den Zustand sofort
      scrollToSection(prevSection);
    }
  };

  // SCROLLTRIGGER FOR NAV BUTTONS
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textRefs.current.map((textRef, index) => {
      const sectionRef = sectionRefs[index];

      const tl = gsap.timeline({
        scrollTrigger: {
          id: `section-${index}`,
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onEnter: () => setActiveSection(index),
          onEnterBack: () => setActiveSection(index),
          onLeave: () => {
            // Only increment activeSection if it is less than 4
            if (index < 4) {
              setActiveSection(index + 1);
            } else {
              // If index is 4, keep activeSection as 4 (or potentially set it to a safe default if needed)
              setActiveSection(4);
              setIsCurrentSectionFullyScrolled(true);
            }
          },
          onLeaveBack: () => {
            if (index == 4) {
              // Reset isCurrentSectionFullyScrolled when re-entering the last section from below
              setIsCurrentSectionFullyScrolled(false);
            }
            setActiveSection(index - 1);
          },
        },
      });
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: thirdSectionRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
    tl.to(
      backgroundColorScreenRef.current,
      {
        backgroundColor: "black",
        duration: 3,
        ease: "none",
      },
      "<"
    );
  });

  return (
    <div
      ref={scrollingScreenRef}
      className="sticky top-0 w-full h-screen p-8 xl:p-12 2xl:p-16 scrollingScreenMain "
    >
      <div
        ref={backgroundColorScreenRef}
        className="absolute inset-0 h-full w-full opacity-85 "
      />
      <div className="h-full w-full flex flex-row ">
        {/* //////////////// TEXT REFS WRAP //////////////// */}
        <div className="h-full w-full flex-[40%] p-10">
          <div className="relative h-full w-full space-y-10 flex flex-col item-center justify-center ">
            <div className="flex flex-row pointer-events-auto ">
              <button
                className="flex items-center justify-center rounded-md"
                onClick={handlePrevClick}
              >
                <ChevronLeftIcon className="text-white hover:opacity-70 w-10 h-10 " />
              </button>
              <button
                className="flex items-center justify-center rounded-md"
                onClick={handleNextClick}
              >
                <ChevronRightIcon
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-white ${
                    activeSection == 4 && isCurrentSectionFullyScrolled == true
                      ? "opacity-50 pointer-events-none"
                      : "hover:opacity-70 pointer-events-auto"
                  }`}
                />
              </button>
            </div>
            {phrases.map((phrase, index) => {
              return (
                <div
                  key={phrase}
                  className=""
                  ref={(el) => (textRefsDiv.current[index] = el)}
                >
                  <p
                    ref={(el) => (textRefs.current[index] = el)}
                    className="cursor-pointer font-bold tracking-tighter lg:text-[18px] xl:text-[22px] 2xl:text-[26px] 4xl:text-[34px] pointer-events-auto text-white"
                  >
                    {phrase}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* //////////////// CONTENT SCREEN //////////////// */}
        <div className="relative h-full w-[80%] flex items-center justify-center">
          <JuraScript
            firstSectionRef={firstSectionRef}
            secondSectionRef={secondSectionRef}
            thirdSectionRef={thirdSectionRef}
            fourthSectionRef={fourthSectionRef}
            fifthSectionRef={fifthSectionRef}
            sixthSectionRef={sixthSectionRef}
            seventhSectionRef={seventhSectionRef}
          />
          <WebsitePlugin
            firstSectionRef={firstSectionRef}
            secondSectionRef={secondSectionRef}
            thirdSectionRef={thirdSectionRef}
            fourthSectionRef={fourthSectionRef}
            fifthSectionRef={fifthSectionRef}
            sixthSectionRef={sixthSectionRef}
            seventhSectionRef={seventhSectionRef}
          />
          <CommandX
            firstSectionRef={firstSectionRef}
            secondSectionRef={secondSectionRef}
            thirdSectionRef={thirdSectionRef}
            fourthSectionRef={fourthSectionRef}
            fifthSectionRef={fifthSectionRef}
            sixthSectionRef={sixthSectionRef}
            seventhSectionRef={seventhSectionRef}
          />
          <Trinity
            firstSectionRef={firstSectionRef}
            secondSectionRef={secondSectionRef}
            thirdSectionRef={thirdSectionRef}
            fourthSectionRef={fourthSectionRef}
            fifthSectionRef={fifthSectionRef}
            sixthSectionRef={sixthSectionRef}
            seventhSectionRef={seventhSectionRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollScreen;
