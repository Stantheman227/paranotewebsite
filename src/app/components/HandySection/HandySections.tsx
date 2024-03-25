import React from "react";
import Image from "next/image";
import ScriptSection from "./ScriptSection";
import PopUpSection from "./PopUpSection";
import WebsitePluginSection from "./WebsitePluginSection";
import CommandXSection from "./CommandXSection";
import TrinitySection from "./TrinitySection";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Define props type interface
interface HandySectionProps {
  infoSection: React.RefObject<HTMLElement>;
  blackSectionRef: React.RefObject<HTMLDivElement>; // Add this line
}

// Modify the component to accept props
export const HandySection: React.FC<HandySectionProps> = ({
  infoSection,
  blackSectionRef,
}) => {
  const scrollToInfoSection = () => {
    if (infoSection && infoSection.current) {
      infoSection.current.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col h-screen">
        <div className="h-[35%] w-full text-black p-5 flex mt-[50px]">
          <h1 className="w-full text-[5vh] text-start font-bold mb-4">
            Das <span className="gradient-text-purple">smarte</span> Gesetzbuch
            für dein <span className="gradient-text-purple">Jurastudium</span>.
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
        <div className="text-white flex items-center justify-center p-5 h-[20%]">
          <div>
            <button
              className="w-40 h-14 rounded-lg bg-[#6e6af6] hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
              onClick={() => scrollToInfoSection()}
            >
              <ChevronDownIcon className="text-white w-6 h-6" />
              <p className="  text-white text-[16px] uppercase font-light">
                {" "}
                Download{" "}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div ref={blackSectionRef} className="bg-black">
        <ScriptSection />
        <PopUpSection />
        <WebsitePluginSection />
        <CommandXSection />
        <TrinitySection />
      </div>
    </div>
  );
};

export default HandySection;
