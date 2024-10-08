import React, { useState } from "react";
import Image from "next/image";
import ScriptSection from "./ScriptSection";
import PopUpSection from "./PopUpSection";
import WebsitePluginSection from "./WebsitePluginSection";
import CommandXSection from "./CommandXSection";
import TrinitySection from "./TrinitySection";
import YouTubeModalMobil from "../../components/YoutubePlayer/YouTubeModalMobil";

import { ChevronDownIcon, PlayIcon } from "@heroicons/react/24/outline";

// Define props type interface
interface HandySectionProps {
  infoSection: React.RefObject<HTMLElement>;
  blackSectionRef: React.RefObject<HTMLDivElement>;
}

// Modify the component to accept props
const HandySection: React.FC<HandySectionProps> = ({
  infoSection,
  blackSectionRef,
}) => {
  const scrollToInfoSection = () => {
    if (infoSection && infoSection.current) {
      infoSection.current.scrollIntoView({ behavior: "instant" });
    }
  };

  // FOR YOUTUBE VIDEO
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openVideoModal = () => setShowVideo(true);
  const closeVideoModal = () => setShowVideo(false);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col h-screen">
        <div className="h-[35%] w-full text-gray-800 p-5 flex mt-[50px]">
          <h1 className="w-full text-[5vh] text-start font-bold mb-4">
            Gesetze anwenden, während andere noch blättern.
          </h1>
        </div>
        <div className="h-[33vh] w-full flex items-center justify-center p-5">
          <Image
            src="/Paranote_Landingpage_Laptop.png"
            alt="laptop"
            width={5251}
            height={3151}
            style={{ objectPosition: "", objectFit: "contain" }}
          />
        </div>

        <div className="text-white flex flex-row space-x-5 items-center justify-center p-5 h-[20%]">
          <div className="">
            <button
              className="w-40 h-14 rounded-lg bg-[#6e6af6] hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
              onClick={() => scrollToInfoSection()}
            >
              <ChevronDownIcon className="text-white w-6 h-6" />
              <p className="text-white text-[16px] uppercase font-light">
                Download
              </p>
            </button>
          </div>

          <div className="z-90 cursor-pointer bottom-8 right-8 flex items-center justify-center">
            <button
              className="z-90 flex items-center justify-center w-12 h-12 hover:w-14 hover:h-14 transform ease-in-out duration-200 bg-[#6e6af6] rounded-full border-none cursor-pointer hover:bg-blue-600 group"
              onClick={openVideoModal}
              aria-label="Play Video"
            >
              <PlayIcon className="w-6 h-6 text-white transform transition-all ease-in-out duration-200 group-hover:w-8 group-hover:h-8" />
            </button>
            {showVideo && (
              <YouTubeModalMobil
                videoId="vS1jnlWK8iM"
                onClose={closeVideoModal}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
              />
            )}
          </div>
        </div>
      </div>
      {/* Sections container with fixed background and black overlay */}
      <div
        ref={blackSectionRef}
        style={{
          position: "relative", // Needed for overlay positioning
          backgroundImage: 'url("/wallpaper.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {/* Black overlay with 85% opacity */}
        <div
          style={{
            position: "absolute", // Overlay uses absolute positioning
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)", // Black with 85% opacity
          }}
        />
        {/* Your section components will be rendered above the overlay */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {" "}
          {/* Ensure content is above the overlay */}
          <ScriptSection />
          <PopUpSection />
          <WebsitePluginSection />
          <CommandXSection />
          <TrinitySection />
        </div>
      </div>
    </div>
  );
};

export default HandySection;
